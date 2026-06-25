import axios from "axios";

export const submitSummarizeJob = async (req, res) => {
    const { text } = req.body;
    const endpoint = `${process.env.AZURE_LANGUAGE_ENDPOINT}/language/analyze-text/jobs?api-version=2023-04-01`;

    const requestBody = {
        displayName: "Text Summarization",
        analysisInput: { documents: [{ id: "1", language: "en", text }] },
        tasks: [
            {
                kind: "ExtractiveSummarization",
                taskName: "Summarization Task",
                parameters: { sentenceCount: 5 },
            },
        ],
    };

    try {
        const response = await axios.post(endpoint, requestBody, {
            headers: {
                "Content-Type": "application/json",
                "Ocp-Apim-Subscription-Key": process.env.AZURE_LANGUAGE_KEY,
            },
        });

        const jobId = response.headers["operation-location"].split("/").pop().split("?")[0];
        res.json({ jobId });
    } catch (error) {
        console.error("Error submitting job:", error.response?.data || error.message);
        res.status(500).json({ error: "Failed to submit summarization job" });
    }
};

export const getSummarizeStatus = async (req, res) => {
    const { jobId } = req.params;
    const endpoint = `${process.env.AZURE_LANGUAGE_ENDPOINT}/language/analyze-text/jobs/${jobId}?api-version=2023-04-01`;

    try {
        const response = await axios.get(endpoint, {
            headers: {
                "Content-Type": "application/json",
                "Ocp-Apim-Subscription-Key": process.env.AZURE_LANGUAGE_KEY,
            },
        });

        if (response.status === 200) {
            const jobData = response.data;

            if (jobData.status === "running" || jobData.status === "notStarted") {
                return res.json({ status: jobData.status });
            }

            if (jobData.status === "failed") {
                return res.status(400).json({ status: "failed", message: "Azure task failed." });
            }

            if (jobData.status === "succeeded") {
                if (jobData.tasks?.items?.[0]?.results?.documents?.[0]) {
                    const resultSentences = jobData.tasks.items[0].results.documents[0].sentences;
                    const summary = resultSentences.map((sentence) => sentence.text).join(" ");
                    return res.json({ status: "succeeded", summary });
                } else {
                    return res.status(500).json({ error: "Azure payload structured unexpectedly." });
                }
            }

            return res.json({ status: jobData.status });
        } else {
            res.status(response.status).json({ error: "Azure job lookup unsuccessful" });
        }
    } catch (error) {
        console.error("Error fetching job results:", error.response?.data || error.message);
        res.status(500).json({ error: "Error fetching job results" });
    }
};
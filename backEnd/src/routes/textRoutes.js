import { Router } from "express";
import { textLimiter } from "../config/rateLimiters.js";
import { submitSummarizeJob, getSummarizeStatus } from "../controllers/textController.js";

const router = Router();

router.post("/submit", textLimiter, submitSummarizeJob);
router.get("/status/:jobId", textLimiter, getSummarizeStatus);

export default router;
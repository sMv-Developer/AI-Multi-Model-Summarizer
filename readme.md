# Multimodal AI Summarizer

This project is a full-stack AI-powered platform that transforms text, images, audio, video, and unstructured documents into clear, intelligent summaries. By combining a modern React frontend with a secure Express backend, it orchestrates multiple Microsoft Azure AI services to extract content from different formats and convert them into concise insights.

---

## 🚀 Features

* **Text Summarization:** Extracts core insights from long-form content via Azure Language Service.
* **Image OCR:** Extracts readable text from static image files using Azure Computer Vision.
* **Document Parsing:** Analyzes multi-page scanned layouts and PDFs using Azure Document Intelligence.
* **Audio & Video Transcription:** Transcribes vocal audio and video tracks into clean text sequences with Azure Speech-to-Text.

---

## 🛠️ Tech Stack

### Frontend

* React (Vite)

### Backend

* Node.js
* Express.js
* Multer (Memory Storage)

### Security

* Helmet
* Express Rate Limiter

### AI 

* Microsoft Azure AI Services

---

## 📂 Project Structure

```text
.
├── frontEnd/       # React (Vite) Application
└── backEnd/        # Express API Application
```

---

## ⚙️ Environment Configuration

Create a `.env` file in the root of both the `frontEnd` and `backEnd` folders.

### Backend Configuration (`backEnd/.env`)

```env
PORT=3000
FRONTEND_URL=your_url

# Azure AI Configurations
AZURE_LANGUAGE_ENDPOINT=your_language_endpoint
AZURE_LANGUAGE_KEY=your_language_key

AZURE_VISION_ENDPOINT=your_vision_endpoint
AZURE_VISION_KEY=your_vision_key

AZURE_DOCUMENT_ENDPOINT=your_document_endpoint
AZURE_DOCUMENT_KEY=your_document_key

AZURE_SPEECH_ENDPOINT=your_speech_endpoint
AZURE_SPEECH_KEY=your_speech_key
```

### Frontend Configuration (`frontEnd/.env`)

```env
VITE_API_URL=your_url
```

---

## 📦 Installation & Setup

### 1. Clone the Project

```bash
git clone https://github.com/sMv-Jones/AI-Multi-Model-Summarizer.git
cd AI-Multi-Model-Summarizer

```

### 2. Run the Backend Server

```bash
cd backEnd
npm install

# Development mode
npm run dev

# Production mode
npm start
```

### 3. Run the Frontend Client

```bash
cd ../frontEnd
npm install

# Development mode
npm run dev

# Production mode
npm start
```

---


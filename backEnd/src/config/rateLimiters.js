import rateLimit from "express-rate-limit";

export const textLimiter = rateLimit({
    windowMs: 15 * 60 * 1000, 
    max: 60, 
    message: { error: "Too many text requests, please try again later." },
    standardHeaders: true, 
    legacyHeaders: false,
});

export const imageLimiter = rateLimit({
    windowMs: 15 * 60 * 1000, 
    max: 5, 
    message: { error: "Image processing limit reached. Please wait before uploading more images." },
    standardHeaders: true, 
    legacyHeaders: false,
});

export const documentLimiter = rateLimit({
    windowMs: 15 * 60 * 1000, 
    max: 5, 
    message: { error: "Document processing limit reached. Please wait before uploading more documents." },
    standardHeaders: true, 
    legacyHeaders: false,
});

export const audioLimiter = rateLimit({
    windowMs: 15 * 60 * 1000, 
    max: 5, 
    message: { error: "Audio transcription limit reached. Please wait before uploading more audio files." },
    standardHeaders: true, 
    legacyHeaders: false,
});

export const videoLimiter = rateLimit({
    windowMs: 15 * 60 * 1000, 
    max: 5, 
    message: { error: "Heavy file processing limit reached. Please wait before uploading more videos." },
    standardHeaders: true, 
    legacyHeaders: false,
});
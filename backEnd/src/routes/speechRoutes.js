import { Router } from "express";
import multer from "multer";
import { audioLimiter, videoLimiter } from "../config/rateLimiters.js";
import { extractAudio, extractVideo } from "../controllers/speechController.js";

const upload = multer({ storage: multer.memoryStorage() });
const router = Router();

router.post("/audio", audioLimiter, upload.single("audio"), extractAudio);
router.post("/video", videoLimiter, upload.single("video"), extractVideo);

export default router;
import { Router } from "express";
import multer from "multer";
import { imageLimiter, documentLimiter } from "../config/rateLimiters.js";
import { extractImage, extractDocument } from "../controllers/mediaController.js";

const upload = multer({ storage: multer.memoryStorage() });
const router = Router();

router.post("/image", imageLimiter, upload.single("file"), extractImage);
router.post("/document", documentLimiter, upload.single("file"), extractDocument);

export default router;
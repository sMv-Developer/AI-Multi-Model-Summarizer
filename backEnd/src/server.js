import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import helmet from "helmet";

// Route Imports
import textRoutes from "./routes/textRoutes.js";
import mediaRoutes from "./routes/mediaRoutes.js";
import speechRoutes from "./routes/speechRoutes.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

// Security & Standard Middleware
app.use(helmet());
app.use(cors({ origin: process.env.FRONTEND_URL }));
console.log( process.env.FRONTEND_URL)
app.use(express.json());
app.set("trust proxy", 1);
// API Endpoints Mapping
app.use("/api/summarize", textRoutes);
app.use("/api/extract", mediaRoutes);
app.use("/api/extract", speechRoutes);

app.listen(PORT, () => console.log(`Backend server active on port ${PORT}`));

import express from "express";
import { upload } from "../middleware/uploadMiddleware.js";
import { createUpload } from "../controllers/uploadController.js";

const router = express.Router();

router.post("/", upload.single("image"), createUpload);

export default router;

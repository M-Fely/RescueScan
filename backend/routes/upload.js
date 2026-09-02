import express from "express";
import { upload } from "../middleware/uploadMiddleware";
import { createUpload } from "../controllers/uploadController";

const router = express.Router();

router.post("/", upload.single("image"), createUpload);

export default router;

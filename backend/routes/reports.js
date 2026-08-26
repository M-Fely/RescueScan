import express from "express";
import {
  createReports,
  getReports,
  getReportById,
  updateReport,
  deleteReport,
} from "../controllers/reportsController.js";

const router = express.Router();

router.post("/", createReports);

router.get("/", getReports);

router.get("/:id", getReportById);

router.put("/:id", updateReport);

router.delete("/:id", deleteReport);

export default router;

import express from "express";
import {
  createUsers,
  getUsers,
  getUsersById,
  updateUser,
  deleteUser,
} from "../controllers/usersController.js";

const router = express.Router();

router.post("/", createUsers);

router.get("/", getUsers);

router.get("/:id", getUsersById);

router.put("/:id", updateUser);

router.delete("/:id", deleteUser);

export default router;

import express from "express";
import { protectRoute } from "../middleware/protectRoute.js";
import {
  deleteAllNotifications,
  deleteNotificationById,
  getNotifications,
} from "../controllers/notification.controller.js";

const router = express.Router();

router.get("/", protectRoute, getNotifications);
router.delete("/", protectRoute, deleteAllNotifications);
router.delete("/:id", protectRoute, deleteNotificationById);

export default router;

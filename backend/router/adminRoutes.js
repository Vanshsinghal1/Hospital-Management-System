import express from "express";
import { getAdminDashboard } from "../controller/userController.js"; // Adjust the path if needed
import { isAdminAuthenticated } from "../middlewares/auth.js"; // Adjust the path if needed

const router = express.Router();

// Admin dashboard route, using the isAdminAuthenticated middleware
router.get("/admin/dashboard", isAdminAuthenticated, getAdminDashboard);

export default router;

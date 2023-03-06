import express from "express";
import getClientIndexPath from "../config/getClientIndexPath.js";

const router = new express.Router();

const clientRoutes = ["/", "/about", "/recipes", "/users/:username", "/user-sessions/new", "/users/new"];
router.get(clientRoutes, (req, res) => {
  res.sendFile(getClientIndexPath());
});

export default router;

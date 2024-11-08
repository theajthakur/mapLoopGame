const express = require("express");
const router = express.Router();
const { adminPage, deleteUser } = require("../controllers/admin");
const {
  fetchLoopRoutes,
  saveLoopRoutes,
  deleteRoute,
} = require("../controllers/loopRoute");

router.get("/", adminPage);

router.get("/looproute", fetchLoopRoutes);
router.post("/looproute", saveLoopRoutes);
router.post("/looproute/delete", deleteRoute);

router.post("/delete/:id", deleteUser);

module.exports = router;

const express = require("express");
const {
  getAllTask,
  createTask,
  getTask,
  updateTask,
  deleteTask,
} = require("../controllers/tasks.controller");
const router = express.Router();

router.route("/").get(getAllTask);
router.route("/").post(createTask);
router.route("/:id").get(getTask);
router.route("/:id").patch(updateTask);
router.route("/:id").delete(deleteTask);

module.exports = router;

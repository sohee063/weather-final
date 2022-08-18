const { blogController } = require("../controller");
const { findAll, findById, createOne, updateById, deleteById } = blogController;
const express = require("express");
const router = express.Router();

router.get("/", findAll);
router.get("/:id", findById);

router.post("/", createOne);
router.put("/:id", updateById);
router.delete("/:id", deleteById);

module.exports = router;

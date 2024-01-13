const express = require("express");
const blogController = require("../controllers/blogController");

const router = express.Router();

router.get("/", blogController.blogIndex);
router.post("/", blogController.postCreate);
router.get("/create", blogController.getCreate);
router.delete("/delete/:id", blogController.blogDelete);
router.get("/detail/:id",blogController.blogDetails);

module.exports = router;

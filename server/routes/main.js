const express = require("express");
const router = express.Router();
const Post = require("../models/Post");

//home page
router.get("/", async (req, res) => {
  const locals = {
    title: "Nodejs Blog",
    description: "Simple Blog created with Nodejs, Express & MongoDB",
  };

  try {
    const data = await Post.find().sort({ createdAt: "desc" });
    res.render("index", { locals, data });
  } catch (error) {
    console.error("Error fetching posts:", error);
  }
});

module.exports = router;

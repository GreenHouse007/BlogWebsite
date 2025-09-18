const express = require("express");
const router = express.Router();
const Post = require("../models/Post");

// Home page with pagination
router.get("/", async (req, res) => {
  try {
    const locals = {
      title: "NodeJs Blog",
      description: "Simple Blog created with NodeJs, Express & MongoDb.",
    };

    let perPage = 3;
    let page = req.query.page || 1;

    const data = await Post.aggregate([{ $sort: { title: -1 } }])
      .skip(perPage * page - perPage)
      .limit(perPage)
      .exec();

    const count = await Post.countDocuments({});
    const nextPage = parseInt(page) + 1;
    const hasNextPage = nextPage <= Math.ceil(count / perPage);

    res.render("index", {
      locals,
      data,
      current: page,
      nextPage: hasNextPage ? nextPage : null,
      prevPage: page > 1 ? page - 1 : null,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send("Internal Server Error");
  }
});

router.get("/about", (req, res) => {
  const locals = {
    title: "About",
    description: "Learn more about the developer and this blog.",
  };
  res.render("about", { locals });
});

router.get("/contact", (req, res) => {
  const locals = {
    title: "contact",
    description: "Contact info coming soon.",
  };
  res.render("contact", { locals });
});

// Get post by ID
router.get("/post/:id", async (req, res) => {
  try {
    let slug = req.params.id;
    const data = await Post.findById({ _id: slug });
    const locals = {
      title: data.title,
      description:
        "A Blog template application that will be used for your own use.",
    };
    res.render("post", { locals, data });
  } catch (error) {
    console.log(error);
    res.status(500).send("Internal Server Error");
  }
});

// Search route
router.post("/search", async (req, res) => {
  try {
    const locals = {
      title: "Search",
      description: "A blog template made with NodeJS and ExpressJS",
    };
    let searchTerm = req.body.SearchTerm;
    const searchNoSpecialChar = searchTerm.replace(/[^a-zA-Z0-9 ]/g, "");

    const data = await Post.find({
      $or: [
        { title: { $regex: new RegExp(searchNoSpecialChar, "i") } },
        { body: { $regex: new RegExp(searchNoSpecialChar, "i") } },
      ],
    });
    res.render("search", { locals, data });
  } catch (error) {
    console.log(error);
    res.status(500).send("Internal Server Error");
  }
});

module.exports = router;

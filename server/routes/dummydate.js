const Post = require("../models/Post");

function insertPostData() {
  Post.insertMany([
    {
      title: "First Post",
      body: "This is the body of the first post.",
    },
    {
      title: "Second Post",
      body: "This is the body of the second post.",
    },
  ]);
}

//insertPostData();

//blog-index,post-create,get-create,blog-delete,blog-detail
const Blog = require("../models/blog");

const blogIndex = (req, res) => {
  Blog.find()
    .sort({ createdAt: -1 })
    .then((result) => {
      res.render("index", { title: "Home", blogs: result });
    })
    .catch((err) => {
      console.log(err);
    });
};

const getCreate = (req, res) => {
  res.render("create", { title: "New Blog" });
};

const postCreate = (req, res) => {
  const blog = new Blog(req.body);
  blog
    .save()
    .then((result) => {
      res.redirect("/");
    })
    .catch((err) => {
      console.log(err);
    });
};

const blogDelete = (req, res) => {
  const id = req.params.id;
  Blog.findByIdAndDelete(id)
    .then((result) => {
      res.json({ redirect: "/blogs" });
    })
    .catch((err) => {
      console.log(err);
    });
};

const blogDetails = (req, res) => {
  const id = req.params.id;

  Blog.findById(id)
    .then((result) => {
      res.render("details", { title: result.title, blog: result });
    })
    .catch((err) => {
      console.log(err);
    });
};

module.exports = {
  blogIndex,
  getCreate,
  postCreate,
  blogDelete,
  blogDetails,
};

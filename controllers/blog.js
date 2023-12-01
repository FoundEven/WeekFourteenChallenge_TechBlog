const router = require("express").Router();
const { User, Post } = require("../models");
const withAuth = require("../utils/auth");

router.get("/", async (req, res) => {
  try {
    const userData = await Post.findAll({
      include: [{ model: User }],
    });

    const users = userData.map((project) => project.get({ plain: true }));
    res.render("homepage", {
      users,

    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get("/post", async (req, res) => {
  try {
    const userData = await Post.findAll({
      include: [{ model: User }],
    });

    const users = userData.map((project) => project.get({ plain: true }));
    res.render("postView", {
      users,

      logged_in: req.session.logged_in
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get("/view", async (req, res) => {
  try {
    const userData = await Post.findAll({
      include: [{ model: User }],
    });

    const users = userData.map((project) => project.get({ plain: true }));
    res.render("update", {
      users,

      logged_in: req.session.logged_in,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get("/login", (req, res) => {
  if (req.session.logged_in) {
    res.redirect("/");
    return;
  }

  res.render("login");
});

module.exports = router;

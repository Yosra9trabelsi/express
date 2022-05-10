const express = require("express");
const serviceRouter = express.Router();

serviceRouter.get("/", (req, res) => {
  const d = new Date();
  let hour = d.getHours();
  if (hour > 8 && hour < 18) {
    res.render("work");
  } else {
    res.render("wenot");
  }
});

module.exports = serviceRouter;

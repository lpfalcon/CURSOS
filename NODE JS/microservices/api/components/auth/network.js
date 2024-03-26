const express = require("express");
const router = express.Router();
const response = require("../../../network/response");
const Controller = require("./index");

router.post("/", async(req, res) => {
  try {
    const { username, password } = req.body || {};
    console.log(username, password);
    const token = await Controller.login(username, password);
    response.sucess(req, res, token);
  } catch (error) {
    response.error(req, res, "Informacion Invalida", 400);
  }
});

module.exports = router;

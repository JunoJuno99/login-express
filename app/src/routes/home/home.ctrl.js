"use strict";

const UserStorage = require("../../model/UserStorage");

const output = {
  home: (req, res) => {
    res.render("./home");
  },
  login: (req, res) => {
    res.render("./home/login");
  },
};

const process = {
  login: (req, res) => {
    const id = req.body.id;
    const password = req.body.password;
    const users = UserStorage.getUsers("id", "password");

    const response = {};
    if (users.id.includes(id)) {
      const idx = users.id.indexOf(id);
      if (password === users.password[idx]) {
        response.success = true;
        return res.json(response);
      }
    }

    response.success = false;
    response.msg = "로그인 실패";
    return res.json(response);
  },
};

module.exports = {
  output, // === output: output
  process,
};

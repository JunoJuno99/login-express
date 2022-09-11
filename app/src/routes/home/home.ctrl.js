"use strict";

const output = {
  home: (req, res) => {
    res.render("./home");
  },
  login: (req, res) => {
    res.render("./home/login");
  },
};

const users = {
  id: ["juno"],
  password: ["1234"],
};

const process = {
  login: (req, res) => {
    const id = req.body.id;
    const password = req.body.password;

    if (users.id.includes(id)) {
      const idx = users.id.indexOf(id);
      if (password === users.password[idx]) {
        return res.json({
          success: true,
        });
      }
    }

    return res.json({
      success: false,
      msg: "로그인 실패",
    });
  },
};

module.exports = {
  output, // === output: output
  process,
};

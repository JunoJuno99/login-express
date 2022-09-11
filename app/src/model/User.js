"use strict";

const UserStorage = require("./UserStorage");

class User {
  constructor(body) {
    this.body = body;
  }

  login() {
    const body = this.body;
    const { id, password } = UserStorage.getUserInfo(body.id);

    if (id) {
      if (id === body.id && password === body.password) {
        return { success: true };
      }
      return { success: false, msg: "비밀번호가 일치하지 않음" };
    }
    return { success: false, msg: "아이디가 존재하지 않음" };
  }
}

module.exports = User;

"use strict";

const UserStorage = require("./UserStorage");

class User {
  constructor(body) {
    this.body = body;
  }

  async login() {
    const client = this.body;
    const { id, password } = await UserStorage.getUserInfo(client.id);

    if (id) {
      if (id === client.id && password === client.password) {
        return { success: true };
      }
      return { success: false, msg: "비밀번호가 일치하지 않음" };
    }
    return { success: false, msg: "아이디가 존재하지 않음" };
  }

  register() {
    const newClient = this.body;
    const response = UserStorage.save(newClient);
    return response;
  }
}

module.exports = User;

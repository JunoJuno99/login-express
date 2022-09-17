"use strict";

const UserStorage = require("./UserStorage");

class User {
  constructor(body) {
    this.body = body;
  }

  async login() {
    const client = this.body;
    try {
      const user = await UserStorage.getUserInfo(client.id);

      if (user) {
        if (user.id === client.id && user.password === client.password) {
          return { success: true };
        }
        return { success: false, msg: "비밀번호가 일치하지 않음" };
      }
      return { success: false, msg: "아이디가 존재하지 않음" };
    } catch (err) {
      return { success: false, err };
    }
  }

  async register() {
    const newClient = this.body;
    try {
      const response = await UserStorage.save(newClient);
      return response;
    } catch (err) {
      return { success: false, err };
    }
  }
}

module.exports = User;

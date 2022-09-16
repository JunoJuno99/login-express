"use strict";

const fs = require("fs").promises; // 파일 시스템 로드

class UserStorage {
  // # -> private 변수 처리
  // private 변수 혹은 메소드는 항상 클래스 최상단에 위치하는것이 암묵적 룰
  static #getUserInfo(users, id) {
    const idx = users.id.indexOf(id);
    const userInfo = Object.keys(users).reduce((userData, info) => {
      userData[info] = users[info][idx];
      return userData;
    }, {});
    return userInfo;
  }

  static getUsers(...fields) {
    // const users = this.#users;
    const usersData = fields.reduce((usersData, field) => {
      if (users.hasOwnProperty(field)) {
        usersData[field] = users[field];
      }
      return usersData;
    }, {});
    return usersData;
  }

  static async getUserInfo(id) {
    try {
      const users = JSON.parse(await fs.readFile("./src/databases/users.json"));
      return this.#getUserInfo(users, id);
    } catch (err) {
      console.error(err);
    }
  }

  static save(userInfo) {
    // const users = this.#users;
    users.name.push(userInfo.name);
    users.id.push(userInfo.id);
    users.password.push(userInfo.password);
    return { success: true };
  }
}

module.exports = UserStorage;

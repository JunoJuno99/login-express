"use strict";

class UserStorage {
  static #users = {
    // # -> private 변수 처리
    id: ["juno"],
    password: ["1234"],
    name: ["준호"],
  };

  static getUsers(...fields) {
    const users = this.#users;
    const usersData = fields.reduce((usersData, field) => {
      if (users.hasOwnProperty(field)) {
        usersData[field] = users[field];
      }
      return usersData;
    }, {});
    return usersData;
  }

  static getUserInfo(id) {
    const users = this.#users;
    const idx = users.id.indexOf(id);
    const userInfo = Object.keys(users).reduce((userData, info) => {
      userData[info] = users[info][idx];
      return userData;
    }, {});
    return userInfo;
  }
}

module.exports = UserStorage;

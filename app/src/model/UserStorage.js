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
}

module.exports = UserStorage;

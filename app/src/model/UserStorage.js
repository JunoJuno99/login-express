"use strict";

const fs = require("fs").promises; // 파일 시스템 로드

class UserStorage {
  // # -> private 변수 처리
  // private 변수 혹은 메소드는 항상 클래스 최상단에 위치하는것이 암묵적 룰
  static #dataFile = "./src/databases/users.json";

  static #getUserInfo(users, id) {
    const idx = users.id.indexOf(id);
    const userInfo = Object.keys(users).reduce((userData, info) => {
      userData[info] = users[info][idx];
      return userData;
    }, {});
    return userInfo;
  }

  static #getUsers(users, fields) {
    const usersData = fields.reduce((usersData, field) => {
      if (users.hasOwnProperty(field)) {
        usersData[field] = users[field];
      }
      return usersData;
    }, {});
    return usersData;
  }

  static async getUsers(isAll, ...fields) {
    try {
      const data = JSON.parse(await fs.readFile(this.#dataFile));
      if (isAll) return data; // isAll이 true일 경우 유저 데이터 전체를 반환
      return this.#getUsers(data, fields); // false일 경우 원하는 데이터만 반환
    } catch (err) {
      console.error(err);
    }
  }

  static async getUserInfo(id) {
    try {
      const users = JSON.parse(await fs.readFile(this.#dataFile));
      return this.#getUserInfo(users, id);
    } catch (err) {
      console.error(err);
    }
  }

  static async save(userInfo) {
    const users = await this.getUsers(true);
    if (users.id.includes(userInfo.id)) {
      throw "이미 존재하는 아이디입니다.";
    }
    users.id.push(userInfo.id);
    users.password.push(userInfo.password);
    users.name.push(userInfo.name);
    fs.writeFile(this.#dataFile, JSON.stringify(users));
    return { success: true };
  }
}

module.exports = UserStorage;

"use strict";

const db = require("../config/db");

class UserStorage {
  // # -> private 변수 처리
  // private 변수 혹은 메소드는 항상 클래스 최상단에 위치하는것이 암묵적 룰

  static getUserInfo(id) {
    return new Promise((resolve, reject) => {
      const query = "SELECT * FROM users WHERE id = ?;";
      db.query(query, [id], (err, data) => {
        if (err)
          reject(
            `${err}`
          ); // resolve와 reject가 동시에 있을 경우 resolve가 반환됨
        else resolve(data[0]);
      });
    });
  }

  static save(userInfo) {
    return new Promise((resolve, reject) => {
      const query = "INSERT INTO users(id, name, password) VALUES(?, ?, ?);";
      db.query(
        query,
        [userInfo.id, userInfo.name, userInfo.password],
        (err) => {
          if (err) reject(`${err}`);
          else resolve({ success: true });
        }
      );
    });
  }
}

module.exports = UserStorage;

"use strict";

const id = document.querySelector("#id");
const password = document.querySelector("#password");
const loginBtn = document.querySelector("button");
const login = () => {
  const req = {
    id: id.value,
    password: password.value,
  };
};

loginBtn.addEventListener("click", login);

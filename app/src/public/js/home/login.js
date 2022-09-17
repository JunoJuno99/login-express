"use strict";

const id = document.querySelector("#id");
const password = document.querySelector("#password");
const loginBtn = document.querySelector("a");
const login = () => {
  if (!id.value) return alert("아이디를 입력하세요.");
  if (!password.value) return alert("비밀번호를 입력하세요");

  const req = {
    id: id.value,
    password: password.value,
  };

  fetch("/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(req),
  })
    .then((res) => res.json())
    .then((json) => {
      if (json.success) {
        location.href = "/";
      } else {
        if (json.err) return alert(json.err);
        alert(json.msg);
      }
    })
    .catch((err) => {
      console.error(new Error("로그인 중 에러 발생"));
    });
};

loginBtn.addEventListener("click", login);

"use strict";

// 공백을 HTML은 하이푼(-), JS는 대문자로 표현하는게 암묵적 룰
const user_name = document.querySelector("#user-name");
const id = document.querySelector("#id");
const password = document.querySelector("#password");
const confirmPassword = document.querySelector("#confirm-password");
const registerBtn = document.querySelector("#register-btn");

const register = () => {
  if (!id.value) return alert("아이디를 입력하세요.");
  if (!user_name.value) return alert("이름을 입력하세요.");
  if (password.value !== confirmPassword.value) {
    return alert("비밀번호가 일치하지 않습니다.");
  }

  const req = {
    id: id.value,
    password: password.value,
    name: user_name.value,
  };

  fetch("/register", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(req),
  })
    .then((res) => res.json())
    .then((json) => {
      if (json.success) {
        location.href = "/login";
      } else {
        if (json.err) return alert(json.err);
        alert(json.msg);
      }
    })
    .catch((err) => {
      console.error(new Error("회원가입 중 에러 발생"));
    });
};

registerBtn.addEventListener("click", register);

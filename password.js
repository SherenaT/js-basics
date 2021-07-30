"use strict";
alert("Welcome to the password validator tool");
let answer = prompt(
  "Enter your password, it must be at least 10 characters long."
);

confirm("Are you sure your password is at least 10 characters? 🤔");

const passwordLength = function () {
  if (answer.length > 10) {
    alert("Password is the right length! 🎉");
  } else {
    alert("Password is too short, it needs to be at least 10 characters");
  }
};

passwordLength();

console.log(answer);

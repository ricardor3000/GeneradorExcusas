/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

/* window.onload = function() {
  //write your code here
  console.log("Hello Rigo from the console!");
}; */

window.onload = function() {
  let text = "";
  let excuse = document.getElementById("excuse");
  let who = ["The dog ", "My grandma ", "His turtle ", "My bird "];
  let action = ["ate ", "peed ", "crushed ", "broke "];
  let what = ["my homework", "the keys", "the car"];
  let when = [
    "before the class",
    "right on time",
    "when I finished",
    "during my lunch",
    "while I was praying"
  ];
  text += who[Math.trunc(Math.random() * 3)];
  text += action[Math.trunc(Math.random() * 3)];
  text += what[Math.trunc(Math.random() * 3)];
  text += when[Math.trunc(Math.random() * 4)];
  excuse.textContent = text;
  excuse.style.fontSize = "50px";
  excuse.style.textAlign = "center";
};

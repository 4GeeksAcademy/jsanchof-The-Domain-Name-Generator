import "bootstrap";
import "./style.css";


import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  let pronoun = ['the', 'our'];
  let adj = ['great', 'big'];
  let noun = ['jogger', 'racoon'];
  let extensions = [".com", ".net", ".us", ".io"];

  let combinations = [];

  for (let a of pronoun) {
    for (let b of adj) {
      for (let c of noun) {
        for(let d of extensions){
          console.log(`${a}${b}${c}${d}`);
        }
      }
    }
  }

  console.log("Hello Rigo from the console!");
};

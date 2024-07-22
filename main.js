let adviceID = document.querySelector(".adv");
let adviceContent = document.querySelector(".quo");
let loading = document.querySelector(".loading");
let button = document.querySelector(".glow");

let adviceData = async () => {
  let response = await fetch("https://api.adviceslip.com/advice");
  //   so the api converts into response.json
  let data = await response.json();
  //   the response.json is now inside the data
  loading.classList.add("d-none");

  adviceID.textContent = `ADVICE #${data.slip.id}`;
  adviceContent.textContent = `${data.slip.advice}`;
  //you call out the adviceID and text.content to make a template literal
};

button.addEventListener("click", () => {
  location.reload();
});

setTimeout(() => {
  adviceData();
}, 3000);

// ===============
// WHAT IT SHOULD LOOK LIKE WHEN YOU FETCH FROM API
// let data = {
//     slip:  {
//         id:260
//         advice: nbdfhefheufio
//     }
// }

let btn = document.querySelector(".dropbtn");
function dropdown() {
  document.getElementById("myDropdown").classList.toggle("show");
}
btn.addEventListener("click", dropdown);
let navigate = document.querySelectorAll(".nav");
///////////
let darkButton = document.querySelector(".darkBtn");
let logo = document.querySelector(".logo");
let category = document.querySelectorAll(".category");
let settings = document.querySelector(".settings");
let dakhel = document.querySelector(".dakhel");
let bannerBtn = document.querySelector(".bannerBtnGroup");
let chatCont = document.querySelector(".massageBox");
function darkBtn() {
  document.body.classList.toggle("dark");
  dakhel.classList.toggle("dark");
  chatCont.classList.toggle("dark");
  if (document.body.classList.contains("dark")) {
    logo.classList.add("dark-txt");
    category.forEach((element) => {
      element.classList.toggle("dark-txt");
    });
    bannerBtn.classList.toggle("dark-txt");
    settings.classList.toggle("dark-txt");
  } else {
    logo.classList.toggle("dark-txt");
    category.forEach((element) => {
      element.classList.toggle("dark-txt");
      bannerBtn.classList.toggle("dark-txt");
      settings.classList.toggle("dark-txt");
    });
  }
}
darkButton.addEventListener("click", darkBtn);
//////////
let activeButton = document.querySelector(".activeBtn");
function activeBtn() {
  let element = document.querySelector(".navigate");
  element.classList.toggle("active");
  activeButton.classList.toggle("active2");
}
activeButton.addEventListener("click", activeBtn);
//////////
function navigates() {
  let element = document.querySelector("header");
  element.scrollIntoView();
}
navigate[0].addEventListener("click", navigates);
/////////
function navigates1() {
  let element = document.querySelector(".logoGroup");
  element.scrollIntoView();
}
navigate[1].addEventListener("click", navigates1);
////////
function navigates2() {
  let element = document.querySelector(".midBanner");
  element.scrollIntoView();
}
navigate[2].addEventListener("click", navigates2);
////////
function navigates3() {
  let element = document.querySelector(".midBanner-sec5");
  element.scrollIntoView();
}
navigate[3].addEventListener("click", navigates3);
////////
function navigates4() {
  let element = document.querySelector(".botBanner");
  element.scrollIntoView();
}
navigate[4].addEventListener("click", navigates4);
////////
function navigates5() {
  let element = document.querySelector(".events");
  element.scrollIntoView();
}
navigate[5].addEventListener("click", navigates5);
///////
function navigates6() {
  let element = document.querySelector("footer");
  element.scrollIntoView();
}
navigate[6].addEventListener("click", navigates6);
////////
let massageBtn = document.querySelector(".massageBtn");
let massageBox = document.querySelector(".massageBox");
let closeBtn = document.querySelector(".closeBtn");
let chatContainer = document.querySelector(".chatContainer");
let chatTxt = document.getElementById("chatTxt");
let sendBtn = document.querySelector(".sendBtn");
function massageBoxes() {
  massageBox.classList.add("activeChat");
}
function massageBoxClose() {
  massageBox.classList.remove("activeChat");
}
massageBtn.addEventListener("click", massageBoxes);
closeBtn.addEventListener("click", massageBoxClose);
function send() {
  chatContainer.innerHTML += `
  <div class="userMassage">${chatTxt.value}</div>`;
  function response(resolve) {
    let emoji = ["😂", "👋", "😡", "🤯", "😋", "👽", "💩", "😱", "😈", "👻"];
    let message = [
      "hello ",
      "oh really! ",
      "no way ",
      "bye ",
      "thanks ",
      "your welcome ",
    ];
    if (
      chatTxt.value.toLowerCase() == "hello" ||
      chatTxt.value.toLowerCase() == "hi" ||
      chatTxt.value.toLowerCase() == "hey"
    ) {
      chatTxt.value = "";
      chatContainer.innerHTML += `<div class='received'> ${message[0]}${emoji[1]}</div>`;
    }
    if (
      chatTxt.value.toLowerCase() == "bye" ||
      chatTxt.value.toLowerCase() == "goodbye" ||
      chatTxt.value.toLowerCase() == "bye bye"
    ) {
      chatTxt.value = "";
      chatContainer.innerHTML += `<div class='received'> ${message[3]}${emoji[1]}</div>`;
    }
    if (
      chatTxt.value.toLowerCase() == "thx" ||
      chatTxt.value.toLowerCase() == "thanks" ||
      chatTxt.value.toLowerCase() == "thank you"
    ) {
      chatTxt.value = "";
      chatContainer.innerHTML += `<div class='received'> ${message[5]}${emoji[4]}</div>`;
    } else if (chatTxt.value != "") {
      chatTxt.value = "";
      chatContainer.innerHTML += `<div class='received'> ${
        message[Math.floor(Math.random() * 6)]
      }${
        emoji[Math.floor(Math.random() * 10)] +
        emoji[Math.floor(Math.random() * 10)] +
        emoji[Math.floor(Math.random() * 10)]
      }</div>`;
    }
    resolve();
  }
  chatContainer.scrollTop = chatContainer.scrollHeight;
  let sec = Math.random() * 2000 + 1000;
  new Promise(function (resolve, reject) {
    return setTimeout(() => response(resolve), sec);
  }).then(() => {
    chatContainer.scrollTop = chatContainer.scrollHeight;
  });
}
sendBtn.addEventListener("click", send);
window.onscroll = () => {
  let winScroll = document.documentElement.scrollTop;
  let height =
    document.documentElement.scrollHeight -
    document.documentElement.clientHeight;
  let scrolled = (winScroll / height) * 100;
  document.querySelector(".progress").style.width = scrolled + "%";
};


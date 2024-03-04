import { sideBar } from "./sidebar";
import { background } from "./sidebar";

const modalFeedback = document.querySelector(".feedback");
const modalCallback = document.querySelector(".callback");
const showFeedbackHeaderBtn = document.querySelector(".header-chat");
const showFeedbackAsideBtn = document.querySelector(".aside-chat");
const closeFeedback = document.querySelector(".feedback__close");
const showCallbackHeaderBtn = document.querySelector(".header-phone");
const showCallbackAsideBtn = document.querySelector(".aside-phone");
const closeCallback = document.querySelector(".callback");

showFeedbackHeaderBtn.addEventListener("click", function () {
  modalFeedback.classList.toggle("feedback--active");
  background.classList.add("bg--active");
});

showFeedbackAsideBtn.addEventListener("click", function () {
  modalFeedback.classList.toggle("feedback--active");
  background.classList.add("bg--active");
  sideBar.classList.toggle("sidebar--active");
});

closeFeedback.addEventListener("click", function () {
  modalFeedback.classList.toggle("feedback--active");
  background.classList.remove("bg--active");
});

showCallbackHeaderBtn.addEventListener("click", function () {
  modalCallback.classList.toggle("callback--active");
  background.classList.add("bg--active");
});

showCallbackAsideBtn.addEventListener("click", function () {
  modalCallback.classList.toggle("callback--active");
  background.classList.add("bg--active");
  sideBar.classList.toggle("sidebar--active");
});

closeCallback.addEventListener("click", function () {
  modalCallback.classList.toggle("callback--active");
  background.classList.remove("bg--active");
});

background.addEventListener("click", function () {
  modalCallback.classList.remove("callback--active");
  modalFeedback.classList.remove("feedback--active");
  background.classList.remove("bg--active");
});

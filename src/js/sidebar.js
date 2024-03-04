export const sideBar = document.querySelector(".sidebar");
export const background = document.querySelector(".bg");
const showSidebar = document.querySelector(".burger");
const closeSidebar = document.querySelector(".closed");

showSidebar.addEventListener("click", function () {
  sideBar.classList.toggle("sidebar--active");
  background.classList.add("bg--active");
});

closeSidebar.addEventListener("click", function () {
  sideBar.classList.toggle("sidebar--active");
  background.classList.remove("bg--active");
});

background.addEventListener("click", function () {
  sideBar.classList.remove("sidebar--active");
  background.classList.remove("bg--active");
});

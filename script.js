// document.addEventListener("DOMContentLoaded", function () {
const dialogOpener = document.querySelector("h2");
const dialog = document.querySelector("dialog");
const dialogCloser = document.querySelector("button");

dialogCloser.addEventListener("click", function () {
  dialog.close();
});

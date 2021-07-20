let checkbox = document.querySelector('input[name="theme"]');
let htmlElement = document.documentElement;
checkbox.addEventListener("change", function () {
  if (checkbox.checked) {
    smoothTrabsition();
    htmlElement.setAttribute("data-theme", "dark");
  } else {
    smoothTrabsition();
    htmlElement.setAttribute("data-theme", "light");
  }
});
let smoothTrabsition = function () {
  htmlElement.classList.add("transition");
  window.setTimeout(function () {
    htmlElement.classList.remove("transition");
  }, 1000);
};

// init and reset components
function initLinks() {
  const tabs = document.querySelectorAll(".tabs__link");
  tabs.forEach((element) => {
    element.addEventListener("click", function (event) {
      event.preventDefault();
    });
  });
}
initLinks();

// features-tabs
function updateTab(index) {
  if (index < 0 || index > 2) return;
  const tabs = document.querySelectorAll(".tabs__link");
  tabs.forEach((element, i) => {
    const id = element.getAttribute("href");
    if (i == index) {
      element.setAttribute("aria-selected", true);
      element.setAttribute("tabindex", 0);
      document.querySelector(id).style.display = "block";
    } else {
      element.setAttribute("aria-selected", false);
      element.setAttribute("tabindex", -1);
      document.querySelector(id).style.display = "none";
    }
  });
}
updateTab(0);

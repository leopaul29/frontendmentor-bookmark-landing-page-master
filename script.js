// init and reset components
function initLinks() {
	const tabs = document.querySelectorAll(".tabs__link");
	tabs.forEach((element) => {
		element.addEventListener("click", function (event) {
			event.preventDefault();
		});
	});

	const accordions = document.querySelectorAll(".accordions__link");
	accordions.forEach((element) => {
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

// accordion
function updateAccordion(index) {
	if (index < 0 || index > 3) return;
	const accordionsBlock = document.querySelectorAll(".accordion-block");
	accordionsBlock.forEach((element, i) => {
		const accordion__link = element.querySelector(".accordions__link");
		const accordion__answer = element.querySelector(".accordion-block__answer");
		const isSelected = accordion__link.getAttribute("aria-selected");
		if (i == index) {
			if (isSelected === "true") {
				accordion__link.setAttribute("aria-selected", false);
				accordion__answer.style.display = "none";
			} else {
				accordion__link.setAttribute("aria-selected", true);
				accordion__answer.style.display = "block";
			}
		}
	});
}

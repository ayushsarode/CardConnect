const calScrollValue = () => {
	let btnScroll = document.getElementById("scrollTop");
	let position = document.documentElement.scrollTop;

	let calcHeight =
		document.documentElement.scrollHeight -
		document.documentElement.clientHeight;
	let scrollValue = Math.round((position * 100) / calcHeight);

	if (position > 100) {
		btnScroll.style.display = "grid";
	} else {
		btnScroll.style.display = "none";
	}

	btnScroll.addEventListener("click", () => {
		document.documentElement.scrollTop = 0;
	});
};

window.onscroll = calScrollValue;
window.onload = calScrollValue;

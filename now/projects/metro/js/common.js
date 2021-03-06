$(document).ready(function () {
	var openSelect = function (selector) {
		var element = $(selector)[0],
			worked = false;
		if (document.createEvent) { // all browsers
			var e = document.createEvent("MouseEvents");
			e.initMouseEvent("mousedown", true, true, window, 0, 0, 0, 0, 0, false, false, false, false, 0, null);
			worked = element.dispatchEvent(e);
		} else if (element.fireEvent) { // ie
			worked = element.fireEvent("onmousedown");
		}
		if (!worked) { // unknown browser / error
			alert("It didn't worked in your browser.");
		}
	}

	$('.select_main label').click(function () {
		openSelect($(this).next());
	});
});
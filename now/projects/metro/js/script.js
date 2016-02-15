$(document).ready(function() {

	//E-mail Ajax Send
	$("form").submit(function() { //Change
		var th = $(this);
		$.ajax({
			type: "POST",
			url: "http://voberemko.hol.es/metro-last/js/mail.php", //Change
			data: th.serialize()
		}).done(function() {
			alert("Thank you!");
			setTimeout(function() {
				// Done Functions
                window.location.replace("http://voberemko.hol.es/metro-last/spasibo.html");

				th.trigger("reset");
			}, 1000);
		});
		return false;
	});

});
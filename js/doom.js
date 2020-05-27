setInterval(() => {
	// Get total time left
	deadline = new Date('Sep 17, 2020 01:00:00').getTime();
	let now = new Date().getTime();
	let timeLeft = deadline - now;

	// Create date variables
	let days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
	let hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
	let min = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
	let sec = Math.floor((timeLeft % (1000 * 60)) / 1000);

	// Update HTML
	document.querySelector('.days').innerText = days;
	document.querySelector('.hours').innerText = hours;
	document.querySelector('.min').innerText = min;
	document.querySelector('.sec').innerHTML = sec;

	// notify if expired
	if (timeLeft < 0) {
		document.querySelector('.countdown-container').innerHTML =
			'<h1 class="exp-txt">Time Has Expired</h1>';
	}
}, 1000);

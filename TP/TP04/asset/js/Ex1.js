const actions = Array.from(document.querySelectorAll('[data-action]'));

let counter = localStorage.getItem("counter") || 0;

document.querySelector(".counter-value").innerText = counter;

actions.forEach(action => {
	action.addEventListener('click', () => {
		const action_name = action.dataset.action;

		action.classList.add("animate");

		setTimeout(() => {
			action.classList.remove("animate");
		}, 1000);

		switch (action_name) {
			case 'increase':
				counter++;
				localStorage.setItem("counter", counter);
				break;
			case 'decrease':
				counter--;
				localStorage.setItem("counter", counter);
				break;
			case 'reset':
				counter = 0;
				localStorage.removeItem("counter");
				break;

		}

		document.querySelector(".counter-value").innerText = counter;
	});
});
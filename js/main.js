var popup = document.querySelector('.search-form'),
    button = document.querySelector('.js-show');

button.addEventListener('click', function(event) {
	event.preventDefault();
 	popup.classList.toggle('form-show');
});
const link = document.querySelectorAll('.item-body-list-item');

for (let i = 0; i < link.length; i++) {
	link[i].addEventListener('click', function () {
		for (let j = 0; j < link.length; j++)
			link[j].classList.remove('active');
		this.classList.add('active');
	})
}

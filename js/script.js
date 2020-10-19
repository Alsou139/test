
const link = document.querySelectorAll('.item-body-list-item');

for (let i = 0; i < link.length; i++) {
	link[i].addEventListener('click', function () {
		link.forEach(c => {
			c.classList.remove('active');
		})
		this.classList.add('active');
	})
}
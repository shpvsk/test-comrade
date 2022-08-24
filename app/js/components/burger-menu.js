if (document.body.clientWidth <= 1200) {

	let burgerMenu = selector =>  {
		let menu = document.querySelector(selector)
		let button = menu.querySelector('.burger-menu__button');
		let links = menu.querySelectorAll('.nav__list > li a');
		let overlay = menu.querySelector('.burger-menu__overlay');

		button.addEventListener('click', e => {
			toggleMenu()
			e.preventDefault()
		})

		links.forEach(i => {
			i.addEventListener('click', e => {
				e.preventDefault()
				toggleMenu()
			})
		})

		overlay.addEventListener('click', () => {
			toggleMenu()
		})

		let toggleMenu = () => {
			if (!menu.classList.contains('burger-menu_active')) {
				menu.classList.add('burger-menu_active')
				button.classList.add('burger-menu__button_active')
				document.body.classList.add('body_fixed')
			} else {
				menu.classList.remove('burger-menu_active')
				button.classList.remove('burger-menu__button_active')
				document.body.classList.remove('body_fixed')
			}
		}
	}
	burgerMenu('.burger-menu')
}

import Swiper, { Pagination} from 'swiper'

if (document.body.clientWidth < 1350) {
	new Swiper('.swiper', {
	modules: [Pagination],
	pagination: {
			el: ".swiper-pagination",
			dynamicBullets: true,
		}
	})
}

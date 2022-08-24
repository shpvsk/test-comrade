const btnNavCallback = document.querySelector('.navigation-callback__btn')
const burgerMenu = document.querySelector('.nav__list')
const cloneBtn = btnNavCallback
const navCallbackBlock = document.querySelector('.navigation-callback')


window.addEventListener(`resize`, moveBtn)


function moveBtn() {
	if (document.body.clientWidth <= 1200 ) {
		btnNavCallback.remove()
		burgerMenu.append(cloneBtn)
	} else {
		navCallbackBlock.append(cloneBtn)
	}
}
moveBtn()


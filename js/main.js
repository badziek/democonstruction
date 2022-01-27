let navbar = document.querySelector('.header__navitems')
let search = document.querySelector('.header__search')
let user = document.querySelector('.header__user')
let info = document.querySelector('.info')
let menuBtn = document.querySelector('#menu-btn')
let searchBtn = document.querySelector('#search-btn')
let userBtn = document.querySelector('#user-btn')
let infoBtn = document.querySelector('#info-btn')
let infoClose = document.querySelector('#info__close')
const textInput = document.querySelectorAll('.contact__input')
const footerYear = document.querySelector('.footer__year')
document.querySelector('#menu-btn').onclick = () => {
	navbar.classList.toggle('action')
	search.classList.remove('action')
	user.classList.remove('action')
}
document.querySelector('#search-btn').onclick = () => {
	search.classList.toggle('action')
	navbar.classList.remove('action')
	user.classList.remove('action')
}
document.querySelector('#user-btn').onclick = () => {
	search.classList.remove('action')
	navbar.classList.remove('action')
	user.classList.toggle('action')
}
document.querySelector('#info-btn').onclick = () => {
	info.classList.add('swipe')
	navbar.classList.remove('action')
	search.classList.remove('action')
	user.classList.remove('action')
}
document.querySelector('#info__close').onclick = () => {
	info.classList.remove('swipe')
}
window.onscroll = () => {
	navbar.classList.remove('action')
	search.classList.remove('action')
	user.classList.remove('action')
	info.classList.remove('swipe')
}
textInput.forEach(textInput => {
	textInput.addEventListener('focus', () => {
		let parent = textInput.parentNode
		parent.classList.add('active')
	})
	textInput.addEventListener('blur', () => {
		let parent = textInput.parentNode
		parent.classList.remove('active')
	})
})
const handleCurrentYear = () => {
	const year = new Date().getFullYear()
	footerYear.innerText = year
}
handleCurrentYear()
navBtn.addEventListener('click', handleNav)
window.addEventListener('scroll', handleObserver)

import menuTemplate from './menu-items.hbs'
import menuItems from './menu.json'

const menuMarkup = menuTemplate(menuItems)
const menuList = document.querySelector('.js-menu')
menuList.insertAdjacentHTML('beforeend', menuMarkup)

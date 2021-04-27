const bodyContainer = document.querySelector('body')
const themeCheckbox = document.querySelector('.theme-switch__toggle')

const THEM_KEY = 'them-checkbox'
const THEM_VALUE = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

const checkboxSaved = localStorage.getItem(THEM_KEY)
if (checkboxSaved==='checked') {
    themeCheckbox.checked = 'true'
    bodyContainer.classList.add(THEM_VALUE.DARK)
}

themeCheckbox.addEventListener('change', onCheckboxChange)
function onCheckboxChange () {
    if (themeCheckbox.checked) {
        bodyContainer.classList.add(THEM_VALUE.DARK)
        localStorage.setItem(THEM_KEY, 'checked')
        return;
    }
    bodyContainer.classList.replace(THEM_VALUE.DARK, THEM_VALUE.LIGHT)
    localStorage.setItem(THEM_KEY, 'unchecked')
}
const bodyContainer = document.querySelector('body')
const themeCheckbox = document.querySelector('.theme-switch__toggle')

const THEM_KEY ='them-checkbox'
const checkboxSaved = localStorage.getItem(THEM_KEY)
if (checkboxSaved==='checked') {
    themeCheckbox.checked = 'true'
    bodyContainer.classList.add('dark-theme')
}

themeCheckbox.addEventListener('change', onCheckboxChange)
function onCheckboxChange () {
    if (themeCheckbox.checked) {
        bodyContainer.classList.add('dark-theme')
        localStorage.setItem(THEM_KEY, 'checked')
        return;
    }
    bodyContainer.classList.replace('dark-theme', 'light-theme')
    localStorage.setItem(THEM_KEY, 'unchecked')
}
const bodyContainer = document.querySelector('body')
const themeCheckbox = document.querySelector('.theme-switch__toggle')

const checkboxSaved = localStorage.getItem('checkbox')
if (checkboxSaved==='checked') {
    themeCheckbox.checked = 'true'
    bodyContainer.classList.add('dark-theme')
}

themeCheckbox.addEventListener('change', onCheckboxChange)
function onCheckboxChange () {
    if (themeCheckbox.checked) {
        bodyContainer.classList.add('dark-theme')
        localStorage.setItem('checkbox', 'checked')
        return;
    }
    bodyContainer.classList.replace('dark-theme', 'light-theme')
    localStorage.setItem('checkbox', 'unchecked')
}
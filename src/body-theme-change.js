const bodyContainer = document.querySelector('body')
const checkbox = document.querySelector('.theme-switch__toggle')
console.log(bodyContainer)

checkbox.addEventListener('change', onCheckboxChange)
function onCheckboxChange () {
    console.log(checkbox.checked)
    if (checkbox.checked) {
        bodyContainer.classList.add('dark-theme')
        return;
    }
    bodyContainer.classList.replace('dark-theme', 'light-theme')
}
const $tabs = document.querySelectorAll('.js-tab')

const colorTheme = ['dark', 'light', 'saturated']

function slide(index) {
    $tabs.forEach($tab => $tab.classList.remove('active-tab'))
    $tabs[index - 1].classList.add('active-tab')
}

$tabs.forEach(($tab, index) => $tab.addEventListener("click", () => {
    slide(index + 1)
    document.documentElement.setAttribute('theme', colorTheme[index]);
}))
const toggleSwitch = document.querySelector('.theme-container')
document.documentElement.setAttribute('theme', 'dark');

function switchTheme() {
    let theme = document.documentElement.getAttribute('theme')
    if (theme == 'light') {
        document.documentElement.setAttribute('theme', 'dark');
        document.querySelector(".theme").innerHTML = "LIGHT"

    }
    else {
        document.documentElement.setAttribute('theme', 'light');
        document.querySelector(".theme").innerHTML = "DARK"
    }

}

toggleSwitch.addEventListener('click', switchTheme);
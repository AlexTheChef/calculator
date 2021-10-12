import { calculate } from './evaluation.js';
import { tokenize } from './evaluation.js';


class Calculator {
    constructor(currentText) {
        this.currentText = currentText
        this.clear()
    }

    delete() {
        text = text.toString().slice(0, -1)
    }

    clear() {
        text = ''
    }

    compute() {
        equalsButton.addEventListener('click', function () {
            if (text == '') return
            currentText.innerHTML = calculate(tokenize(text)).toLocaleString('en');
        });
    }

    updateConsole() {
        this.currentText.innerText = text
    }
}

let text = ''

const currentText = document.querySelector('[data-current-operand]')
const numberButtons = document.querySelectorAll('[data-number]')
const equalsButton = document.querySelector('[data-equals]')
const deleteButton = document.querySelector('[data-delete]')
const allClearButton = document.querySelector('[data-all-clear]')

const calculator = new Calculator(currentText)

numberButtons.forEach(button => {
    button.addEventListener('click', () => {
        text = text.concat(button.innerHTML)
        calculator.updateConsole()
    })

})

allClearButton.addEventListener('click', () => {
    calculator.clear()
    calculator.updateConsole()
})

deleteButton.addEventListener('click', () => {
    calculator.delete()
    calculator.updateConsole()
})

calculator.compute()


//js for THEME changing bellow:

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
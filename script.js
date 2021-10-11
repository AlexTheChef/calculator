class Calculator {
    constructor(previousText, currentText) {
        this.previousText = previousText
        this.currentText = currentText
        this.clear()
    }

    delete() {

    }

    pickOperation(operation) {
        if(this.currentOperand === '') return
        if(this.previousOperand !== ''){
            this.compute()
        }
        this.operation = operation
        this.previousOperand = this.currentOperand
        this.currentOperand = ''
    }

    clear() {
        this.currentOperand = ''
        this.operation = undefined
        this.previousOperand = ''
    }

    addNumber(number) {
        if(number === '.' && this.currentOperand.includes('.')) return
        this.currentOperand = this.currentOperand.toString() + number.toString()
    }

    compute() {

    }

    updateConsole() {
        this.currentText.innerText = this.currentOperand
        this.previousText.innerText = this.previousOperand
    }
}

const previousText = document.querySelector('[data-previous-operand]')
const currentText = document.querySelector('[data-current-operand]')
const numberButtons = document.querySelectorAll('[data-number]')
const operationButtons = document.querySelectorAll('[data-operation]')
const equalsButton = document.querySelector('[data-equals]')
const deleteButton = document.querySelector('[data-delete]')
const allClearButton = document.querySelector('[data-all-clear]')

const calculator = new Calculator(previousText, currentText)

numberButtons.forEach(button => {
    button.addEventListener('click', () => {
        calculator.addNumber(button.innerText)
        calculator.updateConsole()
    })
})

allClearButton.addEventListener('click', () => {
    calculator.clear()
    calculator.updateConsole()
})

operationButtons.forEach(button => {
    button.addEventListener('click', () => {
        calculator.pickOperation(button.innerText)
        calculator.updateConsole()
    })
})























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
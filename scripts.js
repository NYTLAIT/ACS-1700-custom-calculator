import formulas from './data.js'

const measurementDropdown = document.querySelector('#select-measurement')
const shapeDropdown = document.querySelector('#select-shape')
const valueInputs = document.querySelector('#input-values')
const showResult = document.querySelector('#show-result')

const displayShapes = shapes => {
    // I dont know how to make this work with the default value being empty
    let selectShape = '<option value="default-shape" name="default-shape" disabled selected>Select a shape</option>'
    for (let i = 0; i < shapes.length; i++) {
        selectShape += `<option value=${shapes[i]}>${shapes[i]}</option>`
    }
    shapeDropdown.innerHTML = selectShape
}

// Gets arguments and parameters needed to display shapes
document.body.addEventListener('change', (e) => {
    if (e.target.matches('#select-measurement')) {
        const measurement = e.target.value
        let shapes = []

        if (measurement === 'area') {
            shapes = ['parallelogram', 'triangle', 'trapezoid', 'circle']
            background = 
        } else if (measurement === 'circumference') {
            shapes = ['circle']
            background = 
        } else if (measurement === 'volume') {
            shapes = ['circular-cylinder', 'sphere', 'circular-cone', 'pyramid']
            background = 
        } else if (measurement === 'surfaceArea') {
            shapes = ['circular-cylinder', 'sphere']
            background = 
        }

        displayShapes(shapes)
        console.log('shapes---------------------', shapes)
    }
})

const displayInputs = vars => {
    let inputValues = '<legend>Enter values:</legend>'
    for (let i = 0; i < vars.length; i++) {
        inputValues += `<label for=${vars[i]}>${vars[i]}:
            <input type="number" name="${vars[i]}">
        </label>`
    }
    inputValues += '<button type="button" id="input-submit">Calculate!</button>'
    valueInputs.innerHTML = inputValues
}
// Gets arguments and parameters needed to display inputs
document.body.addEventListener('change', (e) => {
    if (e.target.matches('#select-shape')) {
        const measurement = document.querySelector('#select-measurement').value
        const shape = e.target.value
        const vars = formulas[measurement][shape].vars


        console.log('measurement---------------------', measurement)
        console.log('vars---------------------', vars)

        displayInputs(vars)
        valueInputs.hidden = false
    }
})

const displayResults = (values, formula) => {
    // not to sure how it works but searched it up and gave me the below syntax
    const result = formula(...Object.values(values)).toFixed(4)

    showResult.hidden = false
    showResult.innerHTML = `<p id="result-desc">Result:</p>
    <p id="result-value">${result}</p>`
}

document.body.addEventListener('click', (e) => {
    if (e.target.matches('#input-submit')) {
        const measurement = document.querySelector('#select-measurement').value
        const shape = document.querySelector('#select-shape').value

        const vars = formulas[measurement][shape].vars
        const formula = formulas[measurement][shape].formula

        let values = {}
        for (let i = 0; i < vars.length; i++) {
            const enteredValues = document.querySelector(`input[name="${vars[i]}"]`)
            values[vars[i]] = parseFloat(enteredValues.value)
        }

        console.log('formula---------------------', formula)
        console.log('values---------------------', values)

        displayResults(values, formula)
    }
}) 

// For refreshing page
window.addEventListener('DOMContentLoaded', () => {
    measurementDropdown.value = "default-measurement"
    shapeDropdown.innerHTML = '<option value="refresh-shape" disabled selected> Select a measurement above </option>'
    valueInputs.innerHTML = ''
    valueInputs.hidden = true
    showResult.innerHTML = ''
    showResult.hidden = true
})

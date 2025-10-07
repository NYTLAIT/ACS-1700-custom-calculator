import formulas from './data.js'

const shapeDropdown = document.querySelector('#select-shape')
const valueInputs = document.querySelector('#input-values')
const footer = document.querySelector('footer')

const defaultMeasurement = document.querySelector('#default-measurement')
const defaultShape = document.querySelector('#default-shape')

const displayShapes = shapes => {
    // I dont know how to make this work with the default value being empty
    let selectShape = '<option value="default-shape" id="default-shape"></option>'
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
        } else if (measurement === 'circumference') {
            shapes = ['circle']
        } else if (measurement === 'volume') {
            shapes = ['circular-cylinder', 'sphere', 'circular-cone', 'pyramid']
        } else if (measurement === 'surfaceArea') {
            shapes = ['circular-cylinder', 'sphere']
        }

        defaultMeasurement.remove()
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
    inputValues += '<button id="input-submit">Calculate!</button>'
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
    }
    // Not working... yet
    // defaultShape.remove()
})

const displayResults = (values, formula) => {
    // Need to plug in the corresponding variable to the formula
    const result = ''


    footer.innerHTML = `<p>Result:</p>`
}

document.body.addEventListener('click', (e) => {
    if (e.target.matches('#input-submit')) {
        const measurement = document.querySelector('#select-measurement').value
        const shape = document.querySelector('#select-shape').value
        const vars = formulas[measurement][shape].vars
        const formula = formulas[measurement][shape].formula

        let values = {}
        for (let i = 0; i < vars.length; i++) {
            /* not exactly sure how the syntax of input[name="${vars[i]}"] works
            (accidentally clicked the generate thing) but it still no work, I is struggling */
            const input = document.querySelector(`input[name="${vars[i]}"]`)
            values[vars[i]] = parseFloat(input)
        }

        console.log('formula---------------------', formula)
        // values currently not working
        console.log('values---------------------', values)
        displayResults(values, formula)
    }
}) 
        
        




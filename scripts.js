import formulas from './data.js'

const shapeDropdown = document.querySelector('#select-shape')
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
    for (let i = 0; i < vars.length; i++) {

    }
}

document.body.addEventListener('change', (e) => {
    if (e.target.matches('#select-shape')) {
        const measurement = document.querySelector('#select-measurement').value
        const shape = e.target.value
        const vars = formulas[measurement][shape].vars


        console.log('measurement---------------------', measurement)
        console.log('vars---------------------', vars)
        const formula = formulas[measurement][shape].formula
        console.log('formula---------------------', formula)
    }
    // Not working... yet
    // defaultShape.remove()
})





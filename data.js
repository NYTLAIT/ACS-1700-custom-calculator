const formulas = {
    area: {
        parallelogram: {
            vars: ['base', 'height'],
            formula: (base, height) => base * height
        }, 
        triangle: {
            vars: ['base', 'height'],
            formula: (base, height) => 0.5 * base * height
        },
        trapezoid: {
            vars: ['base1', 'base2', 'height'],
            formula: (base1, base2, height) => 0.5 * (base1 + base2) * height 
        },
        circle: {
            vars: ['radius'],
            formula: (radius) => Math.PI * Math.pow(radius, 2)
        }
    }, 
    circumference: {
        circle: {
            vars: ['radius'],
            formula: (radius) => 2 * Math.PI * radius
        }   
    },
    volume: {
        'circular-cylinder': {
            vars: ['radius', 'height'],
            formula: (radius, height) => Math.PI * Math.pow(radius, 2) * height
        },
        sphere: {
            vars: ['radius'],
            formula: (radius) => (4 / 3) * Math.PI * Math.pow(radius, 3)
        },
        'circular-cone': {
            vars: ['radius', 'height'],
            formula: (radius, height) => (1 / 3) * Math.PI * Math.pow(radius, 2) * height
        },
        pyramid: {
            vars: ['baseWidth', 'baseLength', 'height'],
            formula: (baseWidth, baseLength, height) => (1 / 3) * baseLength * baseWidth * height
        }
    },
    surfaceArea: {
        'circular-cylinder': {
            vars: ['radius', 'height'],
            formula: (radius, height) => 2 * Math.PI * radius * (radius + height)
        },
        sphere: {
            vars: ['radius'],
            formula: (radius) => 4 * Math.PI * Math.pow(radius, 2)
        }
    }

}

export default formulas
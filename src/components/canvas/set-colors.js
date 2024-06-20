
/*
    maxIteraciones: int
    color: {r: 0-255, g:0-255, b:0-255}

*/
export function setColors(color, maxIteraciones) {
    var colores = [];
    var R, G, B, t;
    for (let n = 0; n <= maxIteraciones; n++) {
        t = n / maxIteraciones;
        R = Math.trunc((1) * 0 + (1 - t) * color[0].r + t * color[1].r);
        G = Math.trunc((1) * 25 + (1 - t) * color[0].g + t * color[1].g);
        B = Math.trunc((1) * 25 + (1 - t) * color[0].b + t * color[1].b);

        colores[n] = { r: R, g: G, b: B };
    }
    return colores;
}

export function gradientArray(colors, steps) {
    let numColors = colors.length;
    let indivualSteps = Math.round(steps / numColors)
    const gradient = []
    // 0, 1
    for (let iColor = 0; iColor < (numColors - 1); iColor++) {
        for (let i = 0; i < indivualSteps; i++) {
            let t = i / indivualSteps;
            const R = Math.trunc((1 - t) * colors[iColor].r + t * colors[iColor + 1].r);
            const G = Math.trunc((1 - t) * colors[iColor].g + t * colors[iColor + 1].g);
            const B = Math.trunc((1 - t) * colors[iColor].b + t * colors[iColor + 1].b);
            gradient.push({r: R, g: G, b: B})
        }
    }
    console.log(gradient.length)
    return gradient;
}
export function renderizarCanvas(coordinates, renderInfo, infinito, canvasData) {
    var xMinimo = coordinates.minX;
    var yMinimo = coordinates.minY;
    var incrX = coordinates.incrementX;
    var incrY = coordinates.incrementY;
    var mediaWidth = coordinates.mediaWidth;
    var mediaHeight = coordinates.mediaHeight;


    var y = yMinimo;
    for (let j = 0; j < mediaHeight; j++) {
        var x = xMinimo;
        for (let i = 0; i < mediaWidth; i++) {
            var a = x;
            var b = y;
            var n = 0;
            while (n < renderInfo.iterations) {
                var aa = a * a;
                var bb = b * b;
                if ((aa + bb) > 5) {
                    break;
                }
                let dosab = 2 * a * b;
                a = aa - bb + renderInfo.real;
                b = dosab + renderInfo.imaginary;
                n++
            }

            let pix = (i + j * mediaWidth) * 4
            if (n == infinito) {
                //Solo va dentro
                canvasData[pix + 0] = 0;
                canvasData[pix + 1] = 0;
                canvasData[pix + 2] = 0;
                canvasData[pix + 3] = 255;
            } else {
                //aqui crear degradado
                canvasData[pix + 0] = renderInfo.colors[n].r;
                canvasData[pix + 1] = renderInfo.colors[n].g;
                canvasData[pix + 2] = renderInfo.colors[n].b;
                canvasData[pix + 3] = 255;
            }

            x = x + incrX;
        }
        y = y + incrY;
    }
    return canvasData;
}
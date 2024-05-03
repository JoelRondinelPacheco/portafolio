import { useEffect, useRef } from 'react';
import { Coordinates } from './coordinates';
import { RenderInfo } from './render-info';
import { setColors } from './set-colors';
import { renderizarCanvas } from './renderizarCanvas';

export default function Canvas () {
    const canvasRef = useRef();
    const colors = [
        { r: 0, g: 0, b: 0 },
        { r: 255, g: 255, b: 255 },
      ];

      let mouseX, mouseY;

      window.addEventListener('mousemove', (event) => {
        const { clientX, clientY } = event;
        mouseX = clientX;
        mouseY = clientY;
      });
      



      function mapValues (number, inMin, inMax, outMin, outMax) {
      return (number - inMin) * (outMax - outMin) / (inMax - inMin) + outMin
      }
      

    const colorsRender = setColors(colors, 85)
    const coordinates = new Coordinates(400, 400, 4.6);
    const renderInfo = new RenderInfo(0.5, 0.3, 80, colorsRender);

      const draw = (context) => {

      }

    useEffect(() => {
        const canvas = canvasRef.current;
        const context = canvas.getContext('2d');
        canvas.width = 400
        canvas.height = 400
        let datosImage = context.getImageData(0, 0, canvas.width, canvas.height)
        let data = datosImage.data
        let animationId;
        datosImage.setData = renderizarCanvas(coordinates, renderInfo, 100, data);
        context.putImageData(datosImage, 0, 0)

        const render = () => {
            renderInfo.real = Number(mapValues(mouseX, 0, window.innerWidth, 0.3, 0.6).toFixed(3))*(1.2)
            renderInfo.imaginary = Number(mapValues(mouseY, 0, window.innerHeight, 0.1, 0.6).toFixed(3))*(1.2)
            console.log(renderInfo.real, renderInfo.imaginary)
            datosImage.setData = renderizarCanvas(coordinates, renderInfo, 100, data);
            context.putImageData(datosImage, 0, 0);
            animationId = requestAnimationFrame(render)
        }

        render();

        return () => window.cancelAnimationFrame(animationId)
        
    }, [])

    return (
        <canvas ref={canvasRef}></canvas>
    )
}
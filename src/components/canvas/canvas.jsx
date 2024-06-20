import { useEffect, useRef } from 'react';
import { Coordinates } from './coordinates';
import { RenderInfo } from './render-info';
import { setColors } from './set-colors';
import { renderizarCanvas } from './renderizarCanvas';

export default function Canvas ({...props}) {
    const {width, height} = props
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
    const coordinates = new Coordinates(width, height, 7, -1.8);
    const renderInfo = new RenderInfo(0.3, 0.5, 50, colorsRender);

      const draw = (context) => {

      }

    useEffect(() => {
        const canvas = canvasRef.current;
        const context = canvas.getContext('2d');
        canvas.width = width
        canvas.height = height
        let datosImage = context.getImageData(0, 0, canvas.width, canvas.height)
        let data = datosImage.data
        let animationId;
        datosImage.setData = renderizarCanvas(coordinates, renderInfo, 100, data);
    
        const render = () => {
            renderInfo.real = mouseX ? Number(mapValues(mouseX, 0, Number(window.innerWidth), 0.3, 0.6).toFixed(3))*(1.2) : 0.36
            renderInfo.imaginary = mouseY ? Number(mapValues(mouseY, 0, Number(window.innerHeight), 0.1, 0.6).toFixed(3))*(1.2) : 0.4
            datosImage.setData = renderizarCanvas(coordinates, renderInfo, 100, data);
            context.putImageData(datosImage, 0, 0);
            animationId = requestAnimationFrame(render)
        }
        // activar o descativar
       render();

        return () => window.cancelAnimationFrame(animationId)
        
    }, [])

    return (
        <canvas ref={canvasRef}></canvas>
    )
}
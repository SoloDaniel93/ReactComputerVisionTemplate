/**
 * Script utilizado en App.js
 * Utilizar en Paso 2
 */
export const drawRect = (detections, ctx) => {
  detections.forEach((prediction) => {
    //Datos arrojados en los vectores, por el modelo
    const [x, y, width, height] = prediction["bbox"];
    //Persona, silla, peluche, celular
    const text = prediction["class"];

    //Define el estilo para el segmento del objeto
    const color = "#" + Math.floor(Math.random() * 16777215).toString(16);
    ctx.strokeStyle = color;
    ctx.font = "18px Arial";
    ctx.fillStyle = color;

    //Usaremos rectangulos para segmentar objs
    ctx.beginPath();
    ctx.fillText(text, x, y);
    ctx.rect(x, y, width, height);
    ctx.stroke();
  });
};

const img = <HTMLImageElement>document.getElementById("sample");
const canvas = document.createElement('canvas');
const context = canvas.getContext('2d');

canvas.width = img.width;
canvas.height = img.height;
context.drawImage(img, 0, 0 );

const imgData = context.getImageData(0, 0, img.width, img.height);
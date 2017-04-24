var img = document.getElementById("sample");
var canvas = document.createElement('canvas');
var context = canvas.getContext('2d');
canvas.width = img.width;
canvas.height = img.height;
context.drawImage(img, 0, 0);
var imgData = context.getImageData(0, 0, img.width, img.height);
console.dir(imgData);
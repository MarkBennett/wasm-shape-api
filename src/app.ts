const img = <HTMLImageElement>document.getElementById("sample");
const imgLoadHandler = (e) => {
    const canvas = document.createElement('canvas');
    const context = canvas.getContext('2d');

    canvas.width = img.width;
    canvas.height = img.height;
    context.drawImage(img, 0, 0 );

    const imgData = context.getImageData(0, 0, img.width, img.height);
    console.dir(imgData);
};
img.onload = imgLoadHandler;
img.src = "imgs/soccer-ball.jpg";

Module.addOnInit(() => {
    int_sqrt = Module.cwrap('int_sqrt', 'number', ['number'])
    console.log(int_sqrt(48));    
});

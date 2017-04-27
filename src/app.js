var img = document.getElementById("sample");
var imgLoadHandler = function (e) {
    var canvas = document.createElement('canvas');
    var context = canvas.getContext('2d');
    canvas.width = img.width;
    canvas.height = img.height;
    context.drawImage(img, 0, 0);
    var imgData = context.getImageData(0, 0, img.width, img.height);
    console.dir(imgData);
};
img.onload = imgLoadHandler;
img.src = "imgs/soccer-ball.jpg";
Module.addOnInit(function () {
    int_sqrt = Module.cwrap('int_sqrt', 'number', ['number']);
    console.log(int_sqrt(48));
});

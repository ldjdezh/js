var box = document.getElementById('box');
var mask = document.querySelector('.mask');
var big = document.querySelector('.big');
var bigImg = document.querySelector('.big img');

//当鼠标移入大盒子时显示黄色盒子
box.onmouseover = function () {
    mask.style.display = 'block';
    big.style.display = 'block';
}

box.onmouseout = function () {
    mask.style.display = 'none';
    big.style.display = 'none';
}

box.onmousemove = function (e) {
    var boxX = e.pageX - box.offsetLeft;
    var boxY = e.pageY - box.offsetTop;

    var x = boxX - mask.offsetWidth / 2;
    var y = boxY - mask.offsetHeight / 2;

    if (x < 0) {
        x = 0;
    }

    if (y < 0) {
        y = 0;
    }

    var maxX = box.offsetWidth - mask.offsetWidth;
    var maxY = box.offsetHeight - mask.offsetHeight;

    if (x > maxX) {
        x = maxX;
    }

    if (y > maxY) {
        y = maxY;
    }

    mask.style.left = x + 'px';
    mask.style.top = y + 'px';

    //mask的移动距离/大图片的移动距离=mask最大移动距离/大图片最大移动距离
    //大图片的移动距离=mask的移动距离*大图片最大移动距离/mask最大移动距离

    var bigMaxX = bigImg.offsetWidth - big.offsetWidth;
    var bigMaxY = bigImg.offsetHeight - big.offsetHeight;

    var imgX = x * bigMaxX / maxX;
    var imgY = y * bigMaxY / maxY;

    bigImg.style.left = -imgX + 'px';
    bigImg.style.top = -imgY + 'px';
}
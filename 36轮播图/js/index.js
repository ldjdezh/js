//1.获取要操作的元素
var ul = document.querySelector('ul');
var lis = ul.getElementsByTagName('li');
var ol = document.querySelector('ol');
var box = document.getElementById('box');
var arr = document.getElementById('arr');
var screen = document.querySelector('.screen');

//2.鼠标移动框内显示箭头
box.onmouseover = function () {
    arr.style.display = 'block';
    clearInterval(timeid2);
}

box.onmouseout = function () {
    arr.style.display = 'none';
    timeid2 = setInterval(function() {
        right.click();
    },3000)
}

//3.生成序列号
var len = lis.length;
for (var i = 0; i < len; i++) {
    var li = document.createElement('li');
    ol.appendChild(li);
    li.index = i;
    li.innerText = i + 1;

    li.onclick = liClick;

    if (i == 0) {
        li.className = 'current';
    }
}

//4.点击序列号切换页面
var imgWidth = screen.offsetWidth;
function liClick() {
    animate(ul, -this.index * imgWidth);

    for (var i = 0; i < len; i++) {
        li = ol.children[i];
        li.className = '';
    }

    this.className = 'current';
    index = this.index;
}

//5.点击左右箭头切换页面
var index = 0;
var left = document.getElementById('left');
var right = document.getElementById('right');

left.onclick = function () {

    if (index == 0) {
        index = len;
        ul.style.left = -index * imgWidth + 'px';
    }

    index--;
    ol.children[index].click();
}

right.onclick = function () {
    
    if(index == len) {
        ul.style.left = '0px';
        index = 0;
    }

    index++;

    if(index < len) {
        ol.children[index].click();
    }else {
        animate(ul,-index*imgWidth);

        for(var i =0;i<len;i++) {
            ol.children[i].className = '';
        }

        ol.children[0].className = 'current';
    }
}

var cloneli = ul.children[0].cloneNode(true);
ul.appendChild(cloneli);

//6.自动切换页面
var timeid2 = setInterval(function() {
    right.click();
},3000)

function animate(element, target) {
    if (element.timeid) {
        clearInterval(element.timeid);
    }

    element.timeid = setInterval(function () {
        var current = element.offsetLeft;
        var step = 10;

        if (current > target) {
            step = -Math.abs(step);
        }

        if (Math.abs(current - target) < Math.abs(step)) {
            element.style.left = target + 'px';
            clearInterval(element.timeid);
            return;
        }

        current += step;
        element.style.left = current + 'px';
    }, 20)
}
var header_a = document.querySelector('.login-header a');

header_a.onclick = function() {
    var login = document.querySelector('#login');
    var bg = document.querySelector('#bg');

    login.style.display = 'block';
    bg.style.display = 'block';
}

var closeBtn = document.getElementById('closeBtn');

closeBtn.addEventListener('click',function() {
    var login = document.querySelector('#login');
    var bg = document.querySelector('#bg');

    login.style.display = 'none';
    bg.style.display = 'none';
},false)

var login = document.getElementById('login');
var title = document.getElementById('title');

title.onmousedown = function(e) {
    // 求鼠标在盒子中的坐标
    var x = e.pageX - login.offsetLeft;
    var y = e.pageY - login.offsetTop;

    //输出页面的宽和高
    console.log(window.innerWidth);
    console.log(window.innerHeight);

    document.onmousemove = function(e) {
        var boxX = e.pageX - x;
        var boxY = e.pageY - y;

        boxX = boxX < 0 ? 0 : boxX;
        boxY = boxY  < 21 ? 21 :boxY;

        var maxX = window.innerWidth - login.offsetWidth - 21;
        var maxY = window.innerHeight-login.offsetHeight;
        boxX = boxX > maxX? maxX:boxX;
        boxY = boxY > maxY? maxY:boxY;

        login.style.left = boxX + 256 + 'px';
        login.style.top = boxY - 140  + 'px';
    }
}

document.onmouseup = function() {
    document.onmousemove = null;
}
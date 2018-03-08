//先获取a标签
//获取a标签对应的li标签
//给a标签注册事件

var links = document.querySelectorAll('.message .message_menu .menu_l a');
var uls = document.querySelectorAll('.message .message_content ul');

var len = links.length;

for(var i=0;i<len;i++) {
    var link = links[i];
    link.index = i;
    link.onmouseover = linkMouse;
}

function linkMouse() {
    var line = document.querySelector('.jd_line');

    animate(line,this.offsetLeft);

    for(var i=0;i<uls.length;i++) {
        uls[i].className = '';
    }

    uls[this.index].className = 'current';
}

function animate(element,target) {

    if(element.timeid) {
        clearInterval(element.timeid);
    }

    element.timeid = setInterval(function(){
        var current = element.offsetLeft;
        var step = 10;
        if(current > target) {
            step = -Math.abs(step);
        }

        if(Math.abs(current-target) < Math.abs(step)) {
            element.style.left = target + 'px';
            clearInterval(element.timeid);
            return;
        }

        current += step;
        element.style.left = current + 'px';
    },20)
}
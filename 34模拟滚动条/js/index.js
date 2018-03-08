var bar = document.getElementById('bar');
var scroll = document.getElementById('scroll');
var box = document.getElementById('box');
var content = document.getElementById('content');

//盒子/内容=滚动条/灰条
//盒子*灰条=滚动条*内容
//滚动条=盒子*灰条/内容

bar.style.height = box.offsetHeight*scroll.offsetHeight/content.scrollHeight + 'px';

bar.onmousedown = function(e) {
    //获取鼠标在滚动条内的坐标
    var barTop = e.pageY - box.offsetTop - bar.offsetTop;
    console.log(barTop);
    document.onmousemove = function(e) {
        var barY = e.pageY - barTop - box.offsetTop;

        if(barY < 0) {
            barY = 0;
        }

        var maxY = box.offsetHeight - bar.offsetHeight;

        if(barY > maxY) {
            barY = maxY;
        }

        bar.style.top = barY + 'px';

        //滚动条最大可移动距离/内容最大可移动距离 = 滚动条当前距离/内容当前距离
        //滚动条最大可移动距离*内容当前距离=滚动条当前距离*内容最大可移动距离
        var maxCon = content.scrollHeight - box.offsetHeight;
        var conY = barY * maxCon / maxY;
        content.style.top = -conY + 'px';
    }
}

document.onmouseup = function() {
    document.onmousemove = null;
}
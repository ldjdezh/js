var mytop = document.getElementById('top');
var totop = document.getElementById('totop');

console.log(top)

window.onscroll = function() {
    var wTop = document.documentElement.scrollTop;

    if(wTop >= 10) {
        mytop.className = 'header fixed';
        totop.style.display = 'block';
    }else {
        mytop.className = 'header';
        totop.style.display = 'none';
    }
}

var timeid;
totop.onclick = function() {
    if(timeid) {
        clearInterval(timeid);
    }

    var timeid = setInterval(function() {

        var step = 20;
        var target = 0;
        var current = document.documentElement.scrollTop;
    
        if(current > target) {
            step = -Math.abs(step);
        }

        if(Math.abs(current-target) < Math.abs(step)) {
            document.documentElement.scrollTop = target;
            clearInterval(timeid);
            return;
        }

        current += step;
        document.documentElement.scrollTop = current;
    },10)


}
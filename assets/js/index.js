function toggleNav() {
  var x = document.getElementById('videoNav');
  var y = document.getElementById('btnNav');

    if (x.style.width === '250px') {
        x.style.width = '0px';
        y.style.left = '0px';
        y.innerHTML='&#9776;';
    } else {
        x.style.width = '250px';
        y.style.left = '250px';
        y.innerHTML='&#9932;';
    }
}

var figure = $(".nav-video").hover( hoverVideo, hideVideo );

function hoverVideo(e) {  
    $('video', this).get(0).play(); 
}

function hideVideo(e) {
    $('video', this).get(0).pause(); 
}
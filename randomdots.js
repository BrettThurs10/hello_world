var html = '';
var red;
var green;
var blue;
var rgbColor;

function color() {
red = Math.floor(Math.random() * 256 );
green = Math.floor(Math.random() * 256 );
blue = Math.floor(Math.random() * 256 );
rgbColor = 'rgb(' + red + ',' + green + ',' + blue + ')';
html += '<div style="background-color:' + rgbColor + '"></div>'; 
}

for ( i = 0; i <=10; i += 1) {
 if ( i < 10) {
   color();
 } 
}

document.write(html);

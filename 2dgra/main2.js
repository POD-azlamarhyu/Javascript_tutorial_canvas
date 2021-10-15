const canvas2=document.getElementById('cvs2');
var ctx2=canvas2.getContext('2d');
const absolute=canvas2.getBoundingClientRect();

var rects=new Path2D();

let x = 10;
let y = 10;

for(let i=1;i<=10;i++){
    ctx2.fillRect(x*i*10,y*i*10,x*10,x*10);
}

for(let i=1;i<=10;i++){
    ctx2.arc(x*i*3,canvas2.height-x*i*10,30,0,Math.PI*2,true);
    ctx2.fill();
}

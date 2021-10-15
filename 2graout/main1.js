const canvas1=document.getElementById('cvs1');
const ctx1=canvas1.getContext('2d');


let x = canvas1.width;
let y = canvas1.height;
let rad=50;
let orbit=2;
let startagl=0;
let endagl=Math.PI*2;
let clockwise=true;
let elecConunt=[2,8,18,32,50,72];

ctx1.beginPath();
ctx1.fillStyle='#FF0000';
ctx1.arc(x/2,y/2,rad,startagl,endagl,clockwise);
ctx1.closePath();
ctx1.fill();

ctx1.fillStyle='#000000';
ctx1.font="64px";
ctx1.textAlign='center';
ctx1.fillText('酸素',x/2,y/2,100);



ctx1.strokeStyle='#000000';
for(let i=0;i<orbit;i++){
    ctx1.beginPath();
    ctx1.arc(x/2,y/2,rad*4*(i+1),startagl,endagl,clockwise);
    ctx1.closePath();
    ctx1.stroke();
}

ctx1.fillStyle='#33FFFF';

for(let i=0;i<elecConunt[0];i++){
    ctx1.beginPath();
    ctx1.arc(x/2+(Math.cos(Math.PI*2/elecConunt[0]*i))*rad*4,y/2+(Math.sin(Math.PI*2/elecConunt[0]*i))*rad*4,rad/2,startagl,endagl,clockwise);
    ctx1.closePath();
    ctx1.fill();

}



for(let i=0;i<elecConunt[1];i++){
    ctx1.beginPath();
    ctx1.arc(x/2+(Math.cos(Math.PI*2/elecConunt[1]*i))*rad*4*2,y/2+(Math.sin(Math.PI*2/elecConunt[1]*i))*rad*4*2,rad/2,startagl,endagl,clockwise);
    ctx1.fill();

}



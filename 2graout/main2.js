const canvas2=document.getElementById('cvs2');
const ctx2=canvas2.getContext('2d');

const data=[];
for(let i=0;i<20;i++){
    data[i] = Math.floor(Math.random()*canvas2.height);
}

ctx2.beginPath();
ctx2.moveTo(10,10);
ctx2.lineTo(10,canvas2.height-5);
ctx2.lineTo(canvas2.width,canvas2.height-5);
ctx2.stroke();


const w=(canvas2.width/data.length)/2;

for(let i=0;i<data.length;i++){
    let h=data[i];
    ctx2.fillStyle="#00FFFF";
    ctx2.fillRect(15+w*2*i,canvas2.height-5-h,w,h);
    ctx2.fillStyle="#000000";
    ctx2.font="12px";
    ctx2.textAlign='center';
    ctx2.fillText(data[i]+"",15+w*2*i+w/2,canvas2.height,100);
    console.log(data[i]);
}




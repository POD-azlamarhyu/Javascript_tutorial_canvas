const canvas1=document.getElementById('cvs1');
const ctx1=canvas1.getContext('2d');


ctx1.beginPath();
ctx1.arc(500,144,100,0,Math.PI*2);
ctx1.fill();


ctx1.fillRect(200,300,233,333);
ctx1.fill();


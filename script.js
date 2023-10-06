const boundary = document.querySelector(".boundary");
const ball = document.querySelector(".circle");

let speed = 2;
let x = 50;
let y = 50;

let postTop = document.querySelector(".post-left").offsetTop;
let postBot = postTop + 200;



document.addEventListener('keydown',(e)=>{
    if (e.keyCode===37){
        //move left
        if(x>0){
            x-=speed;
            ball.style.left = x + '%';
        } 
        if ((ball.style.left < 1.9+'%') && (ball.offsetTop>100) && (ball.offsetTop<postBot) ){
            alert("Goal!")
            ball.style.left = 50 + '%';
            ball.style.top = 50 + '%';
            x = 50;
            y = 50;
        }       
    }
    else if(e.keyCode===38){
        //move up
        
        
        if(y>0){
            y-=speed;
            ball.style.top = y + '%';
        }
    }
    else if(e.keyCode===39){
        //move right
        if((95-x)>0){
            x+=speed;
            ball.style.left = x + '%';
        }
        if ((ball.style.left > 94+'%') && (ball.offsetTop>100) && (ball.offsetTop<postBot) ){
            alert("Goal!")
            ball.style.left = 50 + '%';
            ball.style.top = 50 + '%';
            x = 50;
            y = 50;
        }
    }
    else if(e.keyCode===40){
        //move down
        if( (88-y)>0      ){
            y+=speed;
            ball.style.top = y + '%';
        }
    }


    
})

document.querySelector("#top-icon").addEventListener("click",()=>{
    if(y>0){
        y-=speed;
        ball.style.top = y + '%';
    }
})
document.querySelector("#left-icon").addEventListener("click",()=>{
    if(x>0){
        x-=speed;
        ball.style.left = x + '%';
    } 
    if ((ball.style.left < 1.9+'%') && (ball.offsetTop>100) && (ball.offsetTop<postBot) ){
        alert("Goal!")
        ball.style.left = 50 + '%';
        ball.style.top = 50 + '%';
        x = 50;
        y = 50;
    } 
})
document.querySelector("#right-icon").addEventListener("click",()=>{
    if((95-x)>0){
        x+=speed;
        ball.style.left = x + '%';
    }
    if ((ball.style.left > 94+'%') && (ball.offsetTop>100) && (ball.offsetTop<postBot) ){
        alert("Goal!")
        ball.style.left = 50 + '%';
        ball.style.top = 50 + '%';
        x = 50;
        y = 50;
    }
})
document.querySelector("#bottom-icon").addEventListener("click",()=>{
    if( (88-y)>0){
        y+=speed;
        ball.style.top = y + '%';
    }
})

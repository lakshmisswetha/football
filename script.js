const ball = document.querySelector(".circle");
const boundary = document.querySelector(".boundary");
const postL = document.querySelector(".post-left");

let x = parseFloat(getComputedStyle(ball).left);
let y = parseFloat(getComputedStyle(ball).top);
let speed = 15;

function isGoal(){
    let postTop = (boundary.offsetHeight-200)/2;
    let ballTop = parseFloat(getComputedStyle(ball).top);
    let ballLeft = parseFloat(getComputedStyle(ball).left);

    if((ballLeft < 45 || ballLeft>(boundary.offsetWidth-95)) && ((postTop+5< ballTop) && ((postTop + 200) > ballTop+45))) return true; 
}

function reset(){
    ball.style.left = "50%";
    ball.style.top = "50%";
    x = parseFloat(getComputedStyle(ball).left);
    y = parseFloat(getComputedStyle(ball).top);
}


function move (xDist, yDist){
    const maxX = boundary.offsetWidth;
    const maxY = boundary.offsetHeight;
    if ((x>0) && (x+45 <= maxX) && (y>0) && (y+45<maxY)){
        x += xDist;
        y += yDist;

        if (x<0) x=1;
        else if(x+45>maxX) x = maxX-45;
        else if (y<0) y=1;
        else if (y+45>maxY) y = maxY-46;

        ball.style.left = x + 'px';
        ball.style.top =  y + 'px';
    }
    if(isGoal()){
        setTimeout(()=>{
            alert("GOAL !!");
            reset();
        },0)
    }
}
document.addEventListener('keydown',(e)=>{
    if (e.keyCode===37) move(-speed,0);    
    else if (e.keyCode===39) move(speed,0); 
    else if (e.keyCode===38) move(0,-speed); 
    else if (e.keyCode===40) move(0,speed);          
    
})

document.querySelector("#left-icon").addEventListener("click",()=>move(-speed,0))
document.querySelector("#right-icon").addEventListener("click",()=>move(speed,0))     
document.querySelector("#top-icon").addEventListener("click",()=>move(0,-speed))
document.querySelector("#bottom-icon").addEventListener("click",()=>move(0,speed))


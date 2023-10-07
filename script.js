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

    if((ballLeft < 55 || ballLeft>(boundary.offsetWidth-100)) && ((postTop< ballTop) && ((postTop + 160) > ballTop))) return true; 
}

function reset(){
    ball.style.left = "50%";
    ball.style.top = "50%";
    x = parseFloat(getComputedStyle(ball).left);
    y = parseFloat(getComputedStyle(ball).top);
}

function moveLeft(){
    if(x>0){
        x -= speed;
        ball.style.left = x + 'px';
    }
    
    if(isGoal()){
        setTimeout(()=>{
            alert("GOAL !!");
            reset();
        },0)
    } 
}

function moveRight(){
    if(boundary.offsetWidth-(x+45)>0){
        x += speed;
        ball.style.left = x + 'px';
    }
    if(isGoal()){
        setTimeout(()=>{
            alert("GOAL !!");
            reset();
        },0)
    } 
}


function moveTop(){
    if(y>3){
        y -= speed;
        ball.style.top =  y + 'px';
    } 
    if(isGoal()){
        setTimeout(()=>{
            alert("GOAL !!");
            reset();
        },0)
    } 
}
function moveDown(){
    if((boundary.offsetHeight-(y+45))>0){
        y += speed;
        ball.style.top = y + 'px';
    } 
    if(isGoal()){
        setTimeout(()=>{
            alert("GOAL !!");
            reset();
        },0)
    }  
}

document.addEventListener('keydown',(e)=>{
    if (e.keyCode===37){     
        moveLeft();        
    }
})
document.addEventListener('keydown',(e)=>{
    if (e.keyCode===39){       
        moveRight();                
    }
})
document.addEventListener('keydown',(e)=>{
    if (e.keyCode===38){  
        moveTop()                  
    }
})
document.addEventListener('keydown',(e)=>{
    if (e.keyCode===40){ 
        moveDown()      
    }
})



document.querySelector("#left-icon").addEventListener("click",()=>moveLeft())
document.querySelector("#right-icon").addEventListener("click",()=>moveRight())     
document.querySelector("#top-icon").addEventListener("click",()=>moveTop())
document.querySelector("#bottom-icon").addEventListener("click",()=>moveDown())


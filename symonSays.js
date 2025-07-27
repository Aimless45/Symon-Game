let gameSeq =[];
let userseq=[];

let btns=["red","orange","yellow","blue"];

let started=false;
let level=0;
let h2=document.querySelector("h2");

document.addEventListener("keypress",function(){
    if(started==false){
       console.log("Game started");
       started=true;

       levelup();
    }
});
function btnflash(btn){
     btn.classList.add("flash");
     setTimeout(function(){
        btn.classList.remove("flash");
     },300);
}
function userFlash(btn){
      btn.classList.add("userflash");
     setTimeout(function(){
        btn.classList.remove("userflash");
     },300);
}
function levelup(){
    userseq=[];
    level++;
    h2.innerText= `Level ${level}`;
    
    let random = Math.floor(Math.random()*3);
    let randcolor= btns[random];
    let randbtn = document.querySelector(`.${randcolor}`);
    gameSeq.push(randcolor);
    console.log(gameSeq);
    btnflash(randbtn);
}
function checkAns(idx){
    if(userseq[idx]==gameSeq[idx]){
       // console.log("Same value");
       if(userseq.length==gameSeq.length){
        setTimeout(levelup,1000);
       }
    }else{
        h2.innerHTML=`Game Over!Your score was <b>${level}</b> <br> Press Any key to restart`;
    document.querySelector("body").style.backgroundColor="red";

    setTimeout(function(){
        document.querySelector("body").style.backgroundColor="white"
    },150)
    reset();
    }
    
}

function btnpress(){
    let btn=this;
    userFlash(btn);
   let  usercolor = btn.getAttribute("id");
    console.log(usercolor);
    userseq.push(usercolor);
    checkAns(userseq.length-1);
}

let allbtns= document.querySelectorAll(".btn");
for(btn of allbtns){
    btn.addEventListener("click",btnpress);
}

function reset(){
    started=false;
    gameSeq=[];
    userseq=[];
    level=0;
}
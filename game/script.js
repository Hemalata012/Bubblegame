var timer = 60;
var score = 0 ;
var hitrn = 0 ;

function increasescore(){
  score +=10;
  document.querySelector("#scoreval").textContent = score ;
}

function getnewhit(){
    hitrn = Math.floor(Math.random()*10)
    document.querySelector("#hitval").textContent = hitrn ;
}

function makebubble(){
    var clutter = " " ;
    for(var i =1 ; i<=140 ; i++){
       var rn = Math.floor(Math.random()*10)
     clutter +=  `<div class="bubble">${rn}</div>`
    }
    document.querySelector("#pbtm").innerHTML = clutter   
}

function runtimer(){
  var clrinterval =  setInterval(function() {
    if(timer>0 ){
        timer-- ;
        document.querySelector("#timer").textContent = timer ;
    }
    else{
        clearInterval(clrinterval) ;
        document.querySelector("#pbtm").innerHTML =`<h1> GAME OVER <h1>`; 
    }
   }, 1000) 
}

document.querySelector("#pbtm").addEventListener("click" ,function(dets){
    var clickednum = Number(dets.target.textContent)
    if(hitrn === clickednum){
        increasescore() ;
        makebubble() ;
        getnewhit() ;
    }
})
runtimer()
makebubble()
getnewhit()

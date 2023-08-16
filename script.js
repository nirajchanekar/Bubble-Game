
let timer = 60;
let score = 0;
let num = 0;

function makebubble() {
    let clutter = " ";

    for (let i = 1; i <= 90; i++) {
        let num = Math.floor(Math.random() * 10)
        clutter += `<div id="bubble">${num}</div>`;
    }

    document.querySelector("#pbottom").innerHTML = clutter;
}

function runtimer() {
    var timerint = setInterval(function () {
        if (timer > 0) {
            timer--;
            document.querySelector(".timerval").textContent = timer;
        }
        else {
            clearInterval(timerint);
            document.querySelector("#pbottom").innerHTML=`<h1>Game Over</h1>`
        }
    }, 1000);
}

function getnewhit(){
     num = Math.floor(Math.random() * 10);
    document.querySelector(".hitval").textContent = num;
}


function increasescore()
{
     score += 10;
     document.querySelector(".scoreinc").textContent = score;
}

document.querySelector("#pbottom").addEventListener("click", function(dets){
var clicknum=Number(dets.target.textContent);
if(clicknum === num)
{
    increasescore();
    makebubble();
    getnewhit();
}
});


makebubble();
runtimer();
getnewhit();

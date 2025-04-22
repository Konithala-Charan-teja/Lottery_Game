"use strict"
const pickNumber=document.getElementById("pick_btn");
const pickNumResult=document.getElementById("num_res");
const lotteryContainer =document.getElementById("lott-container");
const tick=new Audio('tap_sound.wav');
const gameCompleted=new Audio('completion.wav')
const gifts=[
    "Umbrella", "Laptop", "Cactus", "Bicycle", "Toaster",
    "Sunglasses", "Notebook", "Pillow", "Guitar", "Flashlight",
    "Backpack", "Clock", "Mug", "Camera", "Chair",
    "Candle", "Headphones", "Blanket", "Key", "Wallet",
    "Plant", "Fan", "Mirror", "Book", "Hat",
    "Pen", "Phone", "Ruler", "Globe", "Watch",
];
pickNumber.addEventListener("click",function(){
    for(let i=1;i<31;i++){
        document.getElementById(i).classList.remove("winningBox");
    }
    pickNumResult.textContent='Please wait....';
    let secondCount=0;
    const intervalId=setInterval(function(){
        tick.pause();
        tick.currentTime=0;
        tick.play();
        secondCount++;
        const randomBox=Math.floor(Math.random()*31+1);

        for(let i=1;i<31;i++){
            if(i===randomBox){
                document.getElementById(i).classList.add("highlightedBox");
            }else{
                document.getElementById(i).classList.remove("highlightedBox");
            }
        }

        if(secondCount===5){
            let value=Math.floor(Math.random()*30+1);
            pickNumResult.textContent=`You have drawn ${value} , and You won ${gifts[value-1]}`;
            document.getElementById(randomBox).classList.remove("highlightedBox");
            document.getElementById(value).classList.add("winningBox");
            gameCompleted.pause();
            gameCompleted.currentTime=0;
            gameCompleted.play();
            clearTimeout(intervalId);
        }
    },1000);
    

});

gifts.forEach(function(value,i){
    //<div class="-lottery-container-box">1111</div>
    const boxElement =`<div class="lottery-container-box" id=${i+1}> ${i+1}.${value}</div>`;
    lotteryContainer.insertAdjacentHTML("beforeend",boxElement);
})






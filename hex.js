const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];

const btn=document.getElementById("btn");
const color=document.querySelector(".color");
//#f15025
btn.addEventListener('click',function(){

    let hexColor="#";
    for(let i=0;i<6;i++){//the length of hex is 6
        hexColor +=hex[randomNumber()];
    }
    color.textContent=hexColor;
    document.body.style.backgroundColor=hexColor;
});

function randomNumber(){
    return Math.floor(Math.random()*hex.length);
}
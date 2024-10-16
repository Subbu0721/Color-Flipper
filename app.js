const colors = ["green", "red", "rgba(133,122,200)", "#f15025"];

const btn=document.getElementById("btn");//(this will be the button user clicks to change color)
const color=document.querySelector(".color");// selects an element with class color (This element will display the name of the current background color).

//adds eventListener ,so when btn is clicked fucntion inside gets executed 
btn.addEventListener("click",function(){

    const randomNumber=getRandomNumber();
    console.log(randomNumber);

    document.body.style.backgroundColor=colors[randomNumber]; //applies bg to properties of document.body
    color.textContent=colors[randomNumber]; //updates the text content to applied backgroud color name
});
function getRandomNumber(){
    return Math.floor(Math.random()*colors.length);
}

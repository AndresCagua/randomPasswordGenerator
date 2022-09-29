const characters =["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];
let passwordOne= document.getElementById("pass1")
let passwordTwo= document.getElementById("pass2")
const lengthPass = document.getElementById("pass")
const generateFunction = document.getElementById("generate")

console.log(lengthPass.value)
generateFunction.addEventListener("click",function (){
    passwordOne.textContent=""
    passwordTwo.textContent=""
    console.log(lengthPass.value)
    for (let i=0 ; i<=parseInt(lengthPass.value);i++){
    let randomNumberOne =  Math.floor( Math.random()* characters.length)
    let randomNumberTwo =  Math.floor( Math.random()* characters.length)
    passwordOne.textContent +=characters[randomNumberOne]
    passwordTwo.textContent +=characters[randomNumberTwo]  
   
}   document.getElementById("pass").value = ""
})

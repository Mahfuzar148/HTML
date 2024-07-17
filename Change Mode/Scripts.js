let modeBtn = document.querySelector("#mode");
let currMode = "light";
let body = document.querySelector("body");

modeBtn.addEventListener("click",()=>{
    if(currMode === "light"){
        body.style.backgroundColor = "black";
        body.style.color = "white";
        currMode = "dark";
    } 
    else {
        body.style.backgroundColor = "white";
        body.style.color = "black";
        currMode = "light";
    }

    console.log(currMode);
     

})



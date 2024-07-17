let modeBtn = document.querySelector("#mode");
let currMode = "light";
let body = document.querySelector("body");

modeBtn.addEventListener("click",()=>{
    if(currMode === "light"){
        body.classList.add("dark");
        currMode = "dark";
    } 
    else {
        body.classList.add("light");
        currMode = "light";
    }

    console.log(currMode);
     

})



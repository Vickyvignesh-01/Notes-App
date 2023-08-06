let button = document.querySelector(".button");
let textarea = document.querySelector(".textarea");
let notes = document.querySelectorAll(".text-box");



function showdata(){
    textarea.innerHTML = localStorage.getItem("notes");
 }
 showdata();


function savedata(){
    localStorage.setItem("notes", textarea.innerHTML)
}




button.addEventListener("click",()=>{
    let textbox = document.createElement("p");
    let img = document.createElement("img");
    textbox.className = "text-box";
    textbox.setAttribute("contenteditable","true");
    img.src = "Images/delete.png";
    img.setAttribute("title", "Delete");
    textarea.appendChild(textbox).appendChild(img);

});

textarea.addEventListener("click",(e)=>{
    if(e.target.tagName === "IMG"){
        e.target.parentElement.remove();

        savedata()
    }

    else if(e.target.tagName === "P"){
        let notes = document.querySelectorAll(".text-box");
        notes.forEach(nt => {
            nt.onkeyup = function(){
                savedata();
            }
        })
    }
    
});

document.addEventListener("keydown",event =>{
    if(event.key === "Enter"){
        document.execCommand("insertLineBreak");
            event.preventDefault();
    }
})


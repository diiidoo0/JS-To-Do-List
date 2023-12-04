let $ = (id) => {
    return document.getElementById(id);
}; 

window.addEventListener("load", () => {
    "use strict";

    let textField = $("myInput");
    let addBtn = $("addBtn");
    let rmvBtn = $("rmvBtn");
    let fnshdBtn = $("fnshdBtn");
    let list = $("myUL");
    let cl;

    addBtn.addEventListener("click", () => {
        const newEntry = document.createElement("li");
        const newContent = document.createTextNode(textField.value);
        newEntry.appendChild(newContent);

        const currentDiv = $("tempDiv");
        list.insertBefore(newEntry, currentDiv);
    });

    list.addEventListener("click", (e) => {
        cl = e.target; 
    });

    fnshdBtn.addEventListener("click", () => {
        if(!cl || cl.parentNode === null) {
            window.alert("List is empty or Item is not selected!");
        }
        else if(!(cl.className.includes("checked")))
            cl.classList.add("checked");
        else 
            cl.classList.remove("checked");
    });

    rmvBtn.addEventListener("click", () => {
        if(!cl || cl.parentNode === null) 
            window.alert("List is empty or Item is not selected!");
        else
            cl.parentNode.removeChild(cl);
    });   
});


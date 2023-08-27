let textbox = document.getElementById("textbox");
let submit = document.getElementById("submit");
let text = document.getElementById("text");
let name;

submit.addEventListener("click", save);

function save(event){
    name = textbox.value
    text.innerHTML = "Hello " + name + "!";
    if(textbox.value == ""){
        text.innerHTML = "Please input a name.";
    }
}
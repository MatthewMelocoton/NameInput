let textbox = document.getElementById("textbox");
let submit = document.getElementById("submit");
let text = document.getElementById("text");
let screen = document.getElementById("screen");
let othertext = document.getElementById("othertext");
let sure = document.getElementById("sure");
let yes = document.getElementById("yes");
let no = document.getElementById("no");
let hasexited = false;
let hassubmitted = false;
let name;

submit.addEventListener("click", save);

function save(event){
    name = textbox.value

    if(textbox.value == ""){
        text.innerHTML = "Please input a name.";
    }
    else if(!textbox.value == ""){
        hassubmitted = true;
    }
}
function clear(){
    if(hassubmitted && !hasexited){
        text.style.display = "none"
        textbox.style.display = "none";
        submit.style.display = "none";
        screen.classList.add("wide");
        screen.classList.remove("back");
        othertext.classList.add("resize");
        othertext.innerHTML = textbox.value;
        sure.classList.add("in");
        sure.classList.remove("out");
        yes.classList.add("answeryes");
        yes.classList.remove("answeredyes");
        no.classList.add("answerno");
        no.classList.remove("answeredno");
    }
    requestAnimationFrame(clear);
}
clear();

no.addEventListener("click", exit);

function exit(event){
    if(!hasexited){
        screen.classList.remove("wide");
        screen.classList.add("back");
        sure.classList.remove("in");
        sure.classList.add("out");
        yes.classList.remove("answeryes");
        yes.classList.add("answeredyes");
        no.classList.remove("answerno");
        no.classList.add("answeredno");
        hassubmitted = false;
        othertext.innerHTML = "";

        text.style.display = "block"
        textbox.style.display = "block";
        submit.style.display = "block";
        hasexited = false
    }
}

yes.addEventListener("click", send);

function send(event){
    if(!hasexited){
        screen.classList.remove("wide");
        screen.classList.add("back");
        sure.classList.remove("in");
        sure.classList.add("out");
        yes.classList.remove("answeryes");
        yes.classList.add("answeredyes");
        no.classList.remove("answerno");
        no.classList.add("answeredno");
        hassubmitted = false;
        othertext.innerHTML = "";

        text.style.display = "block"
        textbox.style.display = "block";
        submit.style.display = "block";
        hasexited = false
    }
    text.innerHTML = "Hello " + textbox.value + "!";
    text.style.fontSize = "100px"
    submit.style.display = "none";
    textbox.style.display = "none";

    text.classList.add("gem");
}

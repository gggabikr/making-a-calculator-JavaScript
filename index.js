const main = document.getElementsByTagName("main"),
    input = document.querySelector("#input"),
    buttons = document.querySelectorAll(".buttons"),
    numbtns = document.querySelectorAll(".nums"),
    symbBtns = document.querySelectorAll(".symb"),
    enterBtn = document.querySelector("#enter"),
    acBtn = document.querySelector("#ac");



const symbs = ["+","-","*","÷"];


const mathItUp = {
    '+': function (x, y) { return x + y },
    '-': function (x, y) { return x - y },
    '÷': function (x, y) { return x / y },
    '*': function (x, y) { return x * y }
}

var x;
var y;
var symb;
var result;

function numberInput() {


    console.log(`num pressed (${event.target.innerHTML})`)
    input.placeholder="";
    if (x&&y&&result){
        input.value="";
    }

    if (symbs.includes(input.value) === true){
        input.value = ""
    }
    else{};

    if (event.target.innerHTML==="." &&input.value.includes(".")) {return}
    else{}

    input.value = input.value + event.target.innerHTML;

    if(symb === null ||symb === undefined){
        x = parseFloat(input.value);
        return x;
    }
    else{
        y = parseFloat(input.value);
        return y;
    }

}

function symbInput(){
    console.log(`symb pressed (${event.target.innerHTML})`)

    if (x === undefined){
        return
    }


    if (y!==undefined&&event.target.id!=="backsp"){
        result=mathItUp[symb](x,y);
        x=result;
        y=undefined;
    }


    if(event.target.id === "backsp"){
        input.value = input.value.slice(0,-1);
        if(symb ===undefined){
            x=parseFloat(input.value);
        }
        else{
            y=parseFloat(input.value);
        }

    }
    else{
        input.value = event.target.innerHTML;
        symb = event.target.innerHTML;
        return symb;
    }
}


function clear(){
    console.log("AC pressed")
    input.value = "";
    x =undefined;
    y =undefined;
    symb=undefined;
    result=undefined;
}



function calc (){
    console.log("enter pressed")
    if (symb ===undefined){
        result=input.value
    }
    else{
    result = mathItUp[symb](x,y);
    input.value = result;
    x=result;
    y=undefined;
    result = undefined;
    symb=undefined;
    input.placeholder="";
}
}


function init(){
    for(i=0; i < numbtns.length; i++){
        numbtns[i].addEventListener('click',numberInput)
}
    for(i=0; i < symbBtns.length; i++){
        symbBtns[i].addEventListener('click',symbInput)
}
    enterBtn.addEventListener('click',calc)
    acBtn.addEventListener('click',clear)
}

init();
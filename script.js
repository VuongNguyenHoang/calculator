function add(num1,num2){
    return num1 + num2;
}

function subtract(num1,num2){
    return num1 - num2;
}

function multiply(num1,num2){
    return num1 * num2;
}

function divide(num1,num2){
    return num1/num2;
}

let num1;
let operator;
let num2;
let chain;

function operate(num1,operator,num2){
    switch (operator) {
        case '+':
            return add(num1,num2);
        case '-':
            return subtract(num1,num2);
        case 'x':
            return multiply(num1,num2);
        case '/':
            return divide(num1,num2);
        default:
            return "Not an operator";
    }
}



const display = document.querySelector(".display");

let numberedButtons = document.querySelectorAll("button.number");
numberedButtons.forEach((button) => {
    button.addEventListener("click", ()=>{
        if (operator && !num2){
            display.textContent= button.textContent;
            num2=+display.textContent;
        }
        else if (operator){
            if (display.textContent.length !=23){
                display.textContent+=button.textContent
                num2=+display.textContent;
            }
        }
        else{
            if (chain){
                display.textContent=button.textContent;
                num1=+display.textContent;
                chain=false;
            }
            else{
                if (display.textContent.length !=23){
                    display.textContent+=button.textContent;
                    num1=+display.textContent;
                }

                
            }
            
        }
        
    });
    
});

let operators = document.querySelectorAll(".operator");
operators.forEach((button) => {
    button.addEventListener("click",() => {
        
        if(num1){
            prevOperator=operator;
            operator=button.textContent;
            if(num2==0 && prevOperator== "/"){
                display.textContent="You want spanked?";
                num1=undefined;
                operator=undefined;
                num2=undefined;
                chain=true;
            }
            else if(num2){
                display.textContent="" + operate(num1,prevOperator,num2);
                num1=+display.textContent;
                num2=undefined;
                chain=true;
            }
        }
    });
});

let equal = document.querySelector("[id='=']");
equal.addEventListener('click', ()=> {
    if(num2==0 && operator== "/"){
        display.textContent="You want spanked?";
        num1=undefined;
        operator=undefined;
        num2=undefined;
        chain=true;
    }
    else if(num1 && operator && num2){
        
        display.textContent="" + operate(num1,operator,num2);
        num1=+display.textContent;
        operator=undefined;
        num2=undefined;
        chain=true;
    }
});

let clear = document.querySelector("[id='clear']");
clear.addEventListener('click', ()=> {
    display.textContent="";
    num1=undefined;
    operator=undefined;
    num2=undefined;
    chain=false;
});

let buttons=document.querySelectorAll('button');
buttons.forEach((button)=>{
    button.addEventListener('click', () =>{
        console.log(num1);
        console.log(num2);
        console.log(operator);
    });
    
});
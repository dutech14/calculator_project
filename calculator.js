const display = document.getElementById("numbers");

function appendDisplay(input){
    display.value += input;
};

function clearDisplay(){
    display.value  = '';
};

function deleteOne(){
    display.value = display.value.slice(0,-1);
};

function calculate(){
    try{
        display.value = eval(display.value)
    }
    catch{
        display.value = "Error";
    }
};
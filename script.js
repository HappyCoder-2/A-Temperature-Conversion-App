// Project - TEMPERATURE CONVERSION APP

// step 1 - Get the elements

const textBox = document.getElementById("textBox");
const toCelsius = document.getElementById("toCelsius");
const toFahrenheit = document.getElementById("toFahrenheit");
const result = document.getElementById("result");
let temp;

function convert(){
        if(toFahrenheit.checked){
                temp = Number(textBox.value);
                temp = temp * 9 / 5 +32;
                result.textContent = temp.toFixed(0) + "°" + " " + "F";
        }
        else if(toCelsius.checked){
                temp = Number(textBox.value);
                temp = (temp - 32) * (5/9);
                result.textContent = temp.toFixed(0) + "°" + " " + "C";
        }
        else {
                result.textContent = "Select a unit"
        }
}
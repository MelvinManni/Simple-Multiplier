var num1 = document.getElementById('num1');
var num2 = document.getElementById('num2');

document.getElementById('submit').addEventListener("click",multiplfunc);

function multiplfunc(){
        if (num1.value === "" || num2.value === "") {
                alert("Enter a valid number!");
        }
        else{

                var mult = parseFloat(num1.value) * parseFloat(num2.value);
                document.getElementById('result').innerHTML = mult;
        }

        e.preventDefault();
 }

var num1 = document.getElementById('num1');
var num2 = document.getElementById('num2');
var loadIcon = document.getElementById('loader');
var resultSpan = document.getElementById('result-span');

loadIcon.style.display = 'none';
resultSpan.style.display = 'none';
document.getElementById('submit').addEventListener('click',function(e){
        if (num1.value === "" || num2.value === "") {
                alert("Enter a valid number!");
        }
        else{
                resultSpan.style.display = 'none';
                loadIcon.style.display = 'block';

                setTimeout(multiplfunc, 1500)
        }
        e.preventDefault();
});

function multiplfunc(){
        if (num1.value === "" || num2.value === "") {
                alert("Enter a valid number!");
        }
        else{

                var mult = parseFloat(num1.value) * parseFloat(num2.value);
                document.getElementById('result').innerHTML = mult;
                resultSpan.style.display = 'block';
                loadIcon.style.display = 'none';

        }

        
 }

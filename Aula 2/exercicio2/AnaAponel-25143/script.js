var numbers = [];

function addNumber() {
    var value = document.getElementById( "numberid").value;
    numbers.push(parseInt(value));
    document.getElementById("number").innerText = numbers.toString();
}
function calculate() {

    var BiggestNumber = Math.max.apply(Math,numbers);
    var value = document.getElementById( "result").innerText = BiggestNumber;
    document.getElementById("result").innerText = value;


}
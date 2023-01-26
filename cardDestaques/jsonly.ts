const button = document.getElementById("addBtn");
const input1 = document.getElementById("number1")! as HTMLInputElement;
const input2 = document.getElementById("number2")! as HTMLInputElement;
const result = document.getElementById("result");

function add(num1: number, num2: number) {
    return num1 + num2;
}
button?.addEventListener("click", function() {
    let myResult = add(+input1.value, +input2.value)! as 
    console.log(myResult)
    result.innerText = myResult.toString();

});
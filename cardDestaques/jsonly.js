var button = document.getElementById("addBtn");
var input1 = document.getElementById("number1");
var input2 = document.getElementById("number2");
var result = document.getElementById("result");
function add(num1, num2) {
    return num1 + num2;
}
button === null || button === void 0 ? void 0 : button.addEventListener("click", function () {
    var myResult = add(+input1.value, +input2.value);
    console.log(myResult);
    result.innerText = myResult.toString();
});

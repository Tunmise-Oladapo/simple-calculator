function inputNumber(value){
    console.log(value);
    let userInput = value
    document.getElementById("firstInput").value += userInput
}
function addNumber(){
    let userValue =
    document.getElementById("firstInput").value
    let evaluation = eval(userValue)
    document.getElementById("firstInput").value = evaluation
    console.log(evaluation);
}

function del(){
  document.getElementById("firstInput").value = ""
}

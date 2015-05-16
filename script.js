function runInput() {
    var inputScript = document.getElementById("input").value;
    console.log(inputScript)
    document.getElementById("output").innerHTML = inputScript;
}

function clearInput() {
    inputScript = "";
}

function clearOutput() {
    document.getElementById("output").innerHTML = "";
}
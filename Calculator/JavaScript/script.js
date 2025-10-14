let equalPressed = 0;
let buttonInput = document.querySelectorAll(".button");
let input = document.getElementById("input");
let equal = document.getElementById("equal");
let clear = document.getElementById("clear");
let historyContent = document.getElementById("historyContent");
let clearHistory = document.getElementById("clearHistory");

clearHistory.addEventListener("click", () => {
    historyContent.innerHTML = "";
});


window.onload = () => {
    input.value = "";
};

buttonInput.forEach((buttonClass) => {
    buttonClass.addEventListener("click", (event) => {
        if (equalPressed === 1) {
            equalPressed = 0;
        }
        let value = event.target.dataset.number;

        if (value === "C") {
            input.value = "";
            return;
        }

        input.value += value;
    });
    
});

equal.addEventListener("click", () => {
    equalPressed = 1;
    let inputValue = input.value;

    try {
        let expression = inputValue
            .replaceAll("sin", "Math.sin")
            .replaceAll("cos", "Math.cos")
            .replaceAll("log", "Math.log10")
            .replaceAll("tan", "Math.tan")
            .replaceAll("e", "Math.E")
            .replaceAll("π", "Math.PI")
            .replaceAll("^", "**");

        let result = eval(expression);
        if (Number.isNaN(result) || !Number.isFinite(result)) {
            throw new Error("Helytelen művelet");
        }

        input.value = Number.isInteger(result) ? result : result.toFixed(2);
        addToHistory(expression, input.value);
    }
    catch (error) {
        alert("Error: " + error.message);
    }
    
});

function addToHistory(expression, result) {
    let divItem = document.createElement("div");
    let span = document.createElement("span");

      divItem.className = "historyItem";
    divItem.style.display = "flex";
    divItem.style.justifyContent = "space-between";

    span.textContent = `${expression} = ${result}`;
    span.dataset.userInput = expression;
    span.style.cursor = "pointer";
    span.style.color = "black";

     divItem.appendChild(span);
     historyContent.appendChild(divItem);
}
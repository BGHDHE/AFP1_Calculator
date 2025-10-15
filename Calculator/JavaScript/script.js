let equalPressed = 0;
let buttonInput = document.querySelectorAll(".button");
let input = document.getElementById("input");
let equal = document.getElementById("equal");
let clear = document.getElementById("clear");
let historyContent = document.getElementById("historyContent");
let clearHistory = document.getElementById("clearHistory");

// --- Képletválasztó elemek ---
let formulaSelect = document.getElementById("formula_select");
let formulaInputs = document.getElementById("formula_inputs");
let formulaResult = document.getElementById("formula_result");
let calculateFormula = document.getElementById("calculate_formula");

// --- Előzmények törlése ---
clearHistory.addEventListener("click", () => {
    historyContent.innerHTML = "";
});

// --- Ablak betöltésekor ---
window.onload = () => {
    input.value = "";
};

// --- Számológép gombok ---
buttonInput.forEach((buttonClass) => {
    buttonClass.addEventListener("click", (event) => {
        if (equalPressed === 1) equalPressed = 0;
        let value = event.target.dataset.number;

        if (value === "C") {
            input.value = "";
            return;
        }

        input.value += value;
    });
});

// --- Számológép egyenlő gomb ---
equal.addEventListener("click", () => {
    equalPressed = 1;
    let inputValue = input.value;

    try {
        let expression = inputValue
            .replaceAll("sin", "Math.sin")
            .replaceAll("cos", "Math.cos")
            .replaceAll("tan", "Math.tan")
            .replaceAll("log", "Math.log10")
            .replaceAll("e", "Math.E")
            .replaceAll("π", "Math.PI")
            .replaceAll("^", "**");

        let result = eval(expression);

        if (Number.isNaN(result) || !Number.isFinite(result)) {
            throw new Error("Helytelen művelet");
        }

        input.value = Number.isInteger(result) ? result : result.toFixed(2);

        // --- Előzményekbe mentés ---
        addToHistory(inputValue, input.value);

    } catch (error) {
        alert("Error: " + error.message);
    }
});

// --- Képletválasztó változtatás ---
formulaSelect.addEventListener("change", () => {
    formulaInputs.innerHTML = "";
    formulaResult.textContent = "";

    switch (formulaSelect.value) {
        case "circle_area":
        case "circle_circumference":
        case "sphere_volume":
            formulaInputs.innerHTML = `<label>Sugár (r):</label><input type="number" id="r">`;
            break;
        case "rectangle_area":
        case "triangle_area":
            formulaInputs.innerHTML = `<label>Oldal/Alap (a):</label><input type="number" id="a">
                                       <label>Oldal/Magasság (b/m):</label><input type="number" id="b">`;
            break;
        case "cylinder_volume":
            formulaInputs.innerHTML = `<label>Sugár (r):</label><input type="number" id="r">
                                       <label>Magasság (h):</label><input type="number" id="h">`;
            break;
        case "ohm_law":
            formulaInputs.innerHTML = `<label>Ellenállás (R):</label><input type="number" id="R">
                                       <label>Áramerősség (I):</label><input type="number" id="I">`;
            break;
    }
});

// --- Képlet számítása és előzmények mentése ---
calculateFormula.addEventListener("click", () => {
    let val = formulaSelect.value;
    let result;
    let expressionText = "";

    try {
        switch (val) {
            case "circle_area":
                let r1 = parseFloat(document.getElementById("r").value);
                if (isNaN(r1)) throw new Error("Hiányzó adat");
                result = Math.PI * r1 ** 2;
                expressionText = `Kör területe (π·${r1}²)`;
                break;

            case "circle_circumference":
                let r2 = parseFloat(document.getElementById("r").value);
                if (isNaN(r2)) throw new Error("Hiányzó adat");
                result = 2 * Math.PI * r2;
                expressionText = `Kör kerülete (2·π·${r2})`;
                break;

            case "rectangle_area":
                let a1 = parseFloat(document.getElementById("a").value);
                let b1 = parseFloat(document.getElementById("b").value);
                if (isNaN(a1) || isNaN(b1)) throw new Error("Hiányzó adat");
                result = a1 * b1;
                expressionText = `Téglalap területe (${a1}·${b1})`;
                break;

            case "triangle_area":
                let a2 = parseFloat(document.getElementById("a").value);
                let m = parseFloat(document.getElementById("b").value);
                if (isNaN(a2) || isNaN(m)) throw new Error("Hiányzó adat");
                result = 0.5 * a2 * m;
                expressionText = `Háromszög területe (½·${a2}·${m})`;
                break;

            case "sphere_volume":
                let rs = parseFloat(document.getElementById("r").value);
                if (isNaN(rs)) throw new Error("Hiányzó adat");
                result = (4 / 3) * Math.PI * Math.pow(rs, 3);
                expressionText = `Gömb térfogata (4/3·π·${rs}³)`;
                break;

            case "cylinder_volume":
                let rc = parseFloat(document.getElementById("r").value);
                let h = parseFloat(document.getElementById("h").value);
                if (isNaN(rc) || isNaN(h)) throw new Error("Hiányzó adat");
                result = Math.PI * rc ** 2 * h;
                expressionText = `Henger térfogata (π·${rc}²·${h})`;
                break;

            case "ohm_law":
                let R = parseFloat(document.getElementById("R").value);
                let I = parseFloat(document.getElementById("I").value);
                if (isNaN(R) || isNaN(I)) throw new Error("Hiányzó adat");
                result = R * I;
                expressionText = `Ohm törvénye (${R}·${I})`;
                break;

            default:
                formulaResult.textContent = "Kérlek, válassz képletet!";
                return;
        }

        formulaResult.textContent = `Eredmény: ${result.toFixed(2)}`;

        // --- Előzményekbe mentés ---
        addToHistory(expressionText, result.toFixed(2));

    } catch (err) {
        alert("Hiba: " + err.message);
    }
});

// --- Előzmények mentése függvény ---
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

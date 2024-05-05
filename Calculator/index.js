
function calculate() {
    let display = document.getElementById("display");
    try {
        let result = eval(display.value);
        display.value = result;
        return result;
    } catch (error) {
        display.value = "Error";
        return null;
    }
}





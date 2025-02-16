function runCode() {
    let num1 = 5;
    let num2 = 10;

    console.log("Before addition");

    // Set a breakpoint here
    let result = addNumbers(num1, num2);

    console.log("After addition");
    console.log("Result:", result);
}

function addNumbers(a, b) {
    // Set a breakpoint here to inspect values of a and b
    return a + b;
}

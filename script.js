//your JS code here. If required.
document.getElementById("btn").addEventListener("click", () => {
    // Get the input value from the input field
    const inputValue = Number(document.getElementById("ip").value);

    // Create the initial promise that resolves after 2 seconds with the input value
    new Promise((resolve, reject) => {
        if (isNaN(inputValue)) {
            reject("Please enter a valid number.");
        } else {
            setTimeout(() => {
                resolve(inputValue);
            }, 2000);
        }
    })
    .then((number) => {
        document.getElementById("output").textContent = `Result: ${number}`;
        return new Promise((resolve) => {
            setTimeout(() => resolve(number * 2), 1000); // Multiply by 2
        });
    })
    .then((number) => {
        document.getElementById("output").textContent = `Result: ${number}`;
        return new Promise((resolve) => {
            setTimeout(() => resolve(number - 3), 1000); // Subtract 3
        });
    })
    .then((number) => {
        document.getElementById("output").textContent = `Result: ${number}`;
        return new Promise((resolve) => {
            setTimeout(() => resolve(number / 2), 1000); // Divide by 2
        });
    })
    .then((number) => {
        document.getElementById("output").textContent = `Result: ${number}`;
        return new Promise((resolve) => {
            setTimeout(() => resolve(number + 10), 1000); // Add 10
        });
    })
    .then((finalResult) => {
        document.getElementById("output").textContent = `Final Result: ${finalResult}`;
    })
    .catch((error) => {
        document.getElementById("output").textContent = `Error: ${error}`;
    });
});

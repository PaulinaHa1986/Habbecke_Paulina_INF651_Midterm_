// Question 1: Write a JavaScript function called reverseString that takes a string as
an argument and returns the reversed version of the string.
function reverseString(str) {
    return str.split("").reverse().join("");
}
reverseString("");
// Question 2: Write a JavaScript function called calculateBMI that takes a person's
weight (in kilograms) and height (in meters) as arguments and returns their body
mass index (BMI).
function calculateBMI() {
    /* Getting input from user into height variable.
    Input is string so typecasting is necessary. */
    let height = parseInt(document
            .querySelector("#height").value);
    /* Getting input from user into weight variable.
    Input is string so typecasting is necessary.*/
    let weight = parseInt(document
            .querySelector("#weight").value);
 
    let result = document.querySelector("#result");
    // Checking the user providing a proper
    // value or not
    if (height === "" || isNaN(height))
        result.innerHTML = "Provide a valid Height!";
    else if (weight === "" || isNaN(weight))
        result.innerHTML = "Provide a valid Weight!";
    // If both input is valid, calculate the bmi
    else {
        // Fixing upto 2 decimal places
        let bmi = (weight / ((height * height)
                            / 10000)).toFixed(2);
        // Dividing as per the bmi conditions
        if (bmi < 18.6) result.innerHTML =
            `Under Weight : <span>${bmi}</span>`;
        else if (bmi >= 18.6 && bmi < 24.9)
            result.innerHTML =
                `Normal : <span>${bmi}</span>`;
        else result.innerHTML =
            `Over Weight : <span>${bmi}</span>`;
    }
}
// Question 3: Write a JavaScript function called capitalizeWords that takes a
sentence as an argument and returns the sentence with each word capitalized.
function capitalizeWords(str) {
    return str.replace(/\w\S*/g, function(txt){
        return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
    });
}

"use strict";

window.onload = init;


// Input --------------------

const principleTextbox = document.getElementById("principleTextbox");
const interestRateTextbox = document.getElementById("interestRateTextbox");
const loanLengthYearsTextbox = document.getElementById("loanLengthYearsTextboc");

// button -----------------------
const calculateButton = document.getElementById("calculateButton");
const resetButton = document.getElementById("resetButton");

// output-----------------------

const outputTextbox = document.getElementById("outputTextbook");

function init() {
    
    
    calculateButton.onclick = onCalculatorButtonClicked;
    resetButton.onclick = onResetButtonClicked;
}




function onCalculatorButtonClicked() {
    // variables
    let monthlyPayment;
    let totalInterest;
    let equation1;
     let equation2;
}

// variables from values----------------------------------
let principleLoanAmount = Number(principleTextbox.value);
let interestRate = Number(interest.value) / 100;
let monthlyInterestRate = interestrate / 12;
let loanLengthMonths = Number(loanLength.value) * 12;



// input number---------------------------------
if (Number.isNaN(principleLoanAmount) || Number.isNaN(interestRate) || Number.isNaN(loanLength)) {


// for error message for output

outputElement.value = "Please make sure you enter numbers in all fields";
outputElement.setAttribute("class", "form-control-plaintext text-danger");


}
else{
    equation1 = monthlyInterestRate * (1 + monthlyInterestRate) ** loanLengthMonths;
    equation2 = ((1 + monthlyInterestRate) ** loanLengthMonths) - 1;
    monthlyPayment = principleloanAmount * (equation1 / equation2);
    totalInterest = (monthlyPayment * loanLengthMonths) - principleLoanAmount;
    outputElement.setAttribute("class", "form-control-plaintext");
    outputElement.value = 'A $'${principleAmount} "loan at" ${interestRate * 100}% "interest for" ${loanLengthMonths / 12} 'years would have a $'${monthlyPayment.tofixed(2)};
}

// clears all fields----------------------------
function onResetButtonClicked(){
    principleTextbox.value = "";
    interestRateTextbox.value = "";
    loanLengthYearsTextbox.value = "";
    outputTextbox.value = "";
}
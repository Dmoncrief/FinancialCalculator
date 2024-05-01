window.onload = init;

// Input --------------------

const principleTextbox = document.getElementById("principleTextbox");
const interestRateTextbox = document.getElementById("interestRateTextbox");
const loanLengthYearsTextbox = document.getElementById(
  "loanLengthYearsTextbox"
);

// button -----------------------
const calculateButton = document.getElementById("calculateButton");
const resetButton = document.getElementById("resetButton");

// output-----------------------

const outputTextbox = document.getElementById("outputTextbox");

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

  // variables from values----------------------------------
  let principleLoanAmount = Number(principleTextbox.value);
  let interestRate = Number(interestRateTextbox.value) / 100;
  let monthlyInterestRate = interestRate / 12;
  let loanLengthMonths = Number(loanLengthYearsTextbox.value) * 12;

  // input number---------------------------------
  if (
    Number.isNaN(principleLoanAmount) ||
    Number.isNaN(interestRate) ||
    Number.isNaN(loanLengthMonths)
  ) {
    // for error message for output

    outputElement.value = "Please make sure you enter numbers in all fields";
    outputElement.setAttribute("class", "form-control-plaintext text-danger");
  } else {
    equation1 =
      monthlyInterestRate * (1 + monthlyInterestRate) ** loanLengthMonths;
    equation2 = (1 + monthlyInterestRate) ** loanLengthMonths - 1;
    monthlyPayment = principleLoanAmount * (equation1 / equation2);
    totalInterest = monthlyPayment * loanLengthMonths - principleLoanAmount;
    outputTextbox.setAttribute("class", "form-control-plaintext");
    outputTextbox.value =
      `A $${principleLoanAmount} loan at ${interestRate * 100}% interest for ${loanLengthMonths / 12} years would have a $ ${monthlyPayment.toFixed(2)}`;
  }
}
// clears all fields----------------------------
function onResetButtonClicked() {
  principleTextbox.value = "";
  interestRateTextbox.value = "";
  loanLengthYearsTextbox.value = "";
  outputTextbox.value = "";
}

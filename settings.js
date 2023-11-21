'Use strict'

var AgeInput = document.querySelector(".age-input-field");
const GenderInput = document.querySelector(".gender-input-field");
var HeightInput = document.querySelector(".height-input-field");
var WeightInput = document.querySelector(".weight-input-field");
var CalcButton = document.querySelector(".calc");
var Result = document.querySelector(".Result");
var BMI, height, weight, age, gender;

CalcButton.addEventListener("click", () =>{

    age = AgeInput.value;
    gender = GenderInput.value;
    height = HeightInput.value;
    weight = WeightInput.value;
    
    if (GenderInput.value == 1) {
        BMI = ((age * height) / weight) * 4;
        Result.innerText = BMI;
        // alert(BMI)
    }
    else if (GenderInput.value == 2) {
        BMI = ((age * height) / weight) * 0;
        Result.innerText = BMI;
        // alert(BMI)
    }

});

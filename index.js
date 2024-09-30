// create your function below this line.

function bmiCalculator(weight, height) {
    var bmi = weight / (height * height);
    return bmi;
}
var bmi = bmiCalculator(65, 1.8); 
console.log(bmi)

/* if my weight is 65kf and my height is 1.8m, I should be able to call your function like this:



bmi should equal around 20 in this case. */


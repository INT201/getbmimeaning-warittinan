const { template } = require('@babel/core')

function calculateBMI(weight, height) {
  calBMI=weight/(height*height)
  return calBMI
}
function getBMIMeaning(calculateBMI) {
  if (calculateBMI <18.5) {
     return 'Underweight'
  }else if (calculateBMI >25.0) {
    return "Overweight"
  } else{
    return "Normal weight"
  } 
}
module.exports = getBMIMeaning


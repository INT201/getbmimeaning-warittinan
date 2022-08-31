const { template } = require('@babel/core')

function calculateBMI(weight, height) {
  return weight/(height*height)

}
function getBMIMeaning(weight, height) {
  if (calculateBMI(weight, height) <18.5) {
     return 'Underweight'
  }else if (calculateBMI(weight, height)>=18.5 && calculateBMI(weight, height)<=25.0) {
    return "Normal weight"
  } else{
    return "Overweight"
  } 
}
module.exports = getBMIMeaning

import BMIService from './bmi.service.ts'

const bodyMassIndex = BMIService
  .getIndex(76, 1.71)
  .toFixed(2)

console.log(`BMI: ${ bodyMassIndex }`)
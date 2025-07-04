import BMI from './bmi.service.ts'

const bmi = new BMI(76, 1.71)
console.log(`BMI (raw value): ${bmi.value}`)
console.log(`BMI: ${bmi.formattedValue}`)

import {
  assertEquals,
  assertThrows,
} from 'https://deno.land/std@0.203.0/assert/mod.ts'
import BMI from './bmi.service.ts'

Deno.test('BMI.value returns correct BMI for valid weight and height', () => {
  const weight = 76 // kg
  const height = 1.71 // meters
  const expectedBMI = 25.990903183885642
  const bmi = new BMI(weight, height)
  assertEquals(bmi.value, expectedBMI)
})

Deno.test(
  'BMI.formattedValue returns BMI rounded to 2 decimals as string',
  () => {
    const bmi = new BMI(76, 1.71)
    assertEquals(bmi.formattedValue, '25.99')
  }
)

Deno.test('BMI throws error if weight is 0', () => {
  assertThrows(
    () => {
      new BMI(0, 1.75)
    },
    Error,
    'Weight and height must be positive numbers'
  )
})

Deno.test('BMI throws error if height is 0', () => {
  assertThrows(
    () => {
      new BMI(70, 0)
    },
    Error,
    'Weight and height must be positive numbers'
  )
})

Deno.test('BMI throws error if both weight and height are 0', () => {
  assertThrows(
    () => {
      new BMI(0, 0)
    },
    Error,
    'Weight and height must be positive numbers'
  )
})

import { assertEquals } from 'https://deno.land/std@0.203.0/assert/assert_equals.ts'
import BMIService from './bmi.service.ts'

Deno.test(
  'BMIService.getIndex returns correct BMI for valid weight and height',
  () => {
    const weight = 76 // kg
    const height = 1.71 // meters
    const expectedBMI = 26.00482820299668
    const result = BMIService.getIndex(weight, height)
    assertEquals(result, expectedBMI)
  }
)

Deno.test('BMIService.getIndex returns 0 if weight is 0', () => {
  const result = BMIService.getIndex(0, 1.75)
  assertEquals(result, 0)
})

Deno.test('BMIService.getIndex returns 0 if height is 0', () => {
  const result = BMIService.getIndex(70, 0)
  assertEquals(result, 0)
})

Deno.test(
  'BMIService.getIndex returns 0 if both weight and height are 0',
  () => {
    const result = BMIService.getIndex(0, 0)
    assertEquals(result, 0)
  }
)

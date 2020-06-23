export default class BMIService {
  static getIndex(weight: number, height: number): number {
    if (weight && height) {
      return weight / (height * height);
    }
    return 0;
  }
}

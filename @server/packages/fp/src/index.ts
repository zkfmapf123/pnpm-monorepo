class Calculator<T extends number> {
  add(a: T, b: T) {
    return a + b
  }
  min(a: T, b: T) {
    return a - b
  }
  mul(a: T, b: T) {
    return a * b
  }
  div(a: T, b: T) {
    return a / b
  }
}

export const calculator = new Calculator()

// car class with private fields
export class Car {
  #brand
  #model
  constructor (brand, model) {
    this.#brand = brand
    this.#model = model
  }
  getBrand () {
    return this.#brand
  }
  getModel () {
    return this.#model
  }
  static getCarType () {
    return 'The Vailable Cars are vehicles used for transportation.'
  }
}
// electric car class extending car class
export class ElectricCar extends Car {
  #batteryCapacity
  constructor (brand, model, batteryCapacity) {
    super(brand, model)
    this.#batteryCapacity = batteryCapacity
  }
  getBatteryCapacity () {
    return this.#batteryCapacity
  }

  getCarDetails () {
    return `Brand: ${this.getBrand()}, Model: ${this.getModel()}, Battery Capacity: ${this.getBatteryCapacity()}`
  }
}

import { Car, ElectricCar } from './tools.js'

import promptSync from 'prompt-sync'
const prompt = promptSync()
// create instances of Car and ElectricCar
const myCar = new Car('Toyota', 'Corolla')
const myElectricCar = new ElectricCar('Tesla', 'Model 3', '75 kWh')
// display car details
console.log(myCar.getBrand()) // Toyota
console.log(myCar.getModel()) // Corolla
console.log(Car.getCarType()) // Cars are vehicles used for transportation.
console.log(myElectricCar.getCarDetails()) // Brand: Tesla, Model: Model 3, Battery Capacity: 75 kWh
// prompt sync

const getCardetails = () => {
  const brand = prompt('Enter the brand of the electric car: ')
  const model = prompt('Enter the model of the electric car: ')
  const batteryCapacity = prompt(
    'Enter the battery capacity of the electric car: '
  )
  console.log(brand, model, batteryCapacity)
}
// getCardetails()
// Deposit money
const deposiMoney = () => {
  while (true) {
    const input = prompt('Enter amount to deposit: ')
    const amount = parseFloat(input)
    if (isNaN(amount) || amount <= 0) {
      console.log('Invalid amount. Please enter a positive number.')
    } else {
      console.log(`Successfully deposited $${amount.toFixed(2)}`)
      return amount
    }
  }
}
// deposiMoney()
// Withdraw money
const withdrawMoney = () => {
  while (true) {
    const input = prompt('Enter amount to withdraw: ')
    const amount = parseFloat(input)
    if (isNaN(amount) || amount <= 0) {
      console.log('Invalid amount. Please enter a positive number.')
    } else {
      console.log(`Successfully withdrew $${amount.toFixed(2)}`)
      return amount
    }
  }
}
withdrawMoney()

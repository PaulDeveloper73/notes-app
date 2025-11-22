// usage of design mode
// document.designMode = 'on' // Enable design mode for the document
// Now you can edit the content of the page directly in the browser

import { user } from './process'

// Fetch data using Promises
const myBtn = document.getElementById('myBtn')
myBtn.addEventListener('click', () => {
  copyTextToClipboard('https://google.com/?s=search')
  alert('URL copied to clipboard!')
})

const copyTextToClipboard = text => {
  navigator.clipboard.writeText(text)
}
// Hide element on button click
const hideBtn = document.querySelector('#hideBtn button')
hideBtn.addEventListener('click', () => {
  const hideBtn = document.getElementById('hideBtn')
  hideBtn.style.opacity = '0'
})
hideBtn.addEventListener('transitionend', () => {
  const hideBtn = document.getElementById('hideBtn')
  hideBtn.style.display = 'none'
})
// Dynamic values
const dynamicValue = 42
const UserObj = {
  id: 1,
  name: 'paul',
  ['age_' + dynamicValue]: 30
}

console.table(JSON.stringify(UserObj))

// JS Class
class Person {
  constructor (_name, _stuClass, _dob) {
    this.name = _name
    this.stuClass = _stuClass
    this.dob = _dob
  }
  static calculateAge (dob) {
    const birthDate = new Date(dob)
    const ageDifMs = Date.now() - birthDate.getTime()
    const ageDate = new Date(ageDifMs)
    return Math.abs(ageDate.getUTCFullYear() - 1970)
  }
  displayInfo () {
    console.log(
      `Name: ${this.name}, Class: ${this.stuClass}, Age: ${Person.calculateAge(
        this.dob
      )}`
    )
  }
}
class Dept extends Person {
  constructor (name, stuClass, dob, departmentName) {
    super(name, stuClass, dob)
    this.departmentName = departmentName
  }
  displayInfo () {
    super.displayInfo()
    console.log(`Department: ${this.departmentName}`)
  }
}
const stu = new Person('Paul', 'A1', '1993-06-26')
stu.displayInfo()
const stu2 = new Dept('Joshua', 'B2', '2023-12-12', 'Mathematics')
stu2.displayInfo()

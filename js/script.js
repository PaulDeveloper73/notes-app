console.log(Math.sqrt(36))
const num1 = 23
const num2 = 34
console.log(num1 + num2)
console.log('Iam a software developer'.length)
Math.ceil()
Math.floor()
Math.trunc()
Math.sqrt()

const myString = '78.09AB'
console.log(Number(myString)) //NAN
// console.log(myString.lastIndexOf("BC"))
console.log(Number.parseFloat(myString).toFixed(3))
console.log('////////////////')
const x = 10
for (let index = 0; index < 10; index++) {
  console.log(Math.floor(Math.random() * 10) + 1)
}
// const myName="Kiskaye Paul".trim();
// const nameIndex= Math.floor(Math.random()*myName.length)+1;
// console.log(nameIndex)
// console.log(myName.charAt(nameIndex))

// const studentClass = prompt("Enter your class");

// if (studentClass !== null) {
//     if (studentClass.trim().length > 0) {
//     alert("Your class is: " + studentClass);

//     }
//     else{
//         alert("Please enter your class");
//     }

// }
// else{
//     alert("Your quit the app")
// }

const studentName = 'Joshua Mununuzi'
let counter = 0
let myLetter
while (counter < studentName.length) {
  myLetter = studentName[counter]
  console.log(myLetter)
  if (counter === 2) {
    counter += 4
    continue
  }
  if (counter === 10) {
    console.log('/////////////////')
    break
  }

  counter++
}
// Trim the username form the email
const getUsernameFromEmail = emailaddress => {
  return emailaddress.slice(0, emailaddress.indexOf('@'))
}
console.log(getUsernameFromEmail('magezi@gmail.com'))
// Turn to upper case of username

const username = getUsernameFromEmail('mJosHUA@gmail.com')
const getToUppercaseUsername = username => {
  return username.charAt(0).toUpperCase() + username.toLowerCase().slice(1)
}

console.log(' Hello 👋: ' + getToUppercaseUsername(username))
console.log('Welcome to the Fast Money Transfer System!!')
// Dealing with arrays
//! console.clear()
const ArrayA = ['A', 'B', 'C', 'D']
const ArrayB = ['E', 'F', 'G', 'H']
const ArrayC = ArrayA.concat(ArrayB)
// USING SPREAD OPERATOR
const ArrayD = [...ArrayA, ...ArrayB]
console.log(ArrayC)
console.log(ArrayC.indexOf('G'))
console.log('REMOVED ----' + ArrayD.unshift('34')) // add at the start
console.log(ArrayD)
// console.log("REMOVED ----" + ArrayD.push("90")) // add at the end
console.log('REMOVED ----' + ArrayD.splice(4, 1))
console.log(ArrayD)
console.log('REMOVED ----' + ArrayD.pop())
console.log(ArrayD) // new array after removing last element
console.log(ArrayD.slice(1, ArrayD.indexOf('G'))) // slicing from index 1 to index of G

console.log('////////LOOPING THROUGH AN ARRAY///////')
for (let index = 0; index < ArrayD.length; index++) {
  console.log(ArrayD[index])
}
console.log('////////USING FOR OF LOOP///////')
for (const element of ArrayD) {
  console.log(element)
}
console.log('////////USING FOREACH LOOP///////')
ArrayD.forEach((element, index) => {
  console.log(`Element at index ${index} is ${element}`)
})
// Find even numbers in an array
const numberArray = [12, 23, 34, 45, 56, 67, 78, 89, 90, 91, 92]
const evenNumbers = []
numberArray.forEach(num => {
  if (num % 2 === 0) {
    evenNumbers.push(num)
  }
})
const evenNumber11 = [...evenNumbers]
console.log(evenNumber11)
console.log(evenNumbers.sort((a, b) => b - a)) // sorting in descending order
const evenNumbers2 = numberArray.filter(num => num % 2 === 0)

console.log('Array of even numbers is here: ' + evenNumbers)
console.log(evenNumbers2)
// Map method
const squaredNumbers = numberArray.map(num => num * num)
console.log('Squared numbers are:__________________ ')
console.log(`${squaredNumbers}`)
// Reduce method
const sumOfNumbers = squaredNumbers.reduce(
  (accumulator, currentValue) => accumulator + currentValue,
  0
)
console.log('The sum of all numbers is: ' + sumOfNumbers)
// Find the maximum number in an array
const maxNumber = squaredNumbers.reduce(
  (max, current) => (current > max ? current : max),
  squaredNumbers[0]
)
console.log('The maximum number is: ' + maxNumber)
// Find the minimum number in an array
const minNumber = squaredNumbers.reduce(
  (min, current) => (current < min ? current : min),
  squaredNumbers[0]
)
console.log('The minimum number is: ' + minNumber)
// Find the average of numbers in an array
const averageNumber = sumOfNumbers / squaredNumbers.length
console.log('The average number is: ' + averageNumber)
// Find the frequency of each number in an array
const frequency = {}
squaredNumbers.forEach(num => {
  frequency[num] = (frequency[num] || 0) + 1
})
console.log('The frequency of each number is: ' + JSON.stringify(frequency))
// Find unique numbers in an array
const uniqueNumbers = [...new Set(squaredNumbers)]
console.log('The unique numbers are: ' + uniqueNumbers)
// Sorting an array of objects
const students = [
  { name: 'Alice', age: 23 },
  { name: 'Bob', age: 21 },
  { name: 'Charlie', age: 22 },
  { name: 'David', age: 24 }
]
students.sort((a, b) => a.age - b.age)
console.log('Students sorted by age: ' + JSON.stringify(students))
// Find a student by name
const studentNameToFind = 'Charlie'
const foundStudent = students.find(
  student => student.name === studentNameToFind
)
console.log('Found student: ' + JSON.stringify(foundStudent))
// Check if all students are above 20
const allAbove20 = students.every(student => student.age > 20)
console.log('Are all students above 20? ' + allAbove20)
// Check if there is any student below 22
const anyBelow22 = students.some(student => student.age < 22)
console.log('Is there any student below 22? ' + anyBelow22)
// Flattening an array of arrays
const arrayOfArrays = [
  [1, 2],
  [3, 4],
  [5, 6]
]
const flattenedArray = arrayOfArrays.flat()
console.log('Flattened array: ' + flattenedArray)
// Joining array elements into a string
const fruits = ['Apple', 'Banana', 'Cherry']
const fruitString = fruits.join(', ')
console.log('Fruit string: ' + fruitString)
// Splitting a string into an array
const colorsString = 'Red,Green,Blue,Yellow'
const colorsArray = colorsString.split(',')
console.log('Colors array: ' + colorsArray)
// Finding the index of an object in an array
const indexOfBob = students.findIndex(student => student.name === 'Bob')
console.log('Index of Bob: ' + indexOfBob)
// Reversing an array
const reversedFruits = [...fruits].reverse()
console.log('Reversed fruits: ' + reversedFruits)
// Filling an array with a specific value
const filledArray = new Array(5).fill('Hello')
console.log('Filled array: ' + filledArray)
// Checking if an array includes a specific value
const hasBanana = fruits.includes('Banana')
console.log('Does the fruits array include Banana? ' + hasBanana)
// Creating an array from a string
const word = 'JavaScript'
const charArray = Array.from(word)
console.log('Character array: ' + charArray)
// Finding the length of the longest word in an array
const wordsArray = ['JavaScript', 'is', 'awesome']
const longestWord = wordsArray.reduce(
  (longest, current) => (current.length > longest.length ? current : longest),
  ''
)
console.log('The longest word is: ' + longestWord)
const myNumber = [
  23, 45, 67, 89, 12, 34, 56, 98, 40, 38, 67, 55, 66, 56, 67, 29
]
const filteredNumbers = myNumber.filter(num => num > 40)
console.log('Filtered numbers greater than 40: ' + filteredNumbers)
// Frequency of numbers in an array
const numberFrequency = {}
myNumber.forEach(num => {
  numberFrequency[num] = (numberFrequency[num] || 0) + 1
})
console.log('Number frequency: ' + JSON.stringify(numberFrequency))
// Sorting numbers in ascending order
const sortedNumbers = myNumber.slice().sort((a, b) => a - b)
console.log('Sorted numbers in ascending order: ' + sortedNumbers)
console.log(myNumber)
console.log(Array.from('Hello'))
const myCount = [34, 45, 56, 67, 78, 90, 12, 34, 45, 6, 789, 90]
const sumOfMyCount = myCount.reduce(
  (accumulator, currentValue) => accumulator + currentValue,
  0
)
console.log('The sum of myCount array is: ' + sumOfMyCount)
const sumOfUniqueNumbers = [...new Set(myCount)].reduce(
  (accumulator, currentValue) => accumulator + currentValue,
  0
)
console.log(
  'The sum of unique numbers in myCount array is: ' + sumOfUniqueNumbers
)
const counFequency = {}
myCount.forEach(num => {
  counFequency[num] = (counFequency[num] || 0) + 1
})
console.log(counFequency)
// Find the second largest number in an array
const uniqueSortedNumbers = [...new Set(myCount)].sort((a, b) => b - a)
const secondLargestNumber = uniqueSortedNumbers[0]
console.log(uniqueSortedNumbers)
console.log('The second largest number is: ' + secondLargestNumber)
// Find the second smallest number in an array
const secondSmallestNumber = [...new Set(myCount)].sort((a, b) => a - b)[1]
console.log('The second smallest number is: ' + secondSmallestNumber)

// JS Ojbects
const myObject = {
  name: 'Kiskaye Paul',
  age: 29,
  profession: 'Software Developer',
  skills: ['JavaScript', 'HTML', 'CSS', 'React', 'Node.js'],
  address: {
    street: '123 Main St',
    city: 'Kampala',
    country: 'Uganda'
  },
  greet: function () {
    console.log(`Hello, my name is ${this.name} and I am a ${this.profession}.`)
  }
}
const student1 = Object.create(myObject)
student1.name = 'Alice'
student1.age = 23
student1.profession = 'Student'
student1.greet()
const student2 = Object.create(myObject)

student2.name = 'Bob'
student2.age = 25
student2.profession = 'Engineer'
student2.greet()
console.log(student2.name)
console.log(student2.greet())
console.log(student1.skills[0])
console.log(Object.entries(student1))
console.log(Object.keys(student2))
console.log(Object.values(student1))

const band = {
  bandName: 'The Rockers',
  genre: 'Rock',
  members: 5,
  albums: ['Rock On', 'Live Loud', 'Rock Legends'],
  getBandInfo: function () {
    return `${this.bandName} is a ${this.genre} band with ${this.members} members.`
  }
}
console.log(band.getBandInfo())
console.log(band.albums[1])
band.members = 6
console.log(band.getBandInfo())

band.albums.push("God's Army")
console.log(band.albums)
// Destructuring objects
const { bandName, genre, members, albums } = band
console.log(`Band Name: ${bandName}`)

console.log(`Genre: ${genre}`)
console.log(`Members: ${members}`)
console.log(`Albums: ${albums.join(', ')}`)

for (const element in albums) {
  console.log(albums[element])
}
const getAllRockAlbums = band => {
  return band.albums.filter(album => album.toLowerCase().includes('rock'))
}
getAllRockAlbums(band).forEach(album => {
  console.log('Rock Album: ' + album)
})

// JSON Manipulation
const jsonString = `{
    "company":"Tech Solutions",
    "location":"Silicon Valley",
    "employees":[
        {"name":"Alice","position":"Developer"},
        {"name":"Bob","position":"Designer"},
        {"name":"Charlie","position":"Manager"} 
    ]
}`
const jsonObject = JSON.parse(jsonString)
console.log('Company: ' + jsonObject.company)
console.log('Location: ' + jsonObject.location)

jsonObject.employees.forEach(employee => {
  console.log(`Employee Name: ${employee.name}, Position: ${employee.position}`)
})
jsonObject.employees.push({ name: 'David', position: 'Intern' })
const updatedJsonString = JSON.stringify(jsonObject, null, 2)
console.log('Updated JSON String: ' + updatedJsonString)

// Find all albums with the word "Rock" in the title
const rockAlbums = getAllRockAlbums(band)
console.log("Albums with 'Rock' in the title: " + rockAlbums)
// Javascript Errors Error Handling
const myVariable = 'James Bond'
console.log(myVariable)

const divideNumbers = (a, b) => {
  try {
    if (b === 0) {
      throw new Error('Division by zero is not allowed.') // Throwing a custom error
    }
    return a / b
  } catch (error) {
    console.error('Error: ' + error.message)
    return null
  }
}
console.log('Division Result: ' + divideNumbers(10, 2))
console.log('Division Result: ' + divideNumbers(10, -2))
// Object..create(null) // this a syntax error
// myname = 'Kiskaye Paul' // This will throw an error in strict mode
// console.log(myname) // reference error
// const Discount_ = 45600
// Discount_ = 3400 // resulting to type error
// console.log(Discount_)// Type error: re-Assignment to constant variable.

//  Make an error manually
const makeError = () => {
  let x = 1
  while (x <= 5) {
    try {
      if (x % 2 !== 0) {
        throw new Error('this an oddnumber')
      }
      console.log('Even Number: ' + x)
    } catch (error) {
      console.error('Error Occurred: ' + error.message)
    } finally {
      console.log('Finally block executed.')
      x++
    }
  }
}
makeError()
// console.clear()

// DOM Manipulations
const view = document.getElementById('view')
const view3 = document.querySelector('.view3')
const view1 = document.querySelector('.view1')

const view2 = document.querySelector('.view2')
view.style.backgroundColor = '#fff'
view.style.padding = '20px'
view.style.borderRadius = '10px'

// Change background color of even divs in view2 to dodgerblue

const view2EvenNodes = view2.querySelectorAll('div:nth-child(even)')
view2EvenNodes.forEach(node => {
  node.style.backgroundColor = 'dodgerblue'
  node.style.color = 'white'
  node.textContent = 'even div'
})
const view3EvenNodes = view3.querySelectorAll('div:nth-child(odd)')
view3EvenNodes.forEach(node => {
  node.style.backgroundColor = 'orange'
  node.style.color = 'white'
  node.textContent = 'odd div'
})
// Clear node in view1 and create new 12 divs
view1.innerHTML = ''
for (let i = 1; i <= 12; i++) {
  const newDiv = document.createElement('div')
  newDiv.textContent = `Div ${i}`
  newDiv.style.border = '1px solid orange'
  newDiv.style.padding = '10px'
  newDiv.style.borderRadius = '5px'
  newDiv.style.margin = '5px'
  view1.appendChild(newDiv)
}
console.log(view3.childNodes)
// select the even nodes and change their background color
view1.childNodes[5].style.backgroundColor = 'purple'
view1.childNodes[5].style.color = 'white'
view1.childNodes[9].style.backgroundColor = 'purple'
view1.childNodes[9].style.color = 'white'

const premierStaff = {
  name: 'Kiskaye Paul',
  age: 29,
  position: 'Software Developer'
}
console.log('welcome to tab out')
console.table(JSON.stringify(premierStaff))

// Task
// TODO create an array of numbers with atleast 3 repetitions of some numbers and find the highest frequency number in the array
const numbersArray = [
  12, 23, 34, 45, 12, 56, 67, 78, 89, 90, 23, 12, 34, 45, 23, 23
]
const numberFreq = {}
numbersArray.forEach(num => {
  numberFreq[num] = (numberFreq[num] || 0) + 1
})
let highestFreqNum = numbersArray
let highestFreqCount = numberFreq[highestFreqNum]
for (const num in numberFreq) {
  if (numberFreq[num] > highestFreqCount) {
    highestFreqNum = Number(num)
    highestFreqCount = numberFreq[num]
  }
}
console.log(
  `The number with the highest frequency is ${highestFreqNum} with a count of ${highestFreqCount}`
)
const sortedArray = numbersArray.slice().sort((a, b) => b - a)
console.log(sortedArray)
console.log(numbersArray)
// Javascrip event listners
document.addEventListener('DOMContentLoaded', () => {
  initApp()
  userFormSubmit()
})
const initApp = () => {
  console.log('App Initialized')
  const menu = document.querySelector('#menu')
  const h1 = menu.querySelector('h1')
  menu.addEventListener('click', event => {
    const menuText = event.target.textContent
    if (menuText === 'Menu') {
      event.target.textContent = 'Menu Setting Loading...'
    } else {
      event.target.textContent = 'Menu'

      alert('Menu clicked!')
    }
  })
  h1.addEventListener('mouseover', () => {
    h1.classList.add('menu-hover')
    // alert('You hovered over the Menu header!')
  })
  h1.addEventListener('mouseout', () => {
    h1.classList.remove('menu-hover')
    // alert('You left the Menu header!')
  })
}
// User form

const userFormSubmit = () => {
  const userForm = document.querySelector('#userform')
  userForm.addEventListener('submit', event => {
    event.preventDefault()
    const username = document.querySelector('#username')
    const usernameText = username.value.trim()
    if (usernameText.length <= 3) {
      alert('Please enter yourfull username')
      username.focus()
      return
    }
    alert('Welcome ' + username.value)
    username.value = ''
    username.focus()
    console.log('Form submitted')
  })
}
// * Web storage API

const staffObject = {
  name: 'Kiskaye Paul',
  age: 29,
  hobbies: ['Reading', 'Traveling', 'Coding'],
  profession: 'Software Developer',
  greet: function () {
    console.log(`Hello, my name is ${this.name} and I am a ${this.profession}.`)
  }
}

const storeObj = localStorage.setItem(
  'myStaffStore',
  JSON.stringify(staffObject)
)
const parsedObject = JSON.parse(localStorage.getItem('myStaffStore'))
console.log(parsedObject)
console.log('object')

// fecth all user from
const fetchAllUsers = async () => {
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/users')
    if (!response.ok) {
      throw new Error('Network response was not ok')
    }
    const users = await response.json()
    // add data to the DOM
    const userList = document.getElementById('userList')
    users.forEach(user => {
      const listItem = document.createElement('li')
      listItem.innerHTML = `${user.name}&nbsp| <span style="color: gray;padding-left:20px">${user.email}</span> &nbsp| ${user.phone}&nbsp| ${user.address.city}`
      userList.appendChild(listItem)
    })
    console.log(users)
  } catch (error) {
    console.error('Error fetching users:', error)
  } finally {
    console.log('Fetch attempt finished.')
  }
}
fetchAllUsers()

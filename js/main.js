import compressImg, { appLoaded } from './process.js'
import { editImg, deleteImg } from './process.js'
import { user } from './process.js'
import { posts } from './posts.js'
import { studentsAge as stu } from './es6.js'
import { Department as Dept } from './es6.js'
console.log(compressImg())
console.log(editImg())
console.log(deleteImg())
// User object
const userObj = new user('Kisakye', 'paul@gmail.com')
console.log(userObj._email)
console.log(userObj.greeting())

// higher order functions
const higherOrderFunction = () => {
  const numbers = [1, 2, 3, 4, 5]
  const squaredNumbers = numbers.map(number => number * number)
  return squaredNumbers // [1, 4, 9, 16, 25]
}
console.log(higherOrderFunction())
console.log('Loading app...')

posts.forEach(post => {
  console.log(post.title)
})
const filteredPosts = posts.filter(post => post.userId === 1)
console.log(filteredPosts)
const mappedPosts = filteredPosts.map(post => post.id * 10)
console.log(mappedPosts)

const reducedPosts = mappedPosts.reduce((acc, post) => {
  return acc + post
}, 0)
console.log(reducedPosts)
// task
const numbers = [1, 2, 3, 4, 5]
const sum = numbers.reduce((acc, number) => {
  return acc + number
}, 0)
console.log(sum)

const studentList = {
  students: [],
  addStudent: function (name, age) {
    this.students.push({ name, age })
  },
  getStudents: function () {
    return this.students
  }
}
studentList.addStudent('Alice', 20)
studentList.addStudent('Bob', 22)
console.log(studentList.getStudents())
// Output: [ { name: 'Alice', age: 20 }, { name: 'Bob', age: 22 } ]

const studentsAge = {
  studentList: [],
  addStudent: function (name, age) {
    this.studentList.push({ name, age })
  },
  getStudentsByAge: function (minAge) {
    return this.studentList.filter(student => student.age >= minAge)
  }
}

studentsAge.addStudent('James', 22)
studentsAge.addStudent('Lily', 56)
studentsAge.addStudent('James', 34)
studentsAge.addStudent('Lillian', 19)
console.log(studentsAge.getStudentsByAge(21))
// Output: [ { name: 'James', age: 22 } ]
console.log(appLoaded)
// Output: [ { name: 'James', age: 22 } ]
localStorage.setItem('studentsAgeStore', JSON.stringify(studentsAge))
const storedStudents = JSON.parse(localStorage.getItem('studentsAgeStore'))
console.log(storedStudents)

//

const myPromise = new Promise((resolve, reject) => {
  const success = true
  if (success) {
    resolve('Promise resolved successfully!')
  } else {
    reject('Promise rejected!')
  }
})

const myNextPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('Data fetched successfully after 3 seconds!')
  }, 3000)
})

myPromise
  .then(message => {
    console.log(message)
  })
  .catch(error => {
    console.error(error)
  })

myNextPromise
  .then(message => {
    console.log(message)
  })
  .catch(error => {
    console.error(error)
  })
// fetch API
const fetchData = () => {
  fetch('https://jsonplaceholder.typicode.com/posts')
    .then(response => response.json())
    .then(data => {
      console.log('Fetched data:', data)
    })
    .catch(error => {
      console.error('Error fetching data:', error)
    })
}
fetchData()
// Async/Await
const fetchUserData = async () => {
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/users')
    const data = await response.json()
    console.log('Async/Await Fetched user data:', data)
  } catch (error) {
    console.error('Error fetching user data:', error)
  }
}
fetchUserData()
// Get useremail list
const getUserEmailList = async () => {
  const response = await fetch('https://jsonplaceholder.typicode.com/users')
  const data = await response.json()
  const userEmail = data.map(user => user.email)
  // showEmailList(userEmail)
  console.log(userEmail)
}
const showEmailList = emailList => {
  console.log(emailList)
}
console.log('Before fetching users')
getUserEmailList()
console.log('After fetching users')
// Fetch random joke from ican api
const fetchRandomJoke = async () => {
  try {
    const response = await fetch('https://icanhazdadjoke.com/', {
      method: 'GET',
      headers: { Accept: 'application/json' }
    })
    if (!response.ok) {
      throw new Error('Network response was not ok')
    }
    const data = await response.json()
    GetRandomJoke(data)

    console.log('Random Joke:', JSON.stringify(data))
  } catch (error) {
    console.error('Error fetching joke:', error)
  }
}
fetchRandomJoke()
// Refresh the joke every after 7 seconds
setInterval(() => {
  fetchRandomJoke()
}, 7000)
function GetRandomJoke (data) {
  const jokeElement = document.querySelector('#random-joke .joke')
  if (jokeElement) {
    jokeElement.textContent = data.joke
  }
}
// Upload apost to the API
const postObject = {
  id: 209,
  title: 'Software Development',
  body: 'Senior Software Developer position',
  userId: 1
}

const getPostURL = () => {
  return 'https://jsonplaceholder.typicode.com/posts'
}
const uploadPost = async postData => {
  try {
    const response = await fetch(getPostURL(), {
      method: 'POST',
      body: JSON.stringify(postData),
      headers: {
        'Content-type': 'application/json; charset=UTF-8'
      }
    })
    const data = await response.json()
    displayUploadedPost(data) // Display the uploaded post
  } catch (error) {
    console.error('Error uploading post:', error)
  }
}
const displayUploadedPost = post => {
  console.log('Post uploaded successfully:', post)
}
uploadPost(postObject)
// Handle form submission to get user email
document.addEventListener('readystatechange', () => {
  if (document.readyState === 'complete') {
    console.log('DOM fully loaded and parsed')
    handleUserEmailForm()
  } else {
    console.error('DOM not fully loaded')
  }
})

const handleUserEmailForm = () => {
  const userEmailForm = document.getElementById('userEmailForm')
  if (userEmailForm) {
    userEmailForm.addEventListener('submit', event => {
      event.preventDefault()
      const emailInput = document.getElementById('email')
      // validate email with regex and process the email input
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

      if (emailInput) {
        const email = emailInput.value
        if (!emailRegex.test(email)) {
          console.error('Invalid email format')
          return
        }
        emailInput.value = ''
        emailInput.focus()
        const displayEmails = document.getElementById('display-emails')
        if (displayEmails) {
          displayEmails.innerHTML += `<p>${email}</p>`
        }

        console.log('Submitted email:', email)
        // You can add further processing of the email here
      }
    })
  }
}
console.log('helloooooooooo' + JSON.stringify(stu, null, 2))
const dept = new Dept('Emma', 'emma@example.com', 'Engineering')
console.log(dept.getName()) // Output: Emma
console.log(dept.getDepartmentName()) // Output: Engineering
// Javascript Tricks
// console.clear()
function* idGenerator () {
  yield 1
  console.log('After the first call')
  yield 2
  console.log('After the second call')
}

const gen = idGenerator()
console.log(gen.next()) // { value: 1, done: false }
console.log(gen.next()) // After the first call { value: 2, done: false }
console.log(gen.next()) // After the second call { value: undefined, done: true }

// object destructuring
const person = {
  firstName: 'Paul',
  lastName: 'Kisakye',
  isAbove18: true,
  age: 30,
  email: 'paul.kisakye@example.com',
  hobbies: {
    like: ['reading', 'traveling', 'coding'],
    dislike: ['spam', 'bugs']
  },
  sayHello: function () {
    console.log(`Hello, my name is ${this.firstName} ${this.lastName}`)
  }
}
const handlePerson = ({
  firstName,
  lastName,
  age,
  email,
  hobbies: { like }
}) => {
  console.log(`Name: ${firstName} ${lastName}`)
  console.log(`Age: ${age}`)
  console.log(`Email: ${email}`)
  console.log(`Hobbies: ${like.join(', ')}`) // Accessing nested array
  const myHobbies = like.map(hobby => hobby.toUpperCase())
  console.log(`My Hobbies in uppercase: ${myHobbies.join(', ')}`)
}
// console.clear()
handlePerson(person)
console.log(`Student is above 18yrs: ${person.isAbove18 ?? false}`)
console.log(person.sayHello?.())
// Output:
// Name: Paul Kisakye
// Age: 30
// Email: paul.kisakye@example.com
// Hobbies: reading, traveling, coding
// More JS Trick
console.time()
for (let index = 0; index < 100; index++) {
  console.count('Hi')
}
console.timeEnd()
// SWITCH CASE USING OBJECT LITERAL
const STATUS = {
  PENDING: 1,
  SUCCESS: 2,
  FAILED: 3
}
function getLoadingStatus (status) {
  switch (status) {
    case STATUS.PENDING:
      console.log('Status is pending')
      break
    case STATUS.SUCCESS:
      console.log('Status is successfull')
      break
    case STATUS.FAILED:
      console.log('Status is failed')
      break

    default:
      console.log('Invalid input')
      break
  }
}

getLoadingStatus(1) // Output: Status is successfull
// * New js trick using objects
function getLoadingStatusObj (status) {
  const statusActions = {
    [STATUS.PENDING]: () => console.log('Status is pending'),
    [STATUS.SUCCESS]: () => console.log('Status is successfull'),
    [STATUS.FAILED]: () => console.log('Status is failed')
  }
  const action = statusActions[status]
  if (action) {
    action()
  }
}

getLoadingStatusObj(STATUS.FAILED) // Output: Status is failed
// ES6 CLASSES AND MODULES

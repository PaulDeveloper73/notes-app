import posts from './master.js'

const displayPosts = async () => {
  const data = await posts()
  const postsContainer = document.getElementById('posts')
  data.forEach(post => {
    const postElement = document.createElement('div')
    postElement.className = 'post'
    postElement.innerHTML += `
            <h2>${post.title}</h2>
            <p>${post.body}</p>
        `
    postsContainer?.appendChild(postElement)
  })
}
displayPosts()

const PersonalInfo = function (fname, lname) {
  this.fname = fname
  this.lname = lname
}
// function prototype
PersonalInfo.prototype.age = 25

PersonalInfo.prototype.displayPosts = function () {
  console.log(`First Name: ${this.fname}, Last Name: ${this.lname}`)
}
console.log(PersonalInfo)
const person1 = new PersonalInfo('John', 'Doe')
PersonalInfo.prototype = {
  age: 45
} // changing prototype object
const person2 = new PersonalInfo('Jane', 'Smith')
console.log(person1) //undefined
console.log(person2) //John
console.log(person1.displayPosts())
console.log(` Person2 age is: ${person2.age}`)
person2.greet = function () {
  console.log(`Hello, my name is ${this.fname} ${this.lname}`)
} // dynamic method addition
// person2.greet() // Hello, my name is Jane Smith
// Handle create note form submission
const handleCreateNoteForm = () => {
  const noteWrapper = document.getElementById('note-wrapper')
  const createNoteBtn = document.getElementById('create-note')
  let notes = document.querySelectorAll('.text-field')

  createNoteBtn.addEventListener('click', event => {
    console.log(createNoteBtn)
    const noteItem = document.createElement('div')
    noteItem.className = 'note-item'
    const param1 = document.createElement('p')
    param1.contentEditable = 'true'
    param1.className = 'text-field'
    // make param1 resizable
    param1.style.resize = 'vertical'
    param1.style.overflow = 'auto'

    const img = document.createElement('img')
    img.src = '../img/del.png'
    img.className = 'delete-note'

    noteItem.appendChild(param1)
    noteItem.appendChild(img)
    noteWrapper.appendChild(noteItem)
  })
  noteWrapper.addEventListener('click', event => {
    const target = event.target
    if (target.tagName === 'IMG' && target.classList.contains('delete-note')) {
      const noteItem = target.parentElement
      noteWrapper.removeChild(noteItem)
      saveNotes()
    } else if (target.tagName === 'P') {
      target.addEventListener('keyup', saveNotes)
    }
  })
  // Handle saving notes to local storage
  const saveNotes = () => {
    localStorage.setItem('notes_store', noteWrapper.innerHTML)
  }
  const loadNotes = () => {
    noteWrapper.innerHTML = localStorage.getItem('notes_store') || ''
  }
  loadNotes()
}
// Add local storege functionality to note app
document.addEventListener('keydown', event => {
  if (event.key === 'Enter') {
    event.preventDefault()
    document.execCommand('insertLineBreak')
  }
})

handleCreateNoteForm()

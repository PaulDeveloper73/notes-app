const studentList = {
  studentList: [],
  addStudent: function (name, age) {
    this.studentList.push({ name, age })
  },
  getStudents: function () {
    return this.studentList
  }
}
studentList.addStudent('Teddy', 20)
studentList.addStudent('Mersy', 22)
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
studentsAge.addStudent('John', 22)
studentsAge.addStudent('Lily', 56)
studentsAge.addStudent('Jackson', 34)

class StaffList {
  constructor (name, email) {
    this.name = name
    this.email = email
  }
  setName (name) {
    this.name = name
  }
  getName () {
    return this.name
  }
}
class Department extends StaffList {
  constructor (name, email, departmentName) {
    super(name, email)
    this.departmentName = departmentName
  }
  setDepartmentName (departmentName) {
    this.departmentName = departmentName
  }
  getDepartmentName () {
    return this.departmentName
  }
}
const dept = new Department('Emma', 'emma@example.com', 'Engineering')
console.log(dept.getName()) // Output: Emma
console.log(dept.getDepartmentName()) // Output: Engineering

export { studentList, studentsAge, StaffList, Department }

// Sets and maps example
const setArray = [1, 2, 2, 3, 4, 4, 5]
const uniqueSet = new Set(setArray)
console.log('Unique Set:', uniqueSet) // Output: Unique Set: Set(5) { 1, 2, 3, 4, 5 }
uniqueSet.add(6)
// uniqueSet.clear()
uniqueSet.delete(3)
console.log(`Size of the unique set is: ${uniqueSet.size}`)
console.log('Set after operations:', uniqueSet) //
// Javascript maps
const studentMap = new Map([
  ['name', 'Paul'],
  ['age', 30]
])
studentMap.set('email', 'paul@example.com')
// studentMap.delete('age')
// studentMap.clear()
console.log('Student Map:', studentMap) // Output: Student Map: Map(3) { 'name' => 'Paul', 'age' => 30, 'email' => 'paul@example.com' }
// padstart and padend
const studeTel = '077_185_964'
const paddedStart = studeTel.padStart(12, '.')
const paddedEnd = studeTel.padEnd(12, 'x')
console.log('Padded Start:', paddedStart) // Output: Padded Start: ...077_185_964
console.log('Padded End:', paddedEnd) // Output: Padded End: 077_185_964xxx

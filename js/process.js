const compressImg = () => {
  return 'Image was compress'
}
const editImg = () => {
  return 'image was edited'
}
const deleteImg = () => {
  return 'Image was deleted'
}
class user {
  constructor (username, email) {
    this._username = username
    this._email = email
  }
  greeting () {
    return `My name is: ${this._username} and email is:"${this._email}`
  }
}
export const appLoaded = 'Application has loaded'
export default compressImg
export { editImg, deleteImg, user }

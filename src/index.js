import { printHello } from './util'

const title = document.getElementById('header')
const button = document.getElementById('button')

button.onclick = () => {
  printHello()
  title.textContent = 'wowzer'
}

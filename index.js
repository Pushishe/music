const icons = document.querySelector('.icons')
const tabs = document.querySelectorAll('.tab')
const add = document.querySelector('.add')
const create = document.querySelector('.Create')

let el = [];
// let tabCopy = tab.outerHTML;
// let createCopy = create.innerHTML;

icons.addEventListener('click', (event) => {
  if (event.target.classList.contains('active')) {
    event.target.classList.remove('active')
    el.pop(event.target)
  } else {
    event.target.classList.add('active')
    el.push(event.target)
  }
  if (el.length > 1) {
    el[0].classList.remove('active')
    el.splice(0, 1)
  }
  if (event.target.classList.contains('row')) {
    event.target.classList.remove('active')
    el.splice(0, 1)
    console.log('You tried to get on row ')
  }
  if (event.target.classList.contains('icons')) {
    event.target.classList.remove('active')
    el.splice(0, 1)
    console.log('You tried to get on icons ')
  }
})

for (let tab of tabs) {
  tab.addEventListener('click', (event) => {
    if (event.target.classList.contains('tab')) {
      return event.target
    }
    if (event.target.classList.contains('number')) {
      return event.target
    }
    if (event.target.classList.contains('scorel')) {
      return event.target
    }
    if (event.target.classList.contains('metalel')) {
      return event.target
    }
    if (event.target.classList.contains('drumel')) {
      return event.target
    }
    if (event.target.classList.contains('bassel')) {
      return event.target
    }
    if (el[0] === undefined) {
      console.log('You have to choose the element')
      console.log(event.target)
      return
    }
    if (event.target.classList.contains('cell')) {
      event.target.innerHTML = el[0].outerHTML
      event.target.firstChild.classList.remove('active')
      console.log('Insert')
    } else if (event.target.alt !== el[0].alt) {
      event.target.innerHTML = el[0].outerHTML
      event.target.firstChild.classList.remove('active')
      event.target.outerHTML = event.target.firstChild.outerHTML
      console.log(event.target)
      console.log('Replaced')
    }
    if (event.target.alt === el[0].alt ) {
      event.target.outerHTML = ''
      console.log('Deleted')
    }
    
  })
}


// add.addEventListener('click', () => {
//   create.innerHTML = create.innerHTML + tabCopy
//   return create.innerHTML
// })
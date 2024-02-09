let showBtn1 = document.querySelector('#showBtn1')
let showBtn2 = document.querySelector('#showBtn2')
let hideBtn1 = document.querySelector('#hideBtn1')
let hideBtn2 = document.querySelector('#hideBtn2')
let passwordInp = document.querySelector('#passwordInp')
let rePasswordInp = document.querySelector('#rePasswordInp')

showBtn1.addEventListener('click',()=>{

showBtn1.style.display = 'none'
hideBtn1.style.display = 'inline-block'
passwordInp.setAttribute('type', 'text')

})

showBtn2.addEventListener('click',()=>{

showBtn2.style.display = 'none'
hideBtn2.style.display = 'inline-block'
rePasswordInp.setAttribute('type', 'text')

})

hideBtn1.addEventListener('click',()=>{

hideBtn1.style.display = 'none'
showBtn1.style.display = 'inline-block'
passwordInp.setAttribute('type', 'password')

})

hideBtn2.addEventListener('click',()=>{

hideBtn2.style.display = 'none'
showBtn2.style.display = 'inline-block'
rePasswordInp.setAttribute('type', 'password')

})
const divElem = document.querySelector('.nigga')

window.addEventListener('touchmove' , (event)=>{
    divElem.innerHTML = `${event}`
})


if (window.innerWidth < 750){
    const navbarElem = document.querySelector('.top-nav')
    window.addEventListener('scroll' , ()=>{
        if(window.scrollY > 250){
            navbarElem.classList.add('scrolledMobile')
        }else{
            navbarElem.classList.remove('scrolledMobile')
        }
    })
}
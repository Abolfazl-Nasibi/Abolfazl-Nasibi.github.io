
if (window.innerWidth < 750){
    const navbarElem = document.querySelector('.top-nav')
    const hamburgerElem = document.querySelector('.hambElem')
    const navbarLinksElem = document.querySelector('.top-nav-links-ul')

    let hambFlag = false;

    window.addEventListener('scroll' , ()=>{
        if(window.scrollY > 250){
            navbarElem.classList.add('scrolledMobile')
            console.log(navbarElem.classList);
        }else{
            navbarElem.classList.remove('scrolledMobile')
        }
    })

    hamburgerElem.addEventListener('click' , ()=>{
        navbarLinksElem.classList.add('active')
        if(!hambFlag){
            navbarLinksElem.style.display = 'flex'
            navbarElem.classList.add('opened')
            hambFlag = true;
        }else{
            navbarLinksElem.style.display = 'none'
            navbarElem.classList.remove('opened')
            hambFlag = false;
        }
    })
}
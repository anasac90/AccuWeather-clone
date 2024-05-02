document.addEventListener('scroll',() => {
    const topbarouter = document.querySelector('#topbarouter');

    if(window.scrollY >0){
        topbarouter.classList.add('scrolled');
    }else{
        topbarouter.classList.remove('scrolled');
    }
})

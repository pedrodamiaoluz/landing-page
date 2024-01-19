
let butmenu = document.querySelector('div.but-abrir-menu-mob')
let menumob = document.querySelector('div.menu-mobile')
let overlay = document.querySelector('div.overlay-menu-mob')

butmenu.addEventListener('click', ()=>{
    menumob.classList.add('abrir_menu')
})

menumob.addEventListener('click', ()=>{
    menumob.classList.remove('abrir_menu')
})

overlay.addEventListener('click', ()=>{
    menumob.classList.remove('abrir_menu')
})
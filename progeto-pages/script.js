
let butmenu = document.getElementById('but-abrir-menu-mob')
let menumob = document.getElementById('menu-mobile')
let overlay = document.getElementById('overlay-menu-mob')

butmenu.addEventListener('click', ()=>{
    menumob.classList.add('abrir_menu')
})

menumob.addEventListener('click', ()=>{
    menumob.classList.remove('abrir_menu')
})

overlay.addEventListener('click', ()=>{
    menumob.classList.remove('abrir_menu')
})
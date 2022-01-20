const $menu=document.querySelector('.menu')
const $menu_Open=document.querySelector('.btnMenu-open')
const $menu_Close=document.querySelector('.btnMenu-close')
$menu_Open.addEventListener('click',()=>{
    $menu.classList.add('menu_open')
})
$menu_Close.addEventListener('click',()=>{
    $menu.classList.remove('menu_open')
})
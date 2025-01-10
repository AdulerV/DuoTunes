let menuItem = document.querySelectorAll('.item-menu');

function selectLink(){
    menuItem.forEach((item)=>
        item.classList.remove('ativo')
    )
    this.classList.add('ativo')
}

menuItem.forEach((item)=>
    item.addEventListener('click', selectLink)
)

// expandir o menu

let btnExp = document.querySelector('#btn-exp')
let menu = document.querySelector('.menu-lateral')

btnExp.addEventListener('click', function(){
    menu.classList.toggle('expandir')
})
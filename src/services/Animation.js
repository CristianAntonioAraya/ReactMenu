

export const MenuAnimation = () => {
    const MenuContainer = document.getElementById('menu')
    toggleMenuIcon(MenuContainer);
}

const toggleMenuIcon = (MenuContainer) => {
    const MenuOpen = document.getElementById('menu-open');
    const MenuClose = document.getElementById('menu-close');
    const Content = document.getElementById('content');
    MenuOpen.addEventListener('click', ()=> {
        MenuContainer.classList.toggle('menu__container-toggle');
        MenuOpen.classList.toggle('menu__icons-toggle');
        MenuClose.classList.toggle('menu__icons-toggle');
        Content.classList.toggle('opacity')
        toggleMenuInfo();
    })
    MenuClose.addEventListener('click', ()=> {
        MenuContainer.classList.toggle('menu__container-toggle');
        MenuOpen.classList.toggle('menu__icons-toggle');
        MenuClose.classList.toggle('menu__icons-toggle');
        Content.classList.toggle('opacity');
        toggleMenuInfo();
    })
}
const toggleMenuInfo = () => {
     document.querySelectorAll(".menu__item-icon").forEach(item => {
        item.classList.toggle('menu__item-icon-toggle');
     })
     document.querySelectorAll('.menu__item-title').forEach(item=>{
        if(item.classList.contains('menu__item-title-toggle')){
            item.classList.toggle('menu__item-title-toggle');
        }else{
        setTimeout(() => {
            item.classList.toggle('menu__item-title-toggle');
        }, 300);
        }
     })
}
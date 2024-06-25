const btnNext = document.querySelector(".next")
const btnBack = document.querySelector('.back')
let container = document.querySelector('.container')
let list = document.querySelector('.container .list')
let thumb = document.querySelector('.container .thumb')



btnNext.onclick = () => moveritensOnclick('next')
btnBack.onclick = () => moveritensOnclick('back')

function moveritensOnclick(type) {

    let listitems = document.querySelectorAll('.list .list-item')
    let thumitems = document.querySelectorAll('.thumb .thumb-item')
    

    if(type === "next") {
        list.appendChild(listitems[0])
        thumb.appendChild(thumitems[0])
        container.classList.add('next')
    } else {
        list.prepend(listitems[listitems.length -1])
        thumb.prepend(thumitems[thumitems.length -1])
        container.classList.add('back')
    }

    setTimeout(() => {
        container.classList.remove('next')
        container.classList.remove('back')
    }, 3000);
}
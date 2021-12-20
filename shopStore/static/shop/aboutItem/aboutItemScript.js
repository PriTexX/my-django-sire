const buttons = document.querySelectorAll('.info-container .shops-buttons-container .buttons .item__btn')

for (button of buttons){
    button.addEventListener('click', (event) => {
        event.target.classList.toggle('active')
    })
}
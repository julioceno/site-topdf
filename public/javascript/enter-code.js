const modal = document.querySelector(".modal-popup")
const popup = document.querySelector(".popup")


const message = (window.location.href).split('?message=')[1]


if (message === "incorrect&code") {
    modal.classList.add('appear-modal')
    popup.classList.add('appear-popup')
}

modal.addEventListener('click', e => {
    const minimize = document.querySelector(".popup")

   if (e.target.classList[0] == "modal-popup" || minimize) {
     modal.classList.remove('appear-modal')
     popup.classList.remove('appear-popup')
   }
})
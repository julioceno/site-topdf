const checkbox = document.getElementById("check")
const password = document.getElementById("password")
const confirmPassword = document.getElementById("confirm-password")
const modal = document.querySelector(".modal-popup")
const popup = document.querySelector(".popup")

function showPassword() {
    if (checkbox.checked) {
        confirmPassword.type="text"
    } else {
        confirmPassword.type="password"
    }
}

function validate(event) {
    if (password.value !== confirmPassword.value) {

        event.preventDefault()

        modal.classList.add('appear-modal')
        popup.classList.add('appear-popup')
    }
}

 // Escondendo o modal e o popup
modal.addEventListener('click', e => {
    const minimize = document.querySelector(".popup")

   if (e.target.classList[0] == "modal-popup" || minimize) {
     modal.classList.remove('appear-modal')
     popup.classList.remove('appear-popup')
   }
})
const checkbox = document.getElementById("check")
const password = document.getElementById("password")

function showPassword() {
    if (checkbox.checked) {
        password.type="text"
    } else {
        password.type="password"
    }
}
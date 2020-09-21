var password = document.getElementById("password")
var username = document.getElementById("username")
function saveData(){
    localStorage.setItem("username", username.value)
    localStorage.setItem("password", password.value)
}

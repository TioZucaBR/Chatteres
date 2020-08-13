username = document.getElementById("username")
password = document.getElementById("password")
if (localStorage.getItem("username") == null){
    return
} else{
    password.remove()
    username.remove()
}
function saveData(){
    localStorage.setItem("username", username.value)
    localStorage.setItem("password", password.value)
    password.remove()
    username.remove()
}
            
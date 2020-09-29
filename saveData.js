var password = document.getElementById("password")
var username = document.getElementById("username")
function saveData(){
    if (sessionStorage.getItem("username") == undefined){
        sessionStorage.setItem("username", username.value)
        sessionStorage.setItem("password", password.value)
        document.getElementsByClassName("auth").remove
    }
    else{
        document.getElementsByClassName("auth").remove
    }
                authaccount = [username.value, password.value]
}
function logOut(){
    Cookies.remove(`selection`)
}

document.getElementById(`logOut`).addEventListener(`click`, logOut);
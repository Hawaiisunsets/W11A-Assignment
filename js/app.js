function cokeButton(){
    Cookies.set(`selection`, `CokeZero`);
}

document.getElementById(`buttonCoke`).addEventListener(`click`, cokeButton);

function ryeButton(){
    Cookies.set(`seclection`, `RyeCoke`);
}

document.getElementById(`buttonRye`).addEventListener(`click`, ryeButton);

function teqButton(){
    Cookies.set(`selection`, `Tequila`);
}

document.getElementById(`buttonTeq`).addEventListener(`click`, teqButton);


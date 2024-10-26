var radio = document.querySelector('.manual__btn')
var cont = 1

document.getElementById('radio1').checked = true

setInterval(() => {
    proximaImg()
}, 7000)

function proximaImg(){
    cont++

    if(cont > 3){
        cont = 1 
    }

    document.getElementById('radio'+cont).checked = true
}
// tady je místo pro náš program

// Úkol na lekci

function ztucnitText () {
    let paragraf = document.querySelector('.odstavec')
    paragraf.style.fontWeight = 'bold'
}

function odtucnitText () {
    let paragraf = document.querySelector('.odstavec')
    paragraf.style.fontWeight = 'normal'
}

/* Změna barvy odstavce na červenou po kliknutí na tlačítko "červený po kliknutí" */

function zmenitBarvuOdstavce() {
    let paragraf = document.querySelector('.odstavec')
    paragraf.classList.toggle('odstavec--cervene')
}

/* Zvětšení písma odstavce o pixel po kliknutí na nové tlačítko "větší po kliknutí" */

/* jen jednorázové zvětšení
function zvetsitPismoOdstavce() {
    let paragraf = document.querySelector('.odstavec')
    paragraf.style.fontSize = '17px'
}
*/

function zvetsitPismoOdstavce() {
    let paragraf = document.querySelector('.odstavec')
    paragraf.classList.toggle('odstavec--vetsi')
}

// přehrávač

function prehraj () {
    let play
    play = document.querySelector ('#audio')
    audio.play()
}

function pauzni() {
    let pause
    pause = document.querySelector ('#audio')
    audio.pause()
}

function volume0() {
    let zvuk
    zvuk = document.querySelector ('#audio')
    audio.volume = 0
}

function volume50(){
    let zvuk 
    zvuk = document.querySelector('#audio')
    audio.volume = 0.5
}

function volume100(){
    let zvuk 
    zvuk = document.querySelector('#audio')
    audio.volume = 1
}

function zresetuj(){
    let zvuk 
    zvuk = document.querySelector('#audio')
    audio.currentTime = 0
    audio.play()
}


// odstranění nesouvisejících objektů

let zlutyCtverec = document.querySelector('.zluty')
zlutyCtverec.style.display = 'none'

let zelenyCtverec = document.querySelector('.zeleny')
zelenyCtverec.style.display = 'none'

let obrazekKocka = document.querySelector ('.kocka')
obrazekKocka.style.display = 'none'
const d = document
function imgBebida(str) {
    d.querySelector('.bebida').src = str
}

function cambiarColorFondo(elem) {
    let color = d.querySelector('.pepsi').style.backgroundColor
    if(elem.alt === 'Pepsi 01') color = '#0062be'
    if(elem.alt === 'Pepsi 02') color = '#e60c2c'
    if(elem.alt === 'Pepsi 03') color = '#1e1e1e'
    d.querySelector('.pepsi').style.backgroundColor = color
    d.querySelector('.header').style.backgroundColor = color
    d.querySelector('.logo').classList.add('girar')
    setTimeout( () => {
        d.querySelector('.logo').classList.remove('girar')
    }, 2000)
}

d.addEventListener('click', (e) => {
    if(e.target.matches('.miniatura img')){
        imgBebida(e.target.src)
        cambiarColorFondo(e.target)
    }
})
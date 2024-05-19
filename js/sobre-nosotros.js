const formulario = document.querySelector('.contacto-form');
const nombre = document.getElementById('nombre').value;
const correo = document.getElementById('correo').value;
const tema = document.getElementById('tema').value;
const mensaje = document.getElementById('mensaje').value;

const divError = document.getElementById('mensaje-error');
const divConfirm = document.getElementById('mensaje-confirmacion');
/*function validarForm(e) {
    const nombre = document.getElementById('nombre').value;
    const correo = document.getElementById('correo').value;
    const tema = document.getElementById('tema').value;
    const mensaje = document.getElementById('mensaje').value;

    e.preventDefault();

    if (nombre == '') {
        divError('Nombre obligatorio.');
        return
    } 

    if (correo != correoValido(correo) || correo == '') {
        divError('Correo obligatorio.');
        return
    } 

    if (tema == 0) {
        divError('Por favor seleccione un tema.');
        return
    }
    
    if (mensaje == '') {
        divError('Debe escribir un mensaje.');
        return
    }

    formulario.submit()
}*/
function mensajeError(mensaje) {
    divError.innerText = mensaje;
    divError.style.display = 'inline-block';
}

function mensajeConfirm() {
    divConfirm.innerText = '¡Enviado correctamente!';
    divConfirm.style.display = 'inline-block';
}

function correoValido(x) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(x);
}

console.log('test')

formulario.addEventListener('submit', (e) => {
    e.preventDefault();
    divError.innerText = "";
    divConfirm.innerText = "";
    /*const { nombre, correo, mensaje } = formulario.elementos;*/

    if (nombre == '') {
        mensajeError('Nombre obligatorio.');
        return
    } 

    if (correoValido(correo)) {
        mensajeError('Correo obligatorio.');
        return
    } 

    if (tema == 0) {
        mensajeError('Por favor seleccione un tema.');
        return
    }
    
    if (mensaje == '') {
        mensajeError('Debe escribir un mensaje.');
        return
    }

    mensajeConfirm();
    formulario.reset();
})

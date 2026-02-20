const slider = document.getElementById('slider');
const valorRange = document.getElementById('valorRange');
const outputRange = document.getElementById('outputRange');

slider.addEventListener('input', function() {
    valorRange.textContent = slider.value;
    outputRange.textContent = 'El slider está en ' + slider.value;
});

const campoTexto = document.getElementById('campoTexto');
const outputTexto = document.getElementById('outputTexto');

campoTexto.addEventListener('keyup', function() {
    const texto = campoTexto.value.trim() || '(vacío)';
    outputTexto.textContent = 'Escribiendo: ' + texto;
});

const checkTerminos = document.getElementById('checkTerminos');
const outputCheck = document.getElementById('outputCheck');

checkTerminos.addEventListener('change', function() {
    outputCheck.textContent = checkTerminos.checked ? 'Aceptado' : 'No aceptado';
});

const selectColor = document.getElementById('selectColor');
const outputSelect = document.getElementById('outputSelect');

selectColor.addEventListener('change', function() {
    outputSelect.textContent = 'Color seleccionado: ' + selectColor.value;
});

const radios = document.querySelectorAll('input[name="opcion"]');
const outputRadio = document.getElementById('outputRadio');

radios.forEach(radio => {
    radio.addEventListener('click', function() {
        outputRadio.textContent = 'Selección: ' + this.value;
    });
});

const fechaInput = document.getElementById('fechaInput');
const outputFecha = document.getElementById('outputFecha');

fechaInput.addEventListener('change', function() {
    if (fechaInput.value) {
        const partes = fechaInput.value.split('-');
        const año = partes[0];
        const mes = partes[1];
        const dia = partes[2];
        outputFecha.textContent = `Fecha seleccionada: ${dia}/${mes}/${año}`;
    } else {
        outputFecha.textContent = 'Fecha no seleccionada';
    }
});

const btnContar = document.getElementById('btnContar');
const outputBoton = document.getElementById('outputBoton');
let contadorClics = 0;

btnContar.addEventListener('click', function() {
    contadorClics++;
    outputBoton.textContent = 'Clics: ' + contadorClics;
});

const areaTexto = document.getElementById('areaTexto');
const outputTextarea = document.getElementById('outputTextarea');

areaTexto.addEventListener('input', function() {
    const caracteres = areaTexto.value.length;
    outputTextarea.textContent = `Caracteres: ${caracteres}`;
});
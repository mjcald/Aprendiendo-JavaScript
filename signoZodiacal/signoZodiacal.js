/**
 * @param {Date} fecha
 */
function signoZodiacalv2(fecha) {
    let dia = fecha.getDate()
    let mes = fecha.getMonth()+1 // Enero = 0, Febrero = 1, ...
    
    switch (mes) {
        case 1:
            if (dia>=21)
                return 'Acuario'
            else
                return 'Capricornio'
        case 2:
            if (dia>=19)
                return 'Piscis'
            else
                return 'Acuario'
        case 3:
            if (dia>=20)
                return 'Aries'
            else
                return 'Piscis'
        case 4:
            if (dia>=21)
                return 'Tauro'
            else
                return 'Aries'
        case 5:
            if (dia>=21)
                return 'Géminis'
            else
                return 'Tauro'
        case 6:
            if (dia>=22)
                return 'Cáncer'
            else
                return 'Géminis'
        case 7:
            if (dia>=23)
                return 'Leo'
            else
                return 'Cáncer'
        case 8:
            if (dia>=23)
                return 'Virgo'
            else
                return 'Leo'
        case 9:
            if (dia>=23)
                return 'Libra'
            else
                return 'Virgo'
        case 10:
            if (dia>=23)
                return 'Escorpio'
            else
                return 'Libra'
        case 11:
            if (dia>=23)
                return 'Sagitario'
            else
                return 'Escorpio'
        case 12:
            if (dia>=22)
                return 'Capricornio'
            else
                return 'Sagitario'
    }
}

/**
 * @param {Date} fecha
 */
 function diaNacimiento(fecha) {
    let diasNombre = ['domingo','lunes','martes','miércoles','jueves','viernes','sábado']
    let dn = fecha.getDay()
    return diasNombre[dn]
}

/**
 * @param {Date} fecha
 */
function diasVivo(fecha) {
    let hoy = new Date() // obtiene la fecha actual
    let diferencia = hoy - fecha // resultado en mili segundos
    let dias = diferencia / (1000*60*60*24) // convertir de mili segundos a dias
    return Math.floor(dias) // muestra calculo con días enteros
    // return dias.toFixed(4) // opción para mostrar decimales
}


function obtenerDatos(fechaE = '') {
    let fecha // se usa como principal la fecha proporcionada en el parámetro, para hacer pruebas en el código js sin depender del html
    if (fechaE === '') {
        fecha = document.getElementById('fechaInput').value
    } else {
        fecha = fechaE
    }
    
    fecha1 = fecha.replaceAll('-','/') // se cambia signo para que utilice la zona horaria local (hay que investigar mas acerca de este tema)
    fecha2 = new Date(fecha1)
    
    let resultado = document.getElementById('resultado')
    if (!isNaN(fecha2)) {
        let dv = diasVivo(fecha2)
        if (dv >= 0) {
            resultado.innerHTML = '<br />Tu signo zodiacal es <b>' + signoZodiacalv2(fecha2) + '</b><br />'
            resultado.innerHTML += 'Naciste un dia <b>' + diaNacimiento(fecha2) + '</b><br />'
            resultado.innerHTML += 'Has vivido <b>' + dv + '</b> dias <br />'
            resultado.innerHTML += 'La fecha de hoy es ' + new Date().toLocaleDateString() + '<br />'

            // // otras formas de obtener la fecha en formato local
            // resultado.innerHTML += 'La fecha de hoy es ' + new Intl.DateTimeFormat(['ban', 'es']).format() + '<br />'
            // resultado.innerHTML += 'La fecha de hoy es ' + new Intl.DateTimeFormat('es-GT').format() + '<br />'
        } else {
            resultado.innerHTML = 'Aun no has nacido!'
        }
    } else {
        if (fecha === '') { // si no se proporciona fecha o el input de fecha esta vació
            resultado.innerHTML = ''
        } else {
            resultado.innerHTML = 'fecha invalida'
        }
    }
}

// // para pruebas directas del código js
// let fechaEvaluar = "2021/11/01";
// let fecha = new Date(fechaEvaluar);
// obtenerDatos(fechaEvaluar)

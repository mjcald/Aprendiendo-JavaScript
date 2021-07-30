/**
 * @param {Date} fecha
 */
function signoZodiacal(fecha) {
    // Aries 21 de marzo - 20 de abril
    let fecha1 = new Date(fecha.getFullYear(), 3-1, 21)
    //console.log(fecha1)
    let fecha2 = new Date(fecha.getFullYear(), 4-1, 20)
    if (fecha>=fecha1 && fecha<=fecha2) {
        return 'Aries'
    } else {
        // Tauro 21 de abril - 20 de mayo
        fecha1 = new Date(fecha.getFullYear(), 4-1, 21)
        fecha2 = new Date(fecha.getFullYear(), 5-1, 20)
        if (fecha>=fecha1 && fecha<=fecha2) {
            return 'Tauro'
        } else {
            // Géminis 21 de mayo - 21 de junio
            fecha1 = new Date(fecha.getFullYear(), 5-1, 21)
            fecha2 = new Date(fecha.getFullYear(), 6-1, 21)
            if (fecha>=fecha1 && fecha<=fecha2) {
                return 'Géminis'
            } else {
                // Cáncer 22 de junio - 22 de julio
                fecha1 = new Date(fecha.getFullYear(), 6-1, 22)
                fecha2 = new Date(fecha.getFullYear(), 7-1, 22)
                if (fecha>=fecha1 && fecha<=fecha2) {
                    return 'Cáncer'
                } else {
                    // Leo 23 de julio - 22 de agosto
                    fecha1 = new Date(fecha.getFullYear(), 7-1, 23)
                    fecha2 = new Date(fecha.getFullYear(), 8-1, 22)
                    if (fecha>=fecha1 && fecha<=fecha2) {
                        return 'Leo'
                    } else {
                        // Virgo 23 de agosto - 22 de septiembre
                        fecha1 = new Date(fecha.getFullYear(), 8-1, 23)
                        fecha2 = new Date(fecha.getFullYear(), 9-1, 22)
                        if (fecha>=fecha1 && fecha<=fecha2) {
                            return 'Virgo'
                        } else {
                            // Libra 23 de septiembre - 22 de octubre
                            fecha1 = new Date(fecha.getFullYear(), 9-1, 23)
                            fecha2 = new Date(fecha.getFullYear(), 10-1, 22)
                            if (fecha>=fecha1 && fecha<=fecha2) {
                                return 'Libra'
                            } else {
                                // Escorpio 23 de octubre - 22 de noviembre
                                fecha1 = new Date(fecha.getFullYear(), 10-1, 23)
                                fecha2 = new Date(fecha.getFullYear(), 11-1, 22)
                                if (fecha>=fecha1 && fecha<=fecha2) {
                                    return 'Escorpio'
                                } else {
                                    // Sagitario 23 de noviembre - 21 de diciembre
                                    fecha1 = new Date(fecha.getFullYear(), 11-1, 23)
                                    fecha2 = new Date(fecha.getFullYear(), 12-1, 21)
                                    if (fecha>=fecha1 && fecha<=fecha2) {
                                        return 'Sagitario'
                                    } else {
                                        // Capricornio 22 de diciembre - 20 de enero
                                        fecha1 = new Date(fecha.getFullYear(), 12-1, 22)
                                        fecha2 = new Date(fecha.getFullYear()+1, 1-1, 20)
                                        if (fecha>=fecha1 && fecha<=fecha2) {
                                            return 'Capricornio'
                                        } else {
                                            // Capricornio 22 de diciembre - 20 de enero
                                            fecha1 = new Date(fecha.getFullYear()-1, 12-1, 22)
                                            fecha2 = new Date(fecha.getFullYear(), 1-1, 20)
                                            if (fecha>=fecha1 && fecha<=fecha2) {
                                                return 'Capricornio'
                                            } else {
                                                // Acuario 21 de enero - 18 de febrero
                                                fecha1 = new Date(fecha.getFullYear(), 1-1, 21)
                                                fecha2 = new Date(fecha.getFullYear(), 2-1, 18)
                                                if (fecha>=fecha1 && fecha<=fecha2) {
                                                    return 'Acuario'
                                                } else {
                                                    // Piscis 19 de febrero - 20 de marzo
                                                    fecha1 = new Date(fecha.getFullYear(), 1-1, 21)
                                                    fecha2 = new Date(fecha.getFullYear(), 2-1, 18)
                                                    if (fecha>=fecha1 && fecha<=fecha2) {
                                                        return 'Piscis'
                                                    } else {
                                                        return 'ninguno'
                                                    }
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    }
}

/**
 * @param {Date} fecha
 */
 function diaNacimiento(fecha) {
    let diasNombre = ['domingo','lunes','martes','miercoles','jueves','viernes','sabado']
    let dn = fecha.getDay()
    if (false) {
        switch (dn) {
            case 0:
                return('domingo')
                break;
            case 1:
                return('lunes')
                break;
            case 2:
                return('martes')
                break;
            case 3:
                return('miercoles')
                break;
            case 4:
                return('jueves')
                break;
            case 5:
                return('viernes')
                break;
            case 6:
                return('sabado')
                break;                        
            default:
                break;
        }   
    }
    return diasNombre[dn]
}

/**
 * @param {Date} fecha
 */
function diasVivo(fecha) {
    let hoy = new Date()
    return Math.floor((hoy-fecha) / (1000*60*60*24))
    // return ((hoy-fecha) / (1000*60*60*24)).toFixed(2)
}


function obtenerDatos(fechaE = '') {
    // console.clear()
    let fecha
    if (fechaE === '') {
        fecha = document.getElementById('fechaInput').value
    } else {
        fecha = fechaE
    }
    // console.log(fecha);
    
    fecha1=fecha.replaceAll('-','/')
    // console.log(fecha1)
    
    fecha2 = new Date(fecha1)
    // console.log(fecha2)
    
    // fecha2= new Date(document.getElementById('fechaInput').value.replaceAll('-','/'))
    
    let resultado = document.getElementById('resultado')
    if (!isNaN(fecha2)) {
        // console.log('Tu signo zodiacal es: ' + signoZodiacal(fecha2))
        // console.log('Naciste un dia: ' + diaNacimiento(fecha2))
        // console.log('Has vivido: ' + diasVivo(fecha2) + ' dias')
        
        let dv = diasVivo(fecha2)
        // console.log(fecha2);
        
        if (dv >= 0) {
            resultado.innerHTML = '<br />Tu signo zodiacal es <b>' + signoZodiacal(fecha2) + '</b><br />'
            resultado.innerHTML += 'Naciste un dia <b>' + diaNacimiento(fecha2) + '</b><br />'
            resultado.innerHTML += 'Has vivido <b>' + dv + '</b> dias <br />'
            resultado.innerHTML += 'La fecha de hoy es ' + new Date().toLocaleDateString() + '<br />'
            // resultado.innerHTML += 'La fecha de hoy es ' + new Intl.DateTimeFormat(['ban', 'es']).format() + '<br />'
            // resultado.innerHTML += 'La fecha de hoy es ' + new Intl.DateTimeFormat('es-GT').format() + '<br />'
        } else {
            resultado.innerHTML = 'Aun no has nacido!'
        }
    } else {
        if (fecha === '') {
            resultado.innerHTML = ''
        } else {
            resultado.innerHTML = 'fecha invalida'
        }
    }
}

// let fechaEvaluar = "2021/11/01";
// let fecha = new Date(fechaEvaluar);
// obtenerDatos(fechaEvaluar)

var salario = 2500000
function comprar(){
    gasta = prompt("1-)almojabana con gaseosa son 15.000,    2-)sunway con gaseosa 23.000")
    if (gasta == 1){
        salario = salario - 15000;
        alert("le caera mal por que lleva mucho stand ")
    }else if (gasta == 2){
        salario = salario - 23000;
       alert("Estara lleno y bien")
    }else{
        alert("le tocara comprar algo en medellin")
    }
    alert("tu saldo actual es: ", salario);
}  

function segundo(){
    //CASO 2
let altoPermitido = 55
let largoPermitido = 40
let anchoPermitido = 20

let altoOriginal = prompt("Ingrese el alto de su maleta")
let largoOriginal = prompt("Ingrese el largo de su maleta")
let anchoOriginal = prompt("Ingrese el ancho de su maleta")

alert(`Las dimensiones de su maleta son ${altoOriginal}cm de alto, ${largoOriginal}cm de largo y ${anchoOriginal}cm de ancho.`)

//math.imul para multiplicar

let areaMaletaPermitido = Math.imul(altoPermitido, largoPermitido, anchoPermitido)
let areaMaletaOriginal = Math.imul(altoOriginal, largoOriginal, anchoOriginal)

let reduccionAlto = altoPermitido / altoOriginal;
let reduccionLargo = largoPermitido / largoOriginal;
let reduccionAncho = anchoPermitido / anchoOriginal;

let factorMinimo = Math.min(reduccionAlto, reduccionAncho, reduccionLargo);

let nuevoAlto = (altoOriginal * factorMinimo);
let nuevoLargo = (largoOriginal * factorMinimo);
let nuevoAncho = (anchoOriginal * factorMinimo);

if (areaMaletaOriginal > areaMaletaPermitido) {
    alert("La maleta es demasiado grade. El tamaño maximo permitido es 55 cm (alto) x 40 cm (largo) x 20 cm (ancho). Debes hacer lo siguiente:")

    alert(`Debes reducir el tamaño de tu maleta de la siguiente manera:
    ${Math.floor(altoOriginal - nuevoAlto)}cm de alto. 
    ${Math.floor(largoOriginal - nuevoLargo)}cm de largo.
    ${Math.floor(anchoOriginal - nuevoAncho)}cm de ancho`)
} else if
    (areaMaletaOriginal <= areaMaletaPermitido) {
    alert("La maleta cumple con las dimesiones permitidas. Puede pasar a la sala de espera. Feliz viaje.")
} else {
    alert("El dato ingresa no es un numero. Por favor ingrese las dimensiones de la maleta en CM.")
}
}

function tres(){
    alert("Un vuelo mas tarde...!")
alert("estamos en el vuelo porfaro espere")

alert("Señor Hildebrando, Bienvenido a la ciudad de Medellin.")
alert("Son las 2:00am. Recuerda que tu vuelo hacia Macondo es a las 3:00am. Debes confirmar tu reserva en el Hotel. ")

let wifi = prompt("La red a la que estas conectado presenta fallas. ¿Quieres buscar otra red?\n 1. Si. \n 2. No.")

switch (wifi) {
    case "1": let wifi1 = prompt("Great! Hay una red wifi por esta cuadra llamada 'ELPassEs' pero la contraseña está cifrada en números binarios, además cobran $50.000 por hora o fracción. ¿Desear continuar? \n 1. Si. \n 2. No.")
        if (wifi1 == 1) {
            presupuesto = 50000
            function clave(binario) {
                let decimal = parseInt(binario, 2)
                let caracter = String.fromCharCode(decimal)
                return caracter;
            }
            binario1 = "01110010"
            binario2 = "01101001"
            binario3 = "01110111"
            binario4 = "01101001"

            let claveCompleta = clave(binario1) + clave(binario2) + clave(binario3) + clave(binario4)

            alert(
                `La contraseña para ingresar a la red es '${claveCompleta}'. Su presupuesto restante es ${presupuesto}`)
            break

        }

    case "2": alert("La red sigue sin funcionar. Por favor trata de conectarte a otra red e intenta nuevamente")
}
}

function cuatro(){
alert("Has llegado a Macondo. Al parecer los habitantes solo hablan con la vocal i. Presiona 'Aceptar' para pedir el taxi en idiona Macondo.")

function macondoVocabulary(sentence) {
    const vocabulary = sentence.toLowerCase().split('');
    const newVocabulary = vocabulary.map(letter => {
        if (/[aeiou]/.test(letter)) {
            return 'i';
        }
        return letter;
    });
    return newVocabulary.join('');
}
console.log(macondoVocabulary("Taxi me puede llevar al hotel mariposas amarillas"));
alert(macondoVocabulary("Taxi me puede llevar al hotel mariposas amarillas"));

alert("El taxista ha aceptado tu viaje. Presiona 'Aceptar' para iniciar tu resorrido.")
}

function quinto(){
    alert("Señor Hildebrando, Ha llegado al Hotel de la ciudad de Macondo. Su tarifa para el taxi es de $300.000 pesos. \n Para negociar la tarifa debe ganar en Piedra Papel O Tijera en una ronda.")

let ppt = prompt("¿Ganaste la ronda?\n 1. Si. \n 2. No.\n 3. Empate.")

if (ppt == "1") {
    alert("Felicidades Señor Hildebrando. No tienes que pagar nada.")
} else if (ppt == "2" || ppt == "3") {
    presupuesto = 300000
    alert(`Señor Hildebrando, no logró ganar la ronda. Debe pagar la tarifa de $300.000 pesos. \n Su presupuesto restante es ${presupuesto} pesos.`)
} else {
    alert("Has ingresado in dato invalido. Por favor intenta nuevamente.")
}
}
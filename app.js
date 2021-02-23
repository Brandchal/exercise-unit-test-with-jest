// we declare the function with the exact name "fromEuroToDollar"
const fromEuroToDollar = function(valueInEuro){
    // convert the given valueInEuro to dollars
    let valueInDollar = valueInEuro * 1.2;
    //return the doller value
    return valueInDollar;
}


function fromDollarToYen (valueIndollar) {
    //Convertir de Dollar a Yen
    let valueInyen = (valueInDollar/=valueInEuro) * 127.9; //Obtener el valor del dolar, equivalente del euro

    return valueInyen;
} 

function fromYenToPound (valueInYenes) {
    
    let valueInyen = (valueInDollar/=valueInEuro) * 127.9; 

    return valueInyen;
} 


// esta es mi función que suma dos números
const sum = (a,b) => {
    return a + b
}

// solo un registro en consola para nosotros.
console.log(7,3)

// exporta la función para usarla en otros archivos 
// (similar a la palabra clave `export` cuando se usa webpack)
module.exports = { sum, fromEuroToDollar };

console.log(sum(7,3));
 
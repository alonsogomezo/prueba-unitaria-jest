// esta es mi función que suma dos números
const sum = (a,b) => {
    return a + b
}

const fromDollarToYen = (USD) => {
    let JPY = 130.24;
    let USDtoJPY = USD * JPY;
    return USDtoJPY;
}

const fromEuroToDollar = (EUR) => {
    let USD = 1.2;
    let EURtoUSD = USD * EUR;
    return EURtoUSD;
}

const fromYenToPound = (JPY) => {
    let GBP = 0.0062;
    let JPYtoGBP = JPY * GBP;
    return JPYtoGBP;
}

// solo un registro en consola para nosotros.
console.log(sum(7,3))

// exporta la función para usarla en otros archivos 
// (similar a la palabra clave `export` cuando se usa webpack)
module.exports = { sum, fromDollarToYen, fromEuroToDollar, fromYenToPound };
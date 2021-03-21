"use strict";
BigNumber.config({DECIMAL_PLACES: 2, ROUNDING_MODE: BigNumber.ROUND_HALF_UP});
var FMT_ENTERO = "0,00",
FMT_NUMERO = "0,0.00", 
FMT_MONEDA = "$0,0.00", 
FMT_PORCENTAJE = "0.00%",
forma = document.getElementById("forma"), 
salidaSuma =document.getElementById("salidaSuma"), 
salidaResta =document.getElementById("salidaResta"), 
salidaMultiplica = document.getElementById("salidaMultiplica"), 
salidaDividir = document.getElementById("salidaDividir");

Node.prototype.error = function (mensaje) {
    this.className = "error"; 
    this.textContent = mensaje;
};

Node.prototype.info = function (mensaje) { 
    this.className = "";
    this.textContent = mensaje;
};

function procesa(){
    var Numero1 = parseInt(forma["num1"].value),
    Numero2 = parseInt(forma["num2"].value); 
    var error=false;

if (isNaN(Numero1)){ 
    error=true;
    salidaEntero.error("Entero Incorrecto");
}

if(!error){
    var Multiplicacion = new BigNumber(Numero1).times(new BigNumber(Numero2));
    var Division = new BigNumber(Numero1).dividedBy(new BigNumber(Numero2));
    var Suma = new BigNumber(Numero1).plus(new BigNumber(Numero2));
    var Resta = new BigNumber(Numero1).minus(new BigNumber(Numero2));

    salidaSuma.info(numeral(Suma).format(FMT_MONEDA)); 
    salidaResta.info(numeral(Resta).format(FMT_MONEDA)); 

    if(isNaN(Numero2) || Numero2!=0){
        salidaMultiplica.info(numeral(Multiplicacion).format(FMT_MONEDA)); 
    }else{
        salidaMultiplica.info(numeral().format(FMT_MONEDA));
    }
if(isNaN(Numero2) || Numero2!=0){
    salidaDividir.info(numeral(Division).format(FMT_MONEDA));
}else{
    salidaDividir.info("Error");
}

}
}


let copmxn = 0.0054;
let copusd = 0.00026;
let copeur = 0.00023;
let copgbp = 0.00019;
let mxnusd = 0.049;
let mxneur = 0.042;
let mxngbp = 0.036;
let usdeur = 0.86;
let usdgbp = 0.74;
let eurgbp = 0.86;
let pais2;
let resultado;

let form = document.getElementById('form')
let btnEnviar = document.getElementById('bntEnviar')

form.addEventListener('submit', formSubmit)
function formSubmit(e){
    e.preventDefault()
}

function calcular() {
    montoReal = Number(document.getElementById('inputCantidad').value);
    Moneda1 = document.getElementById('moneda1').value;
    Moneda2 = document.getElementById('moneda2').value;

    document.getElementById('resu').innerHTML=(calcularDinero(montoReal,Moneda1,Moneda2)).toFixed(2)
}
//FALTA COLOCAR EL ERROR 
function calcularDinero(montoReal,Moneda1,Moneda2) {
   //DIVISA COLOMBIANA
    if(Moneda1 == 'COP' && Moneda2 == 'USD'){
        pais2 = copusd
        resultado =  montoReal*pais2 
        return resultado
    }else if(Moneda1 == 'USD' && Moneda2 == 'COP'){
        pais2 = copusd
        resultado =  montoReal/pais2 
        return resultado   
    }else if(Moneda1 == 'COP' && Moneda2 == 'MXN'){
        pais2 = copmxn
        resultado =  montoReal*pais2 
        return resultado   
    }else if(Moneda1 == 'MXN' && Moneda2 == 'COP'){
        pais2 = copmxn
        resultado =  montoReal/pais2 
        return resultado   
    }else if(Moneda1 == 'COP' && Moneda2 == 'EUR'){
        pais2 = copeur
        resultado =  montoReal*pais2 
        return resultado   
    }else if(Moneda1 == 'EUR' && Moneda2 == 'COP'){
        pais2 = copeur
        resultado =  montoReal/pais2 
        return resultado   
    }else if(Moneda1 == 'COP' && Moneda2 == 'GBP'){
        pais2 = copgbp
        resultado =  montoReal*pais2 
        return resultado   
    }else if(Moneda1 == 'GBP' && Moneda2 == 'COP'){
        pais2 = copgbp
        resultado =  montoReal/pais2 
        return resultado   
    }
    //DIVISA MEXICANA
    else if(Moneda1 == 'MXN' && Moneda2 == 'USD'){
        pais2 = mxnusd
        resultado =  montoReal*pais2 
        return resultado   
    }else if(Moneda1 == 'USD' && Moneda2 == 'MXN'){
        pais2 = mxnusd
        resultado =  montoReal/pais2 
        return resultado   
    }else if(Moneda1 == 'MXN' && Moneda2 == 'EUR'){
        pais2 = mxneur
        resultado =  montoReal*pais2 
        return resultado   
    }else if(Moneda1 == 'EUR' && Moneda2 == 'MXN'){
        pais2 = mxneur
        resultado =  montoReal/pais2 
        return resultado   
    }else if(Moneda1 == 'MXN' && Moneda2 == 'GBP'){
        pais2 = mxngbp
        resultado =  montoReal*pais2 
        return resultado   
    }else if(Moneda1 == 'GBP' && Moneda2 == 'MXN'){
        pais2 = mxngbp
        resultado =  montoReal/pais2 
        return resultado   
    }
    //DIVISA EEUU
    else if(Moneda1 == 'USD' && Moneda2 == 'EUR'){
        pais2 = usdeur
        resultado =  montoReal*pais2 
        return resultado   
    }else if(Moneda1 == 'EUR' && Moneda2 == 'USD'){
        pais2 = usdeur
        resultado =  montoReal/pais2 
        return resultado   
    }else if(Moneda1 == 'USD' && Moneda2 == 'GBP'){
        pais2 = usdgbp
        resultado =  montoReal*pais2 
        return resultado   
    }else if(Moneda1 == 'GBP' && Moneda2 == 'USD'){
        pais2 = usdgbp
        resultado =  montoReal/pais2 
        return resultado   
    }
    //DIVISA EUROPA
    else if(Moneda1 == 'EUR' && Moneda2 == 'GBP'){
        pais2 = eurgbp
        resultado =  montoReal*pais2 
        return resultado   
    }else if(Moneda1 == 'GBP' && Moneda2 == 'EUR'){
        pais2 = eurgbp
        resultado =  montoReal/pais2 
        return resultado   
    }
}


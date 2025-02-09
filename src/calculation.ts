import { ref } from "vue";
import { numberRecord, symbol,calculationSend,calculationNumber, calculationResult, decimalPoint} from "./Constant";
import { Symbol } from "typescript";

export function calculationJuge(){
        if(symbol.value === "+"||"-"||"X"||"÷"){
        calculationSend.value = symbol.value

    }
}

export function calculationMaine():number{    
        if(calculationSend.value !== "+" 
        && calculationSend.value !== "-" 
        && calculationSend.value !== "X" 
        && calculationSend.value !== "÷"){

            calculationNumber.value   =  numberRecord[numberRecord.length - 1]

        }else if(calculationSend.value == "+"){
            calculationNumber.value   =  calculationNumber.value + numberRecord[numberRecord.length - 1]  
        }else if(calculationSend.value == "-"){
            calculationNumber.value   =  calculationNumber.value - numberRecord[numberRecord.length - 1] 
        }else if(calculationSend.value == "X"){
            calculationNumber.value   = calculationNumber.value * numberRecord[numberRecord.length - 1] 
        }else if(calculationSend.value == "÷"){
            calculationNumber.value   = calculationNumber.value / numberRecord[numberRecord.length - 1]  
    }
            return calculationNumber.value
}

export function oneCut():number{
    let i = 10 ** (Number((String(calculationResult.value - 1 ).length) - (decimalPoint.value + 1 )) - 2)

        calculationResult.value =  Math.floor((calculationResult.value)*i)/i
   
                return i 
}




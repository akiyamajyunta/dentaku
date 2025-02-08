import { ref } from "vue";
import { numberBox,numberRecord, symbol,calculationSend,calculationNumber } from "./Constant";
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






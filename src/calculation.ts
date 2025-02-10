import { numberRecord, method,calculationNumber, result, decimalPoint, methodSub,numberRecordSub} from "./Constant";



export function calculationMaine():number{    
        if(method.value !== "+" 
        &&method.value !== "-" 
        &&method.value !== "X" 
        &&method.value !== "÷"){
        calculationNumber.value   =  numberRecord[numberRecord.length - 1]
            
        }else if(method.value == "+"){
                calculationNumber.value   =  calculationNumber.value + numberRecord[numberRecord.length - 1]  
        }else if(method.value == "-"){
                calculationNumber.value   =  calculationNumber.value - numberRecord[numberRecord.length - 1] 
        }else if(method.value == "X"){
                calculationNumber.value   = calculationNumber.value * numberRecord[numberRecord.length - 1] 
        }else if(method.value == "÷"){
                calculationNumber.value   = calculationNumber.value / numberRecord[numberRecord.length - 1]  
    }
            return calculationNumber.value
}


export function calculationMaineSub():number{
        if( methodSub.value == "+"){
                calculationNumber.value   = numberRecordSub[0] + result.value 
        }else if( methodSub.value == "-"){
                calculationNumber.value   = numberRecordSub[0] - result.value
        }else if( methodSub.value == "X"){
                calculationNumber.value   = numberRecordSub[0] * result.value
        }else if( methodSub.value == "÷"){
                calculationNumber.value   = numberRecordSub[0] / result.value

        }
            numberRecord.push(calculationNumber.value )
            return calculationNumber.value 
}


export function oneCut():number{
    let i = 10 ** (Number((String(result.value - 1 ).length) - (decimalPoint.value + 1 )) - 2)
        result.value =  Math.floor((result.value)*i)/i
                return i 
}//小数の場合、最も小さな桁をカットする




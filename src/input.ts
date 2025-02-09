import { ref } from "vue";
import { calculationJuge,calculationMaine,oneCut} from "./calculation";
import { number ,totalNumber,
        decimalPoint,
        calculationSend,
        calculationResult,
        calculationKinds,
        StopAction,
        numberRecord,
        symbol,
        numberBox,
        calculationNumber,
        integerJuge} from "./Constant";


export function inputNumber(){
    numberBox.push(number.value)
    inputNumberProcess()
}

export function onePiceDeleteNumber(){
    numberBox.pop();
    console.log(JSON.stringify(numberBox))
    if (oneCut() <=1){ 
        integerJuge.value = true
        inputNumberProcess()
    }

}



export function inputNumberProcess(){
    let def = 1
        if(integerJuge.value == true){
            for(let i = 0 ; i < numberBox.length  ; i++){
                    totalNumber.value = totalNumber.value *10 + numberBox[i]
                }
        }else{
            for(let i = decimalPoint.value ; i < numberBox.length  ; i++){
                        totalNumber.value =  calculationResult.value
                        totalNumber.value = Math.floor((totalNumber.value  + numberBox[i] / def)*def)/def
                        def =  def * 10
                }
        }
                calculationResult.value = totalNumber.value 
                totalNumber.value = 0
                StopAction.value = true
    }



export function inputSymbol(){
    
    calculationKinds.value = symbol.value
    if( StopAction .value){
        numberRecord.push(calculationResult.value)
    }
    switch(symbol.value){
        case "DEL":
            onePiceDeleteNumber()
            break
        case "AC":
            numberRecord.length = 0
            totalNumber.value = 0
            calculationNumber.value = 0
            calculationResult.value = 0
            calculationSend.value = ""
            break
        case "X":
            calculationMaine ()
            calculationJuge()

            break
        case "÷":
            calculationMaine ()
            calculationJuge()
            
            break
        case "+":
            calculationMaine ()
            calculationJuge()
        
            break
        case "-":
            calculationMaine ()
            calculationJuge()

            break
        case ".":
            decimalPoint.value =  numberBox.length -1
            integerJuge.value = false
            break
        case "=":
            calculationResult.value = calculationMaine()
    }//動作確認済
        if(symbol.value !== "DEL" && symbol.value !== ".") {  
            numberBox.length = 0
            StopAction.value = false
            integerJuge.value = true//小数処理を整数に戻す
        } 
}

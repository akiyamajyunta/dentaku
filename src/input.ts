import { ref } from "vue";
import { calculationJuge,calculationMaine ,} from "./calculation";
import { number ,totalNumber,
    calculationSend,
    calculationResult,
    calculationKinds,
    inputJudgement,
    numberRecord,
    symbol,
    numberBox,
    calculationNumber} from "./Constant";




export function inputNumber(){
    numberBox.push(number.value)
    inputNumberProcess()
}
export function onePiceDeleteNumber(){
    numberBox.pop();
    inputNumberProcess()
}


export function inputNumberProcess(){
    for( let i = 0 ; i < numberBox.length  ; i++){
            totalNumber.value = totalNumber.value *10 + numberBox[i]
            console.log(totalNumber.value)
    }
            calculationResult.value = totalNumber.value 
            totalNumber.value = 0
            inputJudgement.value = true
}


export function inputSymbol(){
    
    calculationKinds.value = symbol.value
    if(inputJudgement.value){
        numberRecord.push(calculationResult.value)
    }
    //console.log(JSON.stringify(numberRecord))
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
        case "ANS":
            
            break
        case "=":
            calculationResult.value = calculationMaine()
    }//動作確認済
        numberBox.length = 0
        inputJudgement.value = false
    }
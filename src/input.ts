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
        integerJuge,
        parentheses
    } from "./Constant";


export function inputNumber(){
    numberBox.push(number.value)
    inputNumberProcess()
}

export function onePiceDeleteNumber(){
    numberBox.pop();
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
    console.log("数の記録"+JSON.stringify( numberRecord))
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
        case "kakko":
            //元が0で、1 でかっこ　閉じて0 に戻る
            parentheses.value = (parentheses.value + 1) % 2;
            console.log("かっこの判定"+parentheses.value)
            

            break
        case "=":   
            calculationResult.value = calculationMaine()
            getAnwer()
            break
        case "pai":
            //値に3.14して⁼演算を行う。
            calculationResult.value  = calculationMaine() * 3.14
            getAnwer()
            break
    }//動作確認済
        if(symbol.value !== "DEL" && symbol.value !== "."){  
            numberBox.length = 0
            StopAction.value = false
            integerJuge.value = true//小数処理を整数に戻す
        } 
}

function getAnwer(){
    numberRecord.length = 0
    numberRecord.push(calculationResult.value) 
    calculationJuge()

}
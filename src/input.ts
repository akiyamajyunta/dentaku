import { ref } from "vue";
import { calculationMaine,oneCut,calculationMaineSub} from "./calculation";
import { number ,totalNumber,
        decimalPoint,
        result,
        method,
        StopAction,
        numberRecord,
        numberRecordSub,
        symbol,
        numberBox,
        calculationNumber,
        integerJuge,
        parentheses,
        option,
        methodSub,
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
                        totalNumber.value =  result.value
                        totalNumber.value = Math.floor((totalNumber.value  + numberBox[i] / def)*def)/def
                        def =  def * 10
                }
        }
                result.value = totalNumber.value 
                totalNumber.value = 0
                StopAction.value = true
}



export function inputSymbol(){

    if( StopAction .value){
        numberRecord.push(result.value)
    }
    switch(symbol.value){
        case "DEL":
            onePiceDeleteNumber()
            option.value = symbol.value
            break
        case "AC":
            numberRecord.length = 0
            totalNumber.value = 0
            calculationNumber.value = 0
            result.value = 0
            option.value = symbol.value
            break
        case "X":
            result.value = calculationMaine()
            method.value = symbol.value
            break
        case "÷":
            result.value = calculationMaine()
            method.value = symbol.value
            break
        case "+":
            result.value = calculationMaine()
            method.value = symbol.value
            break
        case "-":
            result.value = calculationMaine()
            method.value = symbol.value
            break
        case ".":
            decimalPoint.value =  numberBox.length -1
            integerJuge.value = false
            option.value = "小数"
            break
        case "( )":
                parentheses.value = (parentheses.value + 1) % 3;//元が0で、1 でかっこ　2で閉じて0 に戻る
            if(parentheses.value == 1){
                methodSub.value  = method.value 
                getAnwer()
                numberRecordSub.push(result.value)//getAnwerで一旦合計値を出して、ここで記録。
                numberRecord.length = 0
            }else if (parentheses.value == 2){//かっこ内の計算を終わらせて、その中身とmethodSubで保存したので計算を行う。
                result.value = calculationMaine()   
                getAnwer()
                result.value = calculationMaineSub()
                parentheses.value = 0//0にリセット
            }
                option.value = symbol.value
            break
        case "=":   
            result.value = calculationMaine()
            getAnwer()
            option.value = symbol.value
            break
        case "pai":
            result.value  = calculationMaine() * 3.14
            getAnwer()
            option.value = symbol.value
            break
    }
        if(symbol.value !== "DEL" && symbol.value !== "."){  
            numberBox.length = 0
            StopAction.value = false
            integerJuge.value = true//小数処理を整数に戻す
        } 
}

function getAnwer(){
    numberRecord.length = 0
    method.value = ""
    numberRecord.push(result.value) 
}


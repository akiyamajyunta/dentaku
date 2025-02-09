import { ref } from "vue";

export const number = ref<number>(0)
export const symbol = ref<string>("")
export const StopAction = ref<boolean>(true)//数値をリストに代入するボタン。四則のボタンを押すたびに実行されるのを阻止

export const numberBox : number[] = [] //入力された数値は桁ごとに管理
export const numberRecord : number[] = [] //入力された数値を処理し、”数値”を管理する
export const numberRecordSub : number[] = [] //入力された数値を処理し、”サブで数値”を管理する。かっこ用


export const totalNumber = ref<number>(0)
export const calculationResult = ref<number>(0)
export const calculationKinds = ref<string>("")

export const parentheses = ref<number>(0)



export const integerJuge = ref<boolean>(true)
export const decimalPoint = ref<number>(0)


export const calculationSend = ref<string>("")
export const calculationNumber = ref<number>(0)



// parenthese = (parenthese + 1) % 2;
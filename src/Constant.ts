import { ref } from "vue";

export const number = ref<number>(0)
export const symbol = ref<string>("")

export const StopAction = ref<boolean>(true)//数値をリストに代入するボタン。四則のボタンを押すたびに実行されるのを阻止

export const numberBox : number[] = [] //入力された数値は桁ごとに管理

export const numberRecord : number[] = [] //入力された数値を処理し、”数値”を管理する
export const numberRecordSub : number[] = [] //入力された数値を処理し、”サブで数値”を管理する。かっこ用


export const totalNumber = ref<number>(0)
export const result = ref<number>(0)

export const method = ref<string>("")//+-*/
export const methodSub = ref<string>("") 


export const option = ref<string>("")//AC = DELなど


export const parentheses = ref<number>(0)//かっこ


export const integerJuge = ref<boolean>(true)// 小数,整数の分岐に必要

export const decimalPoint = ref<number>(0)//何処で小数に切り替えたか


export const calculationNumber = ref<number>(0)


import { ref } from "vue";

export const number = ref<number>(0)
export const symbol = ref<string>("")
export const inputJudgement = ref<boolean>(true)//数値をリストに代入するボタン。四則のボタンを押すたびに実行されるのを阻止

export const numberBox : number[] = [] //入力された数値は桁ごとに管理
export const numberRecord : number[] = [] //入力された数値を処理し、”数値”を管理する


export const totalNumber = ref<number>(0)
export const calculationResult = ref<number>(0)
export const calculationKinds = ref<string>("")

export const digit = ref<number>(1)
export const pai = ref<number>(1)
export const tenTimes = ref<number>(1)
export const del = ref<number>(1)

export const calculationSend = ref<string>("")
export const calculationNumber = ref<number>(0)
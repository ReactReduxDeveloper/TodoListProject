import React from "react";
import s from "./Style.module.css";

export type CounterType = {
    counter: number
    maxValue:number
}
export const Display: React.FC<CounterType> = ({counter,maxValue}) => {
    return (
        <div className={counter === maxValue ? s.Red : s.Display}>{counter}</div>
    )
}
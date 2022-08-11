import React from "react";
import s from "./Style.module.css";
import {CounterType} from "./Display";

type CallbacksType = {
    IncPlus:()=>void
    ResetCounter:()=>void
    counter:number
    maxValue:number
    startValue:number
}
export const Buttons:React.FC<CallbacksType> = ({IncPlus,ResetCounter, counter,maxValue,startValue})=> {
    return (
        <div className={s.Buttons}>
            <div onClick={IncPlus} className={counter === maxValue ? `${s.Disable} ${s.ButtonInc}` : s.ButtonInc}>Inc</div>
            <div onClick={ResetCounter} className={counter === startValue ? `${s.Disable} ${s.ButtonReset}` : s.ButtonReset}>Reset</div>
        </div>
    )
}
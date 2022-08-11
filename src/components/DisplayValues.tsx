import React, {ChangeEvent} from "react";
import s from "./Style.module.css";
import {MaxValue} from "./Values/MaxValue";
import {StartValue} from "./Values/StartValue";
type ValuesType = {
    maxValue:number
    startValue:number
    OnChangeMaxHandler:(e:ChangeEvent<HTMLInputElement>)=>void
    OnChangeStartHandler:(e:ChangeEvent<HTMLInputElement>)=>void
}

export const DisplayValues:React.FC<ValuesType> = ({maxValue,startValue,OnChangeMaxHandler,OnChangeStartHandler}) => {
    return (
        <div>
            <MaxValue maxValue={maxValue} OnChangeMaxHandler={OnChangeMaxHandler}/>
            <StartValue startValue={startValue} OnChangeStartHandler={OnChangeStartHandler}/>
        </div>
    )
}
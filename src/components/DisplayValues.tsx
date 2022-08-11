import React, {ChangeEvent} from "react";
import s from "./Style.module.css";
import {Value} from "./UniversalValue";
import {ErrorType} from "../App";

type ValuesType = {
    maxValue:number
    startValue:number
    error: ErrorType
    OnChangeMaxHandler:(e:ChangeEvent<HTMLInputElement>)=>void
    OnChangeStartHandler:(e:ChangeEvent<HTMLInputElement>)=>void
}

export const DisplayValues:React.FC<ValuesType> = ({maxValue,startValue,OnChangeMaxHandler,OnChangeStartHandler,error}) => {
    return (
        <div className={s.Display}>
            <div className={s.MaxValueInput}>
                <Value  name={"max value:"} value={maxValue} callBack={OnChangeMaxHandler} error={error}/>
            </div>
            <Value name={"start value:"} callBack={OnChangeStartHandler} value={startValue} error={error}/>
        </div>
    )
}
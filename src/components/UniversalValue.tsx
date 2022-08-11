import React, {ChangeEvent} from "react";
import s from "./Style.module.css";
import {ErrorType} from "../App";
type ValueType = {
    name: string
    value: number
    error:ErrorType
    callBack: (e:ChangeEvent<HTMLInputElement>) => void
}

export const Value: React.FC<ValueType> = ({name, value, callBack,error}) => {
    return (
        <div className={s.value}>
            <div className={s.name}>{name}</div>
            <div className={s.iniInput}><input className={s.Input} style={{backgroundColor: error === 'Incorrect values!' ? 'red' : ''}} type="number" value={value} onChange={callBack}/></div>
        </div>
    )
}
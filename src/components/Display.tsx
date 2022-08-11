import React from "react";
import s from "./Style.module.css";
import {ErrorType} from "../App";

export type CounterType = {
    counter: number
    error: ErrorType
}
export const Display: React.FC<CounterType> = ({counter, error}) => {
    return (
        <div className={error === 'Incorrect values!' ? s.Red : s.Display }>{error ? error : counter}</div>
    )
}
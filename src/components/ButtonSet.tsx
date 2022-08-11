import React from "react";
import s from "./Style.module.css";
import {CounterType} from "./Display";
type SetType = {
    SetFunction:()=>void
}

export const ButtonsSet:React.FC<SetType> = ({SetFunction})=> {
    return (
        <div >
            <div onClick={SetFunction}>Set</div>

        </div>
    )
}
import React from "react";
import s from "./Style.module.css";

type CallbacksType = {
    onClickHandle:()=>void
    name:string
    disabled:boolean
}
export const ButtonUniversal:React.FC<CallbacksType> = ({name,onClickHandle, disabled})=> {
    return <button  onClick={onClickHandle} className={s.btn} disabled={disabled} >{name}</button>
            {/*<div onClick={ResetCounter} className={counter === startValue ? `${s.Disable} ${s.ButtonReset}` : s.ButtonReset}>Reset</div>*/}

}
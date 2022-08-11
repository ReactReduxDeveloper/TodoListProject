import React, {ChangeEvent} from "react";

type StartValueType = {
    startValue:number
    OnChangeStartHandler:(e:ChangeEvent<HTMLInputElement>)=>void
}
export const StartValue:React.FC<StartValueType> = ({startValue, OnChangeStartHandler})=> {
    return (
        <div>start value: <input type="number" value={startValue} onChange={OnChangeStartHandler}/></div>
    )
}
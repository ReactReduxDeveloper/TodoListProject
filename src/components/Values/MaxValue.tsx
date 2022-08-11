import React, {ChangeEvent, FC} from "react";
type MaxValueType = {
    maxValue:number
    OnChangeMaxHandler:(e:ChangeEvent<HTMLInputElement>)=>void
}
export const MaxValue:React.FC<MaxValueType> = ({maxValue,OnChangeMaxHandler})=> {
    return (
        <div>max value: <input type="number" value={maxValue} onChange={OnChangeMaxHandler}/></div>
    )
}
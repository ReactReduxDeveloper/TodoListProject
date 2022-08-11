import React, {ChangeEvent, useCallback, useEffect, useState} from 'react';
import './App.css';
import s from "./components/Style.module.css"
import {Display} from "./components/Display";
import {ButtonUniversal} from "./components/ButtonUniversal";
import {DisplayValues} from "./components/DisplayValues";


export type ErrorType = 'Incorrect values!' | 'Enter values and press set' | ''
function App() {
    let [counter, setCounter] = useState(0)
    let [maxValue, setMaxValue] = useState(0)
    let [startValue, setStartValue] = useState(0)
    let [error,setError] = useState<ErrorType>('')

    useEffect(() => {
        if (maxValue <= startValue || maxValue < 0) {
            setError('Incorrect values!')
        } else setError('Enter values and press set');

        if (startValue >= maxValue || startValue < 0) {
            setError('Incorrect values!')
        } else setError('Enter values and press set')
    },[maxValue, startValue])

    const OnChangeMaxHandler = useCallback( (e: ChangeEvent<HTMLInputElement>) => {
        let valueMax = Number(e.currentTarget.value)
        setMaxValue(valueMax)
    },[maxValue]);

    const OnChangeStartHandler = useCallback((e: ChangeEvent<HTMLInputElement>) => {
        let valueStart = Number(e.currentTarget.value)
        setStartValue(valueStart)
    },[startValue]);

    const SetFunction = () => {
        setCounter(startValue)
        setError('')
        localStorage.setItem("Start Value", JSON.stringify(startValue))
        localStorage.setItem("Max Value", JSON.stringify(maxValue))
    }
    let IncPlus = () => {
        setCounter(counter + 1)
    }
    let ResetCounter = () => {
        setCounter(startValue)
    }
    return (

        <div className={s.App}>
            <div className={s.Counter}>
                <Display counter={counter} error={error}/>
                <div className={s.Buttons}>
                <ButtonUniversal name={'inc'} onClickHandle={IncPlus} disabled={counter === maxValue}/>
                <ButtonUniversal name={'reset'} onClickHandle={ResetCounter} disabled={counter === startValue}/>
                </div>
            </div>
            <div className={s.Counter}>
                <DisplayValues maxValue={maxValue} startValue={startValue} OnChangeMaxHandler={OnChangeMaxHandler} error={error}
                               OnChangeStartHandler={OnChangeStartHandler}/>
                <div className={s.Buttons_Set}>
                <ButtonUniversal name={'set'} onClickHandle={SetFunction} disabled={startValue < 0 || maxValue < 0 || startValue >= maxValue}/>
                </div>
            </div>
        </div>
    )

}

export default App;

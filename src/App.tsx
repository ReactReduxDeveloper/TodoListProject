import React, {ChangeEvent, useState} from 'react';
import './App.css';
import s from "./components/Style.module.css"
import {Display} from "./components/Display";
import {Buttons} from "./components/Buttons";
import {ButtonsSet} from "./components/ButtonSet";
import {DisplayValues} from "./components/DisplayValues";
import {StartValue} from "./components/Values/StartValue";

function App() {
    let [counter, setCounter] = useState(0)
    let [maxValue, setMaxValue] = useState(0)
    let [startValue, setStartValue] = useState(0)
    const OnChangeMaxHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setMaxValue(Number(e.currentTarget.value))
    }
    const OnChangeStartHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setStartValue(+e.currentTarget.value)
    }
    const SetFunction = () => {

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
                <Display counter={counter} maxValue={maxValue}/>
                <ButtonUniversal />
                <ButtonUniversal />
            </div>
            <div className={s.Counter}>
                <DisplayValues maxValue={maxValue} startValue={startValue} OnChangeMaxHandler={OnChangeMaxHandler}
                               OnChangeStartHandler={OnChangeStartHandler}/>
                <ButtonUniversal/>
            </div>
        </div>
    )

}

export default App;

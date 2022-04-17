import React, {ChangeEvent, KeyboardEvent, useState} from 'react';


export type TaskType = {
    id: string
    title: string
    isDone: boolean
}

export type PropsType = {
    title: string
    tasks: Array<TaskType>
    FuncR: (TaskID: string) => void
    FinFunc: (value: TypeforFilteredValue) => void
    AddTaskFunction: (title: string) => void
}
export type TypeforFilteredValue = "all" | "active" | "completed"

export function Todolist(props: PropsType) {
    const [title, SetTitle] = useState(" ")
    const task = props.tasks.map((el) => {
        return (<li key={el.id}><input type="checkbox" checked={el.isDone}/> <span>{el.title}</span>
            <button onClick={() => {
                props.FuncR(el.id)
            }}>X
            </button>
        </li>)
    })
    const AddTaskF = () => {
        props.AddTaskFunction(title);
        SetTitle("")
    }
    const OnChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        SetTitle(e.currentTarget.value)
    }
    const OnKeyHandler = (el: KeyboardEvent<HTMLInputElement>) => {
        if (el.charCode === 13 && el.ctrlKey) {
            AddTaskF();
        }
    }
    const Button1 = () => {
        props.FinFunc("all")
    }
    const Button2 = () => {
        props.FinFunc("active")
    }
    const Button3 = () => {
        props.FinFunc("completed")
    }

    return <div>
        <h3>{props.title}</h3>
        <div>
            <input value={title}
                   onChange={OnChangeHandler}
                   onKeyPress={OnKeyHandler}
            />
            <button onClick={AddTaskF}>+</button>

        </div>
        <ul>
            {task}
        </ul>
        <div>
            <button onClick={Button1}>All</button>
            <button onClick={Button2}>Active</button>
            <button onClick={Button3}>Completed</button>
        </div>
    </div>
}

import React, {useState} from 'react';
import './App.css';
import {TaskType, Todolist, TypeforFilteredValue} from './Todolist';
import {v1} from "uuid";


function App() {

    const AddFunction = (title:string)=> {
        let Task = {id: v1(), title: title, isDone: false}
        let NewTasks = [Task, ...tasks]
        SetTasks(NewTasks)
    }
    const FinalFunc = (value:TypeforFilteredValue)=> {
        SetFilter(value)

    }
    const [tasks,SetTasks] = useState<Array<TaskType>>( [
        { id: v1(), title: "HTML&CSS", isDone: true},
        { id: v1(), title: "JS", isDone: true },
        { id: v1(), title: "ReactJS", isDone: true },
        ])
    const removefunc =(TaskID: string)=> {
        const Filteredtasks = tasks.filter(el=> el.id !== TaskID)
        SetTasks(Filteredtasks)
    }
const [filter,SetFilter] = useState<TypeforFilteredValue>("all")
    const getFilteredTasksForRender = () => {
        switch (filter) {
            case "completed":
                return tasks.filter(el => el.isDone)
            case "active":
                return tasks.filter(el =>el.isDone === false)
            default:
                return tasks


        }


    }






    return (
        <div className="App">
            <Todolist title="What to learn" tasks={getFilteredTasksForRender()} FuncR={removefunc} FinFunc={FinalFunc} AddTaskFunction={AddFunction}/>

        </div>
    );
}

export default App;

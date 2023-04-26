import React from 'react';
import './App.css';
import {Task} from "components/Task";
import {useSelector} from "react-redux";
import {TaskType} from "store/tasksReducer";
import {RootStateType} from "store/store";


function App() {

    const tasks = useSelector<RootStateType, TaskType[]>(state => state.tasks)

    const test = () => {
        console.log('test')
    }


    // useEffect(() => {
    //     axios.get('baseUrl/endPoint')
    //         // .then(res => {
    //         //     dispatch(fetchTasksAC(res.data))
    //         // })
    // }, [])


    return (
        <div className="App">
            {tasks.map(t => {
                return <Task task={t}/>
            })}
        </div>
    )
}

export default App

import axios from 'axios'
import { useEffect, useState } from 'react';

const fetchTask = async () => {
    const res = await axios.get(
        'http://localhost:3000/task'
    );
    return res;
};

const submitCreateTask = async (data:any) => {
    const res = await axios.post(
        'http://localhost:3000/task', data
    );
    return res;
};

export default function TaskPage() {
    const [tasks, setTasks] = useState<any>()
    const [enterTask, setEnterTask] = useState("")
        useEffect(() => {
            fetchTask().then((task:any)=>setTasks(task.data))
        }, [])

        const createTask = ()=>{
            submitCreateTask({taskName: enterTask, taskStatus: false})
        }

        return (
        <div>
            {
                tasks && tasks.map((task:any)=>(
                    <div>{task.taskName}</div>
                ))

            }

            <input value={enterTask} onChange={(e)=>setEnterTask(e.target.value)} placeholder='enter task'/>
            <button onClick={createTask}>Create Task</button>
        </div>
        )
}
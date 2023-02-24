
import { ITask } from './Interfaces';

interface Props {
    tasks: ITask[];
    deleteTask(taskDelete: number): void;
}

export const Tasks = ({ tasks, deleteTask }: Props) => {

    return(
        <div>
            {tasks.map((task) => (
            <div className='flex flex-col' key={task.id}>
                <div className='flex flex-row'>
                    <h1 className='bg-white rounded text-black m-3 p-3 grow'>{task.taskName}</h1>
                    <button onClick={() => deleteTask(task.id)} className='hover:bg-slate-500 p-3 rounded-lg'>X</button>
                </div>
            </div>
            ))}
        </div>
    )
};
import { FC, ChangeEvent, KeyboardEvent, useState } from 'react';
import { ITask } from './Interfaces';
import { Tasks } from './Tasks';

export const Content: FC = () => {

  const [task, setTask] = useState<string>('');
  const [toDo, setTodo] = useState<ITask[]>([]);
  const [taskId, setTaskId] = useState<number>(1);


  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
      setTask(event.target.value);
  };

  const handleTask = (): void => {

    if (task.trim() === '') {
      return;
    }

    const newTask: ITask = {
      taskName: task,
      isCompleted: false,
      id: taskId
    };

    setTodo([...toDo, newTask]);
    setTaskId(taskId + 1);

    setTask('');

  };

  
const deleteTask = (taskDelete: number): void => {
    setTodo(toDo.filter((task) => {
        return task.id !== taskDelete;
    }));
};

const handleKeyDown = (event: KeyboardEvent<HTMLInputElement>): void => {
    event.key === 'Enter' && handleTask();
}


  return (
    <div className="flex h-screen">
      <div className='bg-slate-600 rounded-lg p-5 align-center m-auto'>
        <input value={task} onKeyDown={handleKeyDown} onChange={handleChange} type="text" placeholder="Escreva uma tarefa" className='p-2 rounded-lg text-slate-900'/>
        <button onClick={handleTask} className='bg-sky-500 p-2 rounded m-2 text-white hover:bg-sky-800'>Adicionar</button>
        <Tasks deleteTask={deleteTask} tasks={toDo}/>
      </div>
    </div>
  );
}

import { PlusCircle } from 'phosphor-react';
import React, { useState } from 'react';
import { Task } from '../types';
import style from './NewTask.module.css';

interface NewTask {
    onCreateNewTask: React.Dispatch<React.SetStateAction<Task[]>>;
    tasks: Task[];
}

export function NewTask({onCreateNewTask, tasks}: NewTask) {

    const [newTaskDescription, setNewTaskDescription] = useState('');
    
    const handleCreateNewTask = () => {
        const id = Math.random();
        if (newTaskDescription !== '') {
            const newTask = {
                id: id,
                description: newTaskDescription,
                isComplete: false,
            }
            onCreateNewTask([...tasks, newTask]);
            setNewTaskDescription('');
        }
    };

    return (
        <div className={style.wrapper}>
            <input 
            placeholder="Adicione uma nova tarefa"
            type="text"
            onChange={(e) => setNewTaskDescription(e.target.value)}
            value={newTaskDescription}
            />

            <button 
            type="button"
            onClick={() => handleCreateNewTask()}
            >
                <span>Criar</span>
                <PlusCircle size={24} />
            </button>
        </div>
    );
}
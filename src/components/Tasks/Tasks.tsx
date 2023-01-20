import Clipboard from '../../assets/Clipboard.svg';
import { Trash } from 'phosphor-react';
import styles from './Tasks.module.css';
import React, { useState } from 'react';
import { Task } from '../types';

interface TasksProps {
    tasks: Task[];
    onTaskManipulation: React.Dispatch<React.SetStateAction<Task[]>>;
}

export function Tasks({ tasks, onTaskManipulation }: TasksProps) {

    const [completedTasks, setCompletedTasks] = useState<Task[]>([]);

    const handleDeleteTask = (id: number) => {
        const filteredTasks = tasks.filter(task => task.id !== id);
        onTaskManipulation(filteredTasks);
    };

    const handleToggleTaskCompletion = (id: number) => {
        const mapedTasks = tasks.map(task => task.id === id ? {
            ...task,
            isComplete: !task.isComplete
        } : task);

        onTaskManipulation(mapedTasks);
        setCompletedTasks(mapedTasks);
    };

    const isTaskListEmpty = tasks.length === 0

    return (
        <div className={styles.tasks}>
            <div className={styles.info}>
                <span className={styles.created}>
                    Tarefas criadas
                    <strong>{tasks.length}</strong>
                </span>
                <span className={styles.done}>
                    Concluídas
                    <strong>{completedTasks.length}</strong>
                </span>
            </div>

            {isTaskListEmpty ? (
                <div className={styles.empty}>
                    <img src={Clipboard} alt="" />
                    <p><strong>Você ainda não tem tarefas cadastradas</strong> <br />Crie tarefas e organize seus itens a fazer</p>
                </div>
            ) : (
                tasks.map((task) => {
                    return (
                        <div className={styles.list} key={task.id}>
                            <label className={styles.task}>
                                <input
                                    type="checkbox"
                                    readOnly
                                    checked={task.isComplete}
                                    onClick={() => handleToggleTaskCompletion(task.id)}
                                />
                                <span className={styles.checkmark}></span>
                                <p>{task.description}</p>
                                <button
                                    type="button"
                                    onClick={() => handleDeleteTask(task.id)}
                                >
                                    <Trash size={20} />
                                </button>
                            </label>
                        </div>
                    )
                })
            )
            }
        </div>
    )
}
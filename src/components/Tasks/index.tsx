import { Trash } from 'phosphor-react'

import styles from './Tasks.module.css'
import clipboard from '../../assets/img/clipboard.svg'
import { useState } from 'react'
import { Form } from '../Form'

interface Task {
    id: number;
    title: string;
    complete: boolean;
  }  

export function Tasks() {

    const [tasks, setTasks] = useState<Task[]>([])

    function removeTask(id: number) {
        const response = tasks.filter(fil => fil.id !== id)
        setTasks(response)
    }

    function taskCompleted(id: number) {
        const newTask = tasks.map(task => task.id === id ? {
            ...task,
            complete: !task.complete
        } : task)
        setTasks(newTask)
    }

    function editTasks(task: Task[]) {
        setTasks(task);
    }

    const concluded = tasks.filter(task => task.complete === true)


    return (
        <>        
        <Form editTasks={editTasks} />
        <section className={styles.tasks}>
            <header>
                <div>
                    <span className={styles.tasksCreated}>Tarefas criadas</span>
                    <span className={styles.tasksNumbers}>{tasks.length}</span>
                </div>
                <div>
                    <span className={styles.tasksConcluded}>Concluídas</span>
                    <span className={styles.tasksNumbers}>{concluded.length} de {tasks.length}</span>
                </div>
            </header>
            <main>                
                {
                tasks.length > 0 ? (
                    tasks.map(task => (
                        <div key={task.id} className={styles.showTasks}>
                            <label>
                                <input type="checkbox" checked={task.complete} onChange={() => taskCompleted(task.id)} />
                                <span>{task.title}</span>
                            </label>
                            <div className={styles.trash} onClick={() => removeTask(task.id)}>
                                <Trash size={16} />
                            </div>
                        </div>
                    ))
                ) : (
                    <div className={styles.notTasks}>
                        <img src={clipboard} alt="Não há tarefas" />
                        <p>
                            Você ainda não tem tarefas cadastradas
                            <span>Crie tarefas e organize seus itens a fazer</span>
                        </p>
                    </div>
                )}
            </main>
        </section>
        </>
    )
}

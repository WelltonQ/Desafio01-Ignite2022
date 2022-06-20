import { PlusCircle } from 'phosphor-react'
import { FormEvent, useState } from 'react'

import styles from './Form.module.css'

interface Task {
  id: number;
  title: string;
  complete: boolean;
}  

interface PropsTask {
  editTasks: (task: Task[]) => void;
}

export function Form({ editTasks }: PropsTask) {

  const [newTaskTitle, setNewTaskTitle] = useState('')
  
  function handleCreateNewTask(event: FormEvent) {
    event.preventDefault();
    if (!newTaskTitle) return;

    const createNewTask = {
        id: Math.random(),
        title: newTaskTitle,
        complete: false
      }

      editTasks((oldState) => [...oldState, createNewTask])
      setNewTaskTitle('')
  }

  return (
    <form onSubmit={handleCreateNewTask} className={styles.form}>
        <input type="text" placeholder='Adicione uma nova tarefa' value={newTaskTitle} onChange={e => setNewTaskTitle(e.target.value)} />
        <button className={styles.createTask} onClick={handleCreateNewTask}>Criar <PlusCircle size={18}/></button>
    </form>
  )
}

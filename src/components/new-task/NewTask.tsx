import { FormEvent } from "react"
import { ListOfTasksType } from "../../App"
import styles from "./NewTask.module.css"
import { PlusCircle } from "@phosphor-icons/react"
import { useRef } from "react"


interface NewTaskParams {
  onAddListItem: React.Dispatch<React.SetStateAction<ListOfTasksType>>
}
function NewTask({onAddListItem}: NewTaskParams) {

  const descriptionRef = useRef<HTMLInputElement>(null)

  function handleNewTask(e: FormEvent<HTMLFormElement>){
    e.preventDefault()

    if(!descriptionRef.current) return
    const lengthOfNewDescription = descriptionRef.current.value.length
    if(lengthOfNewDescription === 0) return

    const newID = (10 * Math.random()).toFixed(2).toString()
    
    const newTask = {
      id: newID,
      description: descriptionRef.current.value,
      isChecked: false
    }

    onAddListItem(prev => {
      localStorage.setItem("todo_list_of_tasks", JSON.stringify([...prev, newTask]))
      return [...prev, newTask]
    })
    descriptionRef.current.value = ""
    
  }

  return (
    <form className={styles.container} onSubmit={e => handleNewTask(e)}>
      <input ref={descriptionRef} className={styles.newTaskInput} type="text" placeholder="Adicionar uma nova tarefa" />
      <button className={styles.submitBtn} type="submit">Criar <PlusCircle size={18}/></button>
    </form>
  )
}

export { NewTask }
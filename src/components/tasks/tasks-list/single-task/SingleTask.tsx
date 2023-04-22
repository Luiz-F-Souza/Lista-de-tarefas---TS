import { ListOfTasksType } from "../../../../App"
import  styles from "./SingleTask.module.css"
import { Trash, Check } from "@phosphor-icons/react"


interface SingleTaskProps {
  id: string,
  description: string,
  isChecked: boolean,
  onDeleteTask: (id: string) => void,
  onCheckTask: (id: string) => void
}


function SingleTask({ id ,description, isChecked, onDeleteTask, onCheckTask }:SingleTaskProps) {

  return (
    <section className={styles.container}>

      <button onClick={() => onCheckTask(id)} className={`${styles.checkbox} ${isChecked ? styles.checked : ""}`} title="Botão para marcar e desmarcar a tarefa">
        {isChecked && <Check size={16} />}
      </button>

      <p className={`${styles.description} ${isChecked ? styles.checked : ""}`}>
        {description}
      </p>

      <button className={styles.deleteButton} title="Botão para deletar a tarefa listada" onClick={() => onDeleteTask(id)}>
        <Trash size={20} />
      </button>
      
    </section>
  )
}

export { SingleTask }
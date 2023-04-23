import styles from "./TasksList.module.css"
import clipboardSvgPath from "../../../assets/clipboard.svg"
import { SingleTask } from "./single-task/SingleTask"
import { ListOfTasksType } from "../../../App"

interface TasksListProps {
  listOfTasks: ListOfTasksType,
  onListOfTypesChange: React.Dispatch<React.SetStateAction<ListOfTasksType>>
}

function TasksList({ listOfTasks, onListOfTypesChange }: TasksListProps) {

  function handleDelete(id: string){
    const newList = listOfTasks.filter( task => id !== task.id )
    const jsonOfNewList = JSON.stringify(newList)

    onListOfTypesChange(newList)
    localStorage.setItem("todo_list_of_tasks", jsonOfNewList)
  }

  function handleCheck(id: string){
    const newList = listOfTasks.map( task => {
      if(id !== task.id) return task

      task.isChecked = !task.isChecked
      return task
    })
    const jsonOfNewList = JSON.stringify(newList)

    onListOfTypesChange(newList)
    localStorage.setItem("todo_list_of_tasks", jsonOfNewList)
    
  }

  return (
    <article className={styles.container}>

      {listOfTasks.length === 0 &&
        <div className={styles.noTaskContainer}>
          <img className={styles.svg} src={clipboardSvgPath} alt="" />

          <p className={styles.noTasksMsg}>
            <strong>Você ainda não tem tarefas cadastradas</strong>
            <span>Crie tarefas e organize seus itens a fazer</span>
          </p>
        </div>
      }

      {listOfTasks.length !== 0 && 
        listOfTasks.map(task => {

          const { description, isChecked, id } = task
          return(
            <SingleTask key={id} id={id} description={description} isChecked={isChecked} onDeleteTask={handleDelete} onCheckTask={handleCheck} />
          )
        })
      }
      
    </article>
  )
}

export { TasksList }
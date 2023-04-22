import { ListOfTasksType } from "../../App"
import styles from "./Tasks.module.css"
import { TasksList } from "./tasks-list/TasksList"


interface TasksProps {
  listOfTasks: ListOfTasksType,
  onListOfTypesChange:  React.Dispatch<React.SetStateAction<ListOfTasksType>>
}
function Tasks({listOfTasks, onListOfTypesChange}: TasksProps) {

  const howManyTasks = listOfTasks.length
  const howManyCompletedTasks = listOfTasks.reduce(( acc, task ) =>  task.isChecked ? acc + 1 : acc, 0)

  return (
    <main className={styles.container}>
      <header className={styles.header}>
        <p>Tarefas criadas 
          <span>
            {howManyTasks}
          </span>
        </p>

        <p>
          Concluídas
          <span>
            {howManyCompletedTasks}
          </span>
        </p>
      </header>

      <TasksList listOfTasks={listOfTasks} onListOfTypesChange={onListOfTypesChange} />
    </main>
  )
}

export { Tasks }
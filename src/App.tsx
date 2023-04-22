import { useState, useEffect } from "react"
import { Header } from "./components/header/Header"
import { NewTask } from "./components/new-task/NewTask"
import { Tasks } from "./components/tasks/Tasks"


export type ListOfTasksType  = {
  isChecked: boolean,
  description: string,
  id: string
}[]

const mockedListOfTasks: ListOfTasksType = [
  {
    isChecked: true,
    description: "Terminar primeira parte da todo-list",
    id: "1"
  },
  {
    isChecked: true,
    description: "Criar mock da ListOfTasks",
    id: "2"
  },
  {
    isChecked: true,
    description: "Finalizar to-do list",
    id: "3"
  },
  {
    isChecked: false,
    description: "Ganhar na mega sena haha",
    id: "4"
  },
]

function App() {

  const [ listOfTasks, setListOfTasks ] = useState<ListOfTasksType>([])

  useEffect(() => {
    const json = localStorage.getItem("todo_list_of_tasks")

    if(!json) return setListOfTasks(mockedListOfTasks)
    else{
      const tasksInsideLocalStoreg: ListOfTasksType = JSON.parse(json)
      setListOfTasks(tasksInsideLocalStoreg)
    }

  },[])
  
  return (
    <div>
      <Header />

      <NewTask onAddListItem={setListOfTasks} />
      
      <Tasks listOfTasks={listOfTasks} onListOfTypesChange={setListOfTasks} />
    </div>
  )
}

export { App }

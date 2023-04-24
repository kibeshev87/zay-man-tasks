import avatar from "../images/icon-avatar.png";


const initialState: TaskType[] = [
    {id: '1', avatar, data: '21 апреля 2023', isCompleted: true},
    {id: '2', avatar, data: '21 апреля 2023', isCompleted: false, priority: 'Низкий'},
    {id: '3', avatar, data: '21 апреля 2023', isCompleted: true, priority: 'Средний'},
    {id: '4', avatar, data: '21 апреля 2023', isCompleted: false, priority: 'Высокий'}
]

export type PriorityTaskType = 'Низкий' | 'Средний' | 'Высокий'


export type TaskType = {
    id: string
    avatar: string
    data: string
    // description: string
    priority?: PriorityTaskType
    isCompleted: boolean
}


export const tasksReducer = (state: TaskType[] = initialState, action: tasksReducerActionType): TaskType[] => {
    switch (action.type) {
        case 'FETCH-TASKS': {
            return action.tasks
        }
        case "CHANGE-TASKS": {
            return state.map(el => el.id === action.id ? {...el, description: action.description} : el)
        }
        case "IS-COMPLETED-TASKS": {
            return state.map(el => el.id === action.id ? {...el, isCompleted: action.isCompleted} : el)
        }
        case "DELETE-TASKS": {
            return state.filter(el => el.id !== action.id)
        }
        default:
            return state
    }
}
type tasksReducerActionType = FetchTasksACType
    | DeleteTasksACType
    | ChangeTasksACType
    | IsCompletedTasksACType

export type FetchTasksACType = ReturnType<typeof fetchTasksAC>
export const fetchTasksAC = (tasks: TaskType[]) =>
    ({type: 'FETCH-TASKS', tasks} as const)

export type DeleteTasksACType = ReturnType<typeof deleteTasksAC>
export const deleteTasksAC = (id: string) =>
    ({type: 'DELETE-TASKS', id} as const)

export type ChangeTasksACType = ReturnType<typeof changeTasksAC>
export const changeTasksAC = (id: string, description: string) =>
    ({type: 'CHANGE-TASKS', id, description} as const)

export type IsCompletedTasksACType = ReturnType<typeof isCompletedTasksAC>
export const isCompletedTasksAC = (id: string, isCompleted: boolean) =>
    ({type: 'IS-COMPLETED-TASKS', id, isCompleted} as const)























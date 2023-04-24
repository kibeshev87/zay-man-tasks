import {combineReducers, legacy_createStore as createStore} from "redux";
import {tasksReducer} from "store/tasksReducer";

const rootReducer = combineReducers({
    tasks: tasksReducer
})

export const store = createStore(rootReducer)

export type RootStateType = ReturnType<typeof rootReducer>
import { ADD_LIST, ACTIVE_LIST, COMPLETED_LIST, REMOVE_LIST, EDIT_LIST, DONE_LIST } from "../action/todoAction";

const initialState = {
    active: ["Buy Milk", "Buy T-Shirt"],
    completed: ["done 1", "done 2"],
}

function todoReducer(state = initialState, action) {
    console.log(action)

    switch(action.type) {
        case ADD_LIST:
            return {
                ...initialState,
                active: [...state.active, action.add]
            }
        case ACTIVE_LIST:
            return {
                panggil: "add"
            }
        case COMPLETED_LIST:
            return {
                panggil: "add"
            }
        case DONE_LIST:
            console.log("done list dipanggil", action.index)
            console.log("task selesai: ", state.active[action.index])
            const doneTask = state.active[action.index]
            const newTodo = state.active.filter((item, index) => index != action.index)
            return {
                ...initialState,
                active: newTodo,
                completed: [...state.completed, doneTask]
            }
        case REMOVE_LIST:
            return {
                panggil: "add"
            }
        case EDIT_LIST:
            return {
                panggil: "add"
            }
        default: return state;
    }
}

export default todoReducer
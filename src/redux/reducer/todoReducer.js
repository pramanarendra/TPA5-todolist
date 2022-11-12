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
                ...state,
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
                ...state,
                active: newTodo,
                completed: [...state.completed, doneTask]
            }
        case REMOVE_LIST:
            console.log("remove dipanggil")
            console.log("task dihapus: ", action.index)
            const deletedTodo = state.active.filter((item, index) => index != action.index)
            return {
                ...state,
                active: deletedTodo
            }
        case EDIT_LIST:
            console.log("edit dipanggil")
            console.log("task yang diedit: ", state.active[action.index])
            console.log("diedit menjadi: ", action.input)
            const editedTodo = state.active.map((item, index) => {
                if(index == action.index)
                    return action.input
                return item
            })
            console.log("edited: ", editedTodo)
            return {
                ...state,
                active: editedTodo
            }
        default: return state;
    }
}

export default todoReducer
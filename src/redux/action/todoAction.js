export const ADD_LIST = "ADD_LIST";
export const ACTIVE_LIST = "ACTIVE_LIST";
export const COMPLETED_LIST = "COMPLETED_LIST";
export const DONE_LIST = "DONE_LIST";
export const REMOVE_LIST = "REMOVE_LIST";
export const EDIT_LIST = "EDIT_LIST";

export function addList(input) {
    return {
        type: ADD_LIST,
        add: input
    }
}

export function activeList() {
    return {
        type: ACTIVE_LIST
    }
}

export function completedList() {
    return {
        type: COMPLETED_LIST
    }
}

export function doneList(index) {
    return {
        type: DONE_LIST,
        index
    }
}

export function removeList(index) {
    return {
        type: REMOVE_LIST,
        index
    }
}

export function editList(index,  input) {
    return {
        type: EDIT_LIST,
        index, input
    }
}
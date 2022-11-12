import React, { useState } from 'react'
import '../styles/list.css'
import DoneIcon from '../assets/done-icon.svg'
import EditIcon from '../assets/edit-icon.svg'
import DeleteIcon from '../assets/delete-icon.svg'
import { doneList, editList, removeList } from '../redux/action/todoAction'
import { useDispatch } from 'react-redux'

const List = (props) => {

    const [isEditPopUp, setEditPopUp] = useState(false);

    const dispatch = useDispatch();

    const handleDone = (index) => {
        dispatch(doneList(index))
    }

    const handleRemove = (index) => {
        dispatch(removeList(index))
    }

    const toggleEdit = () => {
        setEditPopUp(!isEditPopUp)
    }

    const handleEdit = (index, input) => {
        dispatch(editList(index, input.target[0].value))

        // dispatch(addList(input.target[0].value))
        input.preventDefault()
        // console.log("indeks ke-", index)
        // console.log(input.target[0].value)
        input.target[0].value = null
        toggleEdit()
    }

    return (
        <div className='list-container'>
            <div className='left-list'>
                <img src={DoneIcon} alt="" onClick={() => handleDone(props.urutan)} />
                <p>{props.value}</p>
                <p>{props.urutan}</p>
            </div>
            <div className='right-list'>
                <img src={EditIcon} alt="" onClick={() => toggleEdit(props.urutan)} />
                <img src={DeleteIcon} alt="" onClick={() => handleRemove(props.urutan)} />
            </div>

            {
                isEditPopUp &&
                <div className='edit-popup'>
                    <form action="" onSubmit={(e) => handleEdit(props.urutan, e)}>
                        <label htmlFor="">Edit Task</label>
                        <input type="text" />
                        <div>
                            <p onClick={() => toggleEdit(props.urutan)}>Batalkan Edit</p>
                            <button type='submit'>Edit To Do</button>
                        </div>
                    </form>
                </div>
            }
        </div>
    )
}

export default List
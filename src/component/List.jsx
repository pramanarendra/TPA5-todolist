import React from 'react'
import '../styles/list.css'
import DoneIcon from '../assets/done-icon.svg'
import EditIcon from '../assets/edit-icon.svg'
import DeleteIcon from '../assets/delete-icon.svg'
import { doneList } from '../redux/action/todoAction'
import { useDispatch } from 'react-redux'

const List = (props) => {

    const dispatch = useDispatch();

    const handleDone = (index) => {
        dispatch(doneList(index))
    }

    return (
        <div className='list-container'>
            <div className='left-list'>
                <img src={DoneIcon} alt="" onClick={() => handleDone(props.urutan)} />
                <p>{props.value}</p>
                <p>{props.urutan}</p>
            </div>
            <div className='right-list'>
                <img src={EditIcon} alt="" />
                <img src={DeleteIcon} alt="" />
            </div>
        </div>
    )
}

export default List
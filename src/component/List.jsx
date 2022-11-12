import React from 'react'
import DoneIcon from '../assets/done-icon.svg'
import EditIcon from '../assets/edit-icon.svg'
import DeleteIcon from '../assets/delete-icon.svg'
import { doneList } from '../redux/action/todoAction'

const List = (props) => {

    return (
        <div className='list-container'>
            <div className='left-list'>
                <img src={DoneIcon} alt="" />
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
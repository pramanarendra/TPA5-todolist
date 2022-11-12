import React from 'react'
import { useDispatch } from 'react-redux'
import { addList } from '../redux/action/todoAction'

const AddBar = () => {
    const dispatch = useDispatch()

    const handleSubmit = (input) => {
        dispatch(addList(input.target[0].value))
        input.preventDefault()
        console.log(input.target[0].value)
        input.target[0].value = null
    }

    return (
        <section id='addBar'>
            <form action="" onSubmit={(e) => handleSubmit(e)}>
                <input type="text" placeholder='What to do' />
                <button type='submit'>Add</button>
            </form>
        </section >
    )
}

export default AddBar
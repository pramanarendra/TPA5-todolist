import React from 'react'
import { useSelector } from 'react-redux'
import AddBar from './AddBar'
import FilterTab from './FilterTab'
import List from './List'

const TodoList = () => {
    const { active } = useSelector(state => state);
    const { completed } = useSelector(state => state);
    console.log(active)
    console.log(completed)

    return (
        <>
            <h1>What's The Plan for Today?</h1>
            <AddBar />
            <FilterTab />
            {active.map((item, index) => (
                <List key={index} value={item} urutan={index} />
            ))}
            <p>{completed}</p>
        </>
    )
}

export default TodoList
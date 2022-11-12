import React from 'react'
import { useSelector } from 'react-redux'
import AddBar from './AddBar'
import FilterTab from './FilterTab'
import List from './List'

const TodoList = () => {
    const { active } = useSelector(state => state);
    const { panggil } = useSelector(state => state)
    console.log(panggil)
    console.log(active)

    return (
        <>
            <h1>What's The Plan for Today?</h1>
            <AddBar />
            <FilterTab />
            {active.map((item, index) => (
                <List key={index} value={item} urutan={index} />
            ))}
            <p>{panggil}</p>
        </>
    )
}

export default TodoList
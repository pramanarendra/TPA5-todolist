import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import AddBar from './AddBar'
import FilterTab from './FilterTab'
import List from './List'

const TodoList = () => {
    const { active } = useSelector(state => state);
    const { completed } = useSelector(state => state);
    console.log(active)
    console.log(completed)

    const [activeList, setActiveList] = useState(true);
    const [completedList, setCompletedList] = useState(true);

    const handleAll = () => {
        setActiveList(true);
        setCompletedList(true);
    }

    const handleActive = () => {
        setActiveList(true);
        setCompletedList(false);
    }

    const handleCompleted = () => {
        setCompletedList(true);
        setActiveList(false);
    }

    return (
        <>
            <h1>What's The Plan for Today?</h1>
            <AddBar />
            <nav>
                <ul>
                    <li onClick={handleAll}>All</li>
                    <li onClick={handleActive}>Active</li>
                    <li onClick={handleCompleted}>Completed</li>
                </ul>
            </nav>

            {
                activeList && <section>
                    {active.map((item, index) => (
                        <List key={index} value={item} urutan={index} />))}
                </section>
            }

            {
                completedList && <section>
                    {completed.map((item, index) => (
                        <List key={index} value={item} urutan={index} />))}
                </section>
            }
        </>
    )
}

export default TodoList
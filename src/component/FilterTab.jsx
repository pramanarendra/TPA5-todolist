import React, { useState } from 'react'

const FilterTab = () => {
    const [allList, setAllList] = useState(true);
    const [activeList, setActiveList] = useState(false);
    const [completedList, setCompletedList] = useState(false);

    const handleAll = () => {
        setAllList(true);
        setActiveList(false);
        setCompletedList(false);
    }

    const handleActive = () => {
        setAllList(false);
        setActiveList(true);
        setCompletedList(false);
    }

    const handleCompleted = () => {
        setAllList(false);
        setActiveList(false);
        setCompletedList(true);
    }

    return (
        <section id='nav'>
            <nav>
                <ul className='list'>
                    <li className="active" onClick={handleAll} >Alli</li>
                    <li onClick={handleActive} className={activeList ? "active" : ""}>Active</li>
                    <li onClick={handleCompleted} className={completedList ? "active" : ""}>Completed</li>
                </ul>
            </nav>
        </section>
    )
}

export default FilterTab
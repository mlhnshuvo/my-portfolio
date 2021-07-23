import React, { useState } from 'react';
import Sidebar from "./Sidebar"
import Main from "./Main"

const Index = () => {
    const [state, setState] = useState()
    const refHandler = (value) => {
        setState(value)
    }

    return (
        <div className="bind">
            <div className="bind__overlay">
                <Sidebar refHandler={refHandler} />
                <Main goTo={state} />
            </div>
        </div>
    )
}

export default Index;

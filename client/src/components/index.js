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
                <div className="row">
                    <div className="col-lg-2 col-md-4">
                        <Sidebar refHandler={refHandler} />
                    </div>
                    <div className="col-lg-10 col-md-8">
                        <div>
                            <Main goTo={state} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Index;

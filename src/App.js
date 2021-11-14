import React from 'react'
import Menu from './components/Menu'
import Content from './components/Content'

const App = () => {

    return (
        <div className="app__container" >
            <div>
                <Menu />
            </div>
            <div id="content">
                <Content />
            </div>
        </div>
    )
}

export default App

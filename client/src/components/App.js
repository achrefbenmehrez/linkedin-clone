import React from 'react'
import './App.css'
import Header from './Header/Header'
import Sidebar from './Sidebar/Sidebar'
import Feed from './Feed/Feed'
import { useSelector } from 'react-redux'
import Login from './Login/Login'
import Widgets from './Widgets/Widgets'

const App = () => {
    const { authData } = useSelector((state) => state.users)
    const user = JSON.parse(localStorage.getItem('profile'))

    return (
        <div className="app">
            {!user ? <Login /> : (
                <>
                    <Header />
                    <div className="app_body">
                        <Sidebar />
                        <Feed />
                        <Widgets />
                    </div>
                </>
            )}
        </div>
    )
}

export default App

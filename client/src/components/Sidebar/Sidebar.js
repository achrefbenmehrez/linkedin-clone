import React, { useState } from 'react'
import { Avatar } from "@material-ui/core"
import './Sidebar.css'

function Sidebar() {
    const [user, setUser] = useState(JSON.parse(localStorage.getItem('profile')))

    const recentItem = (topic) => (
        <div className="sidebar_recentItem">
            <span className="sidebar_hash">#</span>
            <p>{topic}</p>
        </div>
    )

    return (
        <div className="sidebar">
            <div className="sidebar_top">
                <img src="https://images.unsplash.com/photo-1547922374-968968e3f658?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=323&q=80" alt="" />
                <Avatar className="sidebar_avatar" src={user?.result?.photoUrl}>{!user?.result?.photoUrl && user?.result?.fullname.charAt(0) }</Avatar>
                <h2>{user?.result?.fullname}</h2>
                <h4>{user?.result?.email}</h4>
            </div>
            <div className="sidebar_stats">
                <div className="sidebar_stat">
                    <p>Who viewed you</p>
                    <p className="sidebar_statNumber">2,54</p>
                </div>
                <div className="sidebar_stat">
                    <p>Views on post</p>
                    <p className="sidebar_statNumber">2,54</p>
                </div>
            </div>
            <div className="sidebar_bottom">
                <p>Recent</p>
                {recentItem('reactjs')}
                {recentItem('reactjs')}
                {recentItem('reactjs')}
                {recentItem('reactjs')}
                {recentItem('reactjs')}
            </div>
        </div>
    )
}

export default Sidebar

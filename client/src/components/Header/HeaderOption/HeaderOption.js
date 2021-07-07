import React, { useState } from 'react'
import './HeaderOption.css'
import { Avatar } from '@material-ui/core'

function HeaderOption({ title, Icon, avatar, onClick }) {
    const [user, setUser] = useState(JSON.parse(localStorage.getItem('profile')))

    return (
        <div className="headerOption">
            {Icon && <Icon onClick={onClick} className="headerOption_icon" />}
            {avatar && (
                <Avatar className="headerOption_icon">{!user?.result?.photoUrl && user?.result?.fullname.charAt(0)}</Avatar>
            )}
            <h3 className="headerOption_title">{title}</h3>
        </div>
    )
}

export default HeaderOption

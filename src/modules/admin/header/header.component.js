import React from 'react'
import {Link} from 'react-router-dom'

const HeaderComponet = props =>{
    return(
        <header>
            <div>This is the Header</div>
            <Link to="/admin/login">Login</Link>
            <Link to="/admin/register">Register</Link>

        </header>
    )
}

export default HeaderComponet
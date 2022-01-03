import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import { faTimes } from '@fortawesome/free-solid-svg-icons'

const Nav = () => {

    const [openMenu, setOpenMenu] = useState(false)
    let menu;

    if(openMenu){
        menu = <ul className='nav-links'>
            <li className='close-icon'><FontAwesomeIcon icon={faTimes} onClick={()=>setOpenMenu(false)}/></li>
            <li className="nav-links-items">Home</li>
            <li className="nav-links-items">Gallery</li>
            <li className="nav-links-items">Contact</li>
        </ul>
    }

    const openMenuHandler = () => {
        setOpenMenu(!openMenu)
    }

    return (
        <nav>

            <span className='menu-bars'>
            <FontAwesomeIcon icon={faBars} onClick={openMenuHandler}/>
            </span>

            {menu}
            
        </nav>
    )
}

export default Nav

import React, { useEffect } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faBars,faMinus} from '@fortawesome/free-solid-svg-icons'
import { MenuAnimation } from '../services/Animation'

const Menu = () => {

    useEffect(() => {
        MenuAnimation();
    }, [])

    return (
        <div className="menu__container" id="menu">
            <div className="menu__content">
                <FontAwesomeIcon icon={faBars}  className="menu__icons" id="menu-open"/>           
                <FontAwesomeIcon icon={faMinus}  className="menu__icons menu__icons-toggle" id="menu-close"/>
                <div className="menu__items">
                    <div className="menu__items-container">
                        <span className="menu__item-icon">
                            🐶
                        </span>
                        <p className="menu__item-title">Dog</p>
                    </div>
                    <div className="menu__items-container">
                        <span className="menu__item-icon">
                            🐱
                        </span>
                        <p className="menu__item-title">Cat</p>
                    </div>
                    <div className="menu__items-container">
                        <span className="menu__item-icon">
                            🐴
                        </span>
                        <p className="menu__item-title">Horse of apocalipsis</p>
                    </div>
                </div>           
            </div>
        </div>
    )
}

export default Menu

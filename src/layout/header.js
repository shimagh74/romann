import React, {Fragment} from 'react'
import {Menu, Avatar} from 'antd'
import {LeftOutlined} from '@ant-design/icons'
import './header.scss'
import {withRouter, NavLink} from 'react-router-dom'
import logo from '../assets/logo.jpeg';

const CustomHeader = ({history, dataSource}) => {
    const handleClickMenu = e => {
        history.replace("/");
    }
    return (
        <div className="main_header">
            <div className="main_header_title" onClick={handleClickMenu}>
                <img src={logo} className="logosite_title"></img>
            </div>
            <div className="header_wrapper">
                <div className="header_right">
                    <nav role='navigation' className="menu">
                        <label for="menu">
                            <i className="mdi mdi-menu menu_bar"></i>
                            {/* <img src={logo} className="logosite_title"></img> */}
                        </label>
                        <input type="checkbox" id="menu"/>
                        <ul className="top_menu">
                            <li>
                                <a href="/buy/Buy">Buy</a>
                            </li>
                            <li>
                                <a href="/aboutUs/AboutUs"> About us</a>
                            </li>
                            <li>
                                <a href="/contact/Contact">
                                Contact us</a>
                            </li>
                            <li>
                                <a href="/mag/Mag">
                                News</a>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
        </div>
    )
}

export default withRouter(CustomHeader)
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
                                <a href="/buy/Buy">خرید</a>
                            </li>
                            {/* <li className="menu-hasdropdown">
                                <a href="/rent/Rent">رهن و اجاره
                                    <label title="toggle menu" for="about">
                                        <i className="mdi mdi-chevron-down"></i>
                                    </label>
                                </a>
                                <input type="checkbox" id="about"/>
                                <ul className="menu-dropdown">
                                    <li>
                                        <a href="">رهن و اجاره ویلا</a>
                                    </li>
                                    <li>
                                        <a href="">رهن و اجاره باغ</a>
                                    </li>
                                    <li className="menu-hasdropdown menu-hasflyout">
                                        <a href="">رهن و اجاره آپارتمان مسکونی {/* <label title="toggle menu" for="services">
                                    <i className="mdi mdi-chevron-down"></i>
                                        <i class="fa fa-caret-right menu-righticon"></i>
                                    </label> */}
                                        {/* </a> */}
                                        {/* <input type="checkbox" id="services"/>
                                <ul class="menu-dropdown">
                                    <li>
                                        <a href="">Service 1</a>
                                    </li>
                                    <li>
                                        <a href="">Service 2</a>
                                    </li>
                                    <li>
                                        <a href="">Service 3</a>
                                    </li>
                                </ul>  */}
                                    {/* </li> */}
                                {/* </ul> */}
                            {/* </li>  */}
                            <li>
                                <a href="/aboutUs/AboutUs">درباره ما</a>
                            </li>
                            <li>
                                <a href="/contact/Contact">
                                    تماس با ما</a>
                            </li>
                            <li>
                                <a href="/mag/Mag">
                                      مجله رومن</a>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
        </div>
    )
}

export default withRouter(CustomHeader)
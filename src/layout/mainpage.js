import React, {PureComponent} from 'react'
import {Layout} from 'antd'
import './mainpage.scss'
import CustomHeader from './header';
import CustomFooter from './footer';

class Mainpage extends PureComponent {
    constructor(props) {
        super(props)
        this.state = {
            headerMenu: this.createMenu()
        }
    }
    createMenu = () => {
        return [
            {
                id: 0,
                title: "خرید",
                innerMenu: [
                    {
                        id: 0,
                        title: "مدیریت احکام",
                    }, {
                        id: 1,
                        title: "مغایرت گیری احکام و قوانین",
                    }
                    , {
                        id: 2,
                        title: "لیست ترابردها",
                    }
                ]
            }, {
                id: 1,
                title: "رهن و اجاره ",
            },
            {
                id: 2,
                title: " تماس با ما",
            },
            {
                id:3,
                title: " درباره ما",
            },
            {
                id: 4,
                title: " وبلاگ",
                // link: "/ResponseMessageManager/ResponseMessageManager"

            },
        ]
    }
    render() {
        const {Footer} = Layout;
        return (
            <div className="mainpage_layout">
                <CustomHeader dataSource={this.state.headerMenu}/>
                <div className="mainpage_container">
                    {/* <div className="main_container"> */}
                        {this.props.children}
                    {/* </div> */}
                </div>
                <CustomFooter/>
            </div>
        )
    }
}
export default Mainpage

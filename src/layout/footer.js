import React, {Fragment} from 'react'
import './mainpage.scss'
import {withRouter} from 'react-router-dom'
import logoetehadiyeh from "../assets/logo-etehadiyeh.png"
import samandehi from "../assets/10.jpg"
import unnamad from "../assets/unnamed.jpg"

const CustomFooter = ({history, dataSource}) => {
    return (
        <div className="footer flex-col">
            <div className="social-medias">
                <a href="#">
                    <i className="mdi mdi-telegram"></i>
                </a>
                <a href="#">
                    <i className="mdi mdi-instagram"></i>
                </a>
                <a href="#">
                    <i className="mdi mdi-twitter"></i>
                </a>
                <a href="#">
                    <i className="mdi mdi-linkedin"></i>

                </a>
            </div>
            <ul className="footer-part">
                <li className="menu-item">
                    <a href="#">خرید</a>
                </li>
                <li className="menu-item">
                    <a href="#">رهن و اجاره</a>
                </li>
                <li className="menu-item">
                    <a href="#">درباره ما</a>
                </li>
                <li className="menu-item">
                    <a href="#">تماس با ما</a>
                </li>
                <li className="menu-item">
                    <a href="#">پرسش و پاسخ</a>
                </li>

            </ul>
            <div className="certificate ">
                <div className="certificate-item">
                    <img src={logoetehadiyeh} alt="Logo" className=""/>
                </div>
                <div className="certificate-item">
                    <img src={samandehi} alt="Logo" className=""/>
                </div>
                <div className="certificate-item">
                    <img src={unnamad} alt="Logo" className=""/>
                </div>
            </div>
            <div className="address-and-number">
                <p>
                    <i className="mdi mdi-map-marker-outline"></i>
                    تهران - خیابان ولیعصر- کوچه ی شقایق - پلاک59</p>
                <h3>
                    <i
                        className="mdi mdi-phone-classic"
                        style={{
                        marginLeft: "5px"
                    }}></i>
                    021-229928257
                </h3>
            </div>
            <div className="copyright">
                <span>کلیه حقوق این سایت متعلق به سایت رومن می باشد</span>
            </div>

        </div>
    )
}

export default withRouter(CustomFooter)
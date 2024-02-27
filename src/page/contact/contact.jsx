import React from 'react'
import Mainpage from '../../layout/mainpage'
import './contact.scss'

class Contact extends React.Component {
    constructor(props) {
        super(props)
        this.state = {}
    }
    render() {
        return (
            <Mainpage>
                <div id="contact" className="wi-85 container">
                    <div className="hi-100 flex-row jus-center al-start wi-100">
                        <div className="wrapper wi-100">
                            <div className="title flex-col al-center jus-start ng-star-inserted wi-100">
                                <h1>با رومن در تماس باشید</h1>
                                <div className="address-and-number">
                                    <p>
                                        <i
                                            className="mdi mdi-map-marker-outline"
                                            style={{
                                            marginLeft: "5px",
                                            color: "#e8b30b"
                                        }}></i>
                                        آدرس : تهران - خیابان ولیعصر- کوچه ی شقایق - پلاک59</p>
                                    <a>
                                        <i
                                            className="mdi mdi-phone-classic"
                                            style={{
                                            marginLeft: "5px",
                                            color: "#e8b30b"
                                        }}></i>
                                        تلفن : 021-229928257
                                    </a>
                                </div>
                                <div className="tealish-line"></div>
                                <p>لطفا برای تماس با ما و یا پیگیری سریع شکایات از فرم زیر استفاده کنید و در
                                    صورت امکان اطلاعات را به فارسی وارد نمایید</p>
                            </div>
                            <div className="inputs wi-100 flex-col jus-start al-center ng-star-inserted">
                                <form className="ng-untouched ng-pristine ng-invalid">
                                    <section className="input-container wi-80">
                                        <input placeholder="نام" className="ng-untouched ng-pristine ng-invalid"></input>
                                        <input
                                            placeholder="پست الکترونیکی"
                                            className="ng-untouched ng-pristine ng-invalid"></input>
                                    </section>
                                    <section className="input-container wi-80">
                                        <input placeholder="موضوع" className="ng-untouched ng-pristine ng-invalid"></input>
                                        <input
                                            placeholder="شماره تماس "
                                            className="ng-untouched ng-pristine ng-invalid"></input>
                                    </section>
                                    <section className="input-container wi-80">
                                        <textarea
                                            placeholder="متن پیام"
                                            className="ng-untouched ng-pristine ng-valid "
                                            style={{
                                            margin: "0 px",
                                            width: "1108 px",
                                            height: "150 px"
                                        }}></textarea>
                                    </section>
                                    <section className="wi-80"><button>ارسال پیام</button></section>
                                    
                                    <section id="map" className="flex-col ">
                                        <div className="map-wrapper flex-col jus-center al-center ">

                                        </div>
                                    </section>
                                </form>
                            </div>
                        </div>

                    </div>
                    <div></div>
                    <div></div>
                </div>

            </Mainpage>
        )
    }
}

export default Contact
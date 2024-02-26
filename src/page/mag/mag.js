import React from 'react'
import './mag.scss'
import blog1 from '../../assets/sliderPic/1.png'
import blog2 from '../../assets/sliderPic/2.jpg'
import blog3 from '../../assets/sliderPic/3.jpg'
import blog4 from '../../assets/sliderPic/4.jpeg'
import blog5 from '../../assets/sliderPic/5.jpeg'
import blog6 from '../../assets/sliderPic/6.png'
import Mainpage from '../../layout/mainpage';
import { mapStore } from '../../context/auth-context';

class Mag extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            sliders: [
                {
                    "id": 1,
                    "title": "منطقه کاییتحانه استانبول  ",
                    "picBlog": blog1,
                    "intro": "در باور جامعه شغل مشاور املاک خیلی ساده و آسان به نظر می‌رسد. شغلی که زحمت زیادی" +
                            " ندارد و با کمی صبر می‌توان در بازار مسکن به موفقیت رسید.[…]"

                }, {
                    "id": 2,
                    "title": "   آشنایی با یکی از لوکس‌ترین مناطق شهر استانبول",
                    "picBlog": blog2,
                    "intro": "یکی از راه‌های گرفتن اقامت در کشور ترکیه سرمایه‌گذاری یا خرید خانه در کشور ترکیه" +
                            " است. کشور ترکیه یکی از کشورهایی است که به علت داشتن مرز زمینی با ایران، […]"
                }, {
                    "id": 3,
                    "title": "پروژه عمار استانبول | آشنایی با پروژه لوکس عمار در بخش آسیایی استانبول",
                    "picBlog": blog3,
                    "intro": "  کشور ترکیه یکی از کشورهای همسایه‌ی ایران است که هر ساله تعداد زیادی از ایرانیا" +
                            "ن به آن سفر می‌کنند. این کشور در دو قاره‌ی آسیا و اروپا قرار گرفته […]"
                }
                // , {
                //     "id": 4,
                //     "title": " چطور اقامت خود را در ترکیه تمدید کنیم؟",
                //     "picBlog": blog4,
                //     "intro": "یکی از راه‌های گرفتن اقامت در کشور ترکیه سرمایه‌گذاری یا خرید خانه در کشور ترکیه" +
                //             " است. کشور ترکیه یکی از کشورهایی است که به علت داشتن مرز زمینی با ایران، […]"
                // }, {
                //     "id": 5,
                //     "title": "منطقه کاییتحانه استانبول | محله‌ای مدرن و زیبا با هزینه‌های بسیار کمتر",
                //     "picBlog": blog5,
                //     "intro": "یکی از راه‌های گرفتن اقامت در کشور ترکیه سرمایه‌گذاری یا خرید خانه در کشور ترکیه" +
                //             " است. کشور ترکیه یکی از کشورهایی است که به علت داشتن مرز زمینی با ایران، […]"
                // }, {
                //     "id": 6,
                //     "title": "سفر به ترکیه بدون پاسپورت ایرانی | بحثی قدیمی برای ایجاد سهولت سفر بین دو کشور",
                //     "picBlog": blog6,
                //     "intro": "  کشور ترکیه یکی از کشورهای همسایه‌ی ایران است که هر ساله تعداد زیادی از ایرانیا" +
                //             "ن به آن سفر می‌کنند. این کشور در دو قاره‌ی آسیا و اروپا قرار گرفته […]"
                // }

            ]
        }
    }

    render() {
        debugger
       const {sliders} = this.state
       
        return (
            <Mainpage>
                <div className="site-content">
                    <div className="container">
                        <div className="row">
                            <div className="col-12 title-mag  ">
                                <h2>مجله رومن</h2>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-12 col-lg-8">
                                <div className="content-area">
                                    <div id="main" className="site-main">
                                        {sliders
                                            .map((card, n) => {
                                                return (
                                                    <a className="relpost-block-single" href="#">
                                                        <div className="relpost-block">
                                                            <img src={card.picBlog} alt="Logo" className="relpost-block-single-image"/>
                                                            <div className="relpost-block-single-text">
                                                                <b>{card.title}
                                                                    <br/>
                                                                    <p>{card.intro}</p>
                                                                </b>
                                                            </div>
                                                            <div className="post-info-bottom">
                                                                <span className="post-cat">
                                                                    مهارت‌های مذاکره و فروش
                                                                </span>
                                                            </div>
                                                        </div>
                                                    </a>
                                                )
                                            })}

                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4 leftSidebar">
                                <div className="theiaStickySidebar">
                                    <div className="sidebar widget-area">
                                        <ul id="category-posts-2-internal" className="category-posts-internal">
                                            <span class="widget-title">لینک های مرتبط</span>
                                            <li className="cat-post-item">
                                                <div >
                                                    <a className="cat-post-title">محله شیخ صدوق اصفهان با موقعیت و دسترسی عالی</a>
                                                </div>
                                                <div className="box-post-author">
                                                    <span className="cat-post-author post-author">
                                                        <a >خرید مسکن</a>
                                                    </span>
                                                    <span className="cat-post-author post-author">
                                                        <a >خرید مسکن در ترکیه</a>
                                                    </span>
                                                    <span className="cat-post-author post-author">
                                                        <a >خرید ویلا</a>
                                                    </span>
                                                </div>
                                            </li>
                                            <li className="cat-post-item">
                                                <div >
                                                    <a className="cat-post-title">
                                                        برای خرید خانه در خارج از کشور این نکات را فراموش نکنید</a>
                                                </div>
                                                <div className="box-post-author">
                                                    <span className="cat-post-author post-author">
                                                        <a >فروش مسکن</a>
                                                    </span>
                                                    <span className="cat-post-author post-author">
                                                        <a >فروش مسکن در ترکیه</a>
                                                    </span>
                                                    <span className="cat-post-author post-author">
                                                        <a >فروش ویلا</a>
                                                    </span>
                                                </div>
                                            </li>

                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Mainpage>
        )
    }
}
Mag.defaultProps = {
        change: (val) => { }
    }
 mapStore(Mag) ;

export default Mag


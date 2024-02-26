import React from 'react'
import Mainpage from '../../layout/mainpage'
import './aboutUs.scss'
import aboutPic from "../../assets/undraw_Code_thinking_re_gka2.svg"
import aboutPic1 from "../../assets/undraw_All_the_data_re_hh4w.svg"

class AboutUs extends React.Component {
    constructor(props) {
        super(props)
        this.state = {}
    }
    render() {
        return (
            <Mainpage>
                <article className="flex-col al-center container about-us">
                    <h1>درباره ی رومن</h1>
                    <section>

                        <p>مجموعه رومن یک شرکت پیشتاز در زمینه بازاریابی دیجیتال و مشاوره املاک در کشور
                            ترکیه می باشد . رومن با تکیه بر سالها تجربه و دانش به روز کارشناسان خود توانسته
                            به یکی از برترین پلتفرم های آنلاین فروش ملک در ترکیه تبدیل شود مجموعه رومن با در
                            اختیار گذاشتن امکانات جدید و به روز خود این امکان را به مشتریان میدهد تا از راه
                            دور و با خیالی آسوده از پروژه بازدید و از مشاوره کارشناسان مجموعه بهره مند شوند
                            . مشاوره حقوقی با وکلای شرکت و بهره مندی از جدیدترین قوانین خرید ملک در ترکیه از
                            دیگرخدمات این مجموعه می باشد. شرکت رومن گزینه های زیادی را در اختیار شما قرار
                            میدهد و تضمین می کند شما را در بهترین موقعیت سرمایه گذاری از ابتدا تا تحویل سند
                            سوق دهد. گارانتی قیمت و تضمین موارد قانونی جزو وظایف مجموعه رومن می باشد .</p>
                    </section>
                    <section
                        className="flex-row al-center jus-between wi-90 wi-m-90 wi-ml-100 section2">
                        <div className="flex-col al-center wi-55">
                            <h3>چرا به سامانه پیشرفته‌ اطلاعات املاک نیاز داریم؟</h3>
                            <p>نداشتن اطلاعات دقیق و شفاف در بسیاری از موارد منجر به متضرر شدن طرفین معامله
                                می‌شود. رومن با دسترسی به پایگاه‌های رسمی و معتبر اطلاعات املاک و با استفاده از
                                به‌روزترین تکنولوژی‌های جمع آوری داده‌های مستند، سامانه‌ای مرجع فراهم کرده تا
                                اطلاعات بازار مسکن به سهولت و بدون دخالت سلیقه‌ شخصی در اختیار متقاضیان قرار
                                بگیرد.</p>
                        </div>
                        <div className="flex-col al-center wi-40 image">
                            <img src={aboutPic}/>
                        </div>
                    </section>
                    <section className="flex-row jus-between wi-90 wi-xl-90 wi-ml-100 section3">
                        <div className="flex-col al-center wi-40">
                            <img className="not-responsive" src={aboutPic1}></img>
                        </div>
                        <div className="flex-col al-center wi-50">
                            <h3 >رومن برای قیمت‌گذاری هوشمند املاک</h3>
                            <img className="responsive" src={aboutPic1}></img>

                            <p>حتی اگر قصد خرید و فروش ملک را ندارید اما می‌خواهید همیشه در جریان آخرین
                                تغییرات قیمت‌ها و افت و خیز بازار مسکن باشید، می‌توانید از ما کمک بگیرید. رومن
                                با دسترسی به جدیدترین تکنولوژی برآورد هوشمند قیمت ملک، خریداران، فروشندگان و
                                مشاورین املاک را لحظه به لحظه از قیمت دقیق املاک در هر نقطه از تهران بزرگ آگاه
                                خواهد کرد.</p>
                        </div>

                    </section>
                </article>

            </Mainpage>
        )
    }
}

export default AboutUs
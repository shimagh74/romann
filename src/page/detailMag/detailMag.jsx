import React from 'react'
import './detailMag.scss'
import Mainpage from '../../layout/mainpage';
import mainPicBlog from '../../assets/sliderPic/2.jpg';
import { withRouter } from 'react-router';
import { mapStore } from '../../context/auth-context';

class DetailMag extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
             dataSource: this.getData()

        }
    }
    getData = () => {
        //  const {getStore} = this.context
        //  const result = getStore()
         const { data } = this.props;
         const { image_gallery } = data;
        const object = {
            media: [],
        };
        image_gallery.forEach(el => {
            object[`media`].push({
                id: el.id,
                mediaType: "image",
                download_url: el.image.meta?.download_url,
                detail_url: el.image.meta?.detail_url,
                imageType: el.image.meta?.type,
                title: el.image.title,
                status : false
            })
        })
        for (let [key, values] of Object.entries(data)) {
            if (key !== "image_gallery" ) {
                object[`${key}`] = values
            }
        }
        return object
    }

    render() {
        const { dataSource } = this.state;
         const {getStore} = this.context
         const result = getStore()

        return (
            <Mainpage>
                <div className="site-content">
                    <div className="container">
                        <div className="row">
                            <div className="continar-main-pic-blog">
                                 {dataSource.media.map((el, i) => {
                                    return (
                                        <img src={`https://api.romannhome.com${el.download_url}`} alt="home_picture" />
                                    )
                                })} 
                            </div>
                            <div className="col-md-12 col-lg-9">
                                <div className="content-area">
                                    <div id="main" className="site-main">
                                        <article
                                            className="post-23068 post type-post status-publish format-standard has-post-thumbnail hentry category-hometech">
                                                <header className="entry-header">
                                                        <h1 className="entry-title">{result.dataName.title}</h1>
                                                        <div className="entry-meta">
                                                            <div className="post-detail">
                                                                <span className="post-date">{result.dataName.jalali_date}</span>
                                                                <span className="span-reading-time rt-reading-time">
                                                                    <span className="rt-label rt-prefix">مطالعه:</span>
                                                                    <span className="rt-time">8</span>
                                                                    <span className="rt-label rt-postfix">دقیقه</span>
                                                                </span>
                                                            </div>
                                                        </div>
                                                </header>
                                            <div className="entry-content">
                                                <p>
                                                    <span  style={{fontSize:"12pt"}}>با رسیدن فصل گرما و تابستان نیاز به کولر و دستگاه تهویه هوای خانگی جدی‌تر
                                                        از قبل مطرح می‌شود. بسیاری با گرم شدن هوا تصمیم می‌گیرند این بار تهویه هوشمند
                                                        هوا تهیه کنند و فرآیند هوشمندسازی خانه را پیش ببرند. سیستم تهویه هوشمند نیز
                                                        مانند تمام سیستم‌های هوشمند قابل کنترل از راه دور و با تلفن همراه است. همچنین
                                                        تهویه مطبوع هوشمند را می‌توانید حتی وقتی خانه نیستید تنظیم کنید تا پس از ورود به
                                                        خانه از هوایی مطبوع لذت ببرید. سیستم تهویه‌ هوا خانگی جزو وسایل خانه است که خرید
                                                        بادقت آن می‌تواند سال‌ها شما را از خرید مجدد بی‌نیاز کند. در متن زیر با سیستم
                                                        تهویه هوای هوشمند و قیمت تهویه هوای خانگی بیشتر آشنا شوید:
                                                        </span>
                                                </p>
                                            </div>
                                        </article>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-3 leftSidebar">
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
DetailMag.defaultProps = {
        change: (val) => { }
    }
 mapStore(DetailMag) ;
export default DetailMag
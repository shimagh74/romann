import React from 'react'
import Mainpage from '../../layout/mainpage'
import './home.scss'
import ContainerSearch from '../../component/containerSearch/containerSearch'
import Card from '../../component/card/card'
import pic1 from '../../assets/undraw_quite_town_mg2q.svg'
import pic2 from '../../assets/undraw_buy_house_560d.svg'
import http from '../../services/httpService';
import configApi from '../../services/api.json'
import { mapStore } from '../../context/auth-context'
// import database from '../../server/generate'

class Home extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            blogData: [],
            property: [],

        }
    }
    // componentDidMount = () => {
    //     // this.FetchBlogPage();
    //     this.FetchPropertyPage();
    // }
    // FetchPropertyPage = async() => {
    //     try {
    //         const result = await
    //         http.get(configApi.FetchPropertyPage)
    //         if (result.status === 200) {
    //              let property = result.data;
    //              console.log(property)
    //              this.setState({property})
    //         } 
    //     } catch (error) {
    //         console.log(error , "error")
    //     }
    // }
    // FetchBlogPage = async () => {
    //     try {
    //         const result = await
    //             http.get(configApi.FetchBlogPage)
    //         if (result.status === 200) {
    //             let blogData = result.data.items;
    //             this.setState({ blogData })
    //         }
    //     } catch (error) {
    //         console.log(error, "error")
    //     }
    // }

    handleClickCard(card) {
        const {setStore} = this.context
        setStore("dataName" , card);
        const { history } = this.props;
         history.push("/detailCard/DetailCard")
         }

    handleBlogCardClick(blogCard) {
        const {setStore} = this.context
        setStore("dataName" , blogCard);
        const { history } = this.props;
         history.push("/detailMag/DetailMag")
 }
    render() {
        const { blogData , property } = this.state

        if (blogData === null) {
            <div>در حال بارگذاری</div>
        }
        return (
            <Mainpage>
                <header className="header-big">
                    <ContainerSearch
                        mainTitle="انتخاب خانه، هوشمندتر از همیشه"
                        secondTitle="رومن، شما را در یافتن خانه یاری می‌کند" />
                </header>
                <section className="flex-row al-center jus-center wrapped container info-part">
                    <div className="flex-col al-start jus-center wi-40 wi-l-100 static-info">
                        <h2>بازار مسکن را ارزیابی کنید</h2>
                        <p>در بازار مسکن، داشتن اطلاعات و داده‌های دقیق «طلایی ترین فرصتها» را برای
                        خریداران و سرمایه گذاران فراهم می کند. در رومن این داده‌ها و اطلاعات پردازش شده
                        و نتیجه پردازش در اختیار مشترکان رومن قرار می‌گیرد. با تحلیل گذشته و رصد کردن
                            امروز بازار مسکن، خانه آینده را بسازید.</p>
                    </div>
                    <figure className="flex-col al-center wi-45 wi-l-80 wi-ml-90 home-svg-icon">
                        <img src={pic1}/>
                    </figure>
                </section>
                <section className="flex-col al-center occasion">
                    <h2>اکازیون های رومن</h2>
                    <div className="flex-row al-center jus-center wrapped container cards gridtemplet">
                    {property.map((card, i) => { 
                                    return ( 
                                        <div  key={card.id} onClick={() => this.handleClickCard(card)}>
                                            {/* <div className=" cards" onClick={this.handleClickCard.bind(this,card)}> */}
                                                <Card
                                                    key={card.id}
                                                    // backgroundImage={`https://api.romannhome.com${card.thumbnail.meta.download_url}`}
                                                    price={card.price}
                                                    title={card.title}
                                                     area={card.area}
                                                    bedroom={card.bedroom}
                                                 saleOrRent={"فروشی"}
                                                    />
                                            {/* </div> */}
                                        </div>
                                    ) 
                              })} 
                    </div>
                    <a className="flex-row al-center jus-center button" href="../buy/Buy">نمایش همه آگهی ها</a>
                </section>
                <section className="flex-col al-center blog">
                    <h2 className="container">تازه ترین مطالب وبلاگ</h2>
                    <p className="wi-50 wi-l-85 wi-ml-95">همه ی چیزهایی که باید درباره املاک بدانیم</p>
                    <div
                        className="flex-row jus-center wrapped wi-85 wi-ml-100 container blogs-holder">
                        {blogData.map((blogCard, n) => {
                            return (
                                <div className="blog-wrapper ng-star-inserted" key={blogCard.id} onClick={() => this.handleBlogCardClick(blogCard)}>
                                    <blog-card>
                                        <a className="flex-col wi-100 card-holder" href="">
                                            <figure>
                                               <img src={`https://api.romannhome.com${blogCard.thumbnail.meta.download_url}`} className="card-img-top" />)
                                               
                                            </figure>
                                            <div className="flex-col al-center blog-title">
                                                <h5 className="title">
                                                    {blogCard.title}
                                                </h5>
                                                <span>{blogCard.intro}</span>
                                            </div>
                                        </a>
                                    </blog-card>
                                </div>
                            )
                        })}
                    </div>
                    <a className="flex-row al-center jus-center button" href="../mag/Mag">مطالب بیشتر در بلاگ</a>
                </section>
                <div className="flex-col al-center information-holder">
                    <div className="colored-background"></div>
                    <div className="flex-col al-center container">
                        <div className="flex-col al-center information-part">
                            <div className="icon"><img src={pic2}></img></div>
                            <h4 className="part-title">رومن، پنجره‌ای نو به دنیای مسکن</h4>
                            <p className="info">رومن، سامانه هوشمند مسکن (شرکت کلان داده شهر فناوران)،
                            وبسایت و اپلیکیشن هوشمند برای جستجو و ثبت آگهی خرید، فروش، رهن و اجاره ملک است.
                            آژانس‌های املاک و بنگاه‌های معاملات ملکی و همینطور مالکین شخصی که قصد خرید، فروش
                            یا رهن و اجاره ملک دارند، می‌توانند آگهی ملک خود را شامل آپارتمان مسکونی، تجاری
                            یا اداری، نوساز یا کلنگی، مغازه، زمین و ویلا در رومن ثبت کنند. از مزیت‌های
                            وبسایت و اپلیکیشن رومن می‌توان به امکان جستجوی ملک روی نقشه، جستجوی ملک با
                            واقعیت افزوده و دسترسی به آخرین تغییرات قیمت در بازار مسکن اشاره کرد. هم‌چنین
                            کاربران در سایت و اپلیکیشن رومن به اطلاعات آژانس‌های معاملات املاک و بنگاه‌ها
                            معاملات ملکی در تهران و سایر شهرها دسترسی دارند. رومن، سامانه هوشمند مسکن با
                            استفاده از فناوری‌های نوین و بستر اینترنت به مالکین و خریداران ملک کمک می‌کند تا
                            به آسانی و با سرعت، ملک موردنظر خود را آگهی کرده و به فروش برسانند. وب سایت و
                            اپلیکیشن رومن به دلیل آنلاین بودن خدمات، محدودیتی در ارائه خدمات در سراسر ایران
                            ندارد ولی در فاز اول در تهران و کرج شروع به سرویس دهی کرده است و در فازهای بعدی
                            تمام شهرهای ایران را پوشش خواهد داد. دفتر مرکزی رومن در تهران در خیابان وزرا
                            واقع شده اما به دلیل آنلاین بودن خدمات در ساست و اپلیکیشن رومن، دایره مشتریان
                                رومن در سراسر ایران خواهد بود.</p>
                            <a></a>
                        </div>
                    </div>
                </div>
                
            </Mainpage>
        )
    }
}
Home.defaultProps = {
        change: (val) => { }
    }
 mapStore(Home) ;

export default Home
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
                        mainTitle="Choosing a home is smarter than ever."
                        secondTitle="Roman will help you find a home" />
                </header>
                <section className="flex-row al-center jus-center wrapped container info-part">
                    <div className="flex-col al-start jus-center wi-40 wi-l-100 static-info">
                    <h2>Evaluate the housing market</h2>
                    <p>In the housing market, having accurate information and data is the "golden opportunities" for
                         provides buyers and investors. In Roman, these data and information are processed
                         And the processing result is provided to Roman subscribers. By analyzing the past and observing
                             Build the house of the future in the housing market today.</p>
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
                    <h2 className="container">The latest blog content</h2>
                    <p className="wi-50 wi-l-85 wi-ml-95"> Everything you need to know about real estate</p>
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
                            <p className="info">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                            </p>
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
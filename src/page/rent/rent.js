import React from 'react'
import Mainpage from '../../layout/mainpage'
import './../buy/buy.scss'
import Card from '../../component/card/card'
import pic1 from '../../assets/undraw_quite_town_mg2q.svg'
import listing from '../../assets/listing.jpg'
import listing2 from '../../assets/listing2.jpg'
import listing3 from '../../assets/listing3.jpg'
import listing4 from '../../assets/listing4.jpg'
import listing5 from '../../assets/listing5.jpg'
import listing6 from '../../assets/listing6.jpg'
import ContainerSearch from '../../component/containerSearch/containerSearch'
import FilterBox from '../../component/filterBox/filterBox'

class Rent extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            checkBoxItem: [
                {
                    "id": 1,
                    "checkboxname": "آگهی های عکس دار"
                }, {
                    "id": 2,
                    "checkboxname": "آگهی های ویدیو دار"
                }, {
                    "id": 3,
                    "checkboxname": "آگهی های VR دار"
                }
            ],
            collapsedItem: [
                {
                    "id": 1,
                    "titleCollapsed": "عمومی"
                }, {
                    "id": 2,
                    "titleCollapsed": "سطح آگهی"
                }, {
                    "id": 3,
                    "titleCollapsed": "تعداد خواب"
                }, {
                    "id": 4,
                    "titleCollapsed": "سن"
                }, {
                    "id": 5,
                    "titleCollapsed": " محله"
                }
            ],
            item: [
                {
                    "price": "1 میلیارد تومان",
                    "numberOfPhotos": "3",
                    "id": 1,
                    "title": "چاپگرها و متون بلکه روزنامه و مجله",
                    "typeOfHouse": "مسکونی",
                    "address": "آجودانیه",
                    "meter": "230 متر",
                    "numberOfRooms": "3 خوابه",
                    "saleOrRent": "فروشی",
                    "backgroundImage": listing,
                    "thumbnailUrl": "https://via.placeholder.com/150/92c952"
                }, {
                    "price": "2.53 میلیارد تومان",
                    "numberOfPhotos": "5",
                    "id": 2,
                    "title": "با هدف بهبود ابزارهای کاربردی",
                    "backgroundImage": listing2,
                    "typeOfHouse": "مسکونی",
                    "address": "نیاوران",
                    "meter": "120 متر",
                    "numberOfRooms": "1 خوابه",
                    "saleOrRent": "فروشی",
                    "thumbnailUrl": "https://via.placeholder.com/150/771796"
                }, {
                    "price": "1.900 میلیارد تومان",
                    "numberOfPhotos": "6",
                    "id": 3,
                    "title": "شناخت فراوان جامعه و متخصصان",
                    "typeOfHouse": "تجاری",
                    "meter": "160 متر",
                    "address": "ولیعصر",
                    "numberOfRooms": "3 خوابه",
                    "saleOrRent": "فروشی",
                    "backgroundImage": listing3,
                    "thumbnailUrl": "https://via.placeholder.com/150/24f355"
                }, {
                    "price": "1 میلیارد تومان",
                    "numberOfPhotos": "3",
                    "id": 4,
                    "title": "چاپگرها و متون بلکه روزنامه و مجله",
                    "typeOfHouse": "مسکونی",
                    "address": "آجودانیه",
                    "meter": "230 متر",
                    "numberOfRooms": "3 خوابه",
                    "saleOrRent": "فروشی",
                    "backgroundImage": listing4,
                    "thumbnailUrl": "https://via.placeholder.com/150/92c952"
                }, {
                    "price": "2.53 میلیارد تومان",
                    "numberOfPhotos": "5",
                    "id": 5,
                    "title": "با هدف بهبود ابزارهای کاربردی",
                    "backgroundImage": listing5,
                    "typeOfHouse": "مسکونی",
                    "address": "نیاوران",
                    "meter": "120 متر",
                    "numberOfRooms": "1 خوابه",
                    "saleOrRent": "فروشی",
                    "thumbnailUrl": "https://via.placeholder.com/150/771796"
                }, {
                    "price": "1.900 میلیارد تومان",
                    "numberOfPhotos": "6",
                    "id": 6,
                    "title": "شناخت فراوان جامعه و متخصصان",
                    "typeOfHouse": "تجاری",
                    "meter": "160 متر",
                    "address": "ولیعصر",
                    "numberOfRooms": "3 خوابه",
                    "saleOrRent": "فروشی",
                    "backgroundImage": listing6,
                    "thumbnailUrl": "https://via.placeholder.com/150/24f355"
                }
            ]
        }
    }

    render() {
        return (
            <Mainpage>
                 <header className="header-big rent-header-big">
                    <ContainerSearch
                        mainTitle="اجاره خانه و آپارتمان با رومن"
                        secondTitle="رومن، شما را در یافتن خانه یاری می‌کند"/>
                </header> 
                <div className="row">
                    <div className="col-12 text-right  ">
                        <h2>رهن و اجاره آپارتمان</h2>
                    </div>
                </div>
                <div className="row flex-column-reverse flex-lg-row mt-4 mt-4 px-0 px-lg-4">
                    <div className="col-lg-3 filters-col ">
                    <FilterBox/>
                    </div>

                    <div className="col-lg-9 ">
                        <div className="hidden-xs">
                            <div className="sort sort__container">
                                <span className="sort__title">مرتب ‌سازی بر اساس:</span>
                                <div className="sort__container__btns mr-2">
                                    <button className="btn btn-light active">
                                        جدیدترین
                                    </button>
                                    <button className="btn btn-light">
                                        بیشترین قیمت
                                    </button>
                                    <button className="btn btn-light">
                                        کمترین قیمت
                                    </button>
                                </div>

                            </div>
                        </div>
                        <div className='mobile-bar'>
                            <di className="show-filters-btn mobile-bar__btn">فیلتر نتایج</di>
                            <div className="dropdown b-dropdown sort-dropdown btn-group">
                                <button className="btn dropdown-toggle btn-secondary">مرتب‌سازی {/* <i className="mdi mdi-menu-down-outline"></i> */}
                                </button>
                                <ul className="dropdown-menu">
                                    <li>
                                        <a className="dropdown-item active">جدیدترین</a>
                                    </li>
                                    <li>
                                        <a className="dropdown-item ">بیشترین قیمت</a>
                                    </li>
                                    <li>
                                        <a className="dropdown-item ">کمترین قیمت</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="row">
                            {this
                                .state
                                .item
                                .map((card, i) => {
                                    return (
                                        <div
                                            className="col-x-12 col-m-6 col-lg-4 mt-4">
                                            <div className=" cards">
                                                <Card
                                                    key={i}
                                                    backgroundImage={card.backgroundImage}
                                                    price={card.price}
                                                    numberOfPhotos={card.numberOfPhotos}
                                                    titleHolder={card.title}
                                                    area={card.area}
                                                    typeOfHouse={card.typeOfHouse}
                                                    numberOfRooms={card.numberOfRooms}
                                                    address={card.address}
                                                    saleOrRent={card.saleOrRent}
                                                    houseUrl={card.houseUrl}/>
                                            </div>
                                        </div>
                                    )
                                })}
                        </div>

                    </div>
                </div>

            </Mainpage>
        )
    }
}

export default Rent
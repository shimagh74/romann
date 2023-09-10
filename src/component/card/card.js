import React from 'react'
import './card.scss'
import piv from '../../assets/pic/2.jpg'

const Card = ({
    price,
    numberOfPhotos,
    title,
    area,
    typeOfHouse,
    bedroom,
    address,
    saleOrRent,
    houseUrl,
    imageId,
    history
}) => {
    return (
        <div className="flex-col al-center wi-l-50 wi-m-100 listing-grid-view-card">
            <a
                href={houseUrl}
                id="listing-card"
                className="flex-col romann-listing-card ng-star-inserted">
                {/* {property.map((card, i) => {
                                    return (
                                    )
                              })} */}
                <div className="image-holder">
                    <img src={require(`../../assets/pic/${imageId}.jpg`)} alt="Logo"/>
                    {/* <img src={piv} alt="Logo"/> */}
                    <div className="flex-row jus-between al-center more-info ng-star-inserted">
                        <div className="flex-row al-center number-of-images photo ng-star-inserted">
                            <span>{numberOfPhotos}</span>
                            <div className="flex-col ng-star-inserted">
                                <i className="mdi mdi-camera-outline"></i>
                            </div>
                        </div>
                    </div>
                    <div className="flex-row al-center title-holder">
                        <span className="card-title">{title}</span>
                    </div>
                </div>

                <div className="flex-col card-detail-holder">
                    <div className="flex-row al-center jus-between property-info">
                        <div className="flex-row al-center single-info">
                            <i className="mdi mdi-home-city-outline flex-row icon"></i>{typeOfHouse}</div>
                        <div className="flex-row al-center single-info">
                            <i className="mdi mdi-vector-square flex-row icon"></i>{area} متر</div>
                        <div className="flex-row al-center single-info">
                            <i className="mdi mdi-bed-outline flex-row icon"></i>{bedroom}</div>
                    </div>
                    <div className="flex-row al-center address">
                        <i className="mdi mdi-map-marker-outline"></i>{address}
                    </div>
                    {/* <div className="flex-row jus-center sell-label al-center">
                            <div className="flex-row single-price price jus-center">
                                <i className="mdi mdi-home-outline"></i>
                                <span className="">{saleOrRent}</span>
                            </div>
                        </div> */}
                    <div className="flex-row jus-center price-holder">
                        <div className="flex-col buy-prices ng-star-inserted">
                            <div className="flex-row single-price price">
                                <div className="flex-row al-center title">قیمت :</div>
                                <span className="ng-star-inserted">{price} تومان</span>
                            </div>
                        </div>
                    </div>
                    <div className="flex-row jus-center al-center ">
                        <button className="flex-row al-center jus-center calling-agent-button ">
                            <i className="mdi mdi-cellphone-iphone flex-row icon"></i>
                            <span>اطلاعات تماس</span>
                        </button>
                    </div>
                </div>
            </a>
        </div>
    )
}

export default Card
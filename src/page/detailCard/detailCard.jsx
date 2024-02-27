import React from 'react';
import './detailCard.scss'
import Modal from 'antd/lib/modal/Modal'
import { Fade } from 'react-awesome-reveal'
import LeafletMap from '../../component/map/map';
import { mapStore } from '../../context/auth-context';

class DetailCard extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            visible: false,
            currentPage: 0,
            singleImage: null,
            dataSource: this.getData()

        }
    }
    getData = () => {
        const { data } = this.props;
        const { image_gallery, video_gallery, features_list } = data;
        const object = {
            media: [],
            features_list: []
        };
        for (let [key, value] of Object.entries(features_list)) {
            object[`features_list`].push({ id: key, title: value })
        }
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
        video_gallery.forEach(el => {
            object[`media`].push({
                id: el.id,
                mediaType: "video",
                download_url: el.video.meta?.download_url,
                detail_url: el.video.meta?.detail_url,
                imageType: el.video.meta?.type,
                title: el.video.title,
                status : false
            })
        })
        for (let [key, values] of Object.entries(data)) {
            if (key !== "image_gallery" && key !== "video_gallery" && key !== "features_list") {
                object[`${key}`] = values
            }
        }
        return object
    }
    showModal = () => {
        this.setState({ visible: true });
    };
    handleOk = () => {
        setTimeout(() => {
            this.setState({ visible: false });
        }, 3000);
    };
    handleImage = (item, index, event) => {
        this.setState({ currentPage: index })
    }

    handleChangeSlide = (type) => {
        const { currentPage, dataSource } = this.state
        switch (type) {
            case "left":
                const goLeft = dataSource.media[currentPage - 1];
                const cpy = currentPage - 1;
                if (cpy === -1) {
                    this.setState({
                        currentPage: dataSource.media.length - 1,
                        singleImage: dataSource.media[dataSource.length - 1]
                    })
                } else {
                    this.setState({
                        currentPage: currentPage - 1,
                        singleImage: goLeft
                    })
                }
                break;
            case "right":
                const goRight = dataSource.media[currentPage + 1];
                const cpx = currentPage + 1;
                if (cpx > dataSource.media.length - 1) {
                    this.setState({ currentPage: 0, singleImage: dataSource.media[0] })
                } else {
                    this.setState({
                        currentPage: currentPage + 1,
                        singleImage: goRight
                    })
                }
                break;
            default:
                break;
        }
    }
    handleCancel = () => {
        this.setState({ visible: false });
    };
    handleSelectImg = (item, index, event) => {
        this.setState({ singleImage: item });
    }
    renderGallreyImage = () => {
        const { singleImage, dataSource, currentPage, visible } = this.state;

        const {getStore} = this.context
        const result = getStore()
        debugger
        return (
            <div
                className="flex-col image-gallery ng-tns-c119-6 ng-tns-c131-5 ng-star-inserted">
                <div className="desktop-image-preview ng-tns-c119-4 ng-star-inserted">
                    <div className="flex-row current-image ng-tns-c119-4">
                         <Modal
                            keyboard={false}
                            maskClosable={false}
                            visible={visible}
                            title={null}
                            onOk={this.handleOk}
                            onCancel={this.handleCancel}
                            style={{
                                top: 20,
                                backgroundColor: 'inherit'
                            }}
                            width={"70%"}
                            footer={null}>
                            <div className="slider_modal">
                                <Fade direction={"left"} triggerOnce={false} delay={200} duration={500}>
                                    <div className="image-header">
                                        <div className="right-sider" onClick={() => this.handleChangeSlide("right")}>
                                            <span>
                                                <i className="mdi mdi-arrow-right-drop-circle-outline"></i>
                                            </span>
                                        </div>
                                        <div className="main-picture">
                                        {dataSource.media[currentPage].mediaType === "image" ? (<img
                                        src={singleImage !== null
                                            ? `https://api.romannhome.com${singleImage.download_url}`
                                            : `https://api.romannhome.com${dataSource.media[currentPage].download_url}`}
                                        alt="" />) : (
                                        <video width="100%" height="100%" controls>
                                            <source src={`https://api.romannhome.com${dataSource.media[currentPage].download_url}`} type="video/mp4" />
                                            <source src={`https://api.romannhome.com${dataSource.media[currentPage].download_url}`} type="video/ogg" />
                                        </video>
                                    )}
                                        </div>
                                        <div className="left-sider" onClick={() => this.handleChangeSlide("left")}>
                                            <span>
                                                <i className="mdi mdi-arrow-left-drop-circle-outline"></i>
                                            </span>
                                        </div>
                                    </div>
                                </Fade>
                                <div className="image-mini">

                                {dataSource.media.map((el, i) => {
                                    debugger
                                    return (
                                        <div
                                            style={{opacity:`${i===currentPage ? 0.5 : 1}`}}
                                            key={i}
                                            className="box-image-mini"
                                            onClick={this
                                                .handleSelectImg
                                                .bind(this, el, i)}>
                                            {el.mediaType === "image" && <img src={`https://api.romannhome.com${el.download_url}`} alt="home_picture" />}
                                            {el.mediaType === "video" &&
                                                <video width="100%" height="100%" controls>
                                                    <source src={`https://api.romannhome.com${el.download_url}`} type="video/mp4" />
                                                    <source src={`https://api.romannhome.com${el.download_url}`} type="video/ogg" />
                                                </video>
                                            }
                                        </div>
                                    )
                                })}
                                </div>
                            </div>
                        </Modal> 
                        <div className="slider">
                            <div className="image-header">
                                <div className="right-sider" onClick={() => this.handleChangeSlide("right")}>
                                    <span>
                                        <i className="mdi mdi-arrow-right-drop-circle-outline"></i>
                                    </span>
                                </div>
                                <div
                                    className="main-picture"
                                    onClick={() => {
                                        this.setState({ visible: true })
                                    }}>
                                    {dataSource.media[currentPage].mediaType === "image" ? (<img
                                        src={singleImage !== null
                                            ? `https://api.romannhome.com${singleImage.download_url}`
                                            : `https://api.romannhome.com${dataSource.media[currentPage].download_url}`}
                                        alt="" />) : (
                                        <video width="100%" height="100%" controls>
                                            <source src={`${dataSource.media[currentPage].download_url}`} type="video/mp4" />
                                            <source src={`${dataSource.media[currentPage].download_url}`} type="video/ogg" />
                                        </video>
                                    )}
                                </div>
                                <div className="left-sider" onClick={() => this.handleChangeSlide("left")}>
                                    <span>
                                        <i className="mdi mdi-arrow-left-drop-circle-outline"></i>
                                    </span>
                                </div>
                            </div>
                            <div className="image-mini">
                                {dataSource.media.map((el, i) => {
                                    debugger
                                    return (
                                        <div
                                            style={{opacity:`${i===currentPage ? 0.5 : 1}`}}
                                            key={i}
                                            onClick={this
                                                .handleSelectImg
                                                .bind(this, el, i)}>
                                            {el.mediaType === "image" && <img src={`https://api.romannhome.com${el.download_url}`} alt="home_picture" />}
                                            {el.mediaType === "video" &&
                                                <video width="100%" height="100%" controls>
                                                    <source src={`${el.download_url}`} type="video/mp4" />
                                                    <source src={`${el.download_url}`} type="video/ogg" />
                                                </video>
                                            }
                                        </div>
                                    )
                                })}
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex-row rest-of-images-row ng-tns-c119-6 ng-star-inserted">
                    <div
                        className="single-preview ng-tns-c119-6 ng-star-inserted"
                        style={{
                            backgroundImage: ""
                        }}></div>
                </div>
            </div>
        )
    }
    render() {
        debugger
        const {getStore} = this.context
        const result = getStore()

        return (
            <>
                <article
                    className="flex-row container single-listing-page ng-tns-c131-5 ng-star-inserted">
                    <div className="side-bar-holder ng-tns-c131-5">
                        <div className="property-details ng-tns-c131-5">
                            <div className="flex-row al-center jus-between date-and-code ng-tns-c131-5">
                                <div className="code ng-tns-c131-5">کد ملک :54454</div>
                                <div className="date ng-tns-c131-5">یک ساعت پیش</div>
                            </div>
                            {/* <h1 className="page-title ng-tns-c131-5">{dataSource.title}</h1> */}
                            <div className="prices ng-tns-c131-5">
                                <div className="rent-type ng-tns-c131-5"></div>
                                <div className="buy-type ng-tns-c131-5">
                                    <div className="single-price price ng-tns-c131-5 ng-star-inserted">
                                        <span className="title ng-tns-c131-5">قیمت:
                                        </span>
                                        {/* <span className="ng-tns-c131-5">{dataSource.price}</span> */}

                                    </div>
                                    {/* <div className="single-price price ng-tns-c131-5 ng-star-inserted">
                                        <span className="title ng-tns-c131-5">قیمت هر متر مربع:
                                        </span>
                                        <span className="ng-tns-c131-5">60 میلیون تومان</span>

                                    </div> */}
                                </div>
                            </div>
                            <hr className="divider ng-tns-c131-5" />
                            <div className="details ng-tns-c131-5">
                                {/* 5 تا باید باشه */}
                                <div className="flex-row al-center detail ng-tns-c131-5">
                                    <span className="flex-row icon ng-tns-c131-5 ng-star-inserted">
                                        <i className="mdi mdi-home-city-outline"></i>
                                    </span>
                                    <span className="ng-tns-c131-5">آپارتمان مسکونی</span>
                                </div>
                                <div className="flex-row al-center detail ng-tns-c131-5">
                                    <span className="flex-row icon ng-tns-c131-5 ng-star-inserted">
                                        <i className="mdi mdi-calendar-clock"></i>
                                    </span>
                                    <span className="ng-tns-c131-5">3 سال ساخت</span>
                                </div>
                                <div className="flex-row al-center detail ng-tns-c131-5">
                                    <span className="flex-row icon ng-tns-c131-5 ng-star-inserted">
                                        <i className="mdi mdi-bed-outline"></i>
                                    </span>
                                    {/* <span className="ng-tns-c131-5">{dataSource.bedroom} خوابه</span> */}
                                </div>
                                <div className="flex-row al-center detail ng-tns-c131-5">
                                    <span className="flex-row icon ng-tns-c131-5 ng-star-inserted">
                                        <i className="mdi mdi-shower"></i>
                                    </span>
                                    {/* <span className="ng-tns-c131-5">{dataSource.bathroom} حمام</span> */}
                                </div>
                                <div className="flex-row al-center detail ng-tns-c131-5">
                                    <span className="flex-row icon ng-tns-c131-5 ng-star-inserted">
                                        <i className="mdi mdi-vector-square"></i>
                                    </span>
                                    {/* <span className="ng-tns-c131-5">{dataSource.area} متر</span> */}
                                </div>
                                <div className="flex-row al-center detail ng-tns-c131-5">
                                    <span className="flex-row icon ng-tns-c131-5 ng-star-inserted">
                                        <i className="mdi mdi-parking"></i>
                                    </span>
                                    <span className="ng-tns-c131-5">پارکینگ 1 عدد</span>
                                </div>
                            </div>
                            <hr className="divider ng-tns-c131-5" />

                            <div className="flex-col al-center ng-tns-c131-10 ng-star-inserted">
                                <span className="agency-manager margin-bottom-8 ng-tns-c131-10">مشاور خانم نوروزی
                                        </span>
                                <a className="flex-row al-center jus-center agency-info-button ng-tns-c131-10"> 091256468303 </a>
                            </div>
                        </div>
                    </div>

                    <div className="main-content ng-tns-c131-5">
                        {this.renderGallreyImage()}
                        <div className="flex-col order-keeper ng-tns-c131-5">
                            <div className="flex-row al-center jus-center listing-actions ng-tns-c131-5">
                                <button
                                    className="flex-row al-center jus-center single-action report-button ng-tns-c131-5">
                                    <span className="ng-tns-c131-3">گزارش آگهی</span>
                                    <span className="flex-row icon ng-tns-c131-3">
                                        <i className="mdi mdi-alert-circle-outline"></i>
                                    </span>
                                </button>
                                <button
                                    className="flex-row al-center jus-center single-action share-button ng-tns-c131-3">
                                    <span className="ng-tns-c131-3">اشتراک‌گذاری</span>
                                    <span className="flex-row icon ng-tns-c131-3">
                                        <i className="mdi mdi-share-variant-outline"></i>
                                    </span>
                                </button>
                                <button
                                    className="flex-row al-center jus-center single-action save-button ng-tns-c131-3">
                                    <span className="ng-tns-c131-3">ذخیره</span>
                                    <span className="flex-row icon ng-tns-c131-3">
                                        <i className="mdi mdi-bookmark-outline"></i>
                                    </span>
                                </button>
                            </div>

                            <div className="features-and-description ng-tns-c131-5 ng-star-inserted">
                                <h2 className="title ng-tns-c131-5">امکانات و توضیحات</h2>
                                <div className="flex-row wrapped features ng-tns-c131-5 ng-star-inserted">
                                    {/* {dataSource.features_list
                                        .map((feature, i) => {
                                            return (
                                                <div key={feature.id}
                                                    className="flex-row al-center single-feature ng-tns-c131-5 ng-star-inserted">
                                                    <div className="icon ng-tns-c131-5">
                                                        <i className="mdi mdi-check"></i>
                                                    </div>
                                                    <span className="ng-tns-c131-5">{feature.title}</span>
                                                </div>
                                            )
                                        })} */}
                                </div>
                                <div className="description ng-tns-c131-3 ng-star-inserted">
                                    <div className="content-holder descriptionBlock ng-tns-c131-3">
                                        <h2 className="title ng-tns-c131-5">توضیحات</h2>
                                    </div>
                                    <div className="property-detail_agency-box_description">
{/* 
                                        {dataSource.body.map((n, i) => {
                                            return (
                                                <>{n.value}</>

                                            )
                                        })} */}

                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="map-holder ng-tns-c131-3 ng-star-inserted">
                            <h2 className="title ng-tns-c131-3">نقشه</h2>
                            <div className="leaflet-map-holder ng-tns-c131-3">
                                {/* <video controls   src={Video} type="video/mp4" /> */}

                                <LeafletMap />

                            </div>
                        </div>
                    </div>
                </article>
            </>
        )
    }
}
DetailCard.defaultProps = {
        change: (val) => { }
    }
 mapStore(DetailCard) ;
export default DetailCard
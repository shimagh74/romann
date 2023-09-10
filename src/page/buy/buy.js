import React from 'react'
import Mainpage from '../../layout/mainpage'
import './buy.scss'
import ContainerSearch from '../../component/containerSearch/containerSearch'
import Card from '../../component/card/card'
import {Modal, Pagination} from 'antd';
import http from '../../services/httpService';
import configApi from '../../services/api.json'
import DetailCard from '../detailCard/detailCard'
import { mapStore } from '../../context/auth-context'
import { Col ,Spin} from 'antd';

const paginationInitialState = {
    current:1,
    pageSize: 12,
}
class Buy extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            visible: false,
            showDetail: false,
            row : null,
            data : null,
            pagination:paginationInitialState,
            property: [],
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
            sliceProperty : [],
            loading : false
        }
    }
    componentDidMount = () => {
        this.FetchPropertyPage();
    }
    
    FetchPropertyPage = async() => {
        const {pagination} = this.state
        try {
            const result = await
            http.get(configApi.FetchPropertyPage)
            if (result.status === 200) {
                 let property = result.data;
                //  this.setState({pagination:{...pagination}})
                 this.chunkArray(property,paginationInitialState.pageSize)
            } 
        } catch (error) {
            console.log(error , "error")
        }
    }
    chunkArray =(property, chunkSize)=> {
        const chunkedArray = [];
        let index = 0;
        while (index < property.length) {
          chunkedArray.push(property.slice(index, index + chunkSize));
          index += chunkSize;
        }
        this.setState({sliceProperty : chunkedArray , property})
      }
    showModal = () => {
        this.setState({visible: true});
    };
    handleOk = () => {
        setTimeout(() => {
            this.setState({visible: false});
        }, 3000);
    };
    changeCurrentPage = (current , size)=>{

        this.setState({pagination : {...this.state.pagination,current},loading : true})
        setTimeout(()=>{
            
        this.setState({loading : false})
        },500)
    }
    handleCancel = () => {
        this.setState({visible: false});
    };
    handleClickCard = (data) => {
        this.setState({row: data , showDetail :true});
        const { history } = this.props;
        history.push("/detailCard/DetailCard")
    };
    render() {
        const {property , data , sliceProperty , pagination,loading} = this.state
        const {getStore} = this.context

        if(property === null || !sliceProperty){
            <div>در حال بارگذاری</div>
        }
        const list = sliceProperty[pagination.current]
        return (
            <Mainpage>
                {this.state.showDetail === false ?
                            <div>
                <header className="header-big buy-header-big">
                    <ContainerSearch
                        mainTitle="خرید خانه و آپارتمان با رومن"
                        secondTitle="رومن، شما را در یافتن خانه یاری می‌کند"/>
                </header>
                <div className="row">
                    <div className="col-12 text-right  ">
                        <h2>خرید و فروش آپارتمان</h2>
                    </div>
                </div>
                 <Modal
                    keyboard={false}
                    maskClosable={false}
                    visible={this.state.visible}
                    title="Title"
                    onOk={this.handleOk}
                    onCancel={this.handleCancel}
                    style={{
                        top: 170
                    }}
                    width={600}
                    footer={null}>
                   <div className="filter-card">
                                <div className="card">
                                    <header className="card-header">
                                        <div className="mb-0 card-header--noIcon text-right card-header--withIcon">
                                            <span className="icon-filter filters--icon ">
                                                <i className="mdi mdi-filter-variant"></i>
                                            </span>
                                            فیلتر نتایج
                                        </div>
                                    </header>
                                    <div className="card-body p-0">
                                        <div className="text-right col-12">
                                            <div className="d-inline-block card-header--withIcon mt-3">تعداد نتایج</div>
                                            <span className="filters__count">9851</span>
                                            <a href="/#" className="btn-link btn-link--danger d-inline-block float-left mt-3">حذف فیلتر</a>
                                            <hr className="filters--divider"/>
                                            <div className="filters-wrapper">
                                                {this
                                                    .state
                                                    .collapsedItem
                                                    .map((item, i) => {
                                                        return (
                                                            <div className="collapsed__container">
                                                                <a href="/#" className="collapsed">
                                                                    {item.titleCollapsed}
                                                                </a>
                                                                <div id="collapse4" className="collapse show">
                                                                    <div className="card">
                                                                        <div className="card-body p-0 pt-3 text-right">
                                                                            <div>
                                                                                <div className="checkbox-wrapper pr-2">
                                                                                    <div className="bv-no-focus-ring" id="__BVID__69">
                                                                                        {this
                                                                                            .state
                                                                                            .checkBoxItem
                                                                                            .map((item, i) => {
                                                                                                return (
                                                                                                    <div
                                                                                                        className="d-block text-right custom-control custom-control-inline custom-checkbox">
                                                                                                        <label className="custom-control-label">
                                                                                                            <div className="unchecked-single-checkbox"></div>
                                                                                                            <div className="d-inline-block filter-item-title">
                                                                                                                {item.checkboxname}
                                                                                                            </div>
                                                                                                        </label>
                                                                                                    </div>
                                                                                                )
                                                                                            })}
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        )
                                                    })}

                                                <div className="collapsed__container">
                                                    <a href="/#" className="collapsed">
                                                        متراژ
                                                    </a>
                                                    <div className="collapse show" id="collapse4">
                                                        <div className="card">
                                                            <div className="card-body p-0 pt-3 text-right">
                                                                    <div className="text-box__container">
                                                                        <div className="row">
                                                                            <div className="form-group col-6">
                                                                                <label id="input-group-2__BV_label_" className="d-block">از</label>
                                                                                <div className="bv-no-focus-ring">
                                                                                    <input
                                                                                        id="input-0-min_area"
                                                                                        placeholder="از"
                                                                                        className="text-left form-control"></input>
                                                                                </div>
                                                                            </div>
                                                                            <div className="form-group col-6">
                                                                                <label id="input-group-2__BV_label_" className="d-block">تا</label>
                                                                                <div className="bv-no-focus-ring">
                                                                                    <input
                                                                                        id="input-0-min_area"
                                                                                        placeholder="تا"
                                                                                        className="text-left form-control"></input>
                                                                                </div>
                                                                            </div>
                                                                            <div className="col-12 my-3">
                                                                                <button className="btn btn-outline-primary w-100">
                                                                                    ثبت
                                                                                </button>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="collapsed__container">
                                                    <a href="/#" className="collapsed">
                                                        قیمت
                                                    </a>
                                                    <div className="collapse show" id="collapse4">
                                                        <di className="card">
                                                            <div className="card-body p-0 pt-3 text-right">
                                                                <div>
                                                                    <div className="text-box__container">
                                                                        <div className="row">
                                                                            <div className="form-group col-6">
                                                                                <label id="input-group-2__BV_label_" className="d-block">از (تومان)</label>
                                                                                <div className="bv-no-focus-ring">
                                                                                    <input
                                                                                        id="input-0-min_area"
                                                                                        placeholder="از"
                                                                                        className="text-left form-control"></input>
                                                                                </div>
                                                                            </div>
                                                                            <div className="form-group col-6">
                                                                                <label id="input-group-2__BV_label_" className="d-block">تا ( تومان)</label>
                                                                                <div className="bv-no-focus-ring">
                                                                                    <input
                                                                                        id="input-0-min_area"
                                                                                        placeholder="تا"
                                                                                        className="text-left form-control"></input>
                                                                                </div>
                                                                            </div>
                                                                            <div className="col-12 my-3">
                                                                                <button className="btn btn-outline-primary w-100">
                                                                                    ثبت
                                                                                </button>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </di>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                </Modal> 
                <div className="row flex-column-reverse flex-lg-row px-0 px-lg-4">
 
                    <Col span={4} filters-col >
                        <div className="hidden-xs filters">
                            <div className="filters__arrow-down"></div>
                            {/* باکس فیلتر */}
                            <div className="filter-card">
                                <div className="card">
                                    <header className="card-header">
                                        <div className="mb-0 card-header--noIcon text-right card-header--withIcon">
                                            <span className="icon-filter filters--icon ">
                                                <i className="mdi mdi-filter-variant"></i>
                                            </span>
                                            فیلتر نتایج
                                        </div>
                                    </header>
                                    <div className="card-body p-0">
                                        <div className="text-right col-12">
                                            <div className="d-inline-block card-header--withIcon mt-3">تعداد نتایج</div>
                                            <span className="filters__count">9851</span>
                                            <a
                                                href="/#"
                                                className="btn-link btn-link--danger d-inline-block float-left mt-3">حذف فیلتر</a>
                                            <hr className="filters--divider"/>
                                            <div className="filters-wrapper">
                                                {this
                                                    .state
                                                    .collapsedItem
                                                    .map((item, i) => {
                                                        return (
                                                            <div className="collapsed__container">
                                                                <a href="/#" className="collapsed">
                                                                    {item.titleCollapsed}
                                                                </a>
                                                                <div id="collapse4" className="collapse show">
                                                                    <div className="card">
                                                                        <div className="card-body p-0 pt-3 text-right">
                                                                            <div>
                                                                                <div className="checkbox-wrapper pr-2">
                                                                                    <div className="bv-no-focus-ring" id="__BVID__69">
                                                                                        {this
                                                                                            .state
                                                                                            .checkBoxItem
                                                                                            .map((item, i) => {
                                                                                                return (
                                                                                                    <div
                                                                                                        className="d-block text-right custom-control custom-control-inline custom-checkbox">
                                                                                                        <label className="custom-control-label">
                                                                                                            <div className="unchecked-single-checkbox"></div>
                                                                                                            <div className="d-inline-block filter-item-title">
                                                                                                                {item.checkboxname}
                                                                                                            </div>
                                                                                                        </label>
                                                                                                    </div>
                                                                                                )
                                                                                            })}
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        )
                                                    })}

                                                <div className="collapsed__container">
                                                    <a href="/#" className="collapsed">
                                                        متراژ
                                                    </a>
                                                    <div className="collapse show" id="collapse4">
                                                        <di className="card">
                                                            <div className="card-body p-0 pt-3 text-right">
                                                                <div>
                                                                    <div className="text-box__container">
                                                                        <div className="row">
                                                                            <div className="form-group col-6">
                                                                                <label id="input-group-2__BV_label_" className="d-block">از</label>
                                                                                <div className="bv-no-focus-ring">
                                                                                    <input
                                                                                        id="input-0-min_area"
                                                                                        // placeholder="از"
                                                                                        className="text-left form-control"></input>
                                                                                </div>
                                                                            </div>
                                                                            <div className="form-group col-6">
                                                                                <label id="input-group-2__BV_label_" className="d-block">تا</label>
                                                                                <div className="bv-no-focus-ring">
                                                                                    <input
                                                                                        id="input-0-min_area"
                                                                                        // placeholder="تا"
                                                                                        className="text-left form-control"></input>
                                                                                </div>
                                                                            </div>
                                                                            <div className="col-12 my-3">
                                                                                <button className="btn btn-outline-primary w-100">
                                                                                    ثبت
                                                                                </button>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </di>
                                                    </div>
                                                </div>
                                                <div className="collapsed__container">
                                                    <a href="/#" className="collapsed">
                                                        قیمت
                                                    </a>
                                                    <div className="collapse show" id="collapse4">
                                                        <di className="card">
                                                            <div className="card-body p-0 pt-3 text-right">
                                                                <div>
                                                                    <div className="text-box__container">
                                                                        <div className="row">
                                                                            <div className="form-group col-6">
                                                                                <label id="input-group-2__BV_label_" className="d-block">از (تومان)</label>
                                                                                <div className="bv-no-focus-ring">
                                                                                    <input
                                                                                        id="input-0-min_area"
                                                                                        // placeholder="از"
                                                                                        className="text-left form-control"></input>
                                                                                </div>
                                                                            </div>
                                                                            <div className="form-group col-6">
                                                                                <label id="input-group-2__BV_label_" className="d-block">تا ( تومان)</label>
                                                                                <div className="bv-no-focus-ring">
                                                                                    <input
                                                                                        id="input-0-min_area"
                                                                                        // placeholder="تا"
                                                                                        className="text-left form-control"></input>
                                                                                </div>
                                                                            </div>
                                                                            <div className="col-12 my-3">
                                                                                <button className="btn btn-outline-primary w-100">
                                                                                    ثبت
                                                                                </button>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </di>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* filter */}
                        </div>
                    </Col>
                    
                    <Col span={20} >
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
                            <button className="show-filters-btn mobile-bar__btn" onClick={this.showModal}>فیلتر نتایج</button>
                            <div className="dropdown b-dropdown sort-dropdown btn-group">
                                <button className="btn dropdown-toggle btn-secondary">مرتب‌سازی
                                </button>
                                <ul className="dropdown-menu">
                                    <li>
                                        <a href="/#" className="dropdown-item active">جدیدترین</a>
                                    </li>
                                    <li>
                                        <a href="/#" className="dropdown-item ">بیشترین قیمت</a>
                                    </li>
                                    <li>
                                        <a href="/#" className="dropdown-item ">کمترین قیمت</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="pagination">
                          <Pagination 
                            onChange={this.changeCurrentPage}
                            defaultCurrent={pagination.current}
                            defaultPageSize={pagination.pageSize} 
                            total={property.length} />  
                          </div>
                        <div className="row" >
                            {loading && <div className='spain'>

                            <span class="loader"></span></div> }
                                 { list?.map((card, i) => { 
                                    return ( 
                                        <div className="col-x-12 col-m-6 col-lg-4 mt-4" key={i}>
                                            <div className="cards" onClick={this.handleClickCard.bind(this,card)}>
                                                <Card
                                                    key={card.id}
                                                    imageId={card.imageId}
                                                    price={card.price}
                                                    title={card.title}
                                                    area={card.area}
                                                    address={card.address}
                                                    bedroom={card.numberOfRooms}
                                                    saleOrRent={card.saleOrRent}
                                                    />
                                            </div>
                                        </div>
                                    ) 
                              })  } 
                        </div>
                    </Col>
                </div>
                </div> : <DetailCard data={this.state.row}/>
                            }
                          {/* <div className="pagination">
                          <Pagination 
                            onChange={this.changeCurrentPage}
                            defaultCurrent={pagination.current}
                            defaultPageSize={pagination.pageSize} 
                            total={property.length} />  
                          </div> */}
            </Mainpage>
        )
    }
}
// Buy.defaultProps = {
//         change: (val) => { }
//     }
//  mapStore(Buy) ;


export default Buy

import React from 'react'
import './filterBox.scss'
import listing from '../../assets/listing.jpg'

class FilterBox extends React.Component {
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
        }
    }
    render() {
        return (
            <div>
            <div className="hidden-xs filters">
                            <div className="filters__arrow-down"></div>
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
                                            href="#"
                                            className="btn-link btn-link--danger d-inline-block float-left mt-3">حذف فیلتر</a>
                                        <hr className="filters--divider"/>
                                        <div className="filters-wrapper">
                                            {this
                                                .state
                                                .collapsedItem
                                                .map((item, i) => {
                                                    return (
                                                        <div className="collapsed__container">
                                                            <a href="#" className="collapsed">
                                                                {item.titleCollapsed}
                                                                <span className="icon-plus collapsed--icon plus">
                                                                    <i className="mdi mdi-plus"></i>
                                                                </span>
                                                                
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
                                                <a href="#" className="collapsed">
                                                    متراژ
                                                    <span className="icon-plus collapsed--icon plus">
                                                        <i className="mdi mdi-plus"></i>
                                                    </span>
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
                                                    </di>
                                                </div>
                                            </div>
                                            <div className="collapsed__container">
                                                <a href="#" className="collapsed">
                                                    قیمت
                                                    <span className="icon-plus collapsed--icon plus">
                                                        <i className="mdi mdi-plus"></i>
                                                    </span>
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

                        <div className=""></div>
                        <div className=""></div>
            </div>
        )
    }
}
export default FilterBox
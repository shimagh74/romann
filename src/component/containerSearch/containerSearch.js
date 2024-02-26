import React from 'react'
import './containerSearch.scss'
import CutomDropDown from '../customdropdown/customdropdown'

const ContainerSearch = ({mainTitle ,secondTitle}) => {
    return (
            <div >
                <div className="container-pic container">
                    <div className="container-text-pic">
                        <h1>{mainTitle}</h1>
                        <p>{secondTitle}</p>
                    </div>
                    <div className="search-box">
                        <div className="container-search">
                            <div className="input-holder">
                                <div className="search-holder">
                                <div className="city-neighbourhood-holder">
                                    <div className="input-field">
                                        <CutomDropDown className="dropdown" defaultValue="انتخاب شهر"/>
                                    </div>
                                </div>
                                <div className="city-neighbourhood-holder">
                                    <div className="input-field">
                                    <CutomDropDown className="dropdown" defaultValue="انتخاب محله"/>
                                    </div>
                                </div>
                                <div className="city-neighbourhood-holder">
                                    <div className="input-field">
                                    <CutomDropDown className="dropdown" defaultValue="نوع ملک"/>
                                    </div>
                                    </div>
                                </div>
                                <div className="search-button-box">
                                    <i className="mdi mdi-magnify search-button"></i>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    )
}

export default ContainerSearch
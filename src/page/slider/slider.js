import React from 'react'
import Mainpage from '../../layout/mainpage'
import './slider.css'
import mainImage from "../../assets/listing2.jpg"
import mainImage1 from "../../assets/listing4.jpg"
import mainImage2 from "../../assets/listing5.jpg"

class Slider extends React.Component {
    constructor(props) {
        super(props)
        this.state = {}
    }
    render() {
        return (
            <>

                <div className="slider">
                    <input type="radio" name="slide_switch" id="id1" checked="checked"/>
                    <label for="id1">
                        <img src={mainImage} width="50" className="image ng-tns-c119-5 active"/>
                    </label>
                    <img src={mainImage}/>

                    <input type="radio" name="slide_switch" id="id2"/>
                    <label for="id2">
                        <img src={mainImage1} width="50"/>
                    </label>
                    <img src={mainImage2}/>

                    <input type="radio" name="slide_switch" id="id3"/>
                    <label for="id3">
                        <img src={mainImage1} width="50"/>
                    </label>
                    <img src={mainImage1}/>

                </div>
            </>
        )
    }
}

export default Slider
import React from 'react'
import Mainpage from '../../layout/mainpage'
import './aboutUs.scss'
import aboutPic from "../../assets/undraw_Code_thinking_re_gka2.svg"
import aboutPic1 from "../../assets/undraw_All_the_data_re_hh4w.svg"

class AboutUs extends React.Component {
    constructor(props) {
        super(props)
        this.state = {}
    }
    render() {
        return (
            <Mainpage>
                <article className="flex-col al-center container about-us">
                    <h1>About Australia's favourite destination for commercial property.</h1>
                    <section>
                        <p>Whether you’re looking for a commercial property, researching the market or looking for a commercial agent, find it all on Australia’s favourite commercial property site.

                            With our foundations in property search, we also are one of Australia’s best destinations for news on the commercial property market, tips and guides to get you started, and stories of inspiring commercial property experiences.
                        </p>
                    </section>
                    <section className="flex-row al-center jus-between wi-90 wi-m-90 wi-ml-100 section2">
                        <div className="flex-col al-center wi-55">
                            <h3>Take your property search anywhere.</h3>
                            <p>It’s easy to experience commercial property anywhere you go. Our app is available for
                        iPhone, iPad and Android devices and can help you monitor the market and find exactly what you’re
                        looking for.</p>
                        </div>
                        <div className="flex-col al-center wi-40 image">
                            <img src={aboutPic} />
                        </div>
                    </section>
                    <section className="flex-row jus-between wi-90 wi-xl-90 wi-ml-100 section3">
                        <div className="flex-col al-center wi-40">
                            <img className="not-responsive" src={aboutPic1}></img>
                        </div>
                        <div className="flex-col al-center wi-50">
                            <h3>Find an agent to list your commercial property.</h3>
                            <img className="responsive" src={aboutPic1}></img>

                            <p>Looking to sell or lease out your commercial property? We can connect you with Australia’s leading commercial real estate agencies experienced in your local area. You’ll need to deal with a real estate agent to list on realcommercial.com.au

                            </p>
                        </div>

                    </section>
                </article>

            </Mainpage>
        )
    }
}

export default AboutUs
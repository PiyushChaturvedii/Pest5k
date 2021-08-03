import React, { Component } from 'react'

export default class Banner extends Component {
    render() {
        return (
            <div>
                <div id="slides" className="section slider-banner">
                    <ul className="slides-container">
                        <li>
                            {" "}
                            <img src="images/slide-1.jpg" alt="" />
                            <div className="carousel-caption text-center">
                                <div className="container">
                                    <div className="wrap-caption">
                                        <div className="caption-heading">
                                            <div className="color1">
                                                {" "}
                                                <span>Your Local Pest Control</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </li>
                        <li>
                            {" "}
                            <img src="images/slide-2.jpg" alt="" />
                            <div className="carousel-caption">
                                <div className="container">
                                    <div className="wrap-caption">
                                        <div className="caption-heading">
                                            <div className="color1">
                                                {" "}
                                                <span>Pest Extermination and Control</span>{" "}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </li>
                        <li>
                            {" "}
                            <img src="images/slide-3.jpg" alt="" />
                            <div className="carousel-caption">
                                <div className="container">
                                    <div className="wrap-caption">
                                        <div className="caption-heading">
                                            <div className="color1">
                                                {" "}
                                                <span>Insect Control Solutions</span>{" "}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>

            </div>
        )
    }
}

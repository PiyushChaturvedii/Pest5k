import React, { Component } from 'react'

export default class Navbar extends Component {
    render() {
        return (
            <div>
                 <>
                    {/* Load page */}
                    <div className="animationload">
                        <div className="loader" />
                    </div>
                    {/* NAVBAR SECTION */}
                    {/* <div className="navbar main-navbar navbar-fixed-top">
                        <div className="row bg-white">
                            <div className="header-topbar">
                                <div className="container">
                                    <div className="row">
                                        <div className="col-sm-7 col-md-7">
                                            <div className="info">
                                                <div className="info-item">
                                                    {" "}
                                                    <span className="fa fa-phone" /> 000-000-000{" "}
                                                </div>
                                                <div className="info-item">
                                                    {" "}
                                                    <span className="fas fa-clock" /> Sun-Sat: 8.00-18.00{" "}
                                                </div>
                                                <div className="info-item">
                                                    {" "}
                                                    <span className="fas fa-envelope" />{" "}
                                                    <a href="mailto:ourpestcontrol92@gmail.com" title>
                                                        ourpestcontrol92@gmail.com
                                                    </a>{" "}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div> */}
                    <div className="container nav-container">
                        <div className="navbar-header">
                            <button
                                type="button"
                                className="navbar-toggle"
                                data-toggle="collapse"
                                data-target=".navbar-collapse"
                            >
                                {" "}
                                <span className="icon-bar" /> <span className="icon-bar" />{" "}
                                <span className="icon-bar" />{" "}
                            </button>
                            <a className="navbar-brand" href="index.html">
                                {" "}
                                <img src="images/logo.png" alt ="" />{" "}
                            </a>{" "}
                        </div>
                        <nav className="navbar-collapse collapse">
                            <ul className="nav navbar-nav navbar-right">
                                {/* <li className="active">
                                    <a href="index.html">HOME</a>
                                </li> */}
                                <li>
                                    <a href="#aboutus">ABOUT US</a>
                                </li>
                                <li>
                                    <a href="#Footer">CONTACT</a>
                                </li>
                            </ul>
                        </nav>
                    </div>

                </>

            </div>
        )
    }
}

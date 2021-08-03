import React, { Component } from 'react'

export default class Footer extends Component {
    render() {
        return (
            <div id="Footer">
                <div className="footer background-footer">
                    <div className="container">
                        <div className="row">
                            <div className="col-sm-4 col-md-4">
                                <div className="block-info">
                                    <div className="block-info-icon">
                                        {" "}
                                        <span className="fa fa-phone" />{" "}
                                    </div>
                                    <div className="block-info-body">
                                        <p>call us now</p>
                                        <h4>000-000-000</h4>
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-4 col-md-4">
                                <div className="block-info">
                                    <div className="block-info-icon">
                                        {" "}
                                        <span className="fas fa-clock" />{" "}
                                    </div>
                                    <div className="block-info-body">
                                        <p>Working Hours</p>
                                        <h4>Mon - Fri 09:00 - 18:00</h4>
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-4 col-md-4">
                                <div className="block-info">
                                    <div className="block-info-icon">
                                        {" "}
                                        <span className="fas fa-map-marker" />{" "}
                                    </div>
                                    <div className="block-info-body">
                                        <p>Address</p>
                                        <h4>
                                            <a href="#" title>
                                                city, State
                                            </a>
                                        </h4>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-sm-4 col-md-4">
                                <div className="footer-block">
                                    <div className="footer-title">
                                        <h5>ABOUT</h5>
                                    </div>
                                    <p>
                                        There are so many pest control services available in India but we
                                        are best Pest Control in India and we have experienced staff those
                                        who fully trained to give best and Pest Control service to
                                        protecting your place and build pest free zone near you for your
                                        healthy environment
                                    </p>
                                </div>
                            </div>
                            <div className="col-sm-4 col-md-4">
                                <div className="footer-block">
                                    <div className="footer-title">
                                        <h5>COMPANY</h5>
                                    </div>
                                    <ul className="list">
                                        <li>
                                            <a href="about.html" title>
                                                About Us
                                            </a>
                                        </li>
                                        <li>
                                            <a href="contact.html" title>
                                                Contact
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-sm-4 col-md-4">
                                <div className="footer-block">
                                    <div className="footer-title">
                                        <h5>SERVICES</h5>
                                    </div>
                                    <ul className="list">
                                        <li>
                                            <a href="#" title>
                                                Termite (Pre &amp; Post Construction) Treatment{" "}
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#" title>
                                                General Pest Control
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#" title>
                                                Wooden Treatment
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#" title>
                                                Rat Control
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#" title>
                                                Soil Treatment
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="footer-social-media">
                        <div className="container">
                            <div className="row">
                                <div className="col-sm-12 col-md-12">
                                    <div className="footer-social">
                                        {" "}
                                        <a href="#" title>
                                            <div className="item">
                                                {" "}
                                                <i className="fab fa-facebook-f" />{" "}
                                            </div>
                                        </a>{" "}
                                        <a href="#" title>
                                            <div className="item">
                                                {" "}
                                                <i className="fab fa-twitter" />{" "}
                                            </div>
                                        </a>{" "}
                                        <a href="#" title>
                                            <div className="item">
                                                {" "}
                                                <i className="fab fa-google" />{" "}
                                            </div>
                                        </a>{" "}
                                        <a href="#" title>
                                            <div className="item">
                                                {" "}
                                                <i className="fab fa-instagram" />{" "}
                                            </div>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="footer-copy">
                        <div className="container">
                            <div className="row">
                                <div className="col-sm-12 col-md-12">
                                    <p className="footer-tex">
                                        © 2020 Our Pest Control - All Rights Reserved{" "}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

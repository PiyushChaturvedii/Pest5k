import React, { Component } from 'react'

export default class Team extends Component {
    render() {
        return (
            <div>
                <div className="section team">
                    <div className="container">
                        <div className="row">
                            <div className="col-sm-6 col-md-6">
                                <div className="section-title">
                                    <h3 className="lead">TEAM MEMBERS</h3>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-sm-4 col-md-3">
                                <div className="block-team">
                                    <div className="image">
                                        {" "}
                                        <img src="images/team-1.jpg" alt className="img-responsive" />{" "}
                                    </div>
                                    <div className="description">
                                        <h5 className="blok-title"> Bijay India </h5>
                                        <p>Director</p>
                                        <p>
                                            <b>000-000-000</b>
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-4 col-md-3">
                                <div className="block-team">
                                    <div className="image">
                                        {" "}
                                        <img src="images/team-2.jpg" alt className="img-responsive" />{" "}
                                    </div>
                                    <div className="description">
                                        <h5 className="blok-title"> Milan regmi </h5>
                                        <p>Marketing manager</p>
                                        <p>
                                            <b>000-000-000</b>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        )
    }
}

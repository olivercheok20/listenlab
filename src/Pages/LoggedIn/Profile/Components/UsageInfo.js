import React, { Component, Fragment } from "react";
import {
    Row,
    Col,
    Button,
    CardHeader,
    Container,
    Card,
    CardFooter,
} from "reactstrap";

import {
    VerticalTimeline,
    VerticalTimelineElement,
} from "react-vertical-timeline-component";

import CountUp from "react-countup";

// import Ionicon from 'react-ionicons';
import { IoIosAnalytics } from "react-icons/io";


import {
    faAngleUp,
    faAngleDown,
} from "@fortawesome/free-solid-svg-icons";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import Select from "react-select";

const options = [
    { value: "1", label: "Today" },
    { value: "2", label: "Last Week" },
    { value: "3", label: "Last 30 Days" },
    { value: "4", label: "Last 3 Months" },
    { value: "5", label: "Last Year" },
];



export default class AnalyticsDashboard1 extends Component {

    render() {

        return (
            <Fragment>
                <Container fluid>
                    <Card className="mb-3">
                        <CardHeader className="card-header-tab z-index-6">
                            <div className="card-header-title font-size-lg text-capitalize font-weight-normal">
                                <i className="header-icon lnr-charts icon-gradient bg-happy-green"> {" "} </i>
                                Usage Info
                            </div>
                        </CardHeader>
                        <Row className="no-gutters">
                            <Col sm="6" md="4" xl="4">
                                <div className="card no-shadow rm-border bg-transparent widget-chart text-left">
                                    <div className="icon-wrapper rounded-circle">
                                        <div className="icon-wrapper-bg opacity-9 bg-warning" />
                                        <i className="pe-7s-radio text-white" />
                                    </div>
                                    <div className="widget-chart-content">
                                        <div className="widget-subheading">Rooms Created</div>
                                        <div className="widget-numbers">
                                            <CountUp start={0} end={this.props.numberOfRoomsCreated}
                                                useEasing={true} duration="1" />
                                        </div>
                                    </div>
                                </div>
                                <div className="divider m-0 d-md-none d-sm-block" />
                            </Col>
                            <Col sm="6" md="4" xl="4">
                                <div className="card no-shadow rm-border bg-transparent widget-chart text-left">
                                    <div className="icon-wrapper rounded-circle">
                                        <div className="icon-wrapper-bg opacity-9 bg-danger" />
                                        <i className="pe-7s-headphones text-white" />
                                    </div>
                                    <div className="widget-chart-content">
                                        <div className="widget-subheading">Rooms Joined</div>
                                        <div className="widget-numbers">
                                            <CountUp start={0} end={this.props.numberOfRoomsJoined}
                                                useEasing={true} duration="1" />
                                        </div>
                                    </div>
                                </div>
                                <div className="divider m-0 d-md-none d-sm-block" />
                            </Col>
                            <Col sm="12" md="4" xl="4">
                                <div className="card no-shadow rm-border bg-transparent widget-chart text-left">
                                    <div className="icon-wrapper rounded-circle">
                                        <div className="icon-wrapper-bg opacity-9 bg-success" />
                                        <i className="pe-7s-music text-white" />
                                    </div>
                                    <div className="widget-chart-content">
                                        <div className="widget-subheading">Songs Played</div>
                                        <div className="widget-numbers">
                                            <CountUp start={0} end={this.props.numberOfSongsPlayed} useEasing={true} duration="1" />
                                        </div>
                                    </div>
                                </div>
                            </Col>
                        </Row>
                    </Card>
                </Container>
            </Fragment>
        );
    }
}

import React, {Component} from "react";
import './ContactUs.css';
import '../App/App.css';
//importing bootstrap
import {Col, Container, Row} from "react-bootstrap";
//importing Google Maps Component
import Map from "../Map/Map";
import Footer from "../Footer/Footer";
//importing a png's
import backImg from '../../img/Icons/back.png';
import email from '../../img/Icons/email.png';
import phone from '../../img/Icons/call-answer.png';
import geo from '../../img/Icons/maps-and-flags.png';
import facebook from '../../img/Icons/facebook.png';
import instagram from '../../img/Icons/instagram.png';
import telegram from '../../img/Icons/telegram.png';
import ErrorBoundary from "../ErrorBoundary/ErrorBoundary";
import {Link} from "react-router-dom";


export default class ContactUs extends Component {

    componentDidCatch(error, errorInfo) {
        console.error( error );
        console.error( errorInfo );
        return <ErrorBoundary/>
    }

    render() {
        return (
            <React.Fragment>
                <Container fluid={true} className="ContactUsContainer">
                    <Row>
                        <Col sm={5}>
                            <div className="d-flex linkToMain">
                                <Link to="/">
                                    <img src={backImg} alt="Back"/>
                                </Link>
                                <Link to="/">
                                    главная страница
                                </Link>
                            </div>
                        </Col>
                    </Row>
                    {/*Links Block with using a footer css styles*/}
                    <p className="containerHeader"><span className="blue">Контакты</span></p>
                    <Row className="contactUsLinks">
                        <Col sm={12} lg={4}>
                            <div className="d-flex contactBlock">
                                <a target="_blank"
                                   href="https://www.google.com/maps/place/%D1%83%D0%BB%D0%B8%D1%86%D0%B0+%D0%9A%D0%BD%D1%8F%D0%B7%D1%8F+%D0%AF%D1%80%D0%BE%D1%81%D0%BB%D0%B0%D0%B2%D0%B0+%D0%9C%D1%83%D0%B4%D1%80%D0%BE%D0%B3%D0%BE,+59,+%D0%94%D0%BD%D0%B8%D0%BF%D1%80%D0%BE,+%D0%94%D0%BD%D0%B5%D0%BF%D1%80%D0%BE%D0%BF%D0%B5%D1%82%D1%80%D0%BE%D0%B2%D1%81%D0%BA%D0%B0%D1%8F+%D0%BE%D0%B1%D0%BB%D0%B0%D1%81%D1%82%D1%8C,+49000/@48.4782994,35.0208805,17z/data=!3m1!4b1!4m5!3m4!1s0x40dbe2588b7a89ef:0x5e993f6db37f7214!8m2!3d48.4782959!4d35.0230692">
                                    <img src={geo} alt="geolocation"/>
                                </a>
                                <p>
                                    <a target="_blank"
                                       href="https://www.google.com/maps/place/%D1%83%D0%BB%D0%B8%D1%86%D0%B0+%D0%9A%D0%BD%D1%8F%D0%B7%D1%8F+%D0%AF%D1%80%D0%BE%D1%81%D0%BB%D0%B0%D0%B2%D0%B0+%D0%9C%D1%83%D0%B4%D1%80%D0%BE%D0%B3%D0%BE,+59,+%D0%94%D0%BD%D0%B8%D0%BF%D1%80%D0%BE,+%D0%94%D0%BD%D0%B5%D0%BF%D1%80%D0%BE%D0%BF%D0%B5%D1%82%D1%80%D0%BE%D0%B2%D1%81%D0%BA%D0%B0%D1%8F+%D0%BE%D0%B1%D0%BB%D0%B0%D1%81%D1%82%D1%8C,+49000/@48.4782994,35.0208805,17z/data=!3m1!4b1!4m5!3m4!1s0x40dbe2588b7a89ef:0x5e993f6db37f7214!8m2!3d48.4782959!4d35.0230692">
                                        г. Днепр<br/>ул. Ярослава Мудрого № 59-А<br/>офис 5, 49038
                                    </a>
                                </p>
                            </div>
                        </Col>
                        <Col sm={12} lg={4}>
                            <div className="d-flex contactBlock">
                                <a href="tel:+380679550954">
                                    <img src={phone} alt="phone"/>
                                </a>
                                <p>
                                    <a href="tel:+380679550954">
                                        +38-(097)-472-85-75
                                    </a>
                                </p>
                            </div>
                            <div className="d-flex contactBlock">
                                <a href="tel:+380679550954">
                                    <img src={phone} alt="phone"/>
                                </a>
                                <p>
                                    <a href="tel:+380679550954">
                                        +38-(067)-955-09-54
                                    </a>
                                </p>
                            </div>
                        </Col>
                        <Col sm={12} lg={4}>
                            <div className="d-flex contactBlock">
                                <a href="mailto:dzko.dp@gmail.com">
                                    <img src={email} alt="email"/>
                                </a>
                                <p>
                                    <a href="mailto:lantsug18@gmail.com">
                                        dzko.dp@gmail.com
                                    </a>
                                </p>
                            </div>
                            <div className="d-flex contactBlock">
                                <a href="mailto:lantsug18@gmail.com">
                                    <img src={email} alt="email"/>
                                </a>
                                <p>
                                    <a href="mailto:lantsug18@gmail.com">
                                        lantsug18@gmail.com
                                    </a>
                                </p>
                            </div>
                        </Col>
                    </Row>
                    {/*Map BLock*/}
                    <p className="containerHeader"><span className="blue">Мы</span> на карте</p>
                    <div className="map">
                        <Map/>
                    </div>
                    <p className="containerHeader"><span className="blue">Мы</span> в соц. сетях</p>
                    <Row className="socialLinks">
                        <img src={instagram} alt="instagram link"/>
                        <img src={facebook} alt="facebook link"/>
                        <img src={telegram} alt="telegram link"/>
                    </Row>
                </Container>
                <Footer/>
            </React.Fragment>

        );
    }
};
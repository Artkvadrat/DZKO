import React, {Component} from "react";
import './Footer.css';
import '../App/App.css';
//importing Form component
import Form from "../Form/Form";
//importing png's
import email from '../../img/Icons/email.png';
import phone from '../../img/Icons/call-answer.png';
import geo from '../../img/Icons/maps-and-flags.png';
import copyright from '../../img/Icons/copyright.png'
//bootstrap components importing
import {Col, Container, Row} from "react-bootstrap";
import ErrorBoundary from "../ErrorBoundary/ErrorBoundary";

export default class Footer extends Component{

    componentDidCatch(error, errorInfo) {
        console.error( error );
        console.error( errorInfo );
        return <ErrorBoundary/>
    }

    render() {
        return (
            <Container className="footer" fluid={true}>
                <p className="containerHeader">Свяжитесь с <span className="blue">нами</span></p>
                <Row className="justify-content-center">
                    <Col sm={12} lg={4}>
                        <p className="contactBlockHeader">У вас есть вопрос?</p>
                        <Form/>
                    </Col>
                    <Col sm={12} lg={6}>
                        <p className="contactBlockHeader">Контакты</p>
                        <div className="contactInfo">
                            <div>
                                <div className="d-flex contactBlock">
                                    <a href="tel:+380679550954">
                                        <img src={phone} alt="phone"/>
                                    </a>
                                    <p>
                                        <a href="tel:+380974728575">
                                            +38-(097)-472-85-75
                                        </a>
                                    </p>
                                </div>
                                <div className="d-flex contactBlock">
                                    <a href="mailto:lantsug18@gmail.com">
                                        <img src={email} alt="email"/>
                                    </a>
                                    <p>
                                        <a href="mailto:dzko.dp@gmail.com">
                                            dzko.dp@gmail.com
                                        </a>
                                    </p>
                                </div>
                                <div className="d-flex contactBlock">
                                    <a rel="noopener noreferrer"
                                       target="_blank"
                                       href="https://www.google.com/maps/place/%D1%83%D0%BB%D0%B8%D1%86%D0%B0+%D0%9A%D0%BD%D1%8F%D0%B7%D1%8F+%D0%AF%D1%80%D0%BE%D1%81%D0%BB%D0%B0%D0%B2%D0%B0+%D0%9C%D1%83%D0%B4%D1%80%D0%BE%D0%B3%D0%BE,+59,+%D0%94%D0%BD%D0%B8%D0%BF%D1%80%D0%BE,+%D0%94%D0%BD%D0%B5%D0%BF%D1%80%D0%BE%D0%BF%D0%B5%D1%82%D1%80%D0%BE%D0%B2%D1%81%D0%BA%D0%B0%D1%8F+%D0%BE%D0%B1%D0%BB%D0%B0%D1%81%D1%82%D1%8C,+49000/@48.4782994,35.0208805,17z/data=!3m1!4b1!4m5!3m4!1s0x40dbe2588b7a89ef:0x5e993f6db37f7214!8m2!3d48.4782959!4d35.0230692">
                                        <img src={geo} alt="geolocation"/>
                                    </a>
                                    <p>
                                        <a rel="noopener noreferrer"
                                           target="_blank"
                                           href="https://www.google.com/maps/place/%D1%83%D0%BB%D0%B8%D1%86%D0%B0+%D0%9A%D0%BD%D1%8F%D0%B7%D1%8F+%D0%AF%D1%80%D0%BE%D1%81%D0%BB%D0%B0%D0%B2%D0%B0+%D0%9C%D1%83%D0%B4%D1%80%D0%BE%D0%B3%D0%BE,+59,+%D0%94%D0%BD%D0%B8%D0%BF%D1%80%D0%BE,+%D0%94%D0%BD%D0%B5%D0%BF%D1%80%D0%BE%D0%BF%D0%B5%D1%82%D1%80%D0%BE%D0%B2%D1%81%D0%BA%D0%B0%D1%8F+%D0%BE%D0%B1%D0%BB%D0%B0%D1%81%D1%82%D1%8C,+49000/@48.4782994,35.0208805,17z/data=!3m1!4b1!4m5!3m4!1s0x40dbe2588b7a89ef:0x5e993f6db37f7214!8m2!3d48.4782959!4d35.0230692">
                                            г. Днепр<br/>ул. Ярослава Мудрого<br/> № 59-А<br/>офис 5, 49000
                                        </a>
                                    </p>
                                </div>
                            </div>
                            <div>
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
                            </div>
                        </div>
                    </Col>
                </Row>
                <Row className="rightsReserved">
                    <img src={copyright} alt=""/>
                    <p>DZKO</p>
                </Row>
            </Container>
        )
    }
}


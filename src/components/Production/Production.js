import React, {Component} from "react";
import './Production.css';
//importing components
import Footer from "../Footer/Footer";
import ErrorBoundary from "../ErrorBoundary/ErrorBoundary";
import {Col, Container, Row} from "react-bootstrap";
import DetailedListPage from "../DetailedListPage/DetailedListPage";
import { Link } from 'react-router-dom';
//import images
import backImg from "../../img/Icons/back.png";
import conveyor from '../../img/products/34.png';
import tank from '../../img/products/41.png';
import chain from '../../img/products/76.png';
import service from '../../img/products/36.png'

export default class Production extends Component {

    componentDidCatch(error, errorInfo) {
        console.error( error );
        console.error( errorInfo );
        return <ErrorBoundary/>
    }

    render() {

        return (
            <React.Fragment>
                <Container fluid={true} className="ProductionContainer">
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
                    <p className="containerHeader"><span className="blue">Продукция</span></p>
                    <Row className="justify-content-center">
                        <Col lg={4} sm={12}>
                            <Link to='/production/conveyor'>
                                <button className="productionBlock">
                                    <img src={conveyor} alt="Конвейер"/>
                                    <p>Конвейера</p>
                                </button>
                            </Link>
                        </Col>
                        <Col lg={4} sm={12}>
                            <Link to='/production/tanks'>
                                <button className="productionBlock">
                                    <img src={tank} alt=""/>
                                    <p>Металлоконструкции</p>
                                </button>
                            </Link>
                        </Col>
                        <Col lg={4} sm={12}>
                            <Link to='/production/chains'>
                                <button className="productionBlock">
                                    <img src={chain} alt=""/>
                                    <p>Цепи и такелаж</p>
                                </button>
                            </Link>
                        </Col>
                        <Col lg={4} sm={12}>
                            <Link to='/production/metalProcessing'>
                                <button className="productionBlock">
                                    <img src={service} alt=""/>
                                    <p>Механическая обработка металла</p>
                                </button>
                            </Link>
                        </Col>
                        <Col lg={4} sm={12}>
                            <Link to='/production/services'>
                                <button className="productionBlock">
                                    <img src={service} alt=""/>
                                    <p>Услуги</p>
                                </button>
                            </Link>
                        </Col>
                    </Row>
                </Container>
                <Footer/>
            </React.Fragment>
        )
    }
}
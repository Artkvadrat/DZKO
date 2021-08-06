import React, {Component} from "react";
import './DetailedList.css';
//import components
import {ButtonGroup, Col, Container, Row} from "react-bootstrap";
import { Link } from 'react-router-dom';
import DetailedListBlocks from "../DetailedListBlocks/DetailedListBlocks";
import {Helmet} from "react-helmet";
//importing img
import back from "../../img/Icons/back.png";


export default class DetailedListPage extends Component {

    state = {
        buttons: [
            { text: "Конвейеры", active: false, id: 1 },
            { text: "Изготовление металлоконструкций", active: false, id: 2 },
            { text: "Бак конденсаторный", active: false, id: 3 },
            { text: "Цепи такелаж", active: false, id: 4 },
            { text: "Механическая обработка металла", active: false, id: 5 },
            { text: "Ремонт оборудования", active: false, id: 6 },
            { text: "Линия для переработки корнеплодов", active: false, id: 7 },
            { text: "Муфта упругая втулочно-пальцевая", active: false, id: 8 },
            { text: "Трубные поворотные шарниры", active: false, id: 9 },
        ]
    };

    componentWillMount() {
        let id = this.props.active - 1;
        this.setState(({buttons}) => {
            return buttons[id].active = true
        })
    }

    updateStyles( id ) {
        const { buttons } = this.state;
        for ( let i = 0; i < buttons.length; i++ ) {
            this.setState(({buttons}) => {
                buttons[i].active = false;
            })
        }

        this.setState(({buttons}) => {
            return buttons[id-1].active = true
        })

    }

    componentDidUpdate(prevProps) {
        if ( this.props.active !== prevProps.active ) {
            this.updateStyles(this.props.active);
        }
    }

    findActive() {
        let url = window.location.href;
        let result = /(chains|tank|conveyor|metalStructures|services|repair|rootVegetable|sleeveFingerCoupling|pipeSwivelJoint)/.exec(url);
        return result[0];
    }

    activeForTitle() {
        let result = this.findActive();
        switch (result) {
            case "conveyor":
                return "ДЗКО | Конвейеры";
            case "chains":
                return "ДЗКО | Цепи такелаж";
            case "tank":
                return "ДЗКО | Бак конденсаторный";
            case "metalStructures":
                return "ДЗКО | Металлоконструкции";
            case "services":
                return "ДЗКО | Механическая обработка металла";
            case "repair":
                return "ДЗКО | Ремонт оборудования";
            case "rootVegetable":
                return "ДЗКО | Линия обработки корнеплодов";
            case "sleeveFingerCoupling":
                return "ДЗКО | Муфта упругая втулочно-пальцевая";
            case "pipeSwivelJoint":
                return "ДЗКО | Трубные поворотные шарниры";
            default:
                return " "
        }
    }

    render() {

        let classActive = "activeButton";
        let classPassive = "nonActiveButton";
        const { buttons } = this.state;

        return (
            <React.Fragment>
                <Helmet>
                    <title>{this.activeForTitle()}</title>
                    <meta name="description" content="Днепропетровский завод конвейерного оборудавния - наибольший ассортимет продукции, товаров и услуг!"/>
                    <meta name="keywords" content="ДЗКО контакты адрес номер телефона"/>
                </Helmet>
                <Container fluid={true} className="detailedListContainer">
                    <Row className="linkToMain">
                        <Link to="/production">
                            <img src={back} alt=""/>
                        </Link>
                        <Link to="/production">
                            назад
                        </Link>
                    </Row>
                    <Row>
                        <Col lg={3} sm={12}>
                            <ButtonGroup className="detailedListMenu">
                                <Link to='/production/conveyor' replace>
                                    <button type="button"
                                            className={ buttons[0].active ? classActive : classPassive }>
                                        { buttons[0].text}
                                    </button>
                                </Link>
                                <Link to="/production/rootVegetableProcessing">
                                    <button type="button"
                                            className={ buttons[6].active ? classActive : classPassive }>
                                        { buttons[6].text}
                                    </button>
                                </Link>
                                <Link to='/production/chains'>
                                    <button type="button"
                                            className={ buttons[3].active ? classActive : classPassive }>
                                        { buttons[3].text}
                                    </button>
                                </Link>
                                <Link to='/production/metalStructures'>
                                    <button  type="button"
                                             className={ buttons[1].active ? classActive : classPassive }>
                                        { buttons[1].text}
                                    </button>
                                </Link>
                                <Link to='/production/tank'>
                                    <button  type="button"
                                             className={ buttons[2].active ? classActive : classPassive }>
                                        { buttons[2].text}
                                    </button>
                                </Link>
                                <Link to="/production/services">
                                    <button type="button"
                                            className={ buttons[4].active ? classActive : classPassive }>
                                        { buttons[4].text}
                                    </button>
                                </Link>
                                <Link to="/production/repair">
                                    <button type="button"
                                            className={ buttons[5].active ? classActive : classPassive }>
                                        { buttons[5].text}
                                    </button>
                                </Link>
                                <Link to="/production/sleeveFingerCoupling">
                                    <button type="button"
                                            className={ buttons[7].active ? classActive : classPassive }>
                                        { buttons[7].text}
                                    </button>
                                </Link>
                                <Link to="/production/pipeSwivelJoint">
                                    <button type="button"
                                            className={ buttons[8].active ? classActive : classPassive }>
                                        { buttons[8].text}
                                    </button>
                                </Link>
                            </ButtonGroup>
                        </Col>
                        <Col lg={8} sm={12}>
                            <Row>
                                <DetailedListBlocks active={ this.findActive() }/>
                            </Row>
                        </Col>
                    </Row>
                </Container>
            </React.Fragment>
        )
    }
}
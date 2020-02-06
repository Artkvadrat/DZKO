import React, {Component} from "react";
import './DetailedList.css';
//import components
import {ButtonGroup, Col, Container, Row} from "react-bootstrap";
import { Link } from 'react-router-dom';
import DetailedListBlocks from "../DetailedListBlocks/DetailedListBlocks";
//importing img
import back from "../../img/Icons/back.png";


export default class DetailedListPage extends Component {

    state = {
        buttons: [
            { text: "Конвейера", active: false, id: 1 },
            { text: "Металлоконструкции", active: false, id: 2 },
            { text: "Цепи и такелаж", active: false, id: 3 },
            { text: "Механическая обработка металла", active: false, id: 4 },
            { text: "Услуги", active: false, id: 5 }
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
        let result = /(chains|tanks|conveyor|metalProcessing|services)/.exec(url);
        return result[0];
    }

    render() {

        let classActive = "activeButton";
        let classPassive = "nonActiveButton";
        const { buttons } = this.state;

        return (
            <React.Fragment>
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
                                <Link to='/production/tanks'>
                                    <button  type="button"
                                             className={ buttons[1].active ? classActive : classPassive }>
                                        { buttons[1].text}
                                    </button>
                                </Link>
                                <Link to='/production/chains'>
                                    <button type="button"
                                            className={ buttons[2].active ? classActive : classPassive }>
                                        { buttons[2].text}
                                    </button>
                                </Link>
                                <Link to="/production/metalProcessing">
                                    <button type="button"
                                            className={ buttons[3].active ? classActive : classPassive }>
                                        { buttons[3].text}
                                    </button>
                                </Link>
                                <Link to="/production/services">
                                    <button type="button"
                                            className={ buttons[4].active ? classActive : classPassive }>
                                        { buttons[4].text}
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
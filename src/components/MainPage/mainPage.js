import React from "react";
import "./mainPage.css";
import Footer from "../Footer/Footer";
import {Col, Container, Row} from "react-bootstrap";
import {Link} from "react-router-dom";
import conveyor from "../../img/products/34.png";
import tank from "../../img/products/41.png";
import company from "../../img/company.jpg";
import metalStructures from "../../img/products/40.jpg";
import cooperation from "../../img/cooperation.jpg";
import project from "../../img/project.jpg";

const MainPage = () => {
    return (
        <React.Fragment>
            <Container fluid={true} className="mainPageContainer">
                <p className="containerHeader" style={{marginTop: "80px"}}>Наша <span className="blue">продукция</span></p>
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
                        <Link to='/production/metalStructures'>
                            <button className="productionBlock">
                                <img src={metalStructures} alt=""/>
                                <p>Металлоконструкции</p>
                            </button>
                        </Link>
                    </Col>
                    <Col lg={4} sm={12}>
                        <Link to='/production/tank'>
                            <button className="productionBlock">
                                <img src={tank} alt=""/>
                                <p>Бак конденсаторный</p>
                            </button>
                        </Link>
                    </Col>
                </Row>
                <Row className="justify-content-center">
                    <Link to="/production">
                        <button className="allProductionButton">
                            Вся продукция
                        </button>
                    </Link>
                </Row>
                <p className="containerHeader">О <span className="blue">компании</span></p>
                <Row className="justify-content-center">
                    <Col lg={4} sm={12} className="aboutImg">
                        <p>
                            <img src={project} alt="Company"/>
                        </p>
                    </Col>
                    <Col lg={4} sm={12}>
                        <p className="backgroundNumber">1</p>
                        <p className="aboutText"><span className="textHeader">ООО «Днепровский завод конвейерного оборудования»</span> это дружный коллектив единомышленников-проффесионалов, основным направлением деятельности которой является разработка и изготовление транспортеров, конвейеров, норий и другого элеваторного оборудования.</p>
                        <p className="aboutText">В сферу деятельности компании входит комплекс услуг по проектированию, разработке конструкторской документации и непосредственного воплощения  изделия в металле.</p>
                    </Col>
                </Row>
                <Row className="justify-content-center" id="second">
                    <Col lg={4} sm={12} className="aboutImg">
                        <p>
                            <img src={company} alt="Company"/>
                        </p>
                    </Col>
                    <Col lg={4} sm={12}>
                        <p className="backgroundNumber">2</p>
                        <p className="aboutText">Кроме типовой продукции, ООО “ДЗКО” занимается разработкой и изготовлением различного нестандартного оборудования, в том числе и по чертежам и эскизам Заказчика.</p>
                        <p className="aboutText">Квалифицированный коллектив предприятия в совокупности с современным  производственным оборудованием  обеспечивает  высокое качество выпускаемых изделий  и минимальные сроки производства.</p>
                    </Col>
                </Row>
                <Row className="justify-content-center">
                    <Col lg={4} sm={12} className="aboutImg">
                        <p>
                            <img src={cooperation} alt="Company"/>
                        </p>
                    </Col>
                    <Col lg={4} sm={12}>
                        <p className="backgroundNumber">3</p>
                        <p className="aboutText">Для комплектации производимого оборудования мы используем  комплектующие ведущих зарубежных  компаний  Nord, SEW, Eurodrive, Motovario, SKF, NSK, Camozzi , Hardox.</p>
                        <p className="aboutText">Наша компания заинтересована в сотрудничестве с любым клиентом: мы готовы выполнить как крупный заказ, так и решить разовые индивидуальные задачи.</p>
                    </Col>
                </Row>
            </Container>
            <Footer/>
        </React.Fragment>
    )
};

export default MainPage;
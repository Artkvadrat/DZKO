import React, {Component} from "react";
import './DetailedInformation.css';
import '../App/App.css';
//importing components and libraries
import {Col, Container, Row} from "react-bootstrap";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import ErrorBoundary from "../ErrorBoundary/ErrorBoundary";
import {Link} from "react-router-dom";
import { AnchorChainTable, DriveRollerChains, ForkChain, RoundGainChain, ClipSA, ClipP, Kenter, Talrep } from '../tables/index';
//importing .json file as txt array
import txt from './detailedInformation';
//import images
import back from '../../img/Icons/back.png';
import './../../img/Icons/ButtonRight.png';
import './../../img/Icons/buttonLeft.png';


export default class DetailedInformation extends Component {

    componentDidCatch(error, errorInfo) {
        console.error( error );
        console.error( errorInfo );
        return <ErrorBoundary/>
    }

    //component should receive an id of element and header?
    render() {

        const { id } = this.props;
        let currentUrl = window.location.href;
        let fromUrl = /\/production\/(conveyor|tanks|chains|metalProcessing|services)/.exec(currentUrl);

        // function to import whole directory of files
        let importAll = ( r ) => {
            return r.keys().map(r);
        };
        const images = importAll(require.context('../../img/products', false, /\.(png|jpe?g)$/ ));

        const videos = importAll(require.context('../../videos', false, /\.(mp4|avi)$/));
        // get image url from .json and comparing with existed imgs throw url
        let getImages = ( id ) => {
            for ( let i = 0; i < images.length; i++ ){
                if (/\/[0-9]?[0-9]/.exec(images[i])[0] === `/${id}`) {
                    return <div key={i}>
                              <img src={ images[i]  } alt=" " />
                           </div>

                }
            }
        };
        //// get video url from .json and comparing with existed videos throw url
        let getVideo = ( id ) => {
            for ( let i = 0; i < videos.length; i++ ){
                if (/\/[0-9]?[0-9]/.exec(images[i])[0] === `/${id}`) {
                    return <div key={i}>
                               <video src={ videos[i] } controls key={i}/>
                           </div>

                }
            }

        };

        let isVideo = () => {
            if ( txt[id-1].video !== false ) {
                return ([
                    txt[id-1].images.map( getImages ) ,
                    txt[id-1].video.map( getVideo )
                ])


            } else {
                return txt[id-1].images.map( getImages );
            }
        };

        let isHeader = () => {
            if (txt[id-1].header !== false ) {
                return <p className="descriptionHeader">{txt[id-1].header}</p>
            }
        };

        let isDesign = () => {
            if (txt[id-1].design !== false ) {
                return getImages(txt[id-1].design)
            }
        };
        let isTables = () => {
            switch (id) {
                case '11':
                    return <AnchorChainTable/>;
                case '10':
                    return <ForkChain/>;
                case '12':
                    return <RoundGainChain/>;
                case '13':
                    return <DriveRollerChains/>;
                case '18':
                    return <ClipSA/>;
                case '19':
                    return <ClipP/>;
                case '21':
                    return <Kenter/>;
                case '20':
                    return <Talrep/>
            }
        };

        return (
            <React.Fragment>
                <Container fluid={true} className="detailedInformationContainer">
                    <Row className="linkToMain">
                        <Link to={`${fromUrl[0]}`}>
                            <img src={back} alt=""/>
                        </Link>
                        <Link to={`${fromUrl[0]}`}>
                            назад
                        </Link>
                    </Row>
                    <Row className="justify-content-center">
                        <Col lg={8} sm={11}>
                            <p className="containerHeader"><span className="blue">{txt[id-1].name}</span></p>
                        </Col>
                    </Row>
                    <Row className="justify-content-center">
                        <Col sm={11} lg={8}>
                            <Carousel
                                showArrows={true}
                                autoPlay={true}
                                transitionTime={500}
                                infiniteLoop={true}
                                dynamicHeight={true}
                                interval={10000}>

                                { isVideo() }

                            </Carousel>
                        </Col>
                    </Row>
                    <Row className="justify-content-center">
                        <Col lg={8} sm={11}>
                            { isHeader() }
                        </Col>
                    </Row>
                    <Row className="justify-content-center">
                        <Col lg={8} sm={11} className="designImg">
                            { isDesign() }
                        </Col>
                    </Row>
                    <Row className="justify-content-center descriptionBlock">
                        <Col lg={8} sm={11}>
                            { txt[id-1].text.map( (item, id) => { return <p className="descriptionText" key={id}>{item}</p>} ) }
                        </Col>
                    </Row>
                    <Row className="justify-content-center" style={{overflow: "hidden"}}>
                        <Col lg={8} sm={11}>
                            { isTables() }
                        </Col>
                    </Row>
                </Container>
            </React.Fragment>
        )

    }

}
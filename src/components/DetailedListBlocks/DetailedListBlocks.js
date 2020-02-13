import React, {Component} from "react";
import './DetailedListBlocks.css';
import data from './DetailedListBlocks.json';
import { Link } from 'react-router-dom';
import {Col} from "react-bootstrap";

export default class DetailedListBlocks extends Component {



    render() {

        const { active } = this.props;

        let importAll = ( r ) => {
            return r.keys().map(r);
        };
        const images = importAll(require.context('../../img/products', false, /\.(png|jpe?g|JPG)$/ ));
        // function that find img by RegExp and return it
        let findImg = (id) => {
            for ( let i = 0; i < images.length; i++ ) {
                if (/\/[0-9]?[0-9]?[0-9]/.exec(images[i])[0] === `/${id}`) {
                    return images[i];
                }

            }
        };

        switch ( active ) {
            case "conveyor": {
                return data.conveyor.map( (item, id) => {
                    return (
                        <Col lg={6} sm={12} key={id}>
                            <Link to={`/production/conveyor/${id+1}`}>
                                <Block img={findImg(item.img)}
                                       text={item.text}
                                       key={id}/>
                            </Link>
                        </Col>
                    )
                });
            }
            case "tank": {
                return data.tank.map( (item, id) => {
                    return (
                        // id + 9 because tank category start from 9 elements up to 9
                        <Col lg={6} sm={12} key={id}>
                            <Link to={`/production/tank/${id+9}`}>
                                <Block img={findImg(item.img)}
                                       text={item.text}
                                       key={id}/>
                            </Link>
                        </Col>
                    )
                });
            }
            case "metalStructures": {
                return data.metalStructures.map( (item, id) => {
                    return (
                        // id + 8 because metalStructures category start from 8 elements up to 8
                        <Col lg={6} sm={12} key={id}>
                            <Link to={`/production/metalStructures/${id+8}`}>
                                <Block img={findImg(item.img)}
                                       text={item.text}
                                       key={id}/>
                            </Link>
                        </Col>
                    )
                });
            }
            case "chains": {
                return data.chains.map( (item, id) => {
                    return (
                        // id + 10 because tanks category start from 10 elements up to 17
                        <Col lg={6} sm={12} key={id}>
                            <Link to={`/production/chains/${id+10}`}>
                                <Block img={findImg(item.img)}
                                       text={item.text}
                                       key={id}/>
                            </Link>
                        </Col>
                    )
                });
            }
            case "services": {
                return data.services.map( (item, id) => {
                    return (
                        // id + 19 because metal processing category start from 24 elements up to 31
                        <Col lg={6} sm={12} key={id}>
                            <Link to={`/production/services/${id+24}`}>
                                <Block img={findImg(item.img)}
                                       text={item.text}
                                       key={id}/>
                            </Link>
                        </Col>
                    )
                });
            }
            case "repair": {
                return data.repair.map( (item, id) => {
                    return (
                        // id + 33 because repair category starts from 33 element
                        <Col lg={6} sm={12} key={id}>
                            <Link to={`/production/repair/${id+33}`}>
                                <Block img={findImg(item.img)}
                                       text={item.text}
                                       key={id}/>
                            </Link>
                        </Col>
                    )
                });
            }
            default: {
                return data.conveyor.map( (item, id) => {
                    return (
                        <Col lg={6} sm={12} key={id}>
                            <Link to={`/production/conveyor/${id+1}`}>
                                <Block img={findImg(item.img)}
                                       text={item.text}
                                       key={id} />
                            </Link>
                        </Col>
                    )
                });
            }
        }
    }
}

const Block = ( {img, text} ) => {
    return (
        <div className="listBlock">
            <div>
                <img src={img} alt={text}/>
            </div>
            <p>{text}</p>
        </div>
    )
};
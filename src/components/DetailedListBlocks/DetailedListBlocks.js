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
                if (/\/[0-9]?[0-9]/.exec(images[i])[0] === `/${id}`) {
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
            case "tanks": {
                return data.tanks.map( (item, id) => {
                    return (
                        // id + 8 because tanks category start from 7 elements up to 8
                        <Col lg={6} sm={12} key={id}>
                            <Link to={`/production/tanks/${id+8}`}>
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
                        // id + 10 because tanks category start from 10 elements up to 17
                        <Col lg={6} sm={12} key={id}>
                            <Block img={findImg(item.img)}
                                   text={item.text}
                                   key={id}/>
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
            <div style={{ height: "300px"}}>
                <img src={img} alt={text}/>
            </div>
            <p>{text}</p>
        </div>
    )
};
import React, {Component} from "react";
import "./Header.css";
//import images
import logo from "../../img/Icons/gearLogo.png";
import menu from "../../img/Icons/menu.png";
import cross from "../../img/Icons/cancel.png";
// importing a burger menu component
import { slide as Menu } from 'react-burger-menu'
import { Link } from 'react-router-dom';

export default class Header extends Component {

    render () {

        return (
            <React.Fragment>
            <div className="container-fluid header">
                <div className="row">
                    <div className="logo col-md-3">
                        <img src={logo} alt="logo"/>
                        <p>DZKO</p>
                    </div>
                    <div className="headerList col-md-9">
                        <ul>
                            <li>
                                <Link to='/production'>Продукция</Link>
                            </li>
                            <li>
                                Производство
                            </li>
                            <li>
                                О компании
                            </li>
                            <li>
                                 <Link to='/contactUs'>Контакты</Link>
                            </li>
                            <li className="callBack">
                                Обратный звонок
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="smallHeader">
                <Menu width={ 250 }
                      customBurgerIcon={ <img src={ menu } alt="Open" /> }
                      customCrossIcon={ <img src={cross} alt="Close" /> }
                      className="burgerMenu" >
                    <Link className="menu-item" to='/production'>Продукция</Link>
                    <a className="menu-item" href="#">Проекты</a>
                    <a className="menu-item" href="#">Производство</a>
                    <a className="menu-item" href="#">О компании</a>
                    <Link className="menu-item" to='/contactUs'>Контакты</Link>
                    <a className="menu-item" href="#">Обратный звонок</a>
                </Menu>
                <div className="logo">
                        <img src={logo} alt="logo"/>
                        <p>DZKO</p>
                    </div>
            </div>
        </React.Fragment>
        )

    }
}



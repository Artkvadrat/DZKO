import React, {Component} from "react";
import "./Header.css";
//import images
import logo from "../../img/Icons/logo.png";
import mobileLogo from "../../img/Icons/mobile-logo.png";
import menu from "../../img/Icons/menu.png";
import cross from "../../img/Icons/cancel.png";
// importing a burger menu component
import { slide as Menu } from 'react-burger-menu'

import { Link } from 'react-router-dom';
import ErrorBoundary from "../ErrorBoundary/ErrorBoundary";
import ModalWindow from "../ModalWindow/modalWindow";


export default class Header extends Component {

    state = {
        openMenu: false
    };

    componentDidCatch(error, errorInfo) {
        console.error( error );
        console.error( errorInfo );
        return <ErrorBoundary/>
    }

    render () {

        const { openMenu } = this.state;

        const isMenuOpen = (state) => {
            //console.log(`Function stateChange ${state.openMenu}`);
            return state.openMenu;

        };

        const closeMenu = () => {
            this.setState({openMenu: false});
            //console.log(`Function CloseMenu ${openMenu}`);
        };

        function toOpenMenu () {
            this.setState({openMenu: true});
            //console.log(`Function toOpenMenu ${openMenu}`);
        }

        return (
            <React.Fragment>
            <div className="container-fluid header">
                <div className="row">
                    <div className="logo col-md-3">
                        <Link to="/">
                            <img src={logo} alt="logo"/>
                            {/*<p>DZKO</p>*/}
                        </Link>
                    </div>
                    <div className="headerList col-md-9">
                        <div className="headerPhoneLinks">
                            <a href="tel:+380974728575">
                                +38-(097)-472-85-75
                            </a>
                            <a href="tel:+380955764804">
                                +38-(095)-576-48-04
                            </a>
                        </div>
                        <ul>
                            <li>
                                <Link to='/'>Главная</Link>
                            </li>
                            <li>
                                <Link to='/production'>Продукция</Link>
                            </li>
                            <li>
                                <Link to='/aboutUs'>О компании</Link>
                            </li>
                            <li>
                                 <Link to='/contactUs'>Контакты</Link>
                            </li>
                            <li className="callBack">
                                <ModalWindow/>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="smallHeader">
                <Menu isOpen={ openMenu }

                      width={ 250 }
                      onChangeState={ isMenuOpen }
                      customBurgerIcon={ <img src={ menu }
                                              alt="Open"
                                              onClick={() => toOpenMenu()}/> }
                      customCrossIcon={ <img src={cross}
                                             alt="Close"
                                             onClick={() => closeMenu()}/> }
                      className="burgerMenu">
                    <Link className="menu-item" to='/' onClick={() => closeMenu()}>Главная</Link>
                    <Link className="menu-item" to='/production' onClick={() => closeMenu()}>Продукция</Link>
                    <Link className="menu-item" to="/aboutUs" onClick={() => closeMenu()}>О компании</Link>
                    <Link className="menu-item" to='/contactUs' onClick={() => closeMenu()}>Контакты</Link>
                    <p style={{marginTop: "10px"}}> </p>
                    <ModalWindow className="menu-item"/>
                </Menu>
                <div className="logo">
                    <Link to="/">
                        <img src={mobileLogo} alt="logo"/>
                        <p>DZKO</p>
                    </Link>
                    <div>
                        <a href="tel:+380679550954">
                            +38-(097)-472-85-75
                        </a>
                        <ModalWindow className="menu-item"/>
                    </div>
                </div>
            </div>
        </React.Fragment>
        )

    }
}
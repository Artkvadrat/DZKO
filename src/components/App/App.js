import React from 'react';
//importing bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';
//importing components
import ContactUs from "../ContactUs/ContactUs";
import AboutUs from "../AboutUs/abouUs";
import DetailedInformation from "../DetailedInformation/DateiledInformation";
import Production from "../Production/Production";
import DetailedListPage from "../DetailedListPage/DetailedListPage";
import MainPage from "../MainPage/mainPage";
import Header from "../Header/Header";
import ScrollToTop from "../ScrollToTop/ScrollToTop";
//import Router
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import Footer from "../Footer/Footer";



function App() {

    return (
        <React.Fragment>
            <Router location={{ pathname: '/'}}>
                <ScrollToTop />
                <Header />
                <Switch>
                    <Route path="/"
                           component={ MainPage } exact />
                    <Route path="/production"
                           component={ Production } exact />
                    <Route path="/production/conveyor"
                           render={ () => {
                               return <DetailedListPage active={1}/>
                           }}
                           exact />
                    <Route path="/production/metalStructures"
                           render={ () => {
                               return <DetailedListPage active={2}/>
                           }}
                           exact />
                    <Route path="/production/tank"
                           render={ () => {
                               return <DetailedListPage active={3}/>
                           }}
                           exact />
                    <Route path="/production/chains"
                           render={ () => {
                               return <DetailedListPage active={4}/>
                           }}
                           exact />
                    <Route path="/production/services"
                        render={ () => {
                            return <DetailedListPage active={5}/>
                        }}
                        exact />
                    <Route path="/production/repair"
                           render={ () => {
                               return <DetailedListPage active={6}/>
                           }}
                           exact />
                    <Route path="/production/rootVegetableProcessing"
                           render={ () => {
                               return <DetailedListPage active={7}/>
                           }}
                           exact />
                    <Route path="/production/sleeveFingerCoupling"
                          render={ () => {
                            return <DetailedListPage active={8}/>
                          }}
                          exact />
                    <Route path="/production/pipeSwivelJoint"
                           render={ () => {
                             return <DetailedListPage active={9}/>
                           }}
                           exact />
                    <Route path="/production/conveyor/:id"
                           render={ ({match}) => {
                               const { id } = match.params;
                               return <DetailedInformation id={id}/>
                           }}/>
                    <Route path="/production/metalStructures/:id"
                           render={ ({match}) => {
                               const { id } = match.params;
                               return <DetailedInformation id={id}/>
                           }}/>
                    <Route path="/production/tank/:id"
                           render={ ({match}) => {
                               const { id } = match.params;
                               return <DetailedInformation id={id}/>
                           }}/>
                    <Route path="/production/chains/:id"
                           render={ ({match}) => {
                               const { id } = match.params;
                               return <DetailedInformation id={id}/>
                           }}/>
                    <Route path="/production/services/:id"
                           render={ ({match}) => {
                               const {id} = match.params;
                               return <DetailedInformation id={id}/>
                           }}/>
                    <Route path="/production/repair/:id"
                           render={ ({match}) => {
                               const {id} = match.params;
                               return <DetailedInformation id={id}/>
                           }}/>
                    <Route path="/production/rootVegetableProcessing/:id"
                           render={ ({match}) => {
                               const {id} = match.params;
                               return <DetailedInformation id={id}/>
                           }}/>
                    <Route path="/production/sleeveFingerCoupling/:id"
                           render={ ({match}) => {
                             const {id} = match.params;
                             return <DetailedInformation id={id}/>
                           }}/>
                    <Route path="/production/pipeSwivelJoint/:id"
                           render={ ({match}) => {
                             const {id} = match.params;
                             return <DetailedInformation id={id}/>
                           }}/>
                    <Route path="/contactUs"
                           component={ ContactUs } exact/>
                    <Route path="/aboutUs"
                           component={ AboutUs } exact/>
                </Switch>
              <Footer/>
            </Router>
        </React.Fragment>
    );
}

export default App;

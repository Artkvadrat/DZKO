import React from 'react';
//importing bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';
//importing components
import ContactUs from "../ContactUs/ContactUs";
import DetailedInformation from "../DetailedInformation/DateiledInformation";
import Production from "../Production/Production";
import DetailedListPage from "../DetailedListPage/DetailedListPage";
//import Router
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from "../Header/Header";



function App() {
    return (
        <React.Fragment>
            <Router>
                <Header/>
                <Switch>
                    <Route path="/production"
                           component={ Production } exact />
                    <Route path="/production/conveyor"
                           render={ () => {
                               return <DetailedListPage active={1}/>
                           }}
                           exact />
                    <Route path="/production/tanks"
                           render={ () => {
                               return <DetailedListPage active={2}/>
                           }}
                           exact />
                    <Route path="/production/chains"
                           render={ () => {
                               return <DetailedListPage active={3}/>
                           }}
                           exact />
                    <Route path="/production/metalProcessing"
                        render={ () => {
                            return <DetailedListPage active={4}/>
                        }}
                        exact />
                    <Route path="/production/services"
                           render={ () => {
                               return <DetailedListPage active={5}/>
                           }}
                           exact />
                    <Route path="/production/conveyor/:id"
                           render={ ({match}) => {
                               const { id } = match.params;
                               return <DetailedInformation id={id}/>
                           }}/>
                    <Route path="/production/tanks/:id"
                           render={ ({match}) => {
                               const { id } = match.params;
                               return <DetailedInformation id={id}/>
                           }}/>
                    <Route path="/production/chains/:id"
                           render={ ({match}) => {
                               const { id } = match.params;
                               return <DetailedInformation id={id}/>
                           }}/>
                    <Route path="/production/metalProcessing/:id"
                           render={ ({match}) => {
                               const {id} = match.params;
                               return <DetailedInformation id={id}/>
                           }}/>
                    <Route path="/production/services/:id"
                           render={ ({match}) => {
                               const {id} = match.params;
                               return <DetailedInformation id={id}/>
                           }}/>
                    <Route path="/contactUs"
                           component={ ContactUs } exact/>
                </Switch>
          </Router>
        </React.Fragment>
    );
}

export default App;

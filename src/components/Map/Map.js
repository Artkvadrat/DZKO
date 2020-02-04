import React, {Component} from "react";
import ErrorBoundary from "../ErrorBoundary/ErrorBoundary";


export default class Map extends Component  {

    componentDidCatch(error, errorInfo) {
        console.error( error );
        console.error( errorInfo );
        return <ErrorBoundary/>
    }

    render() {

        //styles for Map
        const mapStyles = {
            "width": '70%',
            "height": '500px',
            border: '0'
        };

        return (
            // eslint-disable-next-line jsx-a11y/iframe-has-title
            <iframe
                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d10579.461484533571!2d35.0230692!3d48.4782959!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x9a2f3a573dfac6ce!2z0J7QntCeICLQlNC90LXQv9GA0L7QstGB0LrQuNC5INC30LDQstC-0LQg0LrQvtC90LLQudC10YDQvdC-0LPQviDQvtCx0L7RgNGD0LTQvtCy0LDQvdC40Y8i!5e0!3m2!1sru!2sua!4v1579785883906!5m2!1sru!2sua"
                frameBorder="0" style={mapStyles} allowFullScreen=""> </iframe>
        );
    }
}




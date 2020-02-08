import React, {Component} from "react";
import * as emailjs from 'emailjs'
import './Form.css'
import ErrorBoundary from "../ErrorBoundary/ErrorBoundary";

export default class Form extends Component {

    // sending email throw emailJS service
    state = {
        name: '',
        phone: '',
        email: '',
        message: ''
    };

    handleSubmit = ( e ) => {
        e.preventDefault();

        const { name, phone, email, message } = this.state;

        let templateParams = {
            from_name: email,
            subject: name,
            message_html: message,
            message_phone: phone,
            message_name: name
        };

        emailjs.send( 'gmail', 'template_zXMoe4Jj', templateParams )
            .then(function(response) {
                console.log('SUCCESS!', response.status, response.text);
            }, function(error) {
                console.log('FAILED...', error);
            });

        this.resetForm();
    };

    resetForm() {
        this.setState({
            name: '',
            phone: '',
            email: '',
            message: ''
        })
    }

    handleChange = (param, e) => {
        this.setState({ [param]: e.target.value })
    };

    componentDidCatch(error, errorInfo) {
        console.error( error );
        console.error( errorInfo );
        return <ErrorBoundary/>
    }

    render() {

        const { name, phone, email, message } = this.state;

        return (
            <form>
                <input placeholder="Ваше имя"
                       id="nameInput"
                       type="name"
                       name="name"
                       value={ name }
                       onChange={this.handleChange.bind(this, 'name')} />
                <div className="d-flex justify-content-between">
                    <input placeholder="Ваш телефон"
                           id="phoneInput"
                           type="phone"
                           name="phone"
                           value={ phone }
                           onChange={this.handleChange.bind(this, 'phone')} />
                    <input placeholder="Ваш E-mail"
                           id="emailInput"
                           type="email"
                           name="email"
                           value={ email }
                           onChange={this.handleChange.bind(this, 'email')} />
                </div>
                <textarea placeholder="Ваш вопрос"
                          id="messageInput"
                          maxLength="300"
                          rows="5"
                          cols="35"
                          name="message"
                          value={ message }
                          onChange={this.handleChange.bind(this, 'message')} />
                <button className="submitForm" type="submit">
                    Отправить
                </button>
            </form>
        )
    }
}
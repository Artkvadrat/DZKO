import React, {Component} from "react";
import "./ModalWindwow.css";
import Modal from 'react-modal';
import * as emailjs from "emailjs";
import ErrorBoundary from "../ErrorBoundary/ErrorBoundary";

const customStyles = {
    content : {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)'
    }
};

export default class ModalWindow extends Component {
    state = {
        show: false,
        name: '',
        phone: ''
    };

    openModal = () => {
        this.setState({show: true})
    };

    closeModal = () => {
        this.setState({show: false});
    };

    handleSubmit = ( e ) => {
        e.preventDefault();

        const { name, phone } = this.state;

        let templateParams = {
            from_name: name,
            subject: "Перезвонить",
            message_phone: phone,
            message_name: name
        };

        emailjs.send( 'gmail', 'modal_form', templateParams )
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
            phone: ''
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
        const { show, name, phone } = this.state;
        return (
            <div>
                <button onClick={this.openModal}>Обратный звонок</button>
                <Modal isOpen={show}
                       onRequestClose={this.closeModal}
                       style={customStyles}>
                    <form className="d-flex flex-column modalForm">
                        <input placeholder="Ваше имя"
                               id="modalNameInput"
                               type="name"
                               name="name"
                               value={ name }
                               onChange={this.handleChange.bind(this, 'name')} />
                        <input placeholder="Ваш телефон"
                               id="modalPhoneInput"
                               type="phone"
                               name="phone"
                               value={ phone }
                               onChange={this.handleChange.bind(this, 'phone')} />
                        <button className="submitForm" type="submit">
                            Отправить
                        </button>
                    </form>
                </Modal>
            </div>
        )
    }
}
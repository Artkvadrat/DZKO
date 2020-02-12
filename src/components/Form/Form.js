import React, {Component} from "react";
import emailjs from 'emailjs-com'
import './Form.css';
import Modal from "react-modal";

const customStyles = {
    content : {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
        textAlign: 'center',
        border: '1px solid #000B6F',
        color: '#000B6F'
    }
};

export default class Form extends Component {
    state = {
        show: false
    };

    openModal = () => {
        this.setState({show: true})
    };

    closeModal = () => {
        this.setState({show: false});

    };

    sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm("siteDZKO", "template_zXMoe4Jj", e.target, "user_hU6rV9k4GGsqkLdd1nLrY")
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });

        this.openModal();

    };

    render() {
        const { show } = this.state;

        return (
            <>
        <form onSubmit={this.sendEmail}>
                <input placeholder="Ваше имя"
                       id="nameInput"
                       type="name"
                       name="contact_name"/>
                <div className="secondLineOfForm">
                    <input placeholder="Ваш телефон"
                           id="phoneInput"
                           type="phone"
                           name="user_phone"/>
                    <input placeholder="Ваш E-mail"
                           id="emailInput"
                           type="email"
                           name="user_email"/>
                </div>
                <textarea placeholder="Ваш вопрос"
                          id="messageInput"
                          maxLength="300"
                          rows="5"
                          cols="35"
                          name="message"/>
                <input type="submit" value="Оправить" className="submitForm"/>
            </form>
            <Modal isOpen={show}
                   onRequestClose={this.closeModal}
                   style={customStyles}>
                <h3>Сообщение отправлено!</h3>
            </Modal>
            </>
        )
    }
}

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
        e.persist();
        e.preventDefault();

        emailjs.sendForm("siteDZKO", "template_E1E3nJoL", e.target, "user_WC8bUA0ASCIbQsFKuLPg4")
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });

        this.openModal();

        e.target[0].value = '';
        e.target[1].value = '';
        e.target[2].value = '';
        e.target[3].value = '';

    };

    render() {
        const { show } = this.state;

        return (
            <>
        <form onSubmit={this.sendEmail}>
                <input placeholder="Ваше имя"
                       id="nameInput"
                       type="name"
                       name="contact_name"
                       required
                       minLength={2}
                       maxLength={20}/>
                <div className="secondLineOfForm">
                    <input placeholder="Ваш телефон"
                           id="phoneInput"
                           type="phone"
                           name="user_phone"
                           required
                           minLength={8}
                           maxLength={13}/>
                    <input placeholder="Ваш E-mail"
                           id="emailInput"
                           type="email"
                           name="user_email"
                           required
                           minLength={5}
                           maxLength={30}/>
                </div>
                <textarea placeholder="Ваш вопрос"
                          id="messageInput"
                          rows="5"
                          cols="35"
                          name="message"
                          required
                          minLength={5}
                          maxLength={100}/>
                <input type="submit" value="Отправить" className="submitForm"/>
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

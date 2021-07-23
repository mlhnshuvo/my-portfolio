import React, { useRef, useState } from 'react';
import Axios from 'axios'

const Contact = ({ goTo }) => {
    const [state, setState] = useState({
        name: '',
        email: '',
        message: ''
    })
    const contactRef = useRef(null)

    if (goTo) {
        contactRef.current.scrollIntoView({ behavior: "smooth", block: "end" });
    }

    const onChangeHandler = (event) => {
        setState({ ...state, [event.target.name]: event.target.value });
    }

    const onSubmitHandler = (event) => {
        event.preventDefault();
        Axios.post('https://my-portfolio-mhs.herokuapp.com/send', state)
            .then((res) => {
                alert(res.data)
            })
            .catch((err) => {
                alert(err)
            })
    }

    return (
        <div className="contact section-margin" ref={contactRef}>
            <h2>Contact Me</h2>
            <p>Get in touch</p>
            <hr />
            <form onSubmit={onSubmitHandler}>
                <input
                    className="contact__form-control"
                    type="text"
                    name="name"
                    value={state.name}
                    onChange={onChangeHandler}
                    placeholder="Enter your name" />
                <input
                    className="contact__form-control"
                    type="email"
                    name="email"
                    value={state.email}
                    onChange={onChangeHandler}
                    placeholder="Enter your valid email" />
                <textarea
                    className="contact__form-control-textaria"
                    name="message"
                    value={state.message}
                    onChange={onChangeHandler}
                    placeholder="Enter your message" />
                <button className="contact__btn btn btn--project" type="submit">Send</button>
            </form>
        </div>
    )
}

export default Contact;

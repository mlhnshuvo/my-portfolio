import React, { useRef, useState } from 'react';
import Axios from '../utils/Axios'
import Loading from '../assets/images/loading.svg'

const Contact = ({ goTo }) => {
    const [state, setState] = useState({
        name: '',
        email: '',
        message: ''
    })
    const [loading, setIsloading] = useState(false)

    const contactRef = useRef(null)

    if (goTo) {
        contactRef.current.scrollIntoView({ behavior: "smooth", block: "end" });
    }

    const onChangeHandler = (event) => {
        setState({ ...state, [event.target.name]: event.target.value });
    }

    const onSubmitHandler = (event) => {
        event.preventDefault();
        setIsloading(true)

        Axios.post('/send', state)
            .then((res) => {
                alert(res.data)
                setIsloading(false)
                setState({
                    name: '',
                    email: '',
                    message: ''
                })
            })
            .catch((err) => {
                alert(err)
            })
    }

    return (
        <div className="contact section-margin" ref={contactRef}>
            <h2>Contact Me</h2>
            <p>Your message will be sent to admin email</p>
            <hr />
            <form onSubmit={onSubmitHandler}>
                <input
                    className="contact__form-control"
                    type="text"
                    name="name"
                    required
                    value={state.name}
                    onChange={onChangeHandler}
                    placeholder="Enter your name" />
                <input
                    className="contact__form-control"
                    type="email"
                    name="email"
                    required
                    value={state.email}
                    onChange={onChangeHandler}
                    placeholder="Enter your valid email" />
                <textarea
                    className="contact__form-control-textaria"
                    name="message"
                    required
                    value={state.message}
                    onChange={onChangeHandler}
                    placeholder="Enter your message" />
                {loading ? (
                    <img className="contact__loading" src={Loading} alt="" />
                ) : (
                    <button className="contact__btn btn btn--project" type="submit">Send</button>
                )}

            </form>
        </div>
    )
}

export default Contact;

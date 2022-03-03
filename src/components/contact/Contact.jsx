import React, { useRef, useState } from 'react';
import "./contact.css";
import emailjs from '@emailjs/browser';
import github from "../../img/githuB.png"
import gmail from "../../img/email.png"
import linkedin from "../../img/linkeDIN.png"

const {REACT_APP_USERSERVICE,REACT_APP_USERTEMPLATE,REACT_APP_USERID} = process.env;

const Contact = () => {
    const formRef = useRef()
    const [done, setDone] = useState(false)

    const handleSubmit = (e) => {
        e.preventDefault();
        emailjs
            .sendForm(
                REACT_APP_USERSERVICE,
                REACT_APP_USERTEMPLATE,
                formRef.current,
                REACT_APP_USERID,
            )
        .then(
            (result) => {
          console.log(result.text)
          setDone(true);
        }, 
        (error) => {
          console.log(error.text);
        });
    }
  return (
    <div className="c">
        <div className="c-bg">

        </div>
        <div className="c-wrapper">
            <div className="c-left">
                <h1 className="c-title">Contacto</h1>
                <div className="c-info">
                    <div className="c-info-item">
                        <img src={github} alt="" className="c-icon" />
                        <a href="https://github.com/EliFBaque">GitHub</a>
                    </div>
                    <div className="c-info-item">
                        <img src={linkedin} alt="" className="c-icon" />
                        <a href="https://www.linkedin.com/in/elian-baque-040a651b8/">Linkedin</a>
                    </div>
                    <div className="c-info-item">
                        <img src={gmail} alt="" className="c-icon" />
                        elifbaque@gmail.com
                    </div>
                </div>
            </div>
            <div className="c-right">
                <p className="c-desc">
                <b>Hola como están. </b>No duden en dejarme un mensaje. 
                Estaré alegre de leerlo, ya sea feedback, tips o propuestas laborales. 
                Además a la izquierda tienen diversos datos para poder contactarse conmigo. 
                Que tengan un buen día y un hermoso año 
                </p>
                <form ref={formRef} onSubmit={handleSubmit}>
                    <input type="text" placeholder='Nombre' name='user_name' required/>
                    <input type="text" placeholder='Asunto' name='user_asunto' required/>
                    <input type="text" placeholder='Email' name='user_email' required/>
                    <textarea rows="5" placeholder='Mensaje' name="mensaje"></textarea>
                    <button>Enviar</button>
                    <p>{done && "Gracias por tu mensaje"}</p>
                </form>
            </div>
        </div>
    </div>
  )
}

export default Contact
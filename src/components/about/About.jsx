import React from 'react'
import "./about.css"
import Me from "../../img/facha.png"
const About = () => {
  return (
    <div className="a">
        <div className="a-left">
          <div className="a-card bg"></div>
          <div className="a-card">
            <img src={Me} alt="" className='a-img' />
          </div>
        </div>
        <div className="a-right">
          <h1 className="a-title">Acerca de mi</h1>
          <p className="a-sub">
            Hola mi nombre es Elian y soy <b>Desarrollador Full Stack</b> 
          </p>
          <p className="a-desc">
            Me inicié en el mundo del desarrollo cuando finalize 
            el Argentina Programa hace tres años y desde entonces estoy emocionado
            y motivado por saber cada día un poco más, por tener cada día más herramientas.
          </p>
          <br />
          <p className="a-desc a-desc-mobile">
            Todavia no tuve la oportunidad de tener una experiencia laboral. 
            Pero he hecho diversas paginas webs para amigos en sus emprendimientos personales. 
            Ademas tengo experiencia en equipos realizando proyectos en cursos con diversos compañeros, 
            los cuales realizo para profundizar mis conocimientos.
          </p>
          <br />
          <p className="a-desc a-desc-mobile">
            Considero que además de desarrollar; comunicar, 
            escuchar y trabajar en equipo son habilidades que se entrenan a diario y eso me encanta. 
            Estoy muy feliz de ser parte del mundo de TI y 
            espero poder colaborar con todo lo que aprendí este tiempo y seguir aprendiendo todos los días.
          </p>
        </div>
    </div>
  )
}

export default About
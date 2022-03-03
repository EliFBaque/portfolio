import React from 'react'
import "./proyectsList.css"
import Proyects from "../proyects/Proyects"
import { proyects } from '../../data'

const ProyectsList = () => {
  return (
    <div className="pl">
      <div className="pl-texts">
        <h1 className="pl-title">Mis proyectos</h1>
        <p className="pl-desc">Estas son algunas paginas que he creado cuando terminaba de aprender algo.
        Le dedique mucho tiempo espero que les guste.</p>
      </div>
      <div className="pl-list">
        {proyects.map((item) => (
          <Proyects key={item.id} img={item.img} link={item.link} />
        ))}
      </div>
    </div>
  )
}

export default ProyectsList
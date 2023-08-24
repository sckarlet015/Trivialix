import React from 'react'
import styles from "./PlayVersus.module.css"

const PlayVersus = () => {
    return (
        <div className={styles.conteiner}>
            <div>
                <h1>Modo Versus</h1>
            </div>
            <div>
                <h2>Seleccion de Genero</h2>
            </div>
            <div>
                <h3>Seleccion de Dificultad</h3>
            </div>
            <div>
                <button>Empezar</button>
            </div>
        </div>
      )
}

export default PlayVersus
import React from 'react'
import styles from "./PlayContraReloj.module.css"

const PlayContraReloj = () => {
    return (
        <div className={styles.conteiner}>
            <div>
                <h1>Modo Contra Reloj</h1>
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

export default PlayContraReloj
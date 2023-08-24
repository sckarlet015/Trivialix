import React, { useEffect, useState } from 'react';
import styles from "./PlayGame.module.css";
import { select_genre, select_difficulty } from '../../redux/actions/actions';
import { useDispatch, useSelector } from 'react-redux';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // Importa los estilos del carrusel
import { Carousel } from 'react-responsive-carousel'; // Importa el componente de carrusel
import Historia from "../../Img/Historia.jpg"
import Ciencia from "../../Img/Ciencia.jpg"
import CineTelevision from "../../Img/CineTelevision.png"
import Deportes from "../../Img/Deportes.jpg"
import { useNavigate } from 'react-router-dom';
import Loading from '../Loading/Loading';


const PlayGame = () => {
    const genre = useSelector(state => state.selectGenre);
    const dispatch = useDispatch();
    const [selectedGenre, setSelectedGenre] = useState(null);
    const [loading, setLoading] = useState(true)

    const navigate = useNavigate()

    const selectGenre = (genreItem) => {
        setSelectedGenre(genreItem.name)
        dispatch(select_genre(genreItem.name));
        console.log(genre);
    }

    useEffect(() => {
        setTimeout(() => {
            setLoading(false)
        }, 1000);
    })

    const genres = [
        {
            name: "Historia",
            imageSrc: Historia
        },
        {
            name: "Ciencia",
            imageSrc: Ciencia
        },
        {
            name: "CineTelevision",
            imageSrc: CineTelevision
        },
        {
            name: "Deportes",
            imageSrc: Deportes
        }
    ];

    const playGame = () => {
        navigate("/casual/Play")
    }

    const changeDiffiulty = async(e) => {
        await dispatch(select_difficulty(e.target.value))
        console.log(e.target.value);
    }

    return (
        loading ? <Loading/> :
        <div className={styles.conteiner}>
            <div>
                <h1 className={styles.title}>Modo Casual</h1>
            </div>
            <div className={styles.carousel}>
                <h2 className={styles.nameCarousel}>{selectedGenre}</h2>
                <Carousel>
                    {genres.map((genreItem, index) => (
                        <div key={index} className={styles.contImg}>
                            <button className={styles.btn} onClick={() => selectGenre(genreItem)}>Seleccionar</button>
                            <img src={genreItem.imageSrc} alt={genreItem.name} className={styles.image} />
                            {/* <h3 className={styles.item}>{genreItem.name}</h3> */}
                        </div>
                    ))}
                </Carousel>
            </div>
            <div className={styles.difficuty}>
                <select className={styles.select} onChange={(event) => changeDiffiulty(event)}>
                    <option value="facil">Fácil</option>
                    <option value="medio">Medio</option>
                    <option value="dificil">Difícil</option>
                    <option value="experto">Experto</option>
                </select>
            </div>

            <div>
                <button className={styles.play} disabled={!selectedGenre} onClick={() => { playGame() }}>Jugar !</button>
            </div>
        </div>
    );
}

export default PlayGame;

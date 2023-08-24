import React, { useEffect, useState } from 'react';
import styles from "./PlayClasico.module.css";
import { select_genre } from '../../redux/actions/actions';
import { useDispatch, useSelector } from 'react-redux';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // Importa los estilos del carrusel
import { Carousel } from 'react-responsive-carousel'; // Importa el componente de carrusel
import Historia from "../../Img/PF1.png"
import Ciencia from "../../Img/PF2.png"
import { useNavigate } from 'react-router-dom';


const PlayClasico = () => {
    const genre = useSelector(state => state?.selectGenre || "");
    const dispatch = useDispatch();
    const [selectedGenre, setSelectedGenre] = useState(null);

    const navigate = useNavigate()

    const selectGenre = (genreItem) => {
        setSelectedGenre(genreItem.name)
        dispatch(select_genre(genreItem.name));
        console.log(genre);
    }

    const genres = [
        {
            name: "Historia",
            imageSrc: Historia
        },
        {
            name: "Ciencia",
            imageSrc: Ciencia
        }
    ];

    const playGame = () => {
        navigate("/clasico/Play")
    }

    return (
        <div className={styles.conteiner}>
            <div>
                <h1 className={styles.title}>Modo Casual</h1>
            </div>
            <div className={styles.carousel}>
                <h2 className={styles.nameCarousel}>{selectedGenre || "Seleccionar Genero"}</h2>
                <Carousel>
                    {genres.map((genreItem, index) => (
                        <div key={index} className={styles.contImg}>
                            <button className={styles.btn} onClick={() => selectGenre(genreItem)}>Seleccionar</button>
                            <img src={genreItem.imageSrc} alt={genreItem.name} className={styles.image}/>
                            <h3 className={styles.item}>{genreItem.name}</h3>
                        </div>
                    ))}
                </Carousel>
            </div>
            <div>
                <button className={styles.play} disabled={!selectedGenre} onClick={()=>{playGame()}}>Empezar</button>
            </div>
        </div>
    );
}

export default PlayClasico;

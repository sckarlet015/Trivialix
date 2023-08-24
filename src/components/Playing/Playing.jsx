import React, { useEffect, useState } from 'react';
import Historia from "../../data/Historia.json";
import Ciencia from "../../data/Ciencia.json"
import CineTelevision from "../../data/CineTelevision.json"
import Deportes from "../../data/Deportes.json"
import styles from "./Playing.module.css"
import { useSelector } from 'react-redux';
import Loading from '../Loading/Loading';
import exit from "../Icons/exit.svg"
import reload from "../Icons/reload.svg"
import skip from "../Icons/skip.svg"

const Playing = ({ genre, difficulty }) => {
    const [questions, setQuestions] = useState([]);
    const [newQuestions, setNewQuestions] = useState([]);
    const [currentQuiz, setCurrentQuiz] = useState({});
    const [indexQuiz, setIndexQuiz] = useState(0);
    const [selection, setSelection] = useState("");
    const [timeExpired, setTimeExpired] = useState(false);
    const [timeLeft, setTimeLeft] = useState(60);
    const [loading, setLoading] = useState(true)
    const dificultad = useSelector(state => state.difficulty)
    let newIndex = 0;
    console.log(dificultad);
    console.log(genre);
    const selectGenre = () => {
        if (genre === "Historia") {
            setQuestions(Historia);
        }
        if (genre === "Ciencia") {
            setQuestions(Ciencia)
        }
        if(genre === "CineTelevision"){
            setQuestions(CineTelevision)
        }
        if(genre === "Deportes"){
            setQuestions(Deportes)
        }
    }

    useEffect(() => {

        if (questions.length === 0) {
            selectGenre();
        }
        if (newQuestions.length === 0 && questions.length !== 0) {
            const filteredQuestions = questions.filter(quiz => quiz.difficulty === difficulty);
            setNewQuestions(filteredQuestions);
        }
        if (newQuestions.length !== 0 && Object.keys(currentQuiz).length === 0) {
            setCurrentQuiz(newQuestions[0]);
        }

        if (!timeExpired) {
            const timer = setInterval(() => {
                setTimeLeft(prevTime => prevTime - 1);
            }, 1000);

            return () => {
                clearInterval(timer);
                if (timeLeft === 0) {
                    setTimeExpired(true);
                }
            };
        }

    }, [questions, newQuestions, difficulty, currentQuiz, timeExpired, timeLeft]);

    useEffect(() => {
        setTimeout(() => {
            setLoading(false)
        }, 500)
    })

    const handleSelection = (event) => {
        setSelection(event.target.value);
    }

    console.log(newQuestions);

    const comprobar = (correct) => {
        if (selection === correct) {
            newIndex = indexQuiz + 1;
            if (newIndex < newQuestions.length) {
                setIndexQuiz(newIndex);
                setCurrentQuiz(newQuestions[newIndex]);
                setSelection("");
                setTimeLeft(60);
                setLoading(true)
            }
        } else {
            alert("Respuesta incorrecta");
        }
    }

    const handleReload = () => {
        setTimeLeft(60);
        setLoading(true)
        setTimeExpired(false);
    }

    const handleSkip = () => {
        newIndex = indexQuiz + 1;
            if (newIndex < newQuestions.length) {
                setIndexQuiz(newIndex);
                setCurrentQuiz(newQuestions[newIndex]);
                setSelection("");
                setTimeLeft(60);
                setLoading(true)
                setTimeExpired(false);
            }
    }

    const handleExit = () => {
        window.history.back();
    }

    return (
        loading ? <Loading /> :
            <div className={styles.card}>
                <div className={styles.conteiner}>
                    {timeLeft < 0 || <div className={styles.time}>
                        <p className={styles.clock}>{timeLeft}</p>
                    </div>}
                    <h3 className={styles.genre}>{genre}</h3>
                    {timeExpired ? (
                        <div>
                            <h1 className={styles.question}>Tiempo agotado</h1>
                            <div className={styles.bntIconsCont}>
                                <label htmlFor="" className={styles.contIcon}>
                                    <img className={styles.icons} src={exit} alt="" onClick={() => handleExit()}/>
                                    <span className={styles.textIcon}>Abandonar</span>
                                </label>
                                <label htmlFor="" className={styles.contIcon}  >
                                    <img className={styles.icons} src={reload} alt="" onClick={() => handleReload()}/>
                                    <span className={styles.textIcon}>Reintentar</span>
                                </label>
                                <label htmlFor="" className={styles.contIcon}>
                                    <img className={styles.icons} src={skip} alt="" onClick={() => handleSkip()}/>
                                    <span className={styles.textIcon}>Saltar</span>
                                </label>
                            </div>
                        </div>
                    ) : (
                        <div>
                            <h2 className={styles.question}>{currentQuiz.question}</h2>
                            <ul>
                                {currentQuiz.options?.map((option, optionIndex) => (
                                    <li className={styles.list} key={optionIndex}>
                                        <label className={styles.opt}>
                                            <input
                                                type="radio"
                                                name={`question_${indexQuiz}`}
                                                value={option}
                                                checked={selection === option}
                                                onChange={handleSelection}
                                            />
                                            {option}
                                        </label>
                                    </li>
                                ))}
                            </ul>
                            <button className={styles.btn} onClick={() => comprobar(currentQuiz.correctOption)}>Comprobar</button>
                        </div>
                    )}
                </div>
            </div>
    )
}

export default Playing;

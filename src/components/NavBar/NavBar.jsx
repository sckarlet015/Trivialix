import React from "react";
import style from "./NavBar.module.css"
import { NavLink } from "react-router-dom";
import heartIcon from "../Icons/heart.svg"
import ideaIcon from "../Icons/idea.svg"
import profileIcon from "../Icons/account.svg"
import champion from "../Icons/championship.svg"

export default function NavBar({ life }) {

    return (
        <div className={style.NavBar}>
            <NavLink to={"/casual"} className={style.link}>
                <p className={style.tex}>CASUAL</p>
            </NavLink>
            <NavLink to={"/carrera"} className={style.link}>
                <p className={style.tex}>CLASICO</p>
            </NavLink>
            <NavLink to={"/contra"} className={style.link}>
                <p className={style.tex}>CONTRARELOJ</p>
            </NavLink>
            <NavLink to={"/versus"} className={style.link}>
                <p className={style.tex}>Versus</p>
            </NavLink>
            <label htmlFor="" className={style.item}>
                <img className={style.icon} src={heartIcon} alt="" />
                <span>{life}</span>
            </label>
            <label htmlFor="" className={style.item}>
                <img className={style.icon} src={ideaIcon} alt="" />
                <span>{life}</span>
            </label>
            <label htmlFor="">
                <img className={style.icon} src={champion} alt="" />
            </label>
            <label htmlFor="">
                <img className={style.icon} src={profileIcon} alt="" />
            </label>
        </div>
    )
}
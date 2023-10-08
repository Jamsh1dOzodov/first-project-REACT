import React from "react";
import logo from "../../assets/logo.png";
import research_icon from "../../assets/research_icon.svg";
import triangle from "../../assets/triangle.svg";
import "./Header.scss"

const Header = () => {
    return (
        <>
            <header className="header">
                <div className="container">
                    <div className="wrapper">

                        <div className="header-logo">
                            <a href="/"><img className="header-logo__img" src={logo} alt="Логотип" /></a>
                            <p className="header-logo__text">Тут должен быть слоган</p>
                        </div>

                        <form className="header-form" action="">
                            <input className="header__input" type="search" placeholder="Поиск товаров" />
                            <button className="header__btn" type="submit"><img src={research_icon} alt="Лупа" /></button>
                        </form>
                        <ul className="header-list wrapper">
                            <li className="header-list__item">
                                <a className="header-list__link" href="tel:+80647652334">8 (064)765-23-34</a>
                                <img className="header-list__triangle" src={triangle} alt="Треугольник"/>
                            </li>
                            <li className="header-list__item">
                                <a className="header-list__link" href="./personal.html">Вход / Регистрация</a>
                                <img className="header-list__triangle" src={triangle} alt="Треугольник"/>
                            </li>
                        </ul>
                    </div>
                </div>
            </header>
        </>
    )
}

export default Header;
import React from "react";
import logo2 from "../../assets/logo2.png"
import vk1 from "../../assets/vk1.svg"
import instagram from "../../assets/instagram.svg"
import visa1 from "../../assets/visa1.svg"
import youtube from "../../assets/youtube.svg"
import "./Footer.scss"

const Footer = () => {
    return (
        <>
            <footer class="footer">

                <div class="container">
                    <div class="wrapper">
                        <div class="col">
                            <img class="footer__logo" src={logo2} alt="Логотип" />
                            <p class="footer__text">Добро пожаловать в интернет – магазин реквизита для игры в мафию Mafia
                                Rekvizit!</p>
                            <p class="footer__text">© Все права защищены 2019</p>
                        </div>

                        <div class="col">
                            <h3 class="footer__title">Каталог</h3>
                            <ul class="footer-list">
                                <li class="footer-list__item"><a class="footer-list__link" href="#">Маски</a></li>
                                <li class="footer-list__item"><a class="footer-list__link" href="#">Наборы для мафии</a></li>
                                <li class="footer-list__item"><a class="footer-list__link" href="#">Номерки</a></li>
                                <li class="footer-list__item"><a class="footer-list__link" href="#">Карты</a></li>
                                <li class="footer-list__item"><a class="footer-list__link" href="#">Скатерти</a></li>
                                <li class="footer-list__item"><a class="footer-list__link" href="#">Таблички</a></li>
                                <li class="footer-list__item"><a class="footer-list__link" href="#">Сувениры</a></li>
                            </ul>
                        </div>

                        <div class="col">
                            <h3 class="footer__title">Сервис и поддержка</h3>
                            <ul class="footer-list">
                                <li class="footer-list__item"><a class="footer-list__link" href="#">О магазине</a></li>
                                <li class="footer-list__item"><a class="footer-list__link" href="#">Доставка и оплата</a></li>
                                <li class="footer-list__item"><a class="footer-list__link" href="#">Скидка и акции</a></li>
                                <li class="footer-list__item"><a class="footer-list__link" href="#">Личный кабинет</a></li>
                                <li class="footer-list__item"><a class="footer-list__link" href="#">О мафии</a></li>
                            </ul>
                        </div>

                        <div class="col">
                            <a class="footer__title" href="tel:+80647652334">8 (064)
                                765-23-34</a>
                            <p class="footer__text">ежедневно, 10:00-22:00</p>
                            <h3 class="footer__title">shop@mafia-rekvizit.ru</h3>
                            <a href="#"><img class="footer__sns" src={vk1} alt="ВК" /></a>
                            <a href="#"><img class="footer__sns" src={instagram} alt="Инстаграм" /></a>
                            <a href="#"><img class="footer__sns" src={youtube} alt="Ютуб" /></a>
                        </div>

                        <div class="col">
                            <h3 class="footer__discont">Скидка 10% на первую покупку за подписку</h3>
                            <form class="footer-form" action="">
                                <input class="footer-form__input" type="email" placeholder="Email" />
                                <button class="footer-form__btn" type="submit">Подписаться</button>
                            </form>
                            <p class="footer__p">Нажимая кнопку “Подписаться” вы соглашаетесь с <u>Политикой
                                конфиденциальности</u> сайта</p>
                            <img class="footer__visa" src={visa1} alt="Логотип" />
                        </div>
                    </div>

                </div>

            </footer>
        </>
    )
}

export default Footer;
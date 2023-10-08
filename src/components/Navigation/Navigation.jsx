import './Navigation.scss';
import nav_basket from '../../assets/nav_basket.svg';


const Navigation = () => {
    return (
        <>
            <nav class="nav">
                <div className="container">
                    <div className="wrapper">
                        <ul className="nav-list">
                            <li className="nav-list__item"><a className="nav-list__link nav-list__link--active" href="#">Все
                                товары</a></li>
                            <li className="nav-list__item"><a className="nav-list__link" href="#">Скидки и акции</a></li>
                            <li className="nav-list__item"><a className="nav-list__link" href="#">О мафии</a></li>
                            <li className="nav-list__item"><a className="nav-list__link" href="/checkout.html">Доставка и оплата</a>
                            </li>
                            <li className="nav-list__item"><a className="nav-list__link" href="#">О нас</a></li>
                            <li className="nav-list__item"><a className="nav-list__link" href="#">Контакты</a></li>
                        </ul>

                        <div className="nav-korzina">
                            <div className="col">
                                <div className="nav-korzina__logo">
                                    <a href="/basket.html"><img src={nav_basket} alt="Корзина"/></a>
                                </div>
                            </div>
                            <div className="col">
                                <p className="nav-korzina__name">Корзина</p>
                                <h3 className="nav-korzina__price">144 323 руб.</h3>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navigation;
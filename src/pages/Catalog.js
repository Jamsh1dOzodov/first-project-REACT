import Layout from "../components/Layout/Layout";
import Navigation from "../components/Navigation/Navigation";
import Sidebar from "../components/Sidebar/Sidebar";
import numbers from "../assets/numbers.png";
import Maskchicago from "../assets/Maskchicago.png";
import ProductCard from "../components/ProductCard/ProductCard";
import triangle from "../assets/triangle.svg";
import redbasket from '../assets/redBasket.svg';


const Catalog = () => {
    return (
        <>
            <Layout>
                <Navigation />
                <div className="breadcrumbs">
                    <div className="container">
                        <ul className="breadcrumbs-list">
                            <li className="breadcrumbs-list__item breadcrumbs-list__item--dot"><a className="breadcrumbs-list__link"
                                href="/">Главная страница</a></li>
                            <li className="breadcrumbs-list__item"><a className="breadcrumbs-list__link breadcrumbs-list__link--light"
                                href="#">Таблички</a></li>
                        </ul>
                    </div>
                </div>

                <div className="home-header">
                    <div className="container">
                        <div className="home-header home-catalog">
                            <h1 className="home-catalog__title">Таблички</h1>
                        </div>

                        <div className="wrapper">
                            <div className="col">
                                <Sidebar />
                            </div>

                            <div className="col col--catalog">
                                <div className="home-signs signs">
                                    <div className="signs-assortment">
                                        <p className="signs-assortment__text">Найдено <span
                                            className="signs-assortment__text signs-assortment__text--bold">7 товаров</span></p>
                                        <div className="signs-sorting">
                                            <p className="signs-sorting__text">По популярности</p>
                                            <button className="signs-sorting__btn"><img src={triangle} alt="" /></button>
                                        </div>
                                    </div>
                                    <p className="signs__text">Таблички для мафии – это реквизит для фотозоны. Отличные фотографии с
                                        их помощью
                                        гарантированы! Материал – ПВХ, наклейка. Возможно изготовление табличек на заказ – с
                                        вашим логотипом или хештегами.</p>

                                    <div className="signs-cards">
                                        <div className="signs-cards__col">
                                            <ProductCard empty={false} name="Номерки для игры мафия «Сицилия»" price="590 ₽" img={numbers} button="Купить" />
                                            <ProductCard empty={true} name="Маска для мафии «Чикаго»" price="590 ₽" img={Maskchicago} button="Купить" />
                                            <ProductCard empty={false} name="Номерки для игры мафия «Сицилия»" price="590 ₽" img={numbers} button="Купить" />
                                        </div>
                                        <div className="signs-cards__col">
                                            <ProductCard empty={false} name="Номерки для игры мафия «Сицилия»" price="590 ₽" img={numbers} button="Купить" />
                                            <ProductCard empty={true} name="Маска для мафии «Чикаго»" price="590 ₽" img={Maskchicago} button="Купить" />
                                            <ProductCard empty={false} name="Номерки для игры мафия «Сицилия»" price="590 ₽" img={numbers} button="Купить" />
                                        </div>
                                        <div className="signs-cards__col">
                                            <ProductCard empty={false} name="Номерки для игры мафия «Сицилия»" price="590 ₽" img={numbers} button="Купить" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="home-footer home-footer--catalog">
                    <div className="container">
                        <p className="home-footer__text home-footer__text--top">Рады приветствовать вас в интернет-магазине
                            Mafia-Rekvizit.Ru! У нас вы
                            можете купить разнообразный реквизит для игры в мафию: маски, карты, номерки, скатерти и многое
                            другое. Товары в магазине представлены как в виде отдельных позиций, так и в виде готовых наборов.
                            Необходимый реквизит в нашем каталоге найдут любители классической, спортивной и городской мафии.
                        </p>
                        <p className="home-footer__text">Недорогие наборы для игры в мафию, состоящие из карт и пластиковых масок,
                            отлично подойдут для
                            дружеской вечеринки в домашней обстановке или тайм-баре. Если вы открываете маф-клуб или просто
                            планируете игать в мафию по классическим правилам, выбирайте профессиональные наборы. Реквизит в
                            таких наборах рассчитан на более интенсивный режим эксплуатации, а маски на резинках обеспечивают
                            соблюдение правильной «ночной» посадки игроков за столом.</p>
                    </div>
                </div>

                <div className="watched">
                    <div className="container">
                        <h3 className="watched__title">Вы недавно смотрели</h3>
                        <table className="watched-cards">
                            <tr>
                                <td className="watched-cards__card watched-cards__card--left">
                                    <ProductCard watched={true} empty="empty" name="Номерки для игры мафия «Сицилия»" price="590 ₽" img={numbers} button={redbasket} />
                                </td>
                                <td className="watched-cards__card watched-cards__card--middle">
                                    <ProductCard watched={true} empty={false} name="Маска для мафии «Чикаго»" price="590 ₽" img={Maskchicago} button={redbasket} />
                                </td>
                                <td className="watched-cards__card watched-cards__card--middle">
                                    <ProductCard watched={true} empty='empty' name="Номерки для игры мафия «Сицилия»" price="590 ₽" img={numbers} button={redbasket} />
                                </td>
                                <td className="watched-cards__card watched-cards__card--right">
                                    <ProductCard watched={true} empty='soon' name="Маска для мафии «Чикаго»" price="590 ₽" img={Maskchicago} button={redbasket} />
                                </td>
                            </tr>
                        </table>
                    </div>
                </div>
            </Layout>
        </>
    )
}

export default Catalog;
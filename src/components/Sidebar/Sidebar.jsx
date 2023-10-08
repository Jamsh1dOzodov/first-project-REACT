import "./Sidebar.scss";


const Sidebar = () => {
    return (
        <>
            <div className="home-sidebar">
                <h3 className="home-sidebar__title">Каталог товаров</h3>
                <ul className="home-sidebar__list list">
                    <li className="list__item"><a className="list__link" href="#">Наборы для мафии</a></li>
                    <li className="list__item"><a className="list__link" href="#">Маски</a></li>
                    <li className="list__item"><a className="list__link" href="#">Номерки</a></li>
                    <li className="list__item"><a className="list__link" href="#">Карты</a></li>
                    <li className="list__item"><a className="list__link" href="#">Скатерти</a></li>
                    <li className="list__item list__item--active"><a className="list__link" href="#">Таблички</a>
                    </li>
                    <li className="list__item"><a className="list__link" href="#">Сувениры</a></li>
                </ul>
            </div>
        </>
    )
}

export default Sidebar;
import React from "react";
import "./ProductCard.scss";
import numbers from "../../assets/numbers.png";
import Maskchicago from "../../assets/Maskchicago.png";

const ProductCard = (props) => {
    return (
        <>
            <div className="cards">
                {/* <div className="container"> */}
                <div className="card">
                    <div><span className="card__description">В наличии</span></div>
                    <div className="card-header"><img src={numbers} alt="Номерки" /></div>
                    <div className="card-body">
                        <p>Номерки для игры мафия «Сицилия»</p>
                    </div>
                    <div className="card-footer">
                        <h4 className="card-footer__h4">Цена</h4>
                        <h4 className="card-footer__price">590 ₽</h4>
                        <button className="card-footer__btn" type="button">Купить</button>
                    </div>
                </div>

                <div className="card">
                    <div><span className="card__description--red">Скоро поступит</span></div>
                    <div className="card-header"><img src={Maskchicago} alt="Номерки" />
                    </div>
                    <div className="card-body">
                        <p>Маска для мафии «Чикаго»</p>
                    </div>
                    <div className="card-footer">
                        <h4 className="card-footer__h4">Цена</h4>
                        <h4 className="card-footer__price">590 ₽</h4>
                        <button className="card-footer__btn" type="button">Купить</button>
                    </div>
                </div>

                <div className="card">
                    <div><span className="card__description">В наличии</span></div>
                    <div className="card-header"><img src={numbers} alt="Номерки" /></div>
                    <div className="card-body">
                        <p>Номерки для игры мафия «Сицилия»</p>
                    </div>
                    <div className="card-footer">
                        <h4 className="card-footer__h4">Цена</h4>
                        <h4 className="card-footer__price">590 ₽</h4>
                        <button className="card-footer__btn" type="button">Купить</button>
                    </div>
                </div>

                <div className="card">
                    <div><span className="card__description--red">Скоро поступит</span></div>
                    <div className="card-header"><img src={Maskchicago} alt="Номерки" />
                    </div>
                    <div className="card-body">
                        <p>Маска для мафии «Чикаго»</p>
                    </div>
                    <div className="card-footer">
                        <h4 className="card-footer__h4">Цена</h4>
                        <h4 className="card-footer__price">590 ₽</h4>
                        <button className="card-footer__btn" type="button">Купить</button>
                    </div>
                </div>
            </div>
            {/* </div> */}
        </>
    )
}

export default ProductCard;
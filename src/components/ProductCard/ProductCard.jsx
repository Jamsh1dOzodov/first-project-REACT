import React from "react";
import "./ProductCard.scss";
import '../../index.scss';


const ProductCard = (props) => {
    return (
        <>
            {props.watched
                ? <div className="card">
                    <div><span className={
                        props.empty === 'empty'
                            ? 'card__description card__description--red'
                            : props.empty === 'soon'
                                ? 'card__description card__description--orange'
                                : 'card__description'}>{props.empty === 'empty'
                                    ? 'Скоро поступит'
                                    : props.empty === 'soon'
                                        ? 'Заканчивается'
                                        : 'В наличии'}</span></div>
                    <div className="card-header"><img src={props.img} alt="Номерки" />
                    </div>
                    <div className="card-body">
                        <p>{props.name}</p>
                    </div>
                    <div className="card-footer">
                        <h4 className="card-footer__price">{props.price}</h4>
                        <button className="card-footer__btn" type="button"><img src={props.button} /></button>
                    </div>
                </div>

                : <div className="card">
                    <div><span className={props.empty ? 'card__description card__description--red' : 'card__description'}>{props.empty ? 'Скоро поступит' : 'В налиции'}</span></div>
                    <div className="card-header"><img src={props.img} alt="Номерки" /></div>
                    <div className="card-body">
                        <p>{props.name}</p>
                    </div>
                    <div className="card-footer">
                        <h4 className="card-footer__h4">Цена</h4>
                        <h4 className="card-footer__price">{props.price}</h4>
                        <button className="card-footer__btn" type="button">{props.button}</button>
                    </div>
                </div>
            }
        </>
    )
}

export default ProductCard;
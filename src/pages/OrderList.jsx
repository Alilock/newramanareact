import React from "react";
import "../assets/css/orderlist.scss"
import Shoes from "../assets/images/Men-Shoes.png"
import {AiOutlineCheck} from "react-icons/ai"
import shoe from "../assets/images/Men-Shoes.png"
const OrderList = () => {
    return (
        <div className="order">
            <div className="order__container container">
                <h3 className="title__h">Order History</h3>
                <div className="order__container__box">
                    <div className="order__container__box__upper">
                        <ul className="order__container__box__upper__ul">
                            <li className="order__container__box__upper__ul__li"><h3>salam</h3> <span>sagolaa</span></li>
                            <li className="order__container__box__upper__ul__li"><h3>salam</h3> <span>sagolaa</span></li>
                            <li className="order__container__box__upper__ul__li"><h3>salam</h3> <span>sagolaa</span></li>
                            <li className="order__container__box__upper__ul__li"><h3>salam</h3> <span>sagolaa</span></li>
                        </ul>
                    </div>
                    <div className="order__container__box__down">
                    <div className="order__container__box__down__left col-2">
                   <AiOutlineCheck/><span className="span__progress">in progress</span>
                   <button className="button__details">see details</button>
                    </div>
                    <div className="order__container__box__down__right col-10">
                    <div className="order__container__box__down__right__image">
                    <img src={shoe} alt=""/>
                    </div>
                    <div className="order__container__box__down__right__image">
                    <img src={shoe} alt=""/>
                    </div> <div className="order__container__box__down__right__image">
                    <img src={shoe} alt=""/>
                    </div> <div className="order__container__box__down__right__image">
                    <img src={shoe} alt=""/>
                    </div> <div className="order__container__box__down__right__image">
                    <img src={shoe} alt=""/>
                    </div> <div className="order__container__box__down__right__image">
                    <img src={shoe} alt=""/>
                    </div> <div className="order__container__box__down__right__image">
                    <img src={shoe} alt=""/>
                    </div>
                    </div>
                    </div>
                </div>
            </div>
        </div>

    )
}


export default OrderList
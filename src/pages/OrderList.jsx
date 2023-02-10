import React from "react";
import "../assets/css/orderlist.scss"
import Shoes from "../assets/images/Men-Shoes.png"
const OrderList = () => {
    return (
        <div className="order">
            <div className="order__container container">
                <h3 className="title__h">Order History</h3>
                <div className="order_container_card card">
                    <div className="order_containercard_wrapper">

                        <div className="order_containercard_title title">
                            <p className="dark">DATE OF ORDER</p>
                            <p>13 MAY 2022</p>
                        </div>
                        <div className="order_containercard_title title">
                            <p className="dark">DATE OF ORDER</p>
                            <p>13 MAY 2022</p>
                        </div>
                        <div className="order_containercard_title title">
                            <p className="dark">DATE OF ORDER</p>
                            <p>13 MAY 2022</p>
                        </div>
                        <div className="order_containercard_title title">
                            <p className="dark">DATE OF ORDER</p>
                            <p>13 MAY 2022</p>
                        </div>
                    </div>
                    <div className="order_containercard_progress-card progress-card">
                        <div className="order_containercardprogress-card_wrapper">
                            <div className="wrapper">
                                <div className="icon">
                                    <svg
                                        className="svg__chevron"
                                        width="21"
                                        height="15"
                                        viewBox="0 0 15 11"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path d="M1 1L7.5 7L14 1" stroke="#363636" strokeWidth="2" />
                                    </svg>
                                </div>
                                <div className="title">
                                    <p>IN PROGRESS</p>

                                </div>
                            </div>
                            <div className="button">
                                <button className="cart_bodytotalbutton_btn"
                                >
                                    SEE DETAILS
                                </button>
                            </div>
                        </div>
                        <div className="imagewrapper">
                            <img src={Shoes} alt="" />
                            <img src={Shoes} alt="" />
                            <img src={Shoes} alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}


export default OrderList
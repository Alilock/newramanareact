import React, { useContext, useEffect } from "react";
import "../assets/css/orderlist.scss"
import { StoreContext } from "../StoreContext";
import Shoes from "../assets/images/Men-Shoes.png"
import { AiOutlineCheck } from "react-icons/ai"
import shoe from "../assets/images/Men-Shoes.png"
import LoadingBox from "../components/LoadingBox";
import { useDispatch, useSelector } from "react-redux";
import { getOrder, fetchOrderById, getOrderLoading } from "../features/order/orderSlice";
import moment from "moment";
const OrderList = () => {
    const { userInfo } = useContext(StoreContext)

    const order = useSelector(getOrder)
    const dispatch = useDispatch();
    const loading = useSelector(getOrderLoading)
    useEffect(() => {
        userInfo && dispatch(fetchOrderById(userInfo.user.id))
    }, [userInfo])

    console.log(order);

    return (
        loading ? <LoadingBox /> :

            < div className="order" >
                <div className="order__container container">
                    <h3 className="title__h">Order History</h3>
                    {order && order.map(o => (
                        <div className="order__container__box">
                            <div className="order__container__box__upper">
                                <ul className="order__container__box__upper__ul">
                                    <li className="order__container__box__upper__ul__li"><h3>DATE OF ORDER</h3> <span>{
                                        moment(o.createdDate).format("DD MMM YYYY")
                                    }</span></li>
                                    <li className="order__container__box__upper__ul__li"><h3>NUMBER OF ITEMS</h3> <span>{o.orderItems.length} ITEMS</span></li>
                                    <li className="order__container__box__upper__ul__li"><h3>NAME OF BUYER</h3> <span>{o.user.name} {o.user.surName}</span></li>
                                    <li className="order__container__box__upper__ul__li"><h3>DELIVERY DATE</h3> <span>{moment(o.createdDate).add(2, 'd').format("DD MMM YYYY")}</span></li>
                                </ul>
                            </div>
                            <div className="order__container__box__down">
                                <div className="order__container__box__down__left col-2">
                                    <AiOutlineCheck /><span className="span__progress">in progress</span>
                                    <button className="button__details">see details</button>
                                </div>
                                <div className="order__container__box__down__right col-10">
                                    {
                                        o.orderItems.map(order => (

                                            <div key={order.product.images[0].path} className="order__container__box__down__right__image">
                                                <img

                                                    src={`https://newramanaapplication.azurewebsites.net/uploads/images/${order.product.images[0].path}`}
                                                    alt="categoryimg"
                                                />
                                            </div>

                                        ))
                                    }

                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div >

    )
}


export default OrderList
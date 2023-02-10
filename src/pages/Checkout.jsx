import React, { useState, useContext } from "react";
import { useEffect } from "react";
import { redirect } from "react-router-dom";
import { StoreContext } from "../StoreContext";
import { useDispatch, useSelector } from "react-redux";
import { fetchOrder } from "../features/orders/orderSlice";
import { useNavigate } from "react-router-dom";
import moment from "moment";
import axios from "axios";
const Checkout = () => {
  const [fullname, setFullname] = useState(String);
  const [email, setEmail] = useState(String);
  const [address, setAddress] = useState(String);
  const [number, setNumber] = useState(Number);
  const [payment, setPayment] = useState("");

  const { userInfo } = useContext(StoreContext);

  const { cartItems, setCartItems } = useContext(StoreContext);


  const navigate = useNavigate();
  const today = moment().format("DD MMM YYYY");
  const deliveryday = moment().add(2, "days").format("DD MMM YYYY");

  const dispatch = useDispatch();

  const orderCheckout = () => {

    dispatch(fetchOrder(cartItems))
  }

  const removeHandler = (item) => {
    let cart = [];
    cart = cartItems.filter((c) => c.id !== item.id);
    setCartItems(cart);
    localStorage.setItem("cartItems", JSON.stringify(cart));
  };
  // const dispatch = useDispatch();
  // const orders = useSelector(getOrder);
  // console.log(orders);
  const ids = [];
  cartItems.map((crt) => {
    ids.push(crt.id);
  });
  const authPaymentHandler = async () => {
    const me = {
      userId: userInfo.user.id,
      address: address,
      paymentMethod: payment,
      productIds: ids,
    };
    const { data } = await axios.post(
      "https://newramanaapplication.azurewebsites.net/api/shop",
      me,
      {
        headers: { Authorization: `Bearer ${userInfo.accessToken}` },
      }
    );
    navigate("/orderconfirm")
  };

  return (
    <div>
      <section className="main">
        <div className="main__container container ">
          <div className="main__container__checkout">
            <span className="main__container__checkout__span">checkout</span>
          </div>
          <div className="main__container__info row">
            <div className="main__container__info__box col-lg-3 col-md-3 col-6">
              <p>data of order</p>
              <span>{today}</span>
            </div>
            <div className="main__container__info__box col-lg-3 col-md-3 col-6">
              <p>number of items</p>
              <span>{cartItems.length} items</span>
            </div>
            <div className="main__container__info__box col-lg-3 col-md-3 col-6">
              <p>name of buyer</p>
              <span>
                {userInfo && userInfo.user.name}{" "}
                {userInfo && userInfo.user.surName}
              </span>
            </div>
            <div className="main__container__info__box col-lg-3 col-md-3 col-6">
              <p>delivery date</p>
              <span>{deliveryday}</span>
            </div>
          </div>
          <div className="main__container__orders">
            {cartItems &&
              cartItems.map((item) => (
                <div key={item.id} className="main__container__orders__row row">
                  <div className="main__container__orders__row__title col-6">
                    <p>
                      {item.name} - {item.price} azn
                    </p>
                    {/* {item.materials.map((e) => `${e.material.name} `)} */}
                  </div>
                  <div className="main__container__orders__row__product col-5">
                    <div className="main__container__orders__row__product__image">
                      <img
                        src={`https://newramanaapplication.azurewebsites.net/uploads/images/${item.images[0].path}`}
                        alt=""
                      />
                    </div>
                  </div>
                  <div onClick={() => removeHandler(item)} className="x col-1">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="19"
                      height="19"
                      fill="currentColor"
                      className="bi bi-x-lg svg__remove"
                      viewBox="0 0 16 16"
                    >
                      <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z" />
                    </svg>
                  </div>
                </div>
              ))}
          </div>
          <div className="main__container__inputs row">
            <div className="main__container__inputs__name col-6">
              <div className="main__container__inputs__name__box">
                <span className="fullname__label">full name:</span>

                <input
                  name="fullname"
                  id="fullname"
                  className="input__data"
                  type="text"
                  value={userInfo && userInfo.user.name}
                  onChange={(e) => {
                    setFullname(e.target.value);
                  }}
                />
              </div>
              {fullname === "" ? (
                "!"
              ) : (
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M5.59229 22.7471L22.2091 6.13022L18.079 2.0001L1.46216 18.6169L1.06494 23.1443L5.59229 22.7471Z"
                    stroke="#363636"
                    strokeWidth="1.5"
                    stroke-miterlimit="10"
                  />
                </svg>
              )}
            </div>
            <div className="main__container__inputs__name col-6">
              <div className="main__container__inputs__name__box">
                <span>phone number:</span>

                <input
                  name="phonenumber"
                  id="phonenumber"
                  className="input__data"
                  type="number"
                  value={userInfo && userInfo.user.phoneNumber}
                  onChange={(e) => setNumber(e.target.value)}
                />
              </div>
              <label htmlFor="phonenumber">
                {number ? (
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M5.59229 22.7471L22.2091 6.13022L18.079 2.0001L1.46216 18.6169L1.06494 23.1443L5.59229 22.7471Z"
                      stroke="#363636"
                      strokeWidth="1.5"
                      stroke-miterlimit="10"
                    />
                  </svg>
                ) : (
                  "!"
                )}
              </label>
            </div>
            <div className="main__container__inputs__name col-6">
              <div className="main__container__inputs__name__box col-8">
                <span>address:</span>

                <input
                  name="address"
                  id="address"
                  className="input__data"
                  type="text"
                  onChange={(e) => setAddress(e.target.value)}
                />
              </div>
              <label className="addressss" htmlFor="address">
                {address === "" ? (
                  "!"
                ) : (
                  <>
                    <div className="hover__address">
                      <div className="hover__address__row">
                        <label htmlFor="school"> school address</label>
                        <br />

                        <input type="radio" id="school" name="addresses" />
                      </div>
                      <div className="hover__address__row">
                        <label htmlFor="home"> home address</label>
                        <br />

                        <input type="radio" id="home" name="addresses" />
                      </div>

                      <div className="hover__address__row">
                        <label htmlFor="office"> office address</label>
                        <br />

                        <input type="radio" id="office" name="addresses" />
                      </div>
                    </div>
                    <svg
                      width="15"
                      height="9"
                      viewBox="0 0 15 9"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M1 1L7.5 7L14 1"
                        stroke="#363636"
                        strokeWidth="1.5"
                      />
                    </svg>
                  </>
                )}
              </label>
            </div>
            <div className="main__container__inputs__name col-6">
              <div className="main__container__inputs__name__box">
                <span>email address:</span>

                <input
                  name="emailaddress"
                  id="emailaddress"
                  className="input__data"
                  value={userInfo && userInfo.user.email}
                  type="text"
                  onChange={(e) => {
                    setEmail(e.target.value);
                  }}
                />
              </div>
              <label htmlFor="emailaddress">
                {email === "" ? (
                  "!"
                ) : (
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M5.59229 22.7471L22.2091 6.13022L18.079 2.0001L1.46216 18.6169L1.06494 23.1443L5.59229 22.7471Z"
                      stroke="#363636"
                      strokeWidth="1.5"
                      stroke-miterlimit="10"
                    />
                  </svg>
                )}
              </label>
            </div>
          </div>
          <div className="main__container__orderinfo row">
            <div className="main__container__orderinfo__box col-3">
              order no: 9807611
            </div>
            <div className="main__container__orderinfo__box col-3">
              delivery time: 2 days
            </div>
            <div className="main__container__orderinfo__box col-3 payment__box">
              <span>payment: {payment}</span>
              <svg
                className="svg__chevron"
                width="15"
                height="9"
                viewBox="0 0 15 9"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M1 1L7.5 7L14 1" stroke="#363636" strokeWidth="1.5" />
              </svg>
              <div className="payment__hover">
                <ul className="payment__hover__ul">
                  <li className="payment__hover__ul__li">
                    <label htmlFor="debitcard">debit cart</label>
                    <input
                      className="payment__radio"
                      type="radio"
                      id="debitcard"
                      name="payment"
                      value="debit"
                      onChange={(e) => setPayment(e.currentTarget.value)}
                    />
                  </li>
                  <li className="payment__hover__ul__li">
                    <label htmlFor="cash">cash on delivery</label>
                    <input
                      className="payment__radio"
                      type="radio"
                      id="cash"
                      name="payment"
                      value="cash"
                      onChange={(e) => setPayment(e.currentTarget.value)}
                    />
                  </li>
                </ul>
              </div>
            </div>
            <div className="main__container__orderinfo__box col-3">
              your total:{" "}
              {cartItems.reduce((total, item) => +item.price + total, 0)} azn
            </div>
          </div>
          <div className="main__container__button">
            <button onClick={() => authPaymentHandler()}>
              authorize payment
            </button>

          </div>
        </div>
      </section>
    </div>
  );
};

export default Checkout;

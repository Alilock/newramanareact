import React, { useContext } from "react";
import "../assets/css/profile.scss";
import { BsBag } from "react-icons/bs";
import { StoreContext } from "../StoreContext";
import Cart from './Cart'
import arrow from "../assets/images/Arrow.png";
import { Link, useNavigate } from "react-router-dom";
const Profile = () => {

    const { userInfo } = useContext(StoreContext);

    const navigate = useNavigate();
    const golist = () => {
        console.log('a');
        navigate("/orderlist")
    }
    const logoutHandler = () => {
        try {
            localStorage.removeItem("userInfo");
            window.location.reload(false);

        } catch (error) {
            alert('logout later')
        }
    };

    return (
        <div className="profile">
            <div className="profile__box">
                <h1 className="profile__box__h">welcome,{userInfo.user.name}</h1>
                <div className="profile__box__favs">
                    <Link>

                        <button className="profile__box__favs__buttons">

                            <span>
                                <Cart />
                            </span>
                            <span>my cart</span>
                            <span>
                                <img src={arrow} alt="" />
                            </span>
                        </button>
                    </Link>
                    <Link style={{ textDecoration: "none" }} to="/likes">
                        <button className="profile__box__favs__buttons">
                            <span>
                                <BsBag />
                            </span>
                            <span>favorites</span>
                            <span>
                                <img src={arrow} alt="" />
                            </span>
                        </button>
                    </Link>
                </div>
                <div className="profile__box__navs">
                    <ul className="profile__box__navs__ul">
                        <li onClick={() => golist()} className="profile__box__navs__ul__li">
                            order history{" "}
                            <span>
                                <img src={arrow} alt="" />
                            </span>
                        </li>
                        <li className="profile__box__navs__ul__li">
                            delivery status
                            <span>
                                <img src={arrow} alt="" />
                            </span>
                        </li>
                        <li className="profile__box__navs__ul__li">
                            edit profile info{" "}
                            <span>
                                <img src={arrow} alt="" />
                            </span>
                        </li>
                        <li className="profile__box__navs__ul__li">
                            your address{" "}
                            <span>
                                <img src={arrow} alt="" />
                            </span>
                        </li>
                    </ul>
                </div>
                <div className="profile__box__logout">
                    <p className="profile__box__logout__p">finished shopping?</p>
                    <button
                        onClick={() => logoutHandler()}
                        className="profile__box__logout__button"
                    >
                        logout
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Profile;
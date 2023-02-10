import React, { useContext, useEffect, useState } from "react";
import "../assets/css/product.scss";
import arrow from "../assets/images/Arrow.png";
import LoadingBox from "./LoadingBox";
import ReactPaginate from "react-paginate";
import { HiArrowLeft, HiArrowRight } from "react-icons/hi";
import { useNavigate, useParams } from "react-router-dom";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { BsBag, BsHeart, BsHeartFill, BsBagFill } from "react-icons/bs";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchAllProducts,
  getLoading,
  getAllProducts,
} from "../features/products/productSlice";
import { StoreContext } from "../StoreContext";

// const reducer = (state, action) => {

//   switch (action.type) {
//     case "FETCH_REQUEST":
//       return { ...state, loading: true };
//     case "FETCH_SUCCESS":
//       return { ...state, loading: false, products: action.payload };
//     case "FETCH_FAIL":
//       return { ...state, loading: false, error: true };
//     default:
//       return state;
//   }

// };

const MenProduct = (props) => {
  console.log(props);
  const [prGender, setprGender] = useState([]);
  let settings = {
    dots: false,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplaySpeed: 300,
    pauseOnHover: false,
    autoplay: false,
  };

  const navigate = useNavigate();
  // const [{ products, error, loading }, dispatch] = useReducer(reducer, {
  //   products: [],
  //   loading: false,
  //   error: false,
  // });

  const { setGender } = useContext(StoreContext);
  const params = useParams();
  const productGender = params.gender;

  const dispatch = useDispatch();
  const products = useSelector(getAllProducts);
  const loading = useSelector(getLoading);
  useEffect(() => {
    dispatch(fetchAllProducts());
    let newarr =
      products && products.filter((p) => p.genderId == params.gender);
    setprGender(newarr);
  }, [productGender, dispatch]);
  const { favorites, setFavorites, cartItems, setCartItems } =
    useContext(StoreContext);

  const favoriteHandler = (product) => {
    console.log("salam");
    let FavoritProds = JSON.parse(localStorage.getItem("favorites"));
    let existedProduct = FavoritProds.find((fav) => fav.id === product.id);

    if (!existedProduct) {

      favorites.push(product);
      localStorage.setItem("favorites", JSON.stringify(favorites));
    } else {
      const updatedArray = FavoritProds.filter((fav) => fav.id !== product.id);

      setFavorites(updatedArray);
      localStorage.setItem("favorites", JSON.stringify(updatedArray));
    }
    setFavorites(JSON.parse(localStorage.getItem("favorites")));

  };

  const cartHandler = (product) => {
    let existedProduct = cartItems.find((item) => item.id === product.id);
    if (!existedProduct) {
      cartItems.push(product);
      localStorage.setItem("cartItems", JSON.stringify(cartItems));
    } else {
      existedProduct.quantity = 22;
    }
    setCartItems(JSON.parse(localStorage.getItem("cartItems")));
  };

  return loading ? (
    <LoadingBox />
  ) : (
    <>
      {prGender &&
        prGender.map((product) => {
          return (
            <div key={product.id} className="product__box col-6">
              <div className="icons__div__product">
                <span
                  onClick={() => cartHandler(product)}
                  className="icons__div__product__bag"
                >
                  {cartItems && cartItems.find((c) => c.id === product.id) ? (
                    <BsBagFill />
                  ) : (
                    <BsBag />
                  )}
                </span>
                <span
                  onClick={() => favoriteHandler(product)}
                  className="icons__div__product__heart"
                >
                  {favorites && favorites.find((f) => f.id === product.id) ? (
                    <BsHeartFill />
                  ) : (
                    <BsHeart />
                  )}
                </span>
              </div>
              <div
                onClick={() => navigate(`/singleproduct/${product.id}`)}
                className="product__box__image">
                <Slider  {...settings}>
                  {product.images &&
                    product.images.map((img) => (
                      <img
                        className="produc__img"
                        key={product.id}
                        src={`https://newramanaapplication.azurewebsites.net/uploads/images/${img.path}`}
                        alt=""
                      />
                    ))}
                </Slider>
              </div>
              <div
                onClick={() => navigate(`/singleproduct/${product.id}`)}
                className="product__box__content"
              >
                <div className="product__box__content__details col-9">
                  <h3>{product.name}</h3>
                  <span>{product.price} AZN</span>
                </div>
                <div className="product__box__content__arrow col-3">
                  <img src={arrow} alt="" />
                </div>
              </div>
            </div>
          );
        })}
      <div className="pagination__ul">
        <ReactPaginate
          previousLabel=<HiArrowLeft className="page__arrow__icon" />
          breakLabel="..."
          nextLabel=<HiArrowRight className="page__arrow__icon" />
          pageRangeDisplayed={5}
          pageCount={products.length}
          renderOnZeroPageCount={null}
          activeClassName={"active__page"}
        />
      </div>
    </>
  );
};

export default MenProduct;

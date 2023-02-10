import React, { Component, useReducer } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../assets/css/singleproduct.scss";
import shoespng from "../assets/images/brownshoes.png";
import { BsBag, BsHeart, BsHeartFill, BsBagFill } from "react-icons/bs";
import { useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux'
import { fetchProductById, getProduct, getProductLoading } from "../features/products/productSlice";
import { useParams } from "react-router-dom";
import LoadingBox from "../components/LoadingBox";


const SingleProduct = () => {

  const params = useParams();
  const _id = params.id;

  const dispatch = useDispatch();
  const product = useSelector(getProduct)
  const loading = useSelector(getProductLoading);
  useEffect(() => {
    dispatch(fetchProductById(_id))
  }, [])
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    loading ? <LoadingBox /> : product &&
      <div className="singleproduct">
        <div className="singleproduct__cover">
          <div className="singleproduct__cover__container container">
            <h3 className="singleproduct__cover__container__h">
              product details
            </h3>

            <div className="singleproduct__cover__container__row row">
              <div className="singleproduct__cover__container__row__mainproduct col-7">
                <div className="singleproduct__cover__container__row__mainproduct__header">
                  <div className="singleproduct__cover__container__row__mainproduct__header__title">
                    <h2 className="singleproduct__cover__container__row__mainproduct__header__title__h">
                      {product.name}
                    </h2>
                    <span className="singleproduct__cover__container__row__mainproduct__header__title__span">
                      {product.price} azn
                    </span>
                  </div>
                  <div className="singleproduct__cover__container__row__mainproduct__header__icons">
                    <BsHeart />
                    <BsBag style={{ margin: "0 0 7px 20px" }} />
                  </div>
                </div>
                <div className="singleproduct__cover__container__row__mainproduct__image">
                  <Slider {...settings}>
                    {product.images &&
                      product.images.map((image) => (
                        <img key={image.path}
                          src={`https://newramanaapplication.azurewebsites.net/uploads/images/${image.path}`}
                          alt="categoryimg"
                        />
                      ))}
                  </Slider>
                </div>
                <div className="singleproduct__cover__container__row__mainproduct__footer"></div>
              </div>
              <div className="singleproduct__cover__container__row__album ">
                <div className="singleproduct__cover__container__row__album__upper">
                  <img src={product.images && `https://newramanaapplication.azurewebsites.net/uploads/images/${product.images[product.images.length - 1].path}`} alt="" />
                </div>
                <div className="singleproduct__cover__container__row__album__under">
                  <img src={product.images && `https://newramanaapplication.azurewebsites.net/uploads/images/${product.images[product.images.length - 2].path}`} alt="" />

                </div>
              </div>
            </div>
            <div className="singleproduct__cover__container__details row">
              <div className="singleproduct__cover__container__details__left col-5">
                <p className="singleproduct__cover__container__details__left__p">
                  Product category: <br />
                  {product.category.name && product.category.name}
                </p>{" "}
                <p className="singleproduct__cover__container__details__left__p">
                  Materials:
                  <br />
                  {product.materials && product.materials.map(m => (
                    <span style={{ marginRight: "10px" }}>
                      {m.material.name}
                    </span>
                  ))}
                </p>{" "}
                <p className="singleproduct__cover__container__details__left__p">
                  Avaliable sizes:
                  <br />
                  <span style={{ marginRight: "10px" }}>
                    39
                  </span> <span style={{ marginRight: "10px" }}>
                    40
                  </span> <span style={{ marginRight: "10px" }}>
                    41
                  </span> <span style={{ marginRight: "10px" }}>
                    42
                  </span>
                </p>{" "}
                <p
                  style={{ margin: 0 }}
                  className="singleproduct__cover__container__details__left__p"
                >
                  Avaliable colors:
                  <br />
                  {product.colors &&
                    product.colors.map((c) => (
                      <span key={c} style={{ marginRight: "10px" }}>
                        {c.color.name}
                      </span>
                    ))}
                </p>
              </div>
              <div className="singleproduct__cover__container__details__right col-7">
                <div className="singleproduct__cover__container__details__right__inputs">
                  <select
                    className="singleproduct__cover__container__details__right__inputs__select"
                    name="size"
                    id="size"
                  >
                    <option value="37">37</option>
                    <option value="38">38</option>
                    <option value="40">40</option>
                    <option value="42">42</option>
                  </select>{" "}
                  <input
                    className="singleproduct__cover__container__details__right__inputs__input"
                    type="number"
                  />
                </div>
                <div className="singleproduct__cover__container__details__right__btns">
                  <button>add to cart</button>
                  <button>buy now</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
  );
};

export default SingleProduct;

import React, { useEffect } from "react";
import cover1 from "../assets/images/unsplash_hCG34GSdYTA.jpg";
import cover2 from "../assets/images/Rectangle43.png";
import coverRotate from "../assets/images/coverrotate.png";

import { useDispatch, useSelector } from 'react-redux'
import { fetchAllCategories, getAllCategories, getLoading } from "../features/categories/categorySlice";
import LoadingBox from "../components/LoadingBox";
import cover3 from "../assets/images/bag.png";
import cover4 from "../assets/images/Rectangle57.png";
import cover5 from "../assets/images/Rectangle49.png";
import { useNavigate } from "react-router-dom";
import { TfiEmail } from "react-icons/tfi";
import "../assets/css/homepage.scss";
import HomepageButton from "../components/HomepageButton";
const Homepage = () => {
  const navigate = useNavigate();
  const mediaMatch = window.matchMedia("(max-width: 576px)");

  const dispatch = useDispatch();
  const categories = useSelector(getAllCategories);
  const loading = useSelector(getLoading);
  useEffect(() => {
    dispatch(fetchAllCategories())
  }, [dispatch])


  return (
    loading ? (

      <LoadingBox />
    ) :
      <>
        <div className="homepage">
          <div className="homepage__cover">
            <img src={cover1} alt="" />
            <div className="homepage__cover__title">
              <h1>
                ramana <br /> castle
              </h1>
              <HomepageButton />
            </div>
          </div>
          {
            categories && categories.map(c => (


              c.parentId ? '' :
                <div className="homepage__footwear__cover">
                  <img
                    src={`https://newramanaapplication.azurewebsites.net/uploads/images/${c.imagePath}`}
                    alt="categoryimg"
                  />
                  <div className="homepage__footwear__cover__title">
                    <h1>{c.name}</h1>
                    <p>made just for you</p>
                  </div>
                  <div className="homepage__footwear__cover__footer">
                    <div
                      onClick={() => navigate("/shop")}
                      className="homepage__footwear__cover__footer__left col-6"
                    >
                      menswear
                    </div>
                    <div
                      onClick={() => navigate("/womenshop")}
                      className="homepage__footwear__cover__footer__right col-6"
                    >
                      womenswear
                    </div>
                  </div>
                </div>



            ))
          }
        </div>
      </>
  );
};

export default Homepage;

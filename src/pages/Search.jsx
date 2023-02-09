import "../assets/css/search.scss";
import { BsSearch } from "react-icons/bs";
import LoadingBox from "../components/LoadingBox";
import { React, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchAllCategories, getAllCategories, getLoading } from '../features/categories/categorySlice'

const Search = () => {
  const [searchResult, setSearchResult] = useState("");

  const dispatch = useDispatch();
  const loading = useSelector(getLoading)
  const categories = useSelector(getAllCategories)
  useEffect(() => {
    dispatch(fetchAllCategories())
  }, [])
  
  return loading ? (
    <LoadingBox />
  ) : (
    <div className="search">
      <div className="search__box container">
        <div className="search__box__inputs">
          <input
            onChange={(e) => setSearchResult(e.target.value)}
            type="text"
            placeholder="ENTER SEARCH KEYWORDS HERE"
          />
          <span className="search__box__inputs__icon">
            <BsSearch />
          </span>
        </div>
        <div className="search__box__categories row">
          {categories &&
            categories
              .filter((categories) => categories.name.includes(searchResult))
              .map((c) => (
                <div
                  key={c.id}
                  className="search__box__categories__category col-3"
                >
                  <span className="search__box__categories__category__span">
                    {c.name}
                  </span>
                </div>
              ))}
        </div>
      </div>
    </div>
  );
};

export default Search;

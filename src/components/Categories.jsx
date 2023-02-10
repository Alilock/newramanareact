import { Checkbox } from "@mui/material";
import axios from "axios";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchAllCategories, getAllCategories, getLoading } from "../features/categories/categorySlice";
const label = { inputProps: { "aria-label": "Checkbox demo" } };

const Categories = () => {

  const dispatch = useDispatch();
  const categories = useSelector(getAllCategories);
  useEffect(() => {
    dispatch(fetchAllCategories())
  }, []);

  return (
    <ul className="filter__categories__hover__ul">
      {categories &&
        categories.map((category) => (
          <li key={category} className="filter__categories__hover__ul__li">
            <Checkbox {...label} /> {category.name}
          </li>
        ))}
    </ul>
  );
};

export default Categories;

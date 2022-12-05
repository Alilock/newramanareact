import * as React from "react";
import Box from "@mui/material/Box";
import SwipeableDrawer from "@mui/material/SwipeableDrawer";
import Button from "@mui/material/Button";
import "../assets/css/menuslider.scss";
import { FiMenu } from "react-icons/fi";
import MenuHeader from "./MenuHeader";
import MenuAccordion from "./MenuAccordion";
import { BsChevronRight } from "react-icons/bs";
import { BsChevronLeft } from "react-icons/bs";
import { useState, useEffect } from "react";

export default function Menuslider() {
  const [state, setState] = React.useState({
    left: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event &&
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <>
      <Box
        sx={{ width: anchor === "top" || anchor === "bottom" ? "auto" : 250 }}
        role="presentation"
        onClick={toggleDrawer(anchor, false)}
      >
        <MenuHeader />
      </Box>
      <div className="menu__content">
        <div className="menswear__content ">
          <MenuAccordion />
        </div>
        <ul className="menu__content__ul">
          <li>
            <span className="title__span">menswear</span>
            <span className="span__icon">
              <BsChevronRight />
            </span>
          </li>
          <li>
            <span className="title__span">womenswear</span>
            <span className="span__icon">
              <BsChevronRight />
            </span>
          </li>
          <li>
            <span className="title__span">kidswear</span>
            <span className="span__icon">
              <BsChevronRight />
            </span>
          </li>
        </ul>
      </div>

      {/* <MenuAccordion /> */}
    </>
  );

  return (
    <div>
      {["left"].map((anchor) => (
        <React.Fragment key={anchor}>
          <Button onClick={toggleDrawer(anchor, true)}>
            <FiMenu className="my__menu__icon" />
          </Button>
          <SwipeableDrawer
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
            onOpen={toggleDrawer(anchor, true)}
          >
            {list(anchor)}
          </SwipeableDrawer>
        </React.Fragment>
      ))}
    </div>
  );
}
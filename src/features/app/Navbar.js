import React, { useEffect, useState } from "react";
import { withMedia } from "react-media-query-hoc";

import Logo from "../../assets/icons/logo.png";
import * as RoutePath from "../../config/route.config";
import { fsc } from "../../helper/fontControlHelper";
import MyLink from "../../tools/myLink";
import * as Colors from "../../config/color.config"; 
import topmyanmar from '../../assets/image/carosel/topmyanmar.png'

const Navbar = props => {
  const { media } = props;

  const [MenuClick, setMenuClick] = useState(false);
  const handleMenuClick = () => {
    setMenuClick(!MenuClick);
  };
  useEffect(() => {
    if (media.desktop || media.tablet) {
      setMenuClick(false);
    }
    window.onscroll = () => {
      const MyNav = document.getElementById("NavbarContainer");
      const navTitle = document.getElementById("NavTitle");

      if (
        document.body.scrollTop > 30 ||
        document.documentElement.scrollTop > 30
      ) {
        MyNav.style.background = "#866a15";
        MyNav.style.position = "fixed";
        MyNav.style.top = 0;        
        navTitle.style.visibility="hidden"
      } else {
        MyNav.style.background = "black";
        MyNav.style.position = "relative";
        navTitle.style.visibility="visible"
      }
    };
  });

  return (
    <div className="sticky-top position-fixed w-100">      
        <div
          className="d-flex flex-row flex-wrap justify-content-between px-3 border-bottom py-2 text-light"
          style={{
            fontSize: fsc(media, 13),
            borderBottom: "1px solid light",
            background: "black",
            opacity: '0.7'
          }}
          id="NavTitle"
        >
          <span className="flex-column">
            <i className="fa fa-phone pr-2" />
            <span className="border-right pr-2">
            02-5153502, 02-5153838
            </span>

            <i className="fa fa-envelope-o px-2" />
            <span>topmyanmar.mtn@gmail.com</span>
          </span>
        </div>
      <div
        id="NavbarContainer"
        className="d-flex flex-row w-100 justify-content-between py-2 px-3"
        style={{
          zIndex: 2,
          // opacity: MenuClick ? 'none' : 0.9,
          transition: "1s",
          background: MenuClick ? 'black' : ''
        }}
      >
        <div style={{ width: 80 }}>
          <img src={topmyanmar} alt="Logo" style={{width: '60px'}} />
        </div>
          <div className="my-auto" style={{ fontSize: fsc(media, 15) }}>
            <MyLink
              className="pr-4"
              id={"MenuLink"}
              to={`/${RoutePath.topMyanmar}`}
              text={"HOME"}
            />
            <MyLink
              className="pr-4"
              id={"MenuLink1"}
              to={`/${RoutePath.kiyoMyanmar}`}
              text={"KIYO MYANMAR"}
            />
          </div>
      </div>
    </div>
  );
};

export default withMedia(Navbar);

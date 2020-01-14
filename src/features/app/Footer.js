import React, { useState } from "react";

import MyLink from "../../tools/myLink";
import MyInput from "../../tools/myInput";
import * as Colors from "../../config/color.config";
import { withMedia } from "react-media-query-hoc";
import topmyanmar from '../../assets/image/carosel/topmyanmar.png'

const Footer = props => {
  const { media } = props;

  return (
    <div style={{ width: '100%', overflow: 'hidden' }}>
      {/*  */}
      <div
        className="row border-top"
        style={{ color: Colors.textwhite }}
      >
      </div>
      {/*  */}
      <div className="text-light py-4" style={{ background: Colors.Footerbg }}>
        <div className="container py-4">
          <div className="row text-center">
            <div className="col-lg-3 col-md-3 col-12 pb-4">
              <img src={topmyanmar} className="w-75" alt="" />
            </div>
            
            <div className="col-lg-5 col-md-5 col-12 px-2 text-left">
            <h5>HOW TO FIND US</h5>
              <div style={{ marginBottom: '12px' }}><i className="fa fa-map-marker for-icon" aria-hidden="true"></i>
                PaPa 3/B(Kha), Yaw Minn Gyi Road, 68th street, Industrial Zone (1), Pyigitagon Township, Mandalay
            </div>
              <div style={{ marginBottom: '12px' }}><i className="fa fa-volume-control-phone for-icon" aria-hidden="true"></i>
                02-5153502, 02-5153838, 09-2026711, 09-797009101, 09797009105,09797009106
            </div>
              <div style={{ marginBottom: '12px' }}><i className="fa fa-envelope-o for-icon" aria-hidden="true"></i>
                topmyanmar.mtn@gmail.com
            </div>
            </div>
            <div className="col-lg-4 col-md-4 col-12 px-2 text-left">
              
            {/* <div className="align-self-center">
                  <a alt="" href="www.facebook.com" style={{ color: '#fcff23', fontSize: '35px' }}>
                    <i className="fa fa-facebook pr-3" />
                  </a>
                  <a href="www.twitter.com" style={{ color: '#fcff23', fontSize: '35px'  }}>
                    <i className="fa fa-twitter pr-3" />
                  </a>
                  <a href="www.instagram.com" style={{ color: '#fcff23', fontSize: '35px'  }}>
                    <i className="fa fa-instagram pr-3" />
                  </a>
                  <a href="www.youtube.com" style={{ color: '#fcff23', fontSize: '35px'  }}>
                    <i className="fa fa-youtube pr-3" />
                  </a>
                </div>  */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default withMedia(Footer);

import React, { useState } from 'react'
import TopCarousel from './TopMyanmar/components/TopCarousel'
import TopMap from './TopMyanmar/components/TopMap'
import * as Colors from "../config/color.config";
import {withMedia} from "react-media-query-hoc";

const ContactUs = props => {
    const { media } = props;
 console.log('props is=>',props);
    const [err, setErr] = useState('');

    const check = (e) => {
        if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(e.target.value)) {
            setErr("");
        }
        else if (!e.target.value) setErr("");
        // else setErr('');
        else setErr("Please fill valid email!");
    }

    return (
        <div className="container-fluid p-0">
            <TopCarousel media={media} />
            <div className="container-fluid py-3" style={{ background: "rgb(197, 197, 197)" }}>
                <div className="d-flex flex-row flex-wrap justify-content-between text-light">
                    <div className="container">
                        <div className="d-flex flex-row flex-fill align-items-center">
                            {/* <i className="fa fa-envelope fa-2x px-4" /> */}
                            <div className="col-lg-12">
                                <h3>Don't know where to start? Let's get in touch!</h3> <br></br>
                                <form action="http://topmyanmar.mtn@gmail.com" method="post">
                                    <div className="row">
                                        <div className="col-sm-12">
                                            <input
                                                type="text"
                                                placeHolder={"Enter your name"}
                                                style={{ background: 'white', color: 'black', height: '50px', width: '100%', padding: '5px' }} required
                                            />
                                        </div>
                                        <div className="col-sm-12">
                                            <input
                                                type="mail"
                                                placeHolder={"Enter your email"} onChange={(e) => check(e)}
                                                style={{ background: "white", color: 'black', height: '50px', width: '100%', padding: '5px', marginTop: '20px' }} required
                                            />
                                            <span style={{ color: 'red', display: 'block', position: 'absolute' }}>{err}</span>
                                        </div>
                                        <div className="col-sm-12">
                                            <input
                                                type="text"
                                                placeHolder={"Enter your subject"}
                                                style={{ background: 'white', color: 'black', marginTop: '20px', height: '50px', width: '100%', padding: '5px', marginTop: '20px' }} required
                                            />
                                            <textarea
                                                type="text"
                                                placeHolder={"Enter your message"}
                                                style={{ background: 'white', color: 'black', marginTop: '20px', width: '100%', height: '120px', padding: '5px' }} required
                                            />
                                            <input type="submit" disabled={err !== ''} value="Send" style={{ height: 50, width: '100%', background: '#bf961a', color: Colors.textwhite, marginTop: '20px' }}
                                            />
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                        {/* {media.mobile || (
                <div className="align-self-center">
                  <a alt="" href="www.facebook.com" style={{ color: '#fcff23' }}>
                    <i className="fa fa-facebook pr-3" />
                  </a>
                  <a href="www.twitter.com" style={{ color: '#fcff23' }}>
                    <i className="fa fa-twitter pr-3" />
                  </a>
                  <a href="www.instagram.com" style={{ color: '#fcff23' }}>
                    <i className="fa fa-instagram pr-3" />
                  </a>
                  <a href="www.youtube.com" style={{ color: '#fcff23' }}>
                    <i className="fa fa-youtube pr-3" />
                  </a>
                </div>
              )} */}
                    </div>
                </div>
            </div>
            <TopMap></TopMap>
        </div>
    )
}

export default withMedia(ContactUs)
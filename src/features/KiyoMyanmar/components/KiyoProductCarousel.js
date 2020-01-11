import React, { useState } from 'react'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import * as Colors from '../../../config/color.config'

const RoomInfo = [
    { id: 1, RoomType: 'Mango Chips', PricePerNight: 'This Mango Chips made from fresh top variety of Myanmar mangoes without any additives or food coloring. It is crispy, natural tasty and nutritious.', RoomImgUrl: require('../../../assets/image/carosel/3.jpg') },
    { id: 2, RoomType: 'Jackfruit Chips', PricePerNight: 'We are using fresh organic Myanmar origin of Jackfruit without any additives or food coloring. It contains high fiber and low calories that can maintain your body weight.', RoomImgUrl: require('../../../assets/image/carosel/2.jpg') },
    { id: 3, RoomType: 'Mixed Vegetables Chips', PricePerNight: 'The ingredients of mixed vegetable chips include brocholi, cauliflower, carrot, green pepper, taro which all are highly nutritious and strong antioxidants that are good for health.', RoomImgUrl: require('../../../assets/image/carosel/7.jpg') },
    { id: 1, RoomType: 'Pumpkin Chips', PricePerNight: 'This chip is make from green skin and yellow flesh pumpkin. It is tasty and good for health because of its sweet flavor and it contains many antioxidants, high fiber, rich in vitamin A and C.', RoomImgUrl: require('../../../assets/image/carosel/5.jpg') },
    { id: 2, RoomType: 'Taro Sticks', PricePerNight: 'This delicious taro sticks will amaze you with its cripsy texture. Rich in fiber give you feeling of fullness, so it is the best snack to eat if you want to lose weight. ', RoomImgUrl: require('../../../assets/image/carosel/6.jpg') },
    { id: 3, RoomType: 'Potato Sticks', PricePerNight: "You may like french fries, but you won't like it when they are soggy and cold introducing our less oil potato sticks that is crunchy and will never go soggy again.", RoomImgUrl: require('../../../assets/image/carosel/7.jpg') },
]

const KiyoProductCarousel = props => {
    const [hover, setHover] = useState(false)
    const _handleHover = (e) => {
        setHover(!hover)
        if (hover === true) {
            document.getElementById(e.target.id).style.transform = 'scale(1)'
        }
        else {
            document.getElementById(e.target.id).style.transform = 'scale(1.2)'
        }
    }
    const responsive = {
        superLargeDesktop: {
            // the naming can be any, depends on you.
            breakpoint: { max: 4000, min: 3000 },
            items: 5,
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 3,
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2,
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1,
        },
    };

    return (
        <Carousel responsive={responsive} autoPlay={true} infinite={true}>
            {RoomInfo.map((v, k) =>
                <div style={{ cursor: 'pointer', padding: "30px", borderRadius: "10px" }} key={k} className="uni">
                    <div style={{ transition: '1s', height: "520px", background: 'white', boxShadow: "-8px 13px 22px 2px #d4d1d1", borderRadius: "10px", overflow: "hidden" }}>
                        <div className='w-100' style={{ overflow: 'hidden', borderRadius: "10px" }}>
                            <img
                                src={process.env.PUBLIC_URL + `${v.RoomImgUrl}`}
                                id={v.id}
                                onMouseLeave={(id) => _handleHover(id)}
                                onMouseOver={(id) => _handleHover(id)}
                                className='w-100 d-block'
                                style={{ margin: '0 auto', transition: '1s', }}
                                alt='rooms'
                            />
                        </div>
                        <div className='d-flex flex-column py-4' style={{ padding: "0px 15px", textAlign: 'center' }}>
                            <span style={{ color: Colors.navbg, fontSize: 20, fontWeight: 'bold', transition: '1s' }}>{v.RoomType}</span><br />
                            <span style={{ color: '#60686f' }} >{v.PricePerNight}</span>
                        </div>
                    </div>
                </div>
            )}
        </Carousel>
    );
}
export default KiyoProductCarousel
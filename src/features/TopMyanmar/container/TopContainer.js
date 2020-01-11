import React from 'react'

import TopCarousel from '../components/TopCarousel'
import TopInfo from '../components/TopInfo'
import TopMotto from '../components/TopMotto'
import TopProduct from '../components/TopProduct'
// import TopContact from '../components/TopContact'
// import TopAddress from '../components/TopAddress'
import TopMap from '../components/TopMap'

const TopContainer = props => {
    const {media} = props;
    return (
        <div className="container-fluid p-0">
            <TopCarousel  media={media} />
            <div className="container">
                <TopInfo media={media}/>
                <TopMotto />
                <TopProduct />
                {/* <TopContact /> */}
            </div>
            {/* <TopAddress /> */}
            <TopMap />
        </div>
    )
}

export default TopContainer
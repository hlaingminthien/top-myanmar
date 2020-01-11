import React from 'react'
import KiyoHeader from '../components/KiyoHeader'
import KiyoInfo from '../components/KiyoInfo'
import KiyoProductCarousel from '../components/KiyoProductCarousel'
import KiyoFBLink from '../components/KiyoFBLink'
import KiyoContact from '../components/KiyoContact'


const KiyoContainer = props => {
    const {media} = props;
    return (
        <div className="container-fluid p-0">
            <KiyoHeader media={media}/>
            <div className="container">
                <KiyoInfo />
                <KiyoProductCarousel />
            </div>
            {/* <KiyoFBLink />
            <div className="container">
                <KiyoContact />
            </div> */}

        </div>
    )
}

export default KiyoContainer
import React from 'react'
import Img from '../../../assets/image/kiyo.png'
import Img1 from '../../../assets/image/underline.png'
import { withMedia } from 'react-media-query-hoc'
import { fsc } from '../../../helper/fontControlHelper'
import Line from '../../../assets/image/line.png'
import * as Font from '../../../config/font.config'

const data = [
    { item: 'To provide nutritious and healthy fruit and veggie chips by using totally natural raw materials.' },
    { item: 'To provide good incomes for local fruits and veggie farmers with lifetime guarantees.' },
    { item: 'To export foreign markets as a value added product so that could help country to earn more foreign currency.' },
    { item: 'To provide many jobs opportunities for the country.' }
]

const KiyoInfo = props => {
    const { media } = props
    return (
        <div className="container" style={{ marginTop: "50px", marginBottom: "30px" }}>
            {/* kiyo information all */}
            <div className="text-center">
                <div style={{ fontFamily: "Playfair Display,serif", fontWeight: "bold", fontSize: fsc(media, 42) }}>Mission</div>
                <div className="pt-0" ><img alt="" src={Img1} /></div>
            </div>
            <div style={{ textAlign: "center", paddingTop: "15px" }}>
                <p style={{ fontFamily: "Lora,serif", fontSize: fsc(media, 18) }}><i className="fa fa-snowflake-o list-icon" aria-hidden="true"></i>
                    To provide high quality fruit and vegetable snacks that enhance and positively contribute to people's health using totally natural fresh raw materials.</p>
            </div>
            <div className="text-center">
                <div style={{ fontFamily: "Playfair Display,serif", fontWeight: "bold", fontSize: fsc(media, 42) }}>Objectives</div>
                <div className="pt-0"><img alt="" src={Img1} /></div>
            </div>

            <div className="pb-4" style={{ paddingTop: "15px" }}>
                {
                    data.map((v, k) =>
                        <div key={k}>
                            <span style={{ fontFamily: "Lora,serif", fontSize: fsc(media, 18) }}><i className="fa fa-snowflake-o list-icon" aria-hidden="true"></i>{v.item}</span>
                        </div>
                    )
                }
            </div>
            <div className='d-flex flex-column align-items-center' >
                <span style={{ fontSize: 35, fontFamily: Font.bodyTitle, fontWeight: 'bold' }}>Our Products</span>
                <img className='py-2' src={Line} alt='line' style={{ width: '250px' }} />
            </div>
            <div style={{ textAlign: "center" }}>
                <img className="img-fluid" alt="" src={Img} />
            </div>

        </div>
    )
}



export default withMedia(KiyoInfo)
import React from 'react'
import { withMedia } from 'react-media-query-hoc'
import { fsc } from '../../../helper/fontControlHelper'
import TopMottoDetails from './TopMottoDetails'

const data = [
    { item: 'မိမိ စိတ်ကို ကောင်းအောင်ကြိုးစားမည်။' },
    { item: 'မိမိ အရည်အချင်းကို ကောင်းအောင်ကြိုးစားမည်။' },
    { item: 'မိမိ စက်ရုံနှင့် ထုတ်ကုန်ပစ္စည်းကို ကောင်းအောင်ကြိုးစားမည်။' },
    { item: 'မိမိ ပတ်ဝန်းကျင်   အတွက် ကောင်းအောင်ကြိုးစားမည်။' },
    { item: 'ကောင်းသထက် ပိုကောင်းအောင်ကြိုးစားမည်။' }
]
const TopMotto = props => {
    const { media } = props
    return (
        <div className="container uni">
            <div className="row wrapper">
                <div className="pb-4" style={{ fontWeight: "bold", fontSize: fsc(media, 35) }}>
                    TOP MYANMAR ရဲ့ ဆောင်ပုဒ်
                </div>
            </div>
            <div className="row ">
                <div className="col-lg-8 col-sm-12">
                    <TopMottoDetails />
                </div>
                <div className="col-lg-4 col-sm-12">

                    <div className="pb-3" style={{ fontWeight: "bold", fontSize: fsc(media, 20), color: '#BF9B40' }}>
                        မနေ့ကထက်ဒီနေ့ ပိုကောင်းရမည်။
                    </div>
                    <div>
                        {
                            data.map((v, k) =>
                                <div key={k} className="pb-3" style={{ clear: "both" }}>
                                    <div className="pb-3" style={{ fontSize: fsc(media, 15), fontWeight: "bold", float: 'left' }}>
                                        <i className="fa icon fa-angle-double-right" style={{ color: '#987316', paddingRight: "10px", fontSize: "20px" }}></i>
                                    </div>
                                    <div>
                                        {v.item}
                                    </div>
                                </div>
                            )
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}
export default withMedia(TopMotto)
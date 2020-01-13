import React from 'react'
import { withMedia } from 'react-media-query-hoc'
import { fsc } from '../../../helper/fontControlHelper'
import Img1 from "../../../assets/image/carosel/top.png"

const data = [
    { item: 'ဆိုဒ်စုံ၊ ဂရမ်စုံ ပီနံအိတ်အမျိုးမျိုး' },
    { item: 'ဈေးနှုန်းသက်သာသော အဝါရောင်ပီနံအိတ်များ' },
    { item: 'ထုတ်ပိုးပါကင်စ အမျိုးမျိုး' }
]

const data1 = [
    { item: 'မီးချုပ်မိုးကာ အထူအပါးဆိုဒ်မျိုးစုံ' },
    { item: 'OPP ကပ်ပေးခြင်း' },
    { item: 'ရေစိုခံကော်ရည်  သွန်းလောင်းခြင်း' }
]

const TopInfo = props => {
    const { media } = props
    return (
        <div className="container pt-3 pb-5 uni" style={{ marginTop: "50px" }}>
            <div className="row">
                <div className="col-lg-6 col-sm-12" >
                    <div style={{ fontWeight: "bold", fontSize: "25px", marginTop: "30px" }}>
                        TOP မြန်မာ ပီနံအိတ် စက်ရုံတွင်
                    </div>

                    <div className="row">
                        <div className="pt-3 pb-3">
                            <span className="uni" style={{ fontSize: fsc(media, 15), color: '#003D5F' }}>
                                မိမိကြိုက်နစ်သက်ရာတံဆိပ်များကို ဆေးရောင်(၆)ရောင်အထိ လှပရိုက်နိပ်ပေးခြင်းတို့ကို နောက်ဆုံးပေါ်အရည်အသွေးမြင့် ခေတ်မှီစက်များဖြင့် ထုတ်လုပ်ပေးလျက်ရှိပါသည်။
                            </span>
                        </div>
                        <div className="row pt-3">
                            <div className="col-lg-6">
                                {
                                    data.map((v, k) =>
                                        <div key={k} className="pb-3" style={{ clear: "both" }}>
                                            <div className="pb-5" style={{ fontSize: fsc(media, 15), fontWeight: "bold", float: "left" }}>
                                                <i class="fa fa-gg" style={{ color: '#0288D1', paddingRight: "10px" }} aria-hidden="true"></i>
                                            </div>
                                            <div style={{ wordkeep: 'keep-all' }}>{v.item}</div>
                                        </div>)
                                }
                            </div>
                            <div className="col-lg-6">
                                {
                                    data1.map((v, k) =>
                                        <div key={k} className="pb-3" style={{ clear: "both" }}>
                                            <div className="pb-5" style={{ fontSize: fsc(media, 15), fontWeight: "bold", float: 'left' }}>
                                            <i class="fa fa-gg" style={{ color: '#0288D1', paddingRight: "10px" }} aria-hidden="true"></i>
                                            </div>
                                            <div style={{ wordBreak: 'keep-all' }}>
                                                {v.item}
                                            </div>
                                        </div>)
                                }
                            </div>
                        </div>
                    </div>
                </div>
                {/* <div className="col-lg-7 col-sm-12 text-center"><img alt="" src={Img1} className="img-fluid shadow p-3 mb-5 bg-white rounded" /></div> */}
                <div className="col-lg-6 col-sm-12 text-center img-hover"><img alt="" src={Img1} className="img-fluid" /></div>
            </div>
        </div>
    )
}
export default withMedia(TopInfo)
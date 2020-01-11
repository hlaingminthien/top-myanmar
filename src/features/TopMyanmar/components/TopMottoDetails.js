import React from 'react'
import { withMedia } from 'react-media-query-hoc'
import { fsc } from '../../../helper/fontControlHelper'

const TopMottoDetails = props => {
    const { media } = props
    return (
        <div>
            <div className="row pb-4">
                <div className="pb-3" style={{ fontSize: fsc(media, 15), fontWeight: "bold", float: 'left' }}>
                    <i className="fa fa-pagelines" style={{ color: '#45a55b', paddingRight: "10px", fontSize: "17px" }}></i>
                </div>
                <div style={{width: "90%"}}>
                    <div>
                        <span style={{ fontSize: fsc(media, 16), fontWeight: 'bold' }}>
                            စိတ်ကောင်းရှိခြင်းသည် ပထမ
                        </span>
                    </div>
                    <div>
                        <span style={{ fontSize: fsc(media, 14) }}>
                            စိတ်စေတနာ ကောင်းမွန်ပြီး အရည်အချင်းပြည့်ဝသော ဝန်ထမ်းများဖြင့် ဖွဲ့စည်းထားသည်။
                        </span>
                    </div>
                </div>
            </div>

            <div className="row pb-4">
                <div className="pb-3" style={{ fontSize: fsc(media, 15), fontWeight: "bold", float: 'left' }}>
                    <i className="fa fa-pagelines" style={{ color: '#45a55b', paddingRight: "10px", fontSize: "17px" }}></i>
                </div>
                <div style={{width: "90%"}}>
                    <div>
                        <span style={{ fontSize: fsc(media, 16), fontWeight: 'bold' }}>
                            အရည်အသွေး လုံခြုံစိတ်ချမှု
                        </span>
                    </div>
                    <div>
                        <span style={{ fontSize: fsc(media, 14) }}>
                            ထုတ်လုပ်မှု နည်းစဉ်တိုင်းတွင် အရည်အသွေးစစ်ဆေးပြီးဖြစ်သောကြောင့် ယုံကြည် စိတ်ချစွာအသုံးပြုနိုင်ပါ သည်။
                        </span>
                    </div>
                </div>
            </div>

            <div className="row pb-4">
                <div className="pb-3" style={{ fontSize: fsc(media, 15), fontWeight: "bold", float: 'left' }}>
                    <i className="fa fa-pagelines" style={{ color: '#45a55b', paddingRight: "10px", fontSize: "17px" }}></i>
                </div>
                <div style={{width: "90%"}}>
                    <div>
                        <span style={{ fontSize: fsc(media, 16), fontWeight: 'bold' }}>
                            တိကျ မြန်ဆန်သော ဝန်ဆောင်မှု
                        </span>
                    </div>
                    <div>
                        <span style={{ fontSize: fsc(media, 14) }}>
                            မြို့တွင်း အရောင်းဆိုင် စက်ရုံ နှင့် နယ် ကားဂိတ်များသို့ အခမဲ့ အရောက်ပို့ဝန်ဆောင်မှု ပေးပါ သည် ။
                        </span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default withMedia(TopMottoDetails)

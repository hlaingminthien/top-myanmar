import React, { useState } from 'react'
import * as Colors from '../../../config/color.config'
import Line from '../../../assets/image/line.png'
import * as Font from '../../../config/font.config'

const TopProducts = () => {
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
    return (
        <div className='pt-2 text-center uni'>
            <div className='d-flex flex-column align-items-center' >
                <span style={{ fontSize: 35, fontFamily: Font.bodyTitle, fontWeight: 'bold' }}>Our Products</span>
                <img className='py-2' src={Line} alt='line' style={{ width: '250px' }} />
            </div>
            <div className='d-flex flex-row flex-wrap'>
                {RoomInfo.map((v, k) =>
                    <div className='col-lg-4 p-4' style={{ cursor: 'pointer' }} key={k}>
                        <div className='d-flex flex-column ' style={{ transition: '1s',height: "450px",background: 'white', boxShadow: "-8px 13px 22px 2px #d4d1d1",borderRadius: "10px"}}>
                            <div className='w-100' style={{ overflow: 'hidden', borderTopLeftRadius: "10px", borderTopRightRadius: "10px" }}>
                                <img 
                                    src={process.env.PUBLIC_URL + `${v.RoomImgUrl}`}
                                    id={v.id}
                                    onMouseLeave={(id) => _handleHover(id)}
                                    onMouseOver={(id) => _handleHover(id)}
                                    className='w-100 d-block'   
                                    style={{ margin: '0 auto', transition: '1s'}}
                                    alt='rooms'
                                />
                            </div>
                            <div className='d-flex flex-column py-4' style={{padding: "10px"}}>
                                <span className="f-20" style={{ color: Colors.navbg, fontWeight: 'bold', transition: '1s' }}>{v.RoomType}</span><br />
                                <span style={{ color: '#60686f' }} >{v.PricePerNight}</span>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    )
}

export default TopProducts

const RoomInfo = [
    { id: 1, RoomType: 'ဆိုဒ်စုံ ဂရမ်စုံ ပီနံအိတ်အမျိုးမျိုး', PricePerNight: 'ဆန် ၊သကြား၊ ပဲ ၊ဂျုံ ၊ထုံး၊ ရေသန့်ရေခဲ၊ တိရိ စ္ဆာန် ၊အစာမှုန့် ၊အစာတောင့် အစရှိသော ထုတ်ပိုးမှု လိုအပ်သောမည်သည့် ကုန်ပစ္စည်းမဆိုသင့်လျော်မည့် ဂရမ်မျိုးစုံ ဆိုဒ်စုံ ပီနံအိတ်များကို လွယ်ကူသက်သာအောင် ထုတ်လုပ်ပေးလျှက်ရှိပါသည်။', RoomImgUrl: require('../../../assets/image/carosel/bag1.jpg') },
    { id: 2, RoomType: 'မိမိစိတ်ကြိုက် ကိုယ်ပိုင် တံဆိပ်များ ရိုက်နှိပ်ပေးခြင်း', PricePerNight: 'လူကြီးမင်းတို့၏ ကိုယ်ပိုင် တံဆိပ်များကို ဆေးရောင် ခြောက်ရောင်အထိ လှပ သေသပ်စွာရိုက် နှိပ်ပေးပါသည်။', RoomImgUrl: require('../../../assets/image/carosel/bag2.jpg') },
    { id: 3, RoomType: 'ပီနံအိတ် အကြည်များ နှင့် ရေစိုခံ ကော်ရည်သွင်းလောင်းအိတ်များ', PricePerNight: 'ရေစိုခံကော် ရည် သွန်းလောင်းခြင်းကို ဈေးနှုန်း သက်သာ အကုန် အကျ အနည်းဆုံးဖြစ်အောင် ဆောင်ရွက်ပေးပါသည်။', RoomImgUrl: require('../../../assets/image/carosel/bag3.jpg') },
]
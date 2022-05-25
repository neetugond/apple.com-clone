import React from 'react'

const Home = () => {
  return (
    <>
      <div className="home-main-div">
      <div className="main-iphone-text-div">
        <img className='iphone-text-img'src="https://www.apple.com/v/home/an/images/logos/iphone-se/logo_hero_iphonese__dtb7zrygggeq_largetall.png"/>
        </div>
        <img src="https://www.apple.com/v/home/an/images/heroes/iphone-13-pro/hero_iphone13pro_avail__iy77cld0zwii_largetall.jpg" alt="iPhone 13 Pro" />

      </div>
      <div className="home-main-div">
        <div className="main-iphone-text-div">
        <img className='iphone-text-img'src="https://www.apple.com/v/home/an/images/logos/iphone-se/logo_hero_iphonese__dtb7zrygggeq_largetall.png"/>
        </div>
        <img src="https://www.apple.com/v/home/an/images/heroes/iphone-se/hero_iphonese_avail__eg8srhcnpo66_largetall.jpg" alt="iPhone black" />
        

      </div>
      <div className="home-main-div">
        <img src="https://www.apple.com/v/home/an/images/heroes/ipad-air/hero_ipadair_avail__dsqv5nn0tpsi_largetall.jpg" alt="ipad Air" />

      </div>
      <div className="home-main-div2">
        <div className="home-wwdc22">
          <img src="https://www.apple.com/v/home/an/images/promos/wwdc-announce/promo_wwdc_announce__dr6w8rxice4i_large.jpg" alt="" />
        </div>
        {/* <div className="home-watch-main-div"> */}
          {/* <div className="watch-text">
            <img src="https://www.apple.com/v/home/an/images/logos/watch-series-7/promo_logo_watch_lte__emrof7zzkriq_large.png"/>
          </div> */}
        <div className="home-watch-img">
          {/* <h5>WATCH</h5> */}
          <img src="https://www.apple.com/v/home/an/images/promos/watch-series-7/promo_watch_lte__djeaso7ukrsm_large.jpg" alt="" />
         </div>
        {/* </div> */}
      </div>
      <div className="home-main-div2">
        <div className="home-mac-studio">
        {/* <h5>Mac Studio</h5> */}
          <img src="https://www.apple.com/v/home/an/images/promos/mac-studio/promo_macstudio_avail__byhwkp0o4gty_large.jpg" alt="" />
        </div>
        <div className="home-iphone-13">
        {/* <h5>iPhone 13</h5> */}
          <img src="https://www.apple.com/v/home/an/images/promos/iphone-13/promo_iphone13_avail__frc36u35m0ii_large.jpg" alt="" />
        </div>
      </div>
      <div className="home-main-div2">
        <div className="home-studio-display">
        {/* <h5>Studio Display</h5> */}
          <img src="https://www.apple.com/v/home/an/images/promos/studio-display/promo_studiodisplay_avail__d1cx9j73ooq6_large.jpg" alt="" />
        </div>
        <div className="home-tehran-tv">
          <img src="https://www.apple.com/v/home/an/images/promos/tv-plus-tehran-s2/promo_tehran_s2__fmlpxspqi9ua_large.jpg" alt="" />
        </div>
      </div>
    </>
  )
}

export default Home
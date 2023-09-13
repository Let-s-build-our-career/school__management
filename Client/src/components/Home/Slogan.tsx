import { Autoplay, EffectFade } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/effect-cube";
import "swiper/css/effect-fade";
import "./slogan.css";

const Slogan = () => {
  return (
    <div className="my-10 md:my-20 mx-auto text-2xl md:text-3xl">
      <Swiper
        autoplay={{
          delay: 50000,
          disableOnInteraction: false,
        }}
        modules={[Autoplay, EffectFade]}
        effect="fade"
      >
        <SwiperSlide className="slogan-sub-container">
          <h1 className="slogan-title">
            Learning Today,
            <br /> Leading Tomorrow.
          </h1>
        </SwiperSlide>
        <SwiperSlide className="slogan-sub-container">
          <h1 className="slogan-title">
            Empowering Minds,
            <br /> Building Futures.
          </h1>
        </SwiperSlide>
        <SwiperSlide className="slogan-sub-container">
          <h1 className="slogan-title">
            Dedicated to Success,
            <br /> Committed to Excellence.
          </h1>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Slogan;

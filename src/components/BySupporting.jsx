import React from "react";
import visibility from "../assets/visibility.svg";
import claspedHands from "../assets/clasped_hands.svg";
import rocket from "../assets/rocket.svg";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper";

const BySupporting = () => {
  return (
    <div className="by_supporting">
      <div className="by_supporting_container">
        <div className="by_supporting_container_text">
          <h1 className="by_supporting_container_title">Al apoyar a Spartan tu marca tendrá:</h1>
        </div>
        <div className="by_supporting_container_info">
          <Swiper
            slidesPerView={1}
            spaceBetween={10}
            loop={true}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            modules={[Autoplay]}
            breakpoints={{
              320: {
                slidesPerView: 1,
                spaceBetween: 10,
              },
              768: {
                slidesPerView: 2,
                spaceBetween: 50,
              },
              1024: {
                slidesPerView: 3,
                spaceBetween: 50,
              },
            }}
          >
            <SwiperSlide>
              <div className="by_supporting_container_info_text">
                <img src={visibility} alt="visibility" />
                <h4>Mayor visibilidad</h4>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="by_supporting_container_info_text">
                <img src={claspedHands} className="claspedHands" alt="claspedHands" />
                <h4>Asociación positiva con los valores de nuestro deporte</h4>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="by_supporting_container_info_text">
                <img src={rocket} alt="rocket" />
                <h4>Crecimiento en campañas efectivas</h4>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default BySupporting;

import React from "react";
import BrandPresence1 from "../assets/img/brand-presence1.png";
import BrandPresence2 from "../assets/img/brand-presence2.png";
import BrandPresence3 from "../assets/img/brand-presence3.png";
import BrandPresence4 from "../assets/img/brand-presence4.png";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper";

const BrandPresence = () => {
  return (
    <div className="BrandPresence">
      <div className="backgroundBlack"></div>
      <div className="backgroundWhite"></div>
      <div className="BrandPresenceContainer">
        <div className="BrandPresenceTitleContaienr">
          <h2 className="BrandPresenceTitle">Elige tu presencia de marca</h2>
        </div>
        <div className="BrandPresenceInfo">
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
              1440: {
                slidesPerView: 4,
                spaceBetween: 50,
              },
            }}
          >
            <SwiperSlide>
              <div className="BrandPresenceInfo_item">
                <p>Medios digitales WEB, RR.SS, Pie de Banner digital en eventos oficiales</p>
                <img src={BrandPresence1} alt="BrandPresence1" />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="BrandPresenceInfo_item">
                <p>Fondo en disertaciones y exposiciones</p>
                <img src={BrandPresence2} alt="BrandPresence2" />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="BrandPresenceInfo_item">
                <p>Eventos deportivos de puertas abiertas</p>
                <img src={BrandPresence3} alt="BrandPresence3" />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="BrandPresenceInfo_item">
                <p>Visibilidad de marca en talleres de inclusión</p>
                <img src={BrandPresence4} alt="BrandPresence4" />
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default BrandPresence;

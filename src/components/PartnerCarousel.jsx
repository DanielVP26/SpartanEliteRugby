import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper";
import "swiper/css";
import img1 from "../assets/img/PartnersBrands/1.png";
import img2 from "../assets/img/PartnersBrands/2.png";
import img3 from "../assets/img/PartnersBrands/3.png";
import img4 from "../assets/img/PartnersBrands/4.png";
import img5 from "../assets/img/PartnersBrands/5.png";
import img6 from "../assets/img/PartnersBrands/6.png";
import img7 from "../assets/img/PartnersBrands/7.png";
import img8 from "../assets/img/PartnersBrands/8.png";
import img9 from "../assets/img/PartnersBrands/9.png";
import img10 from "../assets/img/PartnersBrands/10.png";

const images = [img1, img2, img3, img4, img5, img6, img7, img8, img9, img10];
const PartnerCarousel = () => {
  return (
    <div className="partnerCarouselContainer">
      <div className="partnerCarousel">
        <h1 className="partnerCarouselTitle">Algunas empresas que ya nos apoyan:</h1>
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
          {images.map((image, index) => (
            <SwiperSlide key={index}>
              <img className="imageCarousel" src={image} alt="Partner" />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default PartnerCarousel;

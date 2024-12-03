import React from "react";
import "../css/testimonial.css";
import {
  Navigation,
  Autoplay,
  Pagination,
  Scrollbar,
  A11y,
} from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { useNavigate } from "react-router-dom";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

const Testimonial = () => {
  const navigate = useNavigate();

  return (
    <section className="testimonial-section">
      <Swiper
        modules={[Navigation, Autoplay, Pagination, Scrollbar, A11y]}
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        spaceBetween={30}
        slidesPerView={1}
        style={{ maxWidth: "100%", minWidth: "300px", padding: "0px 0px" }}
        pagination={{ clickable: true }}
        // navigation={true}
        breakpoints={{
          320: {
            navigation: false,
          },
          480: {
            navigation: false,
          },
          628: {
            navigation: false,
          },
        }}
      >
        <SwiperSlide>
          <div className="slider-card-testimonial testimonial-content">
            <p>
              <span>
                <i class="fa-solid fa-quote-left"></i>
              </span>
              Hotel was located at a perfect location in Mall road,near to taxi stand and bus stand. The facilities are good. Rooms are small, good for 2 persons.... if above 3 persons, it will be congested... Value for money
              <span>
                <i class="fa-solid fa-quote-right"></i>
              </span>
            </p>
            <h2>- Rajaranjith Singh</h2>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="slider-card-testimonial testimonial-content">
            <p>
              <span>
                <i class="fa-solid fa-quote-left"></i>
              </span>
              It's a good hotel to stay..Nice view from Window & behavior of staff was also good.....I will recommend if u guys are looking for a good hotel in main Area Mall road with a reasonable rate then u should go to this hotel ...Hey but this hotel don't have their parking
              <span>
                <i class="fa-solid fa-quote-right"></i>
              </span>
            </p>
            <h2>- Kumar Shivam</h2>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="slider-card-testimonial testimonial-content">
            <p>
              <span>
                <i class="fa-solid fa-quote-left"></i>
              </span>
              Rooms are very Nice with good staff. A memorable visit to mussorie. Love to Visit Again
              <span>
                <i class="fa-solid fa-quote-right"></i>
              </span>
            </p>
            <h2>- Sanskar Aggarwal</h2>
          </div>
        </SwiperSlide>
      </Swiper>
    </section>
  );
};

export default Testimonial;

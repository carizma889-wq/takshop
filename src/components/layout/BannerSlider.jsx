import { useRef } from "react";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

function BannerSlider({ slides }) {
  const swiperRef = useRef(null);

  return (
    <div className="banner_slider">
      <Swiper
        modules={[Autoplay, Pagination]}
        onSwiper={(swiper) => (swiperRef.current = swiper)}
        pagination={{ clickable: true }}
        autoplay={{ delay: 4500, disableOnInteraction: false }}
        loop
      >
        {slides.map((slide, i) => (
          <SwiperSlide key={slide.id}>
            <Link to={slide.href}>
              <img
                src={slide.img}
                alt={slide.alt}
                loading={i === 0 ? "eager" : "lazy"}
              />
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>

      <div className="banner_arrows">
        <button
          type="button"
          className="banner_arrow"
          aria-label="Previous slide"
          onClick={() => swiperRef.current?.slidePrev()}
        >
          <svg
            viewBox="0 0 24 24"
            width="20"
            height="20"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M15 6l-6 6 6 6" />
          </svg>
        </button>
        <button
          type="button"
          className="banner_arrow"
          aria-label="Next slide"
          onClick={() => swiperRef.current?.slideNext()}
        >
          <svg
            viewBox="0 0 24 24"
            width="20"
            height="20"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M9 6l6 6-6 6" />
          </svg>
        </button>
      </div>
    </div>
  );
}

export default BannerSlider;

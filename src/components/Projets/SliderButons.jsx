import React from "react";
import { FaCaretLeft, FaCaretRight } from "react-icons/fa6";
import { useSwiper } from "swiper/react";

const SliderButons = ({ containerStyles, btnStyles, iconStyles }) => {
  const swiper = useSwiper();
  return (
    <div className={containerStyles}>
      <button className={btnStyles} onClick={() => swiper.slidePrev()}>
        <FaCaretLeft className={iconStyles} />
      </button>
      <button className={btnStyles} onClick={() => swiper.slideNext()}>
        <FaCaretRight className={iconStyles} />
      </button>
    </div>
  );
};

export default SliderButons;

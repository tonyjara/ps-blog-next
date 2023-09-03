import React, { ReactNode, useState } from "react";
import { Swiper } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import "swiper/css";
import { Box } from "@chakra-ui/react";

const CardSwiper: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [prevEl] = useState<HTMLElement | null>(null);
  const [nextEl] = useState<HTMLElement | null>(null);
  return (
    <Box
      w="100%"
      maxW={{
        base: "310px",
        sm: "500px",
        md: "545px",
        lg: "600px",
        xl: "800px",
        "2xl": "1200px",
      }}
      display="flex"
      overflowX={"auto"}
    >
      {/* <SwiperArrows setNextEl={setNextEl} setPrevEl={setPrevEl} /> */}

      <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        navigation={{ prevEl, nextEl }}
        spaceBetween={5}
        slidesPerView={3}
        style={{ width: "100%" }}
        breakpoints={{
          0: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          700: {
            slidesPerView: 2,
            spaceBetween: 30,
          },
          1400: {
            slidesPerView: 3,
            spaceBetween: 40,
          },
        }}
      >
        {children}
      </Swiper>
    </Box>
  );
};

export default CardSwiper;

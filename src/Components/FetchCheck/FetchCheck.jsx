
import Img1 from "../../assets/Hero/devices.jpg";
import Img2 from "../../assets/Hero/discount.jpg";
import Img3 from "../../assets/Hero/flashSell.jpg";
import Img4 from "../../assets/Hero/gadget.jpg";


// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import './styles.css'

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

export default function App() {
  return (
    <>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >

        <SwiperSlide><img src={Img1} alt="" /></SwiperSlide>
        <SwiperSlide><img src={Img2} alt="" /></SwiperSlide>
        <SwiperSlide><img src={Img3} alt="" /></SwiperSlide>
        <SwiperSlide><img src={Img4} alt="" /></SwiperSlide>
      
      </Swiper>
    </>
  );
}

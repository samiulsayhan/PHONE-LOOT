import { useEffect } from "react";
import { MdOutlineSmsFailed } from "react-icons/md";
import Img1 from "../../../assets/Hero/devices.jpg";
import Img2 from "../../../assets/Hero/discount.jpg";
import Img3 from "../../../assets/Hero/flashSell.jpg";
import Img4 from "../../../assets/Hero/gadget.jpg";
import Cart from "../Cart/Cart";
import { useState } from "react";
import { FaAngleDoubleUp } from "react-icons/fa";
import CatagoryCart from "../../CatagoryCart/CatagoryCart";
// import from here to down only for auto slide
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./styles.css";
import { Autoplay, Pagination, Navigation } from "swiper/modules";


const Hero = () => {
  const [phones, setPhones] = useState([]);

  useEffect(() => {
    fetch("https://openapi.programming-hero.com/api/phones?search=samsung")
      .then((res) => res.json())
      .then((data) => setPhones(data.data));
  }, []);

  console.log(phones);

  // scroll handle
  const handleScroll = () => {
    const section = document.getElementById('home');
    if (section) {
      section.scrollIntoView({ behavior: "smooth" }); // Smooth scrolling
    }
  }

  return (
    <div  className="  m-auto container py-10 ">
      {/* hero slider */}
      <div className="container m-auto">
        <Swiper
          spaceBetween={30}
          centeredSlides={true}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Autoplay, Pagination, Navigation]}
          className="mySwiper"
        >
          <SwiperSlide>
            <img src={Img1} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={Img2} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={Img3} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={Img4} alt="" />
          </SwiperSlide>
        </Swiper>
      </div>

      {/* flash sell text */}
      <div className="flex justify-center mt-10 mb-10">
        <h2 className="lg:text-5xl md:text-3xl text-2xl font-bold">
          Flash Sell Going On
        </h2>
      </div>

      {/* cart part of flash sale */}
      <div id="toprated" className="bg-white ">
        {/* top part */}
        <div className="  items-center text-orange-500 font-semibold flex justify-between bg-white border-b-[1px] border-gray-400 p-4">
          <p>On Sale Now</p>
          <button className="border-orange-500 p-2 border-2">
            SHOP ALL PRODUCTS
          </button>
        </div>
        {/* cart */}
        <div className="mt-3  justify-between grid grid-cols-1   md:grid-cols-3  lg:grid-cols-6">
          {phones.slice(0, 6).map((phone, index) => (
            <CatagoryCart key={index} phone={phone}></CatagoryCart>
          ))}
        </div>
      </div>

      {/* catagory section  */}
      <div id="catagory">
        <div className="mt-5 mb-3">
          <h2 className="text-3xl font-semibold">Catagories</h2>
        </div>
        <div className="grid  justify-between grid-cols-2 md:grid-cols-3 lg:grid-cols-6  bg-white">
          {/* map loop runing */}
          {phones.slice(0, 8).map((phone, index) => (
            <Cart key={index} phone={phone}></Cart>
          ))}
        </div>
      </div>

      {/* massage holder bottom */}
      <div className="fixed right-3 bottom-2 z-50">
        <button className="p-3 bg-green-600 text-white flex items-center gap-1 rounded-tr-lg rounded-bl-lg opacity-50 hover:opacity-100 transition-all duration-200">
          <MdOutlineSmsFailed className="mt-1 text-xl" /> <span>Massage</span>
        </button>
      </div>

      {/* scroll up  */}
      <div className="fixed right-3 bottom-16 z-50">
        <button
          onClick={handleScroll}
          className="p-3 bg-green-600  text-white rounded-full opacity-50 hover:opacity-100 transition-all duration-200"
        >
          <FaAngleDoubleUp className="text-4xl" />
        </button>
      </div>
    </div>
  );
};

export default Hero;

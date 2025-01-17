import Img1 from "../../../assets/Hero/devices.jpg";
import Img2 from "../../../assets/Hero/discount.jpg";
import Img3 from "../../../assets/Hero/flashSell.jpg";
import Img4 from "../../../assets/Hero/gadget.jpg";

const Hero = () => {
  return (
    <div className="  m-auto container my-10">
      {/* hero slider */}
      <div className="carousel w-full flex">
        <div id="slide1" className="carousel-item relative w-full">
          <img src={Img1} className="w-full" />
          <div className="absolute left-0 right-0 top-1/2 flex -translate-y-1/2 transform justify-between">
            <a
              href="#slide4"
              className="rounded-r-xl hover:bg-opacity-25 hover:bg-slate-600 p-2 text-white"
            >
              ❮
            </a>
            <a
              href="#slide2"
              className="rounded-l-xl hover:bg-opacity-25 hover:bg-slate-600 p-2 text-white"
            >
              ❯
            </a>
          </div>
        </div>
        <div id="slide2" className="carousel-item relative w-full">
          <img src={Img2} className="w-full" />
          <div className="absolute left-0 right-0 top-1/2 flex -translate-y-1/2 transform justify-between">
            <a
              href="#slide1"
              className="rounded-r-xl hover:bg-opacity-25 hover:bg-slate-600 p-2 text-white"
            >
              ❮
            </a>
            <a
              href="#slide3"
              className="rounded-l-xl hover:bg-opacity-25 hover:bg-slate-600 p-2 text-white"
            >
              ❯
            </a>
          </div>
        </div>
        <div id="slide3" className="carousel-item relative w-full">
          <img src={Img3} className="w-full" />
          <div className="absolute left-0 right-0 top-1/2 flex -translate-y-1/2 transform justify-between">
            <a
              href="#slide2"
              className="rounded-r-xl hover:bg-opacity-25 hover:bg-slate-600 p-2 text-white"
            >
              ❮
            </a>
            <a
              href="#slide4"
              className="rounded-l-xl hover:bg-opacity-25 hover:bg-slate-600 p-2 text-white"
            >
              ❯
            </a>
          </div>
        </div>
        <div id="slide4" className="carousel-item relative w-full">
          <img src={Img4} className="w-full" />
          <div className="absolute left-0 right-0 top-1/2 flex -translate-y-1/2 transform justify-between">
            <a
              href="#slide3"
              className="rounded-r-xl hover:bg-opacity-25 hover:bg-slate-600 p-2 text-white"
            >
              ❮
            </a>
            <a
              href="#slide1"
              className="rounded-l-xl hover:bg-opacity-25 hover:bg-slate-600 p-2 text-white"
            >
              ❯
            </a>
          </div>
        </div>
      </div>
      <div className="flex justify-center mt-10">
        <h2 className="text-5xl font-bold">Flash Sell Going On</h2>
      </div>
      {/* cart part of flash sale */}
      <div>
        <div>

        </div>
      </div>
    </div>
  );
};

export default Hero;

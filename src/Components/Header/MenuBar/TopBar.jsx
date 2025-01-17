import Logo from "../../../assets/logo.png";
import { IoMdSearch } from "react-icons/io";
import { IoMdCart } from "react-icons/io";
import MenuBar from "../MenuBar/ManuBar";


const TopBar = () => {
  return (
    <div>
      <div className="bg-orange-200">
        <div className="container m-auto py-2">
          <div className="flex justify-between items-center">
            {/* logo */}
            <div>
              <a href="#" className="text-3xl flex gap-2 font-bold">
                <img src={Logo} alt="Logo" className="w-10 " />
                Phone-Loot
              </a>
            </div>
            {/* search and carts */}
            <div className="flex justify-between gap-3 items-center">
              <div className="relative">
                <input
                  type="text"
                  className="rounded-full border outline-none hover:w-[350px] py-1 px-6 "
                />
                <IoMdSearch className="absolute top-1/4 right-2" />
              </div>
              <button className="items-center bg-gradient-to-r from-orange-400 to bg-orange-500 px-2 rounded-md text-white ">
                <IoMdCart className="text-3xl" />
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* menubar import */}
      <div>
        <MenuBar></MenuBar>
      </div>
    </div>
  );
};

export default TopBar;

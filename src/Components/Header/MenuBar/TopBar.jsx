import Logo from "../../../assets/logo.png";
import { IoMdSearch } from "react-icons/io";
import { IoMdCart } from "react-icons/io";
import MenuBar from "../MenuBar/ManuBar";
import { MdMenu } from "react-icons/md";
import SmoothScroll from 'smooth-scroll';

// menubar objects json
const menuBar = [
  { id: 1, label: "Home", href: "#home" },
  { id: 2, label: "Top Rated", href: "#toprated" },
  { id: 3, label: "Devices", href: "#devices" },
  { id: 4, label: "Catagory", href: "#catagory" },
  { id: 5, label: "Contact", href: "#contact" },
];

const TopBar = () => {
  new SmoothScroll('a[href*="#"]', {
    speed: 800,
    speedAsDuration: true,
  });


  return (
    <div  id='home' className="bg-base-100 ">
      <div className=" flex items-center  min-h-16 justify-between container m-auto">
        <div className="items-center flex">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <MdMenu className="text-xl" />
            </div>
            <ul
              tabIndex={0}
              className=" dropdown-content bg-base-100 rounded-sm z-[1] mt-2 w-32 p-2  shadow"
            >
              {menuBar.map((i) => (
                <a key={i.id} href={i.href}>
                  <li  className="text-gray-700 hover:text-black py-1">
                    {i.label}
                  </li>
                </a>
              ))}
            </ul>
          </div>
          <img className="w-10" src={Logo} alt="" />
        </div>

        <div className=" hidden lg:flex">
          {/* this is the part which will hide in small screen */}

          <MenuBar></MenuBar>

          {/* <ul className="menu menu-horizontal px-1">
            <li>
              <a>Item 1</a>
            </li>
            <li>
                <a>Parent</a>
            </li>
            <li>
              <a>Item 3</a>
            </li>
          </ul> */}
        </div>

        {/* search and button area  */}
        <div className="">
          <div className="flex justify-between gap-3 items-center">
            <div className="relative">
              <input
                id="search-field"
                type="text"
                className="rounded-full border outline-none w-[150px] md:w-[200px] lg:w-[300px] py-1 px-6 "
              />
              <IoMdSearch
                // onClick={handleSearch}
                className="absolute top-1/4 right-2 text-lg hover:text-orange-500"
              />
            </div>
            <button className="items-center bg-gradient-to-r from-orange-400 to bg-orange-500 px-2 rounded-md text-white ">
              <IoMdCart className="text-3xl" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopBar;

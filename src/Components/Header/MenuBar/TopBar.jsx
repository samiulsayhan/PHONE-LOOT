import Logo from "../../../assets/logo.png";
import { IoMdSearch } from "react-icons/io";
import { IoMdCart } from "react-icons/io";
import MenuBar from "../MenuBar/ManuBar";


const TopBar = () => {

 
  return (
    <div>
      <div className="bg-orange-200 fixed z-50 left-0 right-0">
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
                  id="search-field"
                  type="text"
                  className="rounded-full border outline-none hover:w-[350px] py-1 px-6 "
                />
                <IoMdSearch
                  onClick={handleSearch}
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
      {/* menubar import */}
      <div>
        <MenuBar></MenuBar>
      </div>
    </div>
  );
};

// search option function
const handleSearch = () => {
  const SearchField = document.getElementById("search-field");
  const searchText = SearchField.value;
  console.log(searchText);
  return TopBar(searchText)
};


export default TopBar;

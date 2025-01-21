

const PhoneList = () => {

  return (
    <div>
      <div className="bg-orange-200  ">
        <div className="container m-auto py-2">
          <div className="flex justify-between items-center">
            {/* logo */}
            <div>
              <a href="#" className="text-3xl flex gap-2 font-bold">
                <img src={""} alt="Logo" className="w-10 " />
                Phone-Loot
              </a>
            </div>
            <div>
              {/* menu bar */}
              
            </div> 
           

            {/* search and carts */}
            <div className="flex justify-between gap-3 items-center">
              <div className="relative">
                <input
                  id="search-field"
                  type="text"
                  className="rounded-full border outline-none w-[300px] py-1 px-6 "
                />
                {/* <IoMdSearch */}
                  {/* // onClick={handleSearch} */}
                  {/* className="absolute top-1/4 right-2 text-lg hover:text-orange-500" */}
                {/* /> */}
              </div>
              <button className="items-center bg-gradient-to-r from-orange-400 to bg-orange-500 px-2 rounded-md text-white ">
                {/* <IoMdCart className="text-3xl" /> */}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PhoneList;

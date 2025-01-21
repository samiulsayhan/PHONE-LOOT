import PropTypes from "prop-types";

import { FaStar, FaRegStar } from "react-icons/fa";
import { FaCartPlus } from "react-icons/fa6";

//text limite setting
const truncateText = (text, maxLength) =>
  text.length > maxLength ? text.slice(0, maxLength) + "..." : text;

const FullCart = ({ phone }) => {
  // part of text limite
  const text =
    "Lorem ipsum dolor sit amet consectetur adipisicing elit adipisicing elit.";

  // phones json detail section

  return (
    <div>
      {/* daisy ui card */}
      <div className=" bg-base-100  hover:drop-shadow-lg shadow-red-700 mb-3 mr-3  p-2 rounded-sm ">
        <div className="flex justify-center">
          <img className="h-40 " src={phone.image} alt="Shoes" />
        </div>

        <div className="flex flex-col p-2 font-medium w-38 cursor-pointer min-h-40">
          <div className="flex-grow">
            <p>{phone.phone_name}</p>
            <p className="text-sm font-normal">{truncateText(text, 40)}</p>
          </div>

          <div className="mt-auto ">
            <div className=" flex gap-3 items-center">
              <h3 className="font-semibold text-orange-500">
                <span className="text-sm font-extrabold pr-1">৳</span>379
              </h3>
              <p className="text-sm font-mono  text-gray-600">-47%</p>
            </div>
            <div className="flex gap-3 items-center">
              {/* rating section */}
              <div className="flex items-center text-sm">
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <FaRegStar />
              </div>
              <p className="text-sm font-mono text-gray-600">(4)</p>
              <FaCartPlus className="text-2xl text-orange-500 cursor-pointer" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

FullCart.propTypes = {
  phone: PropTypes.object,
};

export default FullCart;

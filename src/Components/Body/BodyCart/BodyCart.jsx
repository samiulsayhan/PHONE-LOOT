import { useEffect, useState } from "react";
import FullCart from "./FullCart";


const BodyCart = () => {

    const [phones, setPhones] = useState([]);
    
      useEffect(() => {
        fetch("https://openapi.programming-hero.com/api/phones?search=oppo")
          .then((res) => res.json())
          .then((data) => setPhones(data.data));
      }, []);
    
      console.log(phones);

  return (
    <div className="m-auto container my-10">
        <div>
            <div className="mt-5 mb-3">
                <h2 className="text-3xl font-semibold">Just For You</h2>
            </div>
            {/* cart delploy from here */}
            <div className="grid grid-cols-6">
                {
                    phones.map((phone, index)=>(
                        <FullCart key={index} phone={phone} ></FullCart>
                    ))
                }
            </div>
        </div>
    </div>
  )
}

export default BodyCart
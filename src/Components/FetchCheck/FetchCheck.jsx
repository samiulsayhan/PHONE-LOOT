import { useEffect, useState } from "react";

const PhoneList = () => {
  const [phones, setPhones] = useState([]);

  useEffect(() => {
    fetch("https://openapi.programming-hero.com/api/phones?search=iphone")
      .then((res) => res.json())
      .then(({ data }) => setPhones(data));
  }, []);
  const { image, phone_name } = phones;

  return (
    <div>
      {phones.map((phone, index) => {
        <div key={index}>
          <p>{phone_name}</p>
          <img src={image} alt={phone_name} />
        </div>;
      })}
    </div>
  );
};

export default PhoneList;

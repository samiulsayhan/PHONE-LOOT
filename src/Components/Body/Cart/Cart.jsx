import PropTypes, { object } from 'prop-types';

const Cart = ({ phone }) => {
  return (
    <div className='m-2'>
      {/* daisy ui card */}
      <div className=" bg-base-100 w-auto p-5  hover:shadow-md shadow-black border-r-2 border-b-2  rounded-sm">
        <figure className="flex justify-center">
          <img className="h-32" src={phone.image} alt="Shoes" />
        </figure>
      </div>
    </div>
  );
};

Cart.propTypes = {
  phone: PropTypes,object,
};
export default Cart;






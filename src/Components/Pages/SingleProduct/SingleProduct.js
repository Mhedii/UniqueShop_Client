import React from 'react';
import { Link } from 'react-router-dom';
// import '../../Pages/Home/Featured/Featured.css';
const SingleProduct = (props) => {
    const { image, title, price, _id } = props.product;

    return (
        <div className=" mt-2">
            <div className="service p-3 border  mt-5 me-4  products-card">
                <div className="service-img">
                    <Link to={`/product/${_id}`}>
                        {" "}
                        {/* <img className="w-100" src={`data:image/png;base64,${image}`} alt="" /> */}
                        <img src={image} alt="" />
                    </Link>

                </div>


                <Link to={`/product/${_id}`}>
                    {/* {" "} */}
                    <h5 className='font-bold'>{title}</h5>
                </Link>
                <p className="product-price font-medium">Price: {price}</p>
            </div>
        </div>
    );
};

export default SingleProduct;
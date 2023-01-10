import React, { useEffect, useState } from 'react';
import SingleProduct from '../SingleProduct/SingleProduct';

const Product = () => {
    const [products, setProducts] = useState([]);
    const [isloading, setIsLoading] = useState(true);

    useEffect(() => {
        fetch('http://localhost:5000/products')
            .then(res => res.json())
            .then(data => setProducts(data))
            .finally(() => setIsLoading(false))
    }, [])
    if (isloading) {
        return <div className="d-flex justify-content-center">
            <div className="spinner-border" role="status">
                <span className="visually-hidden">Loading...</span>
            </div>
        </div>
    }
    else {

        return (
            <>
                {/* <Header /> */}
                <div className='Feature mx-32'>
                    {/* total data={products.length} */}
                    <h1 className=''>Available products</h1>


                    <div className="container grid grid-cols-4 gap-5">
                        {
                            products.map(product => <SingleProduct key={products._id} product={product}></SingleProduct>)
                        }
                    </div>

                </div>
                {/* <Footer /> */}
            </>
        );
    }
};

export default Product;
import React from 'react';
import { Link } from 'react-router-dom';
import "./Footer.css";

const Footer = () => {
    return (

        <div className="bg-[#f6f6f8] mt-12 pt-12">
            <div className="">
                <div className="text-[#878787] mx-16 px-14 grid lg:grid-cols-5 md:grid-cols-3 sm:grid-cols-1">
                    <div className="contect ">
                        <h3 className='mb-3'><i className="fas fa-headphones"></i><span className="font-medium text-black">GOT QUESTIONS ?</span></h3>
                        <p >(001) 2345-6789</p>
                        <p>(001) 5823-6530</p>
                        <p><i className="fas fa-map-marker-alt"></i><span>184 Main Rd E, St Albans<br />
                            VIC 3021, Australia</span></p>
                        <a href="mailto:contact@company.com"><i className="fas fa-envelope"></i><span className="ms-1">contact@company.com</span></a>
                    </div>
                    <div className=" ">

                        <ul className="text-[#878787]">
                            <h3 className='font-medium text-black mb-3'>Categories</h3>
                            <li className="">
                                <Link to="/">Men</Link>
                            </li>
                            <li className="">
                                <Link to="/">Women</Link>
                            </li>
                            <li className="">
                                <Link to="/">Accessories</Link>
                            </li>
                            <li className="">
                                <Link to="/">Shoes</Link>
                            </li>
                            <li className="">
                                <Link to="/">Denim</Link>
                            </li>
                        </ul>
                    </div>
                    <div className="">

                        <ul className="text-[#878787]">
                            <h3 className='font-medium text-black mb-3'>Infomation</h3>
                            <li className="">
                                <Link to="/about">About Us</Link>
                            </li>
                            <li className="">
                                <Link to="/contact">Contact Us</Link>
                            </li>
                            <li className="">
                                <Link to="/">Terms & Conditions</Link>
                            </li>
                            <li className="">
                                <Link to="/">Returns & Exchanges</Link>
                            </li>
                            <li className="">
                                <Link to="/">Shipping & Delivery</Link>
                            </li>
                        </ul>
                    </div>
                    <div className="">

                        <ul className="text-[#878787]">
                            <h3 className='font-medium text-black mb-3'>Useful links</h3>
                            <li className="">
                                <Link to="/storeLocation">Store Location</Link>
                            </li>
                            <li className="">
                                <Link to="/dashboard">My Account</Link>
                            </li>
                            <li className="">
                                <Link to="/">Latest News</Link>
                            </li>
                            <li className="">
                                <Link to="/">Size Guide</Link>
                            </li>
                            <li className="">
                                <Link to="/">FAQs</Link>
                            </li>
                        </ul>
                    </div>
                    <div className="text-[#878787]">
                        <h3 className='mb-3'><i className="far fa-money-bill-alt "></i><span className="font-medium text-black">GOT QUESTIONS ? WE ARE USING SAFE PAYMENTS</span></h3>
                        <li className='list-none'><img src="https://i.ibb.co/JnbCY6t/PROD1-500x.png" alt="payment" className="payment mb-2 mt-2" /></li>
                        <li className='list-none'><img src="https://i.ibb.co/fHWBpR7/payment.png" alt="Secured" className="secured mt-2" /></li>

                    </div>
                </div>

            </div>
            <div>
                <p className="copyright text-center">Copyright © 2022  all rights reserved.</p>
            </div>
        </div>


    );
};

export default Footer;
import React from 'react';
import { FaFacebookF, FaInstagram, FaPinterestP, FaTwitter, FaYoutube } from 'react-icons/fa';
import { FiPhoneCall } from 'react-icons/fi';

const Footer = () => {
    return (
        <>
            <div data-aos="fade-up" className='flex  gap-13 justify-between pt-25 px-6 container mx-auto'>
                <div className='grid gap-4'>
                    <div className='pb-1'>
                        <img src="/assets/logo.png" alt="" />
                    </div>
                    <p className='font-semibold text-md text-[#253D4E]'>Awesome grocery store website template</p>
                    <div className='flex items-center gap-2'>
                        <img src="/assets/icon-location.png" alt="" />
                        <p className='text-sm font-medium text-[#253D4E]'><span className='font-bold text-[#253D4E]'>Address:</span> 5171 W Campbell Ave <br />undefined Kent, Utah 53127 United States</p>
                    </div>
                    <div className='flex items-center gap-2'>
                        <img src="/assets/icon-contact.png" alt="" />
                        <p className='text-sm font-medium text-[#253D4E] '><span className='font-bold text-md text-[#253D4E]'>Call Us:</span>(+91) - 540-025-124553</p>
                    </div>
                    <div className='flex items-center gap-2'>
                        <img src="/assets/icon-email-2.png" alt="" />
                        <p className='text-sm font-medium text-[#253D4E]'><span className='font-bold text-md text-[#253D4E]'>Email:</span>Bayazed@gmail.com</p>
                    </div>
                    <div className='flex items-center gap-2'>
                        <img src="/assets/icon-clock.png" alt="" />
                        <p className='text-sm font-medium text-[#253D4E]'><span className='font-bold text-md text-[#253D4E]'>Hours:</span>10:00 - 18:00, Mon - Sat</p>
                    </div>
                </div>
                <div className='grid gap-2'>
                    <h1 className='font-bold text-2xl text-[#253D4E] pb-3'>Company</h1>
                    <p className='text-md font-medium text-[#253D4E] hover:text-[#29A56C] cursor-pointer transition-transform duration-400 hover:scale-99'>About Us</p>
                    <p className='text-md font-medium text-[#253D4E] hover:text-[#29A56C] cursor-pointer transition-transform hover:scale-99'>Delivery Information</p>
                    <p className='text-md font-medium text-[#253D4E] hover:text-[#29A56C] cursor-pointer transition-transform duration-400 hover:scale-99'>Privacy Policy</p>
                    <p className='text-md font-medium text-[#253D4E] hover:text-[#29A56C] cursor-pointer transition-transform duration-400 hover:scale-99'>Terms & Conditions</p>
                    <p className='text-md font-medium text-[#253D4E] hover:text-[#29A56C] cursor-pointer transition-transform duration-400 hover:scale-99'>Contact Us</p>
                    <p className='text-md font-medium text-[#253D4E] hover:text-[#29A56C] cursor-pointer transition-transform duration-400 hover:scale-99'>Support Center</p>
                    <p className='text-md font-medium text-[#253D4E] hover:text-[#29A56C] cursor-pointer transition-transform duration-400 hover:scale-99'>Careers</p>

                </div>
                <div className='grid gap-2'>
                    <h1 className='font-bold text-2xl text-[#253D4E] pb-3'>Account</h1>
                    <p className='text-md font-medium text-[#253D4E] hover:text-[#29A56C] cursor-pointer transition-transform duration-400 hover:scale-99'>Sign In</p>
                    <p className='text-md font-medium text-[#253D4E] hover:text-[#29A56C] cursor-pointer transition-transform hover:scale-99'>View Cart</p>
                    <p className='text-md font-medium text-[#253D4E] hover:text-[#29A56C] cursor-pointer transition-transform duration-400 hover:scale-99'>My Wishlist</p>
                    <p className='text-md font-medium text-[#253D4E] hover:text-[#29A56C] cursor-pointer transition-transform duration-400 hover:scale-99'>Track My Order</p>
                    <p className='text-lg text-[#253D4E] hover:text-[#29A56C] cursor-pointer transition-transform duration-300 hover:scale-99'>Help Ticket</p>
                    <p className='text-md font-medium text-[#253D4E] hover:text-[#29A56C] cursor-pointer transition-transform duration-400 hover:scale-99'>Shipping Details</p>
                    <p className='text-md font-medium text-[#253D4E] hover:text-[#29A56C] cursor-pointer transition-transform duration-400 hover:scale-99'>Compare products</p>

                </div>
                <div className='grid gap-2'>
                    <h1 className='font-bold text-2xl text-[#253D4E] pb-3'>Corporate</h1>
                    <p className='text-md font-medium text-[#253D4E] hover:text-[#29A56C] cursor-pointer transition-transform duration-400 hover:scale-99'>Become a Vendor</p>
                    <p className='text-md font-medium text-[#253D4E] hover:text-[#29A56C] cursor-pointer transition-transform hover:scale-99'>Affiliate Program</p>
                    <p className='text-md font-medium text-[#253D4E] hover:text-[#29A56C] cursor-pointer transition-transform duration-300 hover:scale-99'>Farm Business</p>
                    <p className='text-md font-medium text-[rgb(37,61,78)] hover:text-[#29A56C] cursor-pointer transition-transform duration-400 hover:scale-99'>Farm Careers</p>
                    <p className='text-md font-medium text-[#253D4E] hover:text-[#29A56C] cursor-pointer transition-transform duration-400 hover:scale-99'>Our Suppliers</p>
                    <p className='text-md font-medium text-[#253D4E] hover:text-[#29A56C] cursor-pointer transition-transform duration-400 hover:scale-99'>Accessibility</p>
                    <p className='text-md font-medium text-[#253D4E] hover:text-[#29A56C] cursor-pointer transition-transform duration-400 hover:scale-99'>Promotions</p>

                </div>
                <div className='grid gap-2'>
                    <h1 className='font-bold text-2xl text-[#253D4E] pb-3'>Popular</h1>
                    <p className='text-md font-medium text-[#253D4E] hover:text-[#29A56C] cursor-pointer transition-transform duration-400 hover:scale-99'>Milk & Flavoured Milk</p>
                    <p className='text-md font-medium text-[#253D4E] hover:text-[#29A56C] cursor-pointer transition-transform hover:scale-99'>Butter and Margarine</p>
                    <p className='text-md font-medium text-[#253D4E] hover:text-[#29A56C] cursor-pointer transition-transform duration-400 hover:scale-99'>Eggs Substitutes</p>
                    <p className='text-md font-medium text-[#253D4E] hover:text-[#29A56C] cursor-pointer transition-transform duration-400 hover:scale-99'>Marmalades</p>
                    <p className='text-md font-medium text-[#253D4E] hover:text-[#29A56C] cursor-pointer transition-transform duration-400 hover:scale-99'>Sour Cream and Dips</p>
                    <p className='text-md font-medium text-[#253D4E] hover:text-[#29A56C] cursor-pointer transition-transform duration-400 hover:scale-99'>Tea & Kombucha</p>
                    <p className='text-md font-medium text-[#253D4E] hover:text-[#29A56C] cursor-pointer transition-transform duration-400 hover:scale-99'>Cheese</p>

                </div>
                <div className=''>
                    <h1 className='font-bold text-2xl text-[#253D4E] pb-4'>Install App</h1>
                    <p className='text-md font-semibold text-[#253D4E] pb-6'>From App Store or Google Play</p>
                    <div className='flex gap-2 w-30'>
                        <img src="/assets/app-store.jpg" alt="" />
                        <img src="/assets/google-play.jpg" alt="" />
                    </div>
                    <p className='text-md font-semibold text-[#253D4E] pt-8'>Secured Payment Gateways</p>
                    <div className='pt-4'>
                        <img src="/assets/payment-method.png" alt="" />
                    </div>

                </div>



            </div>
            <div className='border-b-2 mb-5 mt-12 container mx-auto px-6 border-gray-200'></div>

            <div className='flex justify-between items-center container mx-auto px-6 pb-5'>
                <div>
                    <p className='font-medium text-sm text-[#7E7E8F]'>© 2024, <span className='text-[#3BB77E]'>Nest</span> - HTML Ecommerce Template
                        <br />  All rights reserved</p>
                </div>

                <div className='flex gap-4 items-center'>
                    <div className='flex gap-2 items-center'>
                        <FiPhoneCall color='gray' size={40} />
                        <div>
                            <h2 className='text-[#3BB77E] font-bold text-2xl'>1900 - 888</h2>
                            <p className='text-gray-400 text-xs'>24/7 Support Center</p>
                        </div>
                    </div>
                    <div className='flex gap-2 items-center'>
                        <FiPhoneCall color='gray' size={40} />
                        <div>
                            <h2 className='text-[#3BB77E] font-bold text-2xl'>1900 - 888</h2>
                            <p className='text-gray-400 text-xs'>24/7 Support Center</p>
                        </div>
                    </div>
                </div>
                <div c>
                    <div className='flex gap-1 items-center'>
                        <div className='pr-2'>
                            <h2 className='font-bold text-md text-[#253D4E]'>Follow Us</h2>
                        </div>
                        <div className='border border-none p-2 rounded-full bg-[#3BB77E]'><FaFacebookF color='#FFFFFF' /></div>
                        <div className='border border-none p-2 rounded-full bg-[#3BB77E]'><FaTwitter color='#FFFFFF' /></div>
                        <div className='border border-none p-2 rounded-full bg-[#3BB77E]'><FaInstagram color='#FFFFFF' /></div>
                        <div className='border border-none p-2 rounded-full bg-[#3BB77E]'><FaPinterestP color='#FFFFFF' /></div>
                        <div className='border border-none p-2 rounded-full bg-[#3BB77E]'><FaYoutube color='#FFFFFF' />

                        </div>

                    </div>
                    <div>
                        <p className='text-gray-400 text-sm'>Up to 15% discount on your first subscribe</p></div>

                </div>

                

            </div>
        </>
    );
};

export default Footer;
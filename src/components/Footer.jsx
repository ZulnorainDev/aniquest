import React from 'react';

const Footer = ({ padding }) => {
    return (
        <footer className="bg-[#181024] text-white relative">
            {/* Footer Links Grid */}
            <div className={`container mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 border-b border-gray-800 pt-10 ${padding} pb-6`}>
                {/* Clients Section */}
                <div>
                    <h3 className="font-bold mb-3">CLIENTS</h3>
                    <ul className="space-y-2 text-gray-300 text-sm">
                        <li className='cursor-pointer'>Login</li>
                        <li className='cursor-pointer'>Sign up</li>
                    </ul>
                </div>

                {/* Social Media Section */}
                <div>
                    <h3 className="font-bold mb-3">SOCIAL MEDIA</h3>
                    <ul className="space-y-2 text-gray-300 text-sm">
                        <li className='cursor-pointer'>Twitter</li>
                    </ul>
                </div>

                {/* Legal Info Section */}
                <div>
                    <h3 className="font-bold mb-3">LEGAL INFO</h3>
                    <ul className="space-y-2 text-gray-300 text-sm">
                        <li className='cursor-pointer'>Legal information</li>
                        <li className='cursor-pointer'>Terms & Conditions</li>
                        <li className='cursor-pointer'>Privacy Policy</li>
                    </ul>
                </div>

                {/* Support Section */}
                <div>
                    <h3 className="font-bold mb-3">SUPPORT</h3>
                    <ul className="space-y-2 text-gray-300 text-sm">
                        <li className='cursor-pointer'>Helpdesk</li>
                    </ul>
                </div>
            </div>

            {/* Footer Bottom */}
            <div className="container mx-auto px-4 pt-6 pb-4 text-sm text-gray-400 text-start">
                T22 All rights reserved
            </div>

          




        </footer>
    );
};

export default Footer;

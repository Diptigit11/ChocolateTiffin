import React from 'react';
import logo from '/img/logo.png';

//motion
import { motion } from 'framer-motion';
//variants
import { fadeIn } from '../variants';

export default function Footer() {
    return (
        <motion.footer
            className="bg-white border-y"
            variants={fadeIn("up", 0.2)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.7 }}
        >
            <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
                <div className="md:flex md:justify-between">
                    <div className="mb-6 md:mb-0">
                        <a href="/" className="flex items-center">
                            <img
                                src={logo}
                                className="mr-3 h-12 rounded-3xl"
                                alt="Logo"
                                style={{ width: '65', height: '70' }}
                            />
                        </a>
                    </div>
                    <motion.div 
                                variants={fadeIn("up", 0.2)}
                                initial="hidden"
                                whileInView="show"
                                viewport={{ once: false, amount: 0.7 }}
                    className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
                        <div>
                            <h2 className="mb-6 text-sm font-semibold text-[#682a2a] hover:text-[#c25151] uppercase">Resources</h2>
                            <ul className="
                            
                            hover:text-[#c25151]">
                                <li className="mb-4">
                                    <a href="/" className="text-[#682a2a] font-semibold hover:text-[#c25151]">
                                        Home
                                    </a>
                                </li>
                                <li>
                                    <a href="/About" className="text-[#682a2a] font-semibold hover:text-[#c25151]">
                                        About
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h2 className="mb-6 text-sm font-semibold text-[#682a2a] hover:text-[#c25151] uppercase">Follow us</h2>
                            <ul className="text-gray-500 font-medium">
                                <li className="mb-4">
                                    <a
                                        href="/MapEmbed"
                                        className="text-[#682a2a] hover:text-[#c25151]"
                                        target="_blank"
                                        rel="noreferrer"
                                    >
                                        Contact Us
                                    </a>
                                </li>
                                <li>
                                    <a href="/CakeImage" className="text-[#682a2a] hover:text-[#c25151]">
                                        Products
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h2 className="mb-6 text-sm font-semibold text-[#682a2a] hover:text-[#c25151] uppercase">Legal</h2>
                            <ul className="text-[#682a2a] hover:text-[#c25151] font-medium">
                                <li className="mb-4">
                                    <a href="#" className="text-[#682a2a] hover:text-[#c25151]">
                                        Privacy Policy
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="text-[#682a2a] hover:text-[#c25151]">
                                        Terms &amp; Conditions
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </motion.div>
                </div>
                <hr className="my-6 border-gray-200 sm:mx-auto lg:my-8" />
                <div className="sm:flex sm:items-center sm:justify-between">
                    <span className="text-sm text-[#682a2a] hover:text-[#c25151] sm:text-center">
                        © 2024 Chocolate Tiffin-sweetness on the inside. All Rights Reserved.
                    </span>
                    <div className="flex mt-4 space-x-5 sm:justify-center sm:mt-0">
                        <a href="#" className="text-[#682a2a] hover:text-blue-400">
                            <svg
                                className="w-5 h-5"
                                aria-hidden="true"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="currentColor"
                                viewBox="0 0 8 19"
                            >
                                <path
                                    fillRule="evenodd"
                                    d="M6.135 3H8V0H6.135a4.147 4.147 0 0 0-4.142 4.142V6H0v3h2v9.938h3V9h2.021l.592-3H5V3.591A.6.6 0 0 1 5.592 3h.543Z"
                                    clipRule="evenodd"
                                />
                            </svg>
                            <span className="sr-only">Facebook page</span>
                        </a>
                        <a href="https://wa.me/+918010126446" className="text-[#682a2a] hover:text-green-500">
  <svg
    className="w-5 h-5"
    aria-hidden="true"
    xmlns="http://www.w3.org/2000/svg"
    fill="currentColor"
    viewBox="0 0 32 32"
  >
    <path d="M16.043 0c-8.785 0-15.917 7.132-15.917 15.917 0 2.807.738 5.541 2.144 7.931l-2.299 6.786 7.016-2.304c2.333 1.264 4.864 1.941 7.489 1.941 8.785 0 15.917-7.132 15.917-15.917s-7.132-15.917-15.917-15.917zm.006 28.937c-2.422 0-4.762-.633-6.837-1.832l-.488-.291-4.176 1.384 1.365-4.09-.319-.505c-1.344-2.129-2.055-4.591-2.055-7.106 0-7.473 6.079-13.552 13.552-13.552 7.473 0 13.552 6.079 13.552 13.552 0 7.472-6.08 13.551-13.552 13.551zm7.353-10.446c-.406-.203-2.406-1.188-2.78-1.324-.374-.138-.647-.203-.92.203-.276.406-1.057 1.324-1.295 1.594-.238.27-.481.304-.887.102-.406-.203-1.713-.629-3.262-2.007-1.205-1.074-2.016-2.402-2.244-2.804-.238-.406-.026-.624.178-.83.184-.184.406-.481.61-.722.203-.238.27-.406.406-.67.138-.276.069-.508-.034-.703-.102-.203-.92-2.22-1.26-3.044-.33-.799-.669-.688-.92-.703l-.775-.014c-.275 0-.723.102-1.101.47-.374.374-1.417 1.386-1.417 3.377 0 1.992 1.449 3.916 1.652 4.183.203.27 2.845 4.35 6.897 5.964.963.416 1.71.665 2.3.852.968.307 1.848.263 2.548.16.778-.116 2.406-.983 2.746-1.93.339-.945.339-1.757.237-1.93-.101-.169-.374-.27-.78-.475z"/>
  </svg>
  <span className="sr-only">WhatsApp community</span>
</a>

<a href="#" className="text-[#682a2a] hover:text-pink-500">
  <svg
    className="w-5 h-5"
    aria-hidden="true"
    xmlns="http://www.w3.org/2000/svg"
    fill="currentColor"
    viewBox="0 0 24 24"
  >
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.366.062 2.633.334 3.608 1.308.975.975 1.246 2.242 1.308 3.608.058 1.266.07 1.646.07 4.85s-.012 3.584-.07 4.85c-.062 1.366-.334 2.633-1.308 3.608-.975.975-2.242 1.246-3.608 1.308-1.266.058-1.646.07-4.85.07s-3.584-.012-4.85-.07c-1.366-.062-2.633-.334-3.608-1.308-.975-.975-1.246-2.242-1.308-3.608-.058-1.266-.07-1.646-.07-4.85s.012-3.584.07-4.85c.062-1.366.334-2.633 1.308-3.608.975-.975 2.242-1.246 3.608-1.308 1.266-.058 1.646-.07 4.85-.07m0-2.163c-3.259 0-3.667.014-4.947.072-1.283.058-2.418.334-3.387 1.304-.969.969-1.246 2.105-1.304 3.387-.058 1.28-.072 1.688-.072 4.947s.014 3.667.072 4.947c.058 1.283.334 2.418 1.304 3.387.969.969 2.105 1.246 3.387 1.304 1.28.058 1.688.072 4.947.072s3.667-.014 4.947-.072c1.283-.058 2.418-.334 3.387-1.304.969-.969 1.246-2.105 1.304-3.387.058-1.28.072-1.688.072-4.947s-.014-3.667-.072-4.947c-.058-1.283-.334-2.418-1.304-3.387-.969-.969-2.105-1.246-3.387-1.304-1.28-.058-1.688-.072-4.947-.072zM12 5.838c-3.404 0-6.162 2.757-6.162 6.162s2.758 6.162 6.162 6.162 6.162-2.757 6.162-6.162-2.758-6.162-6.162-6.162zm0 10.1c-2.168 0-3.938-1.769-3.938-3.938s1.769-3.938 3.938-3.938 3.938 1.769 3.938 3.938-1.769 3.938-3.938 3.938zm6.406-11.016c-.796 0-1.441.645-1.441 1.441s.645 1.441 1.441 1.441 1.441-.645 1.441-1.441-.645-1.441-1.441-1.441z"/>
  </svg>
  <span className="sr-only">Instagram</span>
</a>

                    </div>
                </div>
            </div>
        </motion.footer>
    );
}

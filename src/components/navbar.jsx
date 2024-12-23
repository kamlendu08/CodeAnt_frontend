import React, { useState, useEffect, useRef } from "react";
import SubtractImage0 from "../assets/Subtract0.svg";
import bars from "../assets/bars.svg";
import close from "../assets/close.svg";
import chevron_down from "../assets/chevron_down.svg";
import home1 from "../assets/home1.svg";
import code from "../assets/code.svg";
import cloud from "../assets/cloud.svg";
import book from "../assets/book.svg";
import gear from "../assets/gear.svg";
import phone from "../assets/phone.svg";
import sign_out from "../assets/sign_out.svg";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const dropdownRef = useRef(null);
    const navbarRef = useRef(null);

    const toggleMenu = (e) => {
        e.stopPropagation();
        setIsOpen(prevState => !prevState);
    };

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (
                dropdownRef.current && 
                !dropdownRef.current.contains(event.target) &&
                navbarRef.current &&
                !navbarRef.current.contains(event.target)
            ) {
                setIsOpen(false);
            }
        };

        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [isOpen]);

    return (
        <>
            <div ref={navbarRef} className="lg:hidden flex items-center justify-between py-2 bg-white relative z-50">
                <div className="flex px-4 items-center">
                    <div className="w-[28px] h-[31px]">
                        <img src={SubtractImage0} alt="CodeAnt AI Logo" />
                    </div>
                    <div className="text-text_blue text-[24px] sm:text-3xl font-satoshi ml-2">
                        CodeAnt AI
                    </div>
                </div>
                <div className="mr-4 cursor-pointer">
                    <button onClick={toggleMenu}>
                        <img src={isOpen ? close : bars} alt="Toggle Menu" />
                    </button>
                </div>
            </div>
            {isOpen && (
                <div 
                    className="fixed inset-0 bg-[#D5D7DA] bg-opacity-50 z-40" 
                    onClick={toggleMenu}
                ></div>
            )}
            <div 
                ref={dropdownRef}
                className={`fixed top-[52px] left-0 right-0 bg-white shadow-lg z-50 transition-all duration-300 ease-in-out ${
                    isOpen ? "max-h-screen overflow-y-auto" : "max-h-0 overflow-hidden"
                }`}
            >
                <div className="relative bg-white px-4 py-4">
                    <div className="flex cursor-pointer justify-between mb-4 w-full text-text_gray font-inter text-[16px] items-center rounded-[8px] border border-[#D5D7DA] py-2 px-3">
                        <div>UtkarshDhairyaPawar</div>
                        <div>
                            <img src={chevron_down} alt="Chevron Down" />
                        </div>
                    </div>
                    <NavItem icon={home1} text="Repositories" />
                    <NavItem icon={code} text="AI Code Review" />
                    <NavItem icon={cloud} text="Cloud Security" />
                    <NavItem icon={book} text="How to Use" />
                    <NavItem icon={gear} text="Setting" />
                    <NavItem icon={phone} text="Support" />
                    <NavItem icon={sign_out} text="Logout" />
                </div>
            </div>
        </>
    );
};

const NavItem = ({ icon, text }) => (
    <div className="flex cursor-pointer px-3 text-[#414651] font-semibold w-full mt-2 items-center h-[40px] bg-white text-[16px] gap-3 font-inter">
        <img src={icon} alt={text} className="w-5 h-5" />
        {text}
    </div>
);

export default Navbar;


import logo_light from '../assets/images/logo-light.png';
import React, { useState, useEffect } from 'react'
import { Link } from "react-router-dom";

import logo_icon_40 from '../assets/images/logo-icon-40.png';
import logo_icon_40_white from '../assets/images/logo-icon-40-white.png';
import logo_dark from '../assets/images/logo-dark.png';
import logo_white from '../assets/images/logo-white.png';
import image from '../assets/images/team/05.jpg';
import {LuSearch} from "../assets/icons/vander";
import { User, Settings, Lock, LogOut } from 'react-feather';

export default function Navbar(props) {
    const [isDropdown, openDropdown] = useState(true);
    const { navClass, topnavClass, isContainerFluid } = props;
    const [isOpen, setMenu] = useState(true);

    window.addEventListener("scroll", windowScroll);
    useEffect(() => {
        activateMenu();
    }, []);

    function windowScroll() {
        const navbar = document.getElementById("topnav");
        if (
            document.body.scrollTop >= 50 ||
            document.documentElement.scrollTop >= 50
        ) {
            if (navbar !== null) {
                navbar?.classList.add("nav-sticky");
            }
        } else {
            if (navbar !== null) {
                navbar?.classList.remove("nav-sticky");
            }
        }

        const mybutton = document.getElementById("back-to-top");
        if (mybutton != null) {
            if (document.body.scrollTop > 500 || document.documentElement.scrollTop > 500) {
                mybutton.classList.add("flex");
                mybutton.classList.remove("hidden");
            } else {
                mybutton.classList.add("hidden");
                mybutton.classList.remove("flex");
            }
        }
    }

    const toggleMenu = () => {
        setMenu(!isOpen)
        if (document.getElementById("navigation")) {
            const anchorArray = Array.from(document.getElementById("navigation").getElementsByTagName("a"));
            anchorArray.forEach(element => {
                element.addEventListener('click', (elem) => {
                    const target = elem.target.getAttribute("href")
                    if (target !== "") {
                        if (elem.target.nextElementSibling) {
                            var submenu = elem.target.nextElementSibling.nextElementSibling;
                            submenu.classList.toggle('open');
                        }
                    }
                })
            });
        }
    }


    const getClosest = (elem, selector) => {

        // Element.matches() polyfill
        if (!Element.prototype.matches) {
            Element.prototype.matches =
                Element.prototype.matchesSelector ||
                Element.prototype.mozMatchesSelector ||
                Element.prototype.msMatchesSelector ||
                Element.prototype.oMatchesSelector ||
                Element.prototype.webkitMatchesSelector ||
                function (s) {
                    var matches = (this.document || this.ownerDocument).querySelectorAll(s),
                        i = matches.length;
                    while (--i >= 0 && matches.item(i) !== this) { }
                    return i > -1;
                };
        }

        // Get the closest matching element
        for (; elem && elem !== document; elem = elem.parentNode) {
            if (elem.matches(selector)) return elem;
        }
        return null;

    };

    const activateMenu = () => {
        var menuItems = document.getElementsByClassName("sub-menu-item");
        if (menuItems) {

            var matchingMenuItem = null;
            for (var idx = 0; idx < menuItems.length; idx++) {
                if (menuItems[idx].href === window.location.href) {
                    matchingMenuItem = menuItems[idx];
                }
            }

            if (matchingMenuItem) {
                matchingMenuItem.classList.add('active');


                var immediateParent = getClosest(matchingMenuItem, 'li');

                if (immediateParent) {
                    immediateParent.classList.add('active');
                }

                var parent = getClosest(immediateParent, '.child-menu-item');
                if (parent) {
                    parent.classList.add('active');
                }

                var parent = getClosest(parent || immediateParent, '.parent-menu-item');

                if (parent) {
                    parent.classList.add('active');

                    var parentMenuitem = parent.querySelector('.menu-item');
                    if (parentMenuitem) {
                        parentMenuitem.classList.add('active');
                    }

                    var parentOfParent = getClosest(parent, '.parent-parent-menu-item');
                    if (parentOfParent) {
                        parentOfParent.classList.add('active');
                    }
                } else {
                    var parentOfParent = getClosest(matchingMenuItem, '.parent-parent-menu-item');
                    if (parentOfParent) {
                        parentOfParent.classList.add('active');
                    }
                }
            }
        }
    }
    return (
        <nav id="topnav" className={`defaultscroll is-sticky ${topnavClass}`}>
            <div className={`${isContainerFluid === true ? 'container-fluid md:px-8 px-3' : 'container'}`}>
                <Link className="logo" to="/">

                    <div className="block sm:hidden">
                        <img src={logo_icon_40} className="h-10 inline-block dark:hidden" alt="" />
                        <img src={logo_icon_40_white} className="h-10 hidden dark:inline-block" alt="" />
                    </div>

                    {navClass && navClass.includes('nav-light') ?

                        <div className="sm:block hidden">
                            <span className="inline-block dark:hidden">
                                <img src={logo_dark} className="h-[24px] l-dark" alt="" />
                                <img src={logo_light} className="h-[24px] l-light" alt="" />
                            </span>
                            <img src={logo_white} className="h-[24px] hidden dark:inline-block" alt="" />
                        </div> :
                        <div className="sm:block hidden">
                            <img src={logo_dark} className="h-[24px] inline-block dark:hidden" alt="" />
                            <img src={logo_white} className="h-[24px] hidden dark:inline-block" alt="" />
                        </div>
                    }
                </Link>

                <div className="menu-extras">
                    <div className="menu-item">
                        <Link to="#" className="navbar-toggle" id="isToggle" onClick={toggleMenu}>
                            <div className="lines">
                                <span></span>
                                <span></span>
                                <span></span>
                            </div>
                        </Link>
                    </div>
                </div>
                {/* <!-- End Mobile Toggle --> */}

                {/* <!--Login button Start--> */}
                <ul className="buy-button list-none mb-0">
                    <li className="inline-block mb-0">
                        <div className="relative">
                            <LuSearch className="text-lg absolute top-[10px] end-3"/>
                            <input type="text" className="form-input h-9 pe-10 rounded-3xl sm:w-44 w-36 border-gray-100 dark:border-slate-800 bg-white dark:bg-slate-900" name="s" id="searchItem" placeholder="Search..." />
                        </div>
                    </li>

                    <li className="dropdown inline-block relative ps-1">
                        <button onClick={() => openDropdown(!isDropdown)} data-dropdown-toggle="dropdown" className="dropdown-toggle btn btn-icon rounded-full bg-emerald-600 hover:bg-emerald-700 border-emerald-600 hover:border-emerald-700 text-white inline-flex" type="button">
                            <img src={image} className="rounded-full" alt="" />
                        </button>

                        <div className={`dropdown-menu absolute end-0 m-0 mt-4 z-10 w-44 rounded-md overflow-hidden bg-white dark:bg-slate-900 shadow dark:shadow-gray-700 ${isDropdown ? 'hidden' : 'block'}`} >
                            <ul className="py-2 text-start">
                                <li>
                                    <Link to="/candidate-profile" className="flex items-center font-medium py-2 px-4 dark:text-white/70 hover:text-emerald-600 dark:hover:text-white"><User className="h-4 w-4 me-2" />Profile</Link>
                                </li>
                                <li>
                                    <Link to="/candidate-profile-setting" className="flex items-center font-medium py-2 px-4 dark:text-white/70 hover:text-emerald-600 dark:hover:text-white"><Settings className="h-4 w-4 me-2" />Settings</Link>
                                </li>
                                <li className="border-t border-gray-100 dark:border-gray-800 my-2"></li>
                                <li>
                                    <Link to="/lock-screen" className="flex items-center font-medium py-2 px-4 dark:text-white/70 hover:text-emerald-600 dark:hover:text-white"><Lock className="h-4 w-4 me-2" />Lockscreen</Link>
                                </li>
                                <li>
                                    <Link to="/login" className="flex items-center font-medium py-2 px-4 dark:text-white/70 hover:text-emerald-600 dark:hover:text-white"><LogOut className="h-4 w-4 me-2" />Logout</Link>
                                </li>
                            </ul>
                        </div>
                    </li>
                </ul>


                <div id="navigation" className={`${isOpen === true ? 'hidden' : 'block'}`}>
                    <ul className={`navigation-menu ${navClass}`}>
                        <li className="has-submenu parent-menu-item">
                            <Link to="#">Home</Link><span className="menu-arrow"></span>
                            <ul className="submenu">
                                <li><Link to="/index" className="sub-menu-item">Hero One</Link></li>
                                <li><Link to="/index-two" className="sub-menu-item">Hero Two</Link></li>
                                <li><Link to="/index-three" className="sub-menu-item">Hero Three</Link></li>
                                <li><Link to="/index-four" className="sub-menu-item">Hero Four</Link></li>
                                <li><Link to="/index-five" className="sub-menu-item">Hero Five</Link></li>
                                <li><Link to="/index-six" className="sub-menu-item">Hero Six </Link></li>
                                <li><Link to="/index-seven" className="sub-menu-item">Hero Seven </Link></li>
                                <li><Link to="/index-eight" className="sub-menu-item">Hero Eight  <span className="bg-yellow-500 inline-block text-white text-[10px] font-bold px-2.5 py-0.5 rounded h-5 ms-1">New</span></Link></li>
                            </ul>
                        </li>

                        <li className="has-submenu parent-parent-menu-item"><Link to="#"> Jobs </Link><span className="menu-arrow"></span>
                            <ul className="submenu">
                                <li><Link to="/job-categories" className="sub-menu-item">Job Categories</Link></li>

                                <li className="has-submenu parent-menu-item">
                                    <Link to="#"> Job Grids </Link><span className="submenu-arrow"></span>
                                    <ul className="submenu">
                                        <li><Link to="/job-grid-one" className="sub-menu-item">Job Grid One</Link></li>
                                        <li><Link to="/job-grid-two" className="sub-menu-item">Job Grid Two</Link></li>
                                        <li><Link to="/job-grid-three" className="sub-menu-item">Job Grid Three</Link></li>
                                        <li><Link to="/job-grid-four" className="sub-menu-item">Job Grid Four </Link></li>
                                    </ul>
                                </li>

                                <li className="has-submenu parent-menu-item">
                                    <Link to="#"> Job Lists </Link><span className="submenu-arrow"></span>
                                    <ul className="submenu">
                                        <li><Link to="/job-list-one" className="sub-menu-item">Job List One</Link></li>
                                        <li><Link to="/job-list-two" className="sub-menu-item">Job List Two</Link></li>
                                        <li><Link to="/job-list-three" className="sub-menu-item">Job List Three</Link></li>
                                        <li><Link to="/job-list-four" className="sub-menu-item">Job List Four</Link></li>
                                        <li><Link to="/job-list-five" className="sub-menu-item">Job List Five </Link></li>
                                        <li><Link to="/job-list-six" className="sub-menu-item">Job List Six </Link></li>
                                    </ul>
                                </li>

                                <li className="has-submenu parent-menu-item">
                                    <Link to="#"> Job Detail </Link><span className="submenu-arrow"></span>
                                    <ul className="submenu">
                                        <li><Link to="/job-detail-one" className="sub-menu-item">Job Detail One</Link></li>
                                        <li><Link to="/job-detail-two" className="sub-menu-item">Job Detail Two</Link></li>
                                        <li><Link to="/job-detail-three" className="sub-menu-item">Job Detail Three</Link></li>
                                    </ul>
                                </li>

                                <li><Link to="/job-apply" className="sub-menu-item">Job Apply</Link></li>

                                <li><Link to="/job-post" className="sub-menu-item">Job Post </Link></li>

                                <li><Link to="/career" className="sub-menu-item">Career </Link></li>
                            </ul>
                        </li>

                        <li className="has-submenu parent-parent-menu-item">
                            <Link to="#">Pages</Link><span className="menu-arrow"></span>
                            <ul className="submenu">
                                <li><Link to="/aboutus" className="sub-menu-item">About Us</Link></li>
                                <li><Link to="/services" className="sub-menu-item">Services</Link></li>
                                <li><Link to="/pricing" className="sub-menu-item">Pricing </Link></li>

                                <li className="has-submenu parent-menu-item">
                                    <Link to="#">Employers</Link><span className="submenu-arrow"></span>
                                    <ul className="submenu">
                                        <li><Link to="/employer-list" className="sub-menu-item">Employers</Link></li>
                                        <li><Link to="/employer-detail" className="sub-menu-item">Employer Detail</Link></li>
                                    </ul>
                                </li>

                                <li className="has-submenu parent-menu-item">
                                    <Link to="#">Candidates <span className="bg-yellow-500 inline-block text-white text-[10px] font-bold px-2.5 py-0.5 rounded h-5 ms-1">New</span></Link><span className="submenu-arrow"></span>
                                    <ul className="submenu">
                                        <li><Link to="/candidate-list" className="sub-menu-item">Candidates</Link></li>
                                        <li><Link to="/candidate-profile" className="sub-menu-item">Candidate Profile</Link></li>
                                        <li><Link to="/candidate-profile-setting" className="sub-menu-item">Profile Settings <span className="bg-yellow-500 inline-block text-white text-[10px] font-bold px-2.5 py-0.5 rounded h-5 ms-1">New</span></Link></li>
                                    </ul>
                                </li>

                                <li className="has-submenu parent-menu-item">
                                    <Link to="#"> Helpcenter </Link><span className="submenu-arrow"></span>
                                    <ul className="submenu">
                                        <li><Link to="/helpcenter-overview" className="sub-menu-item">Overview</Link></li>
                                        <li><Link to="/helpcenter-faqs" className="sub-menu-item">FAQs</Link></li>
                                        <li><Link to="/helpcenter-guides" className="sub-menu-item">Guides</Link></li>
                                        <li><Link to="/helpcenter-support" className="sub-menu-item">Support</Link></li>
                                    </ul>
                                </li>

                                <li className="has-submenu parent-menu-item"><Link to="#"> Blog </Link><span className="submenu-arrow"></span>
                                    <ul className="submenu">
                                        <li><Link to="/blogs" className="sub-menu-item"> Blogs</Link></li>
                                        <li><Link to="/blog-detail" className="sub-menu-item"> Blog Detail</Link></li>
                                    </ul>
                                </li>

                                <li className="has-submenu parent-menu-item"><Link to="#"> Auth Pages </Link><span className="submenu-arrow"></span>
                                    <ul className="submenu">
                                        <li><Link to="/login" className="sub-menu-item"> Login</Link></li>
                                        <li><Link to="/signup" className="sub-menu-item"> Signup</Link></li>
                                        <li><Link to="/reset-password" className="sub-menu-item"> Forgot Password</Link></li>
                                        <li><Link to="/lock-screen" className="sub-menu-item"> Lock Screen</Link></li>
                                    </ul>
                                </li>

                                <li className="has-submenu parent-menu-item"><Link to="#"> Utility </Link><span className="submenu-arrow"></span>
                                    <ul className="submenu">
                                        <li><Link to="/terms" className="sub-menu-item">Terms of Services</Link></li>
                                        <li><Link to="/privacy" className="sub-menu-item">Privacy Policy</Link></li>
                                    </ul>
                                </li>

                                <li className="has-submenu parent-menu-item"><Link to="#"> Special </Link><span className="submenu-arrow"></span>
                                    <ul className="submenu">
                                        <li><Link to="/comingsoon" className="sub-menu-item"> Coming Soon</Link></li>
                                        <li><Link to="/maintenance" className="sub-menu-item"> Maintenance</Link></li>
                                        <li><Link to="/error" className="sub-menu-item"> 404!</Link></li>
                                        <li><Link to="/thankyou" className="sub-menu-item"> Thank you</Link></li>
                                    </ul>
                                </li>
                            </ul>
                        </li>

                        <li><Link to="/contact" className="sub-menu-item">Contact</Link></li>
                    </ul>
                </div>
            </div>
        </nav>

    )
}

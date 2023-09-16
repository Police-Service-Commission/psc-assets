import React, { useState } from 'react'
import { Link } from "react-router-dom";
import ModalVideo from 'react-modal-video'
import "../../../node_modules/react-modal-video/scss/modal-video.scss";

import shree_logo from '../../assets/images/company/shree-logo.png';
import skype from '../../assets/images/company/skype.png';
import snapchat from '../../assets/images/company/snapchat.png';
import spotify from '../../assets/images/company/spotify.png';
import telegram from '../../assets/images/company/telegram.png';
import whatsapp from '../../assets/images/company/whatsapp.png';
import android from '../../assets/images/company/android.png';
import facebook_logo from '../../assets/images/company/facebook-logo.png';
import linkedin from '../../assets/images/company/linkedin.png';
import google_logo from '../../assets/images/company/google-logo.png';

import Navbar from '../../components/Navbar'
import PopularJobsThree from '../../components/Popular-Jobs-three'
import BestCompanies from '../../components/Best-companies'
import Feature from '../../components/Feature'
import News from '../../components/News'
import Footer from '../../components/Footer'

import {BiBriefcaseAlt2,} from "../../assets/icons/vander"
import MillionsJob from '../../components/Millions-job';

export default function IndexFour() {
    const [isOpen, setOpen] = useState(false)
    return (
        <>
            <Navbar navClass="justify-start" topnavClass="bg-white dark:bg-slate-900" />

            <section className="lg:h-screen py-36 h-auto relative flex items-center background-effect overflow-hidden bg-[url('../../assets/images/hero/bg2.jpg')] bg-no-repeat bg-cover">
                <div className="container-fluid">
                    <div className="absolute inset-0 z-0 bg-[url('../../assets/images/hero/curve-shape.png')] dark:bg-[url('../../assets/images/hero/curve-shape-dark.png')] bg-top bg-cover"></div>
                </div>

                <div className="container z-1">
                    <div className="grid grid-cols-1 mt-10">
                        <h4 className="lg:leading-normal leading-normal text-4xl lg:text-5xl mb-5 font-bold">Make The Best Move to <br /> Choose Your <span className="text-emerald-600">New Job</span></h4>
                        <p className="text-slate-400 text-lg max-w-xl">Find Jobs, Employment & Career Opportunities. Some of the companies we've helped recruit excellent applicants over the years.</p>

                        <div className="grid lg:grid-cols-12 grid-cols-1" id="reserve-form">
                            <div className="lg:col-span-7 mt-8">
                                <div className="bg-white dark:bg-slate-900 border-0 shadow rounded p-3">
                                    <form action="#">
                                        <div className="registration-form text-dark text-start">
                                            <div className="grid md:grid-cols-12 grid-cols-1 md:gap-0 gap-6">
                                                <div className="lg:col-span-8 md:col-span-7">
                                                    <div className="filter-search-form relative filter-border">
                                                        <BiBriefcaseAlt2 className="icons"/>
                                                        <input name="name" type="text" id="job-keyword" className="form-input filter-input-box bg-gray-50 dark:bg-slate-800 border-0" placeholder="Search your Keywords" />
                                                    </div>
                                                </div>

                                                <div className="lg:col-span-4 md:col-span-5">
                                                    <input type="submit" id="search" name="search" style={{ height: '60px' }} className="btn bg-emerald-600 hover:bg-emerald-700 border-emerald-600 hover:border-emerald-700 text-white searchbtn submit-btn w-full" value="Search" />
                                                </div>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>

                        <div className="mt-4">
                            <span className="text-slate-400"><span className="text-dark">Popular Searches :</span> Designer, Developer, Web, IOS, PHP Senior Engineer</span>
                        </div>
                    </div>
                </div>

                <div className="absolute inset-0 bg-emerald-600/5"></div>
                <ul className="circles p-0 mb-0">
                    <li className="brand-img"><img src={shree_logo} className="w-9 h-9" alt="" /></li>
                    <li className="brand-img"><img src={skype} className="w-9 h-9" alt="" /></li>
                    <li className="brand-img"><img src={snapchat} className="w-9 h-9" alt="" /></li>
                    <li className="brand-img"><img src={spotify} className="w-9 h-9" alt="" /></li>
                    <li className="brand-img"><img src={telegram} className="w-9 h-9" alt="" /></li>
                    <li className="brand-img"><img src={whatsapp} className="w-9 h-9" alt="" /></li>
                    <li className="brand-img"><img src={android} className="w-9 h-9" alt="" /></li>
                    <li className="brand-img"><img src={facebook_logo} className="w-9 h-9" alt="" /></li>
                    <li className="brand-img"><img src={linkedin} className="w-9 h-9" alt="" /></li>
                    <li className="brand-img"><img src={google_logo} className="w-9 h-9" alt="" /></li>
                </ul>
            </section>
            <div className="relative">
                <div className="absolute block w-full h-auto bottom-[25px] z-1 start-0">
                    <Link to=""><i className="mdi mdi-arrow-down absolute top-0 start-0 end-0 text-center inline-flex items-center justify-center rounded-full bg-white dark:bg-slate-900 h-12 w-12 mx-auto shadow-md dark:shadow-gray-800"></i></Link>
                </div>

                <div className="shape absolute start-0 end-0 sm:-bottom-px -bottom-[2px] overflow-hidden text-white dark:text-slate-900">
                    <svg className="w-full h-auto" viewBox="0 0 2880 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M0 48H1437.5H2880V0H2160C1442.5 52 720 0 720 0H0V48Z" fill="currentColor"></path>
                    </svg>
                </div>
            </div>


            <ModalVideo channel='youtube' autoplay isOpen={isOpen} videoId="S_CGed6E610" onClose={() => setOpen(false)} />

            <section className="relative md:py-24 py-16">
                <div className="container md:pb-16">
                    <MillionsJob/>
                </div>

                <PopularJobsThree />
                <BestCompanies />
                <Feature />
                <News />
            </section>
            <Footer />
        </>
    )
}

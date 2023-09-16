import React, { useState } from 'react'
import ab05 from '../assets/images/about/ab05.jpg';
import Navbar from '../components/Navbar'
import MillionsJob from '../components/Millions-job'
import Feature from '../components/Feature'
import JobCounter from '../components/Job-counter';
import QuesAnswer from '../components/Question-Answer';
import ExploreJob from '../components/Explore-job';
import Footer from '../components/Footer';
import { Link } from "react-router-dom";
import ModalVideo from 'react-modal-video'
import "../../node_modules/react-modal-video/scss/modal-video.scss";
import{BiCheckCircle} from "../assets/icons/vander"

export default function Aboutus() {
    const [isOpen, setOpen] = useState(false)

    return (
        <>
            <Navbar navClass='justify-end nav-light' />
            <section className="relative table w-full py-36 bg-[url('../../assets/images/hero/bg.jpg')] bg-top bg-no-repeat bg-cover">
                <div className="absolute inset-0 bg-emerald-900/90"></div>
                <div className="container">
                    <div className="grid grid-cols-1 text-center mt-10">
                        <h3 className="md:text-3xl text-2xl md:leading-snug tracking-wide leading-snug font-medium text-white">About Us</h3>

                    </div>
                </div>

                <div className="absolute text-center z-10 bottom-5 start-0 end-0 mx-3">
                    <ul className="breadcrumb tracking-[0.5px] breadcrumb-light mb-0 inline-block">
                        <li className="inline breadcrumb-item text-[15px] font-semibold duration-500 ease-in-out text-white/50 hover:text-white"><Link to="/index">Jobstack</Link></li>
                        <li className="inline breadcrumb-item text-[15px] font-semibold duration-500 ease-in-out text-white" aria-current="page">About Us</li>
                    </ul>
                </div>
            </section>
            <div className="relative">
                <div className="shape absolute start-0 end-0 sm:-bottom-px -bottom-[2px] overflow-hidden z-1 text-white dark:text-slate-900">
                    <svg className="w-full h-auto" viewBox="0 0 2880 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M0 48H1437.5H2880V0H2160C1442.5 52 720 0 720 0H0V48Z" fill="currentColor"></path>
                    </svg>
                </div>
            </div>
            <section className="relative md:py-24 py-16">
                <div className="container md:pb-16">
                    <MillionsJob />
                </div>

                <Feature />
                <div className="container md:mt-24 mt-16">
                    <div className="grid grid-cols-1">
                        <div className="relative overflow-hidden bg-emerald-600 rounded-md shadow dark:shadow-gray-700">
                            <div className="grid md:grid-cols-2 items-center gap-[30px]">
                                <div className="relative">
                                    <img src={ab05} alt="" />
                                    <div className="absolute md:bottom-1/2 md:translate-y-1/2 md:-end-10 ltr:md:translate-x-0 rtl:md:translate-x-0 -bottom-10 end-1/2 ltr:translate-x-1/2 rtl:-translate-x-1/2 text-center">
                                        <Link to="#" onClick={() => setOpen(true)} data-id="S_CGed6E610" className="lightbox h-20 w-20 rounded-full shadow-lg dark:shadow-gray-700 inline-flex items-center justify-center bg-white dark:bg-slate-900 text-emerald-600 dark:text-white">
                                            <i className="mdi mdi-play inline-flex items-center justify-center text-2xl"></i>
                                        </Link>
                                    </div>
                                </div>

                                <div>
                                    <div className="text-white p-4">
                                        <h4 className="leading-normal text-4xl mb-3 font-semibold">Get the job of your <br /> dreams quickly.</h4>

                                        <p className="text-white/70 text-lg max-w-xl">Search all the open positions on the web. Get your own personalized salary estimate. Read reviews on over 30000+ companies worldwide.</p>

                                        <ul className="list-none text-white/50 mt-4">
                                            <li className="mb-1 flex items-center"><BiCheckCircle className="text-white text-xl me-2"/> Digital Marketing Solutions for Tomorrow</li>
                                            <li className="mb-1 flex items-center"><BiCheckCircle className="text-white text-xl me-2"/>  Our Talented & Experienced Marketing Agency</li>
                                            <li className="mb-1 flex items-center"><BiCheckCircle className="text-white text-xl me-2"/>  Create your own skin to match your brand</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container md:mt-24 mt-16">
                    <JobCounter />
                </div>
                <QuesAnswer />
                <ExploreJob />
            </section>
            <Footer />
            <ModalVideo channel='youtube' autoplay isOpen={isOpen} videoId="S_CGed6E610" onClose={() => setOpen(false)} />

        </>
    )
}
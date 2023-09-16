import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import ModalVideo from 'react-modal-video'
import Select from 'react-select'

import ab01 from '../../assets/images/about/ab01.jpg';
import image from '../../assets/images/team/01.jpg';
import image1 from '../../assets/images/team/02.jpg';
import image2 from '../../assets/images/team/03.jpg';
import image3 from '../../assets/images/team/04.jpg';
import image4 from '../../assets/images/team/05.jpg';
import ab04 from '../../assets/images/about/ab04.jpg';
import Navbar from '../../components/Navbar'
import PopularCategories from '../../components/Popular-Categories';
import FindBestCompanies from '../../components/FindBestCompanies';
import News from '../../components/News';
import Footer from '../../components/Footer';
import JobCounter from '../../components/Job-counter';
import PopularJobssix from '../../components/Popular-Jobs-six';
import "../../../node_modules/react-modal-video/scss/modal-video.scss";

import { BiBriefcaseAlt2, PiMapPin,AiOutlinePlus, PiBellSimpleRingingBold } from "../../assets/icons/vander"
import MillionsJob from '../../components/Millions-job';

const options = [
    { value: 'BS', label: 'Bahamas' },
    { value: 'BH', label: 'Bahrain' },
    { value: 'CA', label: 'Canada' },
    { value: 'DK', label: 'Denmark' },
    { value: 'DJ', label: 'Djibouti' },
    { value: 'ER', label: 'Eritrea' },
    { value: 'EF', label: 'Estonia' },
    { value: 'GM', label: 'Gambia' },
];

export default function IndexSix() {
    const [isOpen, setOpen] = useState(false)
    return (
        <>
            <Navbar navClass='justify-end' />
            <section className="py-36 md:h-screen h-auto items-center flex relative overflow-hidden" id="home">
                <div className="container relative">
                    <div className="grid md:grid-cols-12 grid-cols-1 items-center gap-[30px]">
                        <div className="lg:col-span-7 md:col-span-6 mt-14 md:mt-0">
                            <div className="lg:me-8">
                                <h4 className="lg:leading-normal leading-normal text-4xl lg:text-5xl mb-5 font-bold">Find the <span className="before:block before:absolute before:-inset-2 before:-skew-y-6 before:bg-emerald-600 relative inline-block"><span className="relative text-white font-bold">Best Job</span></span> <br /> offer for you.</h4>

                                <p className="text-slate-400 text-lg max-w-xl">Find Jobs, Employment & Career Opportunities. Some of the companies we've helped recruit excellent applicants over the years.</p>

                                <div className="bg-white dark:bg-slate-900 border-0 shadow rounded p-3 mt-4">
                                    <form action="#">
                                        <div className="registration-form text-dark text-start">
                                            <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 lg:gap-0 gap-6">
                                                <div className="filter-search-form relative filter-border">
                                                    <BiBriefcaseAlt2 className="icons"/>
                                                    <input name="name" type="text" id="job-keyword" className="form-input filter-input-box bg-gray-50 dark:bg-slate-800 border-0" placeholder="Search..." />
                                                </div>

                                                <div className="filter-search-form relative filter-border">
                                                    <PiMapPin className="icons"/>
                                                    <Select className="form-input filter-input-box bg-gray-50 dark:bg-slate-800 border-0" options={options} />

                                                </div>

                                                <input type="submit" id="search" name="search" style={{ height: '60px'}} className="btn bg-emerald-600 hover:bg-emerald-700 border-emerald-600 hover:border-emerald-700 text-white searchbtn submit-btn w-100" value="Search" />
                                            </div>
                                        </div>
                                    </form>
                                </div>

                                <div className="mt-2">
                                    <span className="text-slate-400"><span className="text-dark">Popular Searches :</span> Designer, Developer, Web, IOS, PHP Senior Engineer</span>
                                </div>
                            </div>
                        </div>

                        <div className="lg:col-span-5 md:col-span-6">
                            <div className="relative">
                                <div className="relative flex justify-end">
                                    <img src={ab01} className="lg:w-[400px] w-[280px] rounded-xl shadow dark:shadow-gray-700" alt="" />
                                    <div className="absolute lg:bottom-20 -bottom-24 xl:-end-20 lg:-end-10 end-2 p-4 rounded-lg shadow-md dark:shadow-gray-800 bg-white dark:bg-slate-900 w-60 z-2">
                                        <h5 className="text-lg font-semibold mb-3">5k+ candidates get job</h5>

                                        <ul className="list-none relative">
                                            <li className="inline-block relative"><Link to="#"><img src={image} className="w-10 h-10 rounded-full shadow-md dark:shadow-gray-700 border-4 border-white dark:border-slate-900 relative hover:z-1 hover:scale-105 transition-all duration-500" alt="" /></Link></li>
                                            <li className="inline-block relative -ms-3"><Link to="#"><img src={image1} className="w-10 h-10 rounded-full shadow-md dark:shadow-gray-700 border-4 border-white dark:border-slate-900 relative hover:z-1 hover:scale-105 transition-all duration-500" alt="" /></Link></li>
                                            <li className="inline-block relative -ms-3"><Link to="#"><img src={image2} className="w-10 h-10 rounded-full shadow-md dark:shadow-gray-700 border-4 border-white dark:border-slate-900 relative hover:z-1 hover:scale-105 transition-all duration-500" alt="" /></Link></li>
                                            <li className="inline-block relative -ms-3"><Link to="#"><img src={image3} className="w-10 h-10 rounded-full shadow-md dark:shadow-gray-700 border-4 border-white dark:border-slate-900 relative hover:z-1 hover:scale-105 transition-all duration-500" alt="" /></Link></li>
                                            <li className="inline-block relative -ms-3"><Link to="#"><img src={image4} className="w-10 h-10 rounded-full shadow-md dark:shadow-gray-700 border-4 border-white dark:border-slate-900 relative hover:z-1 hover:scale-105 transition-all duration-500" alt="" /></Link></li>
                                            <li className="inline-block relative -ms-3"><Link to="#" className="btn btn-icon table-cell rounded-full bg-emerald-600 hover:bg-emerald-700 border-emerald-600 hover:border-emerald-700 text-white hover:z-1 hover:scale-105  items-center justify-center"><AiOutlinePlus className='mx-auto'/></Link></li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="absolute md:-start-5 start-0 -bottom-16">
                                    <img src={ab04} className="lg:w-[280px] w-[200px] border-8 border-white dark:border-slate-900 rounded-xl" alt="" />

                                    <div className="absolute flex justify-between items-center -top-6 md:-start-10 start-2 p-4 rounded-lg shadow-md dark:shadow-gray-800 bg-white dark:bg-slate-900 w-max">
                                        <PiBellSimpleRingingBold className="text-[24px] text-amber-500"/> 
                                        <p className="text-lg font-semibold mb-0 ms-2">Job Alert Subscribe</p>
                                    </div>
                                </div>

                                <div className="overflow-hidden absolute md:h-[500px] h-[400px] md:w-[500px] w-[400px] bg-gradient-to-tl to-emerald-600/5 via-emerald-600/50 from-emerald-600 bottom-1/2 translate-y-1/2 start-1/2 ltr:-translate-x-1/2 rtl:translate-x-1/2 -z-1 rounded-full">
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="relative md:pb-24 pb-16">
                <PopularCategories />
                <div className="container md:mt-24 md:pb-16 mt-16">
                    <MillionsJob/>
                </div>

                <PopularJobssix />
            </section>
            <section className="py-20 w-full table relative bg-[url('../../assets/images/hero/bg2.jpg')] bg-top bg-no-repeat bg-cover">
                <div className="absolute inset-0 bg-slate-900/70"></div>
                <div className="container relative">
                    <div className="grid grid-cols-1 text-center">
                        <h3 className="mb-4 md:text-[26px] text-2xl text-white font-medium">Get the job that's right for you</h3>

                        <p className="text-white/80 max-w-xl mx-auto">Search all the open positions on the web. Get your own personalized salary estimate. Read reviews on over 30000+ companies worldwide.</p>

                        <Link to="#" onClick={() => setOpen(true)} data-type="youtube" data-id="S_CGed6E610" className="lightbox h-20 w-20 rounded-full shadow-lg dark:shadow-gray-800 inline-flex items-center justify-center bg-white dark:bg-slate-900 text-emerald-600 mx-auto mt-10">
                            <i className="mdi mdi-play inline-flex items-center justify-center text-2xl"></i>
                        </Link>
                    </div>
                </div>
            </section>
            <section className="relative md:py-24 py-16">
                <JobCounter />
                <ModalVideo channel='youtube' autoplay isOpen={isOpen} videoId="S_CGed6E610" onClose={() => setOpen(false)} />

                <FindBestCompanies />
                <News />
            </section>
            <Footer />
        </>
    )
}

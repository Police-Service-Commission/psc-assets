
import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import CountUp from 'react-countup';
import ModalVideo from 'react-modal-video'

import Navbar from '../../components/Navbar'
import Popularjobstwo from '../../components/Popular-Jobs-two';
import Footer from '../../components/Footer';
import "../../../node_modules/react-modal-video/scss/modal-video.scss";

import hero from '../../assets/images/hero.jpg'

import BrowseByCategories from '../../components/BrowseByCategories';
import FindBestCompanies from '../../components/FindBestCompanies';
import News from '../../components/News';

export default function IndexEight() {
    const [isOpen, setOpen] = useState(false)

    return (
        <>
            <Navbar navClass='justify-end nav-light' />

            <section className="py-36 lg:py-72 lg:pb-0 md:pb-8 w-full table relative bg-[url('../../assets/images/hero/bg3.jpg')] bg-center bg-cover" id="home">
                <div className="absolute inset-0 bg-slate-900/70"></div>
                <div className="container relative">
                    <div className="grid lg:grid-cols-12 mt-10 md:grid-cols-2 gap-[30px]">
                        <div className="lg:col-span-7 lg:me-6">
                            <h4 className="text-white lg:leading-normal leading-normal text-4xl lg:text-5xl mb-5 font-bold">Find a new job and <br/> build career</h4>
                            <p className="text-white/70 text-lg max-w-xl">Find Jobs, Employment & Career Opportunities. Some of the companies we've helped recruit excellent applicants over the years.</p>
                        
                            <div className="grid grid-cols-1" id="reserve-form">
                                <div className="mt-8">
                                    <div className="bg-white dark:bg-slate-900 border-0 shadow rounded p-3">
                                        <form action="#">
                                            <div className="registration-form text-dark text-start">
                                                <div className="grid md:grid-cols-12 grid-cols-1 md:gap-0 gap-6">
                                                    <div className="lg:col-span-8 md:col-span-7">
                                                        <div className="filter-search-form relative filter-border">
                                                            <i className="uil uil-briefcase-alt icons"></i>
                                                            <input name="name" type="text" id="job-keyword" className="form-input filter-input-box bg-gray-50 dark:bg-slate-800 border-0" placeholder="Search your Keywords"/>
                                                        </div>
                                                    </div>

                                                    <div className="lg:col-span-4 md:col-span-5">
                                                        <input type="submit" id="search" name="search" style={{height: '60px'}} className="btn bg-emerald-600 hover:bg-emerald-700 border-emerald-600 hover:border-emerald-700 text-white searchbtn submit-btn w-full" value="Search"/>
                                                    </div>
                                                </div>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>

                            <div className="mt-4">
                                <span className="text-white/70"><span className="text-white">Popular Searches :</span> Designer, Developer, Web, IOS, PHP Senior Engineer</span>
                            </div>
                        </div>

                        <div className="lg:col-span-5 mt-8 md:mt-0">
                            <div className="relative z-2">
                                <div className="p-3 shadow dark:shadow-gray-700 rounded-md bg-white dark:bg-slate-900">
                                    <img src={hero} className="shadow-md rounded-md" alt=""/>
                                </div>
                                <div className="absolute bottom-2/4 translate-y-2/4 start-0 end-0 text-center">
                                    <Link to="#" onClick={() => setOpen(true)}
                                        data-type="youtube" data-id="S_CGed6E610" className="lightbox h-20 w-20 rounded-full shadow-lg dark:shadow-gray-700 inline-flex items-center justify-center bg-white dark:bg-slate-900 text-emerald-600 dark:text-white">
                                        <i className="mdi mdi-play inline-flex items-center justify-center text-2xl"></i>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <div className="relative">
                <div className="shape overflow-hidden text-white dark:text-slate-900 rtl:-scale-x-[1]">
                    <svg viewBox="0 0 2880 250" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M720 125L2160 0H2880V250H0V125H720Z" fill="currentColor"></path>
                    </svg>
                </div>
            </div>
            <div className="container md:mt-24 mt-16">
                <div className="relative grid md:grid-cols-3 grid-cols-1 items-center gap-[30px] z-1">
                    <div className="counter-box text-center">
                        <h1 className="lg:text-5xl text-4xl font-semibold mb-2 dark:text-white"><CountUp
                            start={1010}
                            end={1548}
                            duration={3}
                        />
                            K+</h1>

                        <h5 className="counter-head text-sm font-semibold text-slate-400 uppercase">Job Fulfillment</h5>
                    </div>

                    <div className="counter-box text-center">
                        <h1 className="lg:text-5xl text-4xl font-semibold mb-2 dark:text-white">
                            <CountUp
                                start={2}
                                end={25}
                                duration={3}
                            />
                            +</h1>
                        <h5 className="counter-head text-sm font-semibold text-slate-400 uppercase">Branches</h5>
                    </div>

                    <div className="counter-box text-center">
                        <h1 className="lg:text-5xl text-4xl font-semibold mb-2 dark:text-white">
                            <CountUp
                                start={0}
                                end={9}
                                duration={3}
                            />+</h1>
                        <h5 className="counter-head text-sm font-semibold text-slate-400 uppercase">Years Experience</h5>
                    </div>
                </div>
            </div>
            <Popularjobstwo />
            <BrowseByCategories/>
            <section className='md:py-24 py-16'>
                <FindBestCompanies/>  
                <News/>
            </section>
            
            <ModalVideo channel='youtube' autoplay isOpen={isOpen} videoId="S_CGed6E610" onClose={() => setOpen(false)} />
            <Footer />
        </>
    )
}

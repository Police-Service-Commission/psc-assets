import React, { useState } from 'react'
import ModalVideo from 'react-modal-video'
import "../../../node_modules/react-modal-video/scss/modal-video.scss";
import Select from 'react-select'

import facebook_logo from '../../assets/images/company/facebook-logo.png';
import google_logo from '../../assets/images/company/google-logo.png';
import android from '../../assets/images/company/android.png';
import bg6 from '../../assets/images/hero/bg6.png';
import Navbar from '../../components/Navbar'
import PopularCategories from '../../components/Popular-Categories';
import PopularJobsfour from '../../components/Popular-Jobs-four';
import BestCompanies from '../../components/Best-companies';
import Feature from '../../components/Feature';
import News from '../../components/News';
import Footer from '../../components/Footer';
import JobCounter from '../../components/Job-counter';
import {BiBriefcaseAlt2, PiMapPin,} from "../../assets/icons/vander"
import ExploreJob from '../../components/Explore-job';
import MillionsJob from '../../components/Millions-job';

const options = [
    { value: 'AF', label: 'Afghanistan' },
    { value: 'AZ', label: ' Azerbaijan' },
    { value: 'BS', label: 'Bahamas' },
    { value: 'BH', label: 'Bahrain' },
    { value: 'CA', label: 'Canada' },
    { value: 'CV', label: 'Cape Verde' },
    { value: 'DK', label: 'Denmark' },
    { value: 'DJ', label: 'Djibouti' },
    { value: 'ER', label: 'Eritrea' },
    { value: 'EE', label: 'Estonia' },
    { value: 'GM', label: 'Gambia' },
];

export default function IndexFive() {
    const [isOpen, setOpen] = useState(false)
    return (
        <>
            <Navbar navClass='justify-end' isContainerFluid={true} />
            <section className="relative table md:pt-60 pt-36 w-full bg-gradient-to-b from-emerald-600/20 dark:from-emerald-600/40 via-emerald-600/10 dark:via-emerald-600/20 to-transparent">
                <div className="container z-1">
                    <div className="grid grid-cols-1 text-center relative">
                        <h4 className="lg:leading-normal leading-normal text-4xl lg:text-5xl mb-5 font-bold">Join our world-class team <br /> of creators & dreamers</h4>
                        <p className="text-slate-400 text-lg max-w-xl mx-auto">Find Jobs, Employment & Career Opportunities. Some of the companies we've helped recruit excellent applicants over the years.</p>

                        <div className="d-flex" id="reserve-form">
                            <div className="md:w-5/6 mx-auto">
                                <div className="lg:col-span-10 mt-8">
                                    <div className="bg-white dark:bg-slate-900 border-0 shadow rounded-md p-3">
                                        <form action="#">
                                            <div className="registration-form text-dark text-start">
                                                <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 lg:gap-0 gap-6">
                                                    <div className="filter-search-form relative filter-border">
                                                        <BiBriefcaseAlt2 className="icons"/>
                                                        <input name="name" type="text" id="job-keyword" className="form-input filter-input-box bg-gray-50 dark:bg-slate-800 border-0" placeholder="Search your Keywords" />
                                                    </div>

                                                    <div className="filter-search-form relative filter-border">
                                                        <PiMapPin className="icons"/>
                                                        <Select className="form-input filter-input-box bg-gray-50 dark:bg-slate-800 border-0" options={options} />
                                                    </div>

                                                    <input type="submit" id="search" name="search" style={{ height: '60px' }} className="btn bg-emerald-600 hover:bg-emerald-700 border-emerald-600 hover:border-emerald-700 text-white searchbtn submit-btn w-100" value="Search" />
                                                </div>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="mt-4">
                            <span className="text-slate-400"><span className="text-slate-900 dark:text-white">Popular Searches :</span> Designer, Developer, Web, IOS, PHP Senior Engineer</span>
                        </div>

                        <div className="absolute -top-20 start-1/2 -translate-x-1/2">
                            <div className="w-10 h-10 animate-[bounce_2s_infinite] bg-white dark:bg-slate-900 flex items-center justify-center shadow dark:shadow-gray-700 rounded-md">
                                <img src={facebook_logo} className="h-6 w-6" alt="" />
                            </div>
                        </div>

                        <div className="absolute top-[40%] start-10">
                            <div className="w-10 h-10 animate-[spin_5s_linear_infinite] bg-white dark:bg-slate-900 flex items-center justify-center shadow dark:shadow-gray-700 rounded-md">
                                <img src={google_logo} className="h-6 w-6" alt="" />
                            </div>
                        </div>

                        <div className="absolute top-[40%] end-1">
                            <div className="w-10 h-10 bg-white dark:bg-slate-900 flex items-center justify-center shadow dark:shadow-gray-700 rounded-md">
                                <img src={android} className="h-6 w-6" alt="" />
                            </div>
                        </div>
                    </div>
                </div>

                <div className="container">
                    <div className="grid grid-cols-1">
                        <img src={bg6} alt="" />
                    </div>
                </div>
            </section>
            <section className="relative md:py-24 py-16">
                <JobCounter />
                <PopularCategories />
                <ModalVideo channel='youtube' autoplay isOpen={isOpen} videoId="S_CGed6E610" onClose={() => setOpen(false)} />
                <div className="container md:mt-24 md:pb-16 mt-16">
                    <MillionsJob/>
                </div>
            </section>

            <section className="relative md:pb-24 pb-16 overflow-hidden">
                <PopularJobsfour />
                <BestCompanies />
                <Feature />
                <News />

              <ExploreJob/>
            </section >
            <Footer />
        </>
    )
}
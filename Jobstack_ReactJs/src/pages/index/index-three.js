import React, { useState } from 'react'
import { Link } from "react-router-dom";

import ModalVideo from 'react-modal-video'
import Select from 'react-select'

import ab03 from '../../assets/images/about/ab03.jpg';
import ab02 from '../../assets/images/about/ab02.jpg';
import ab01 from '../../assets/images/about/ab01.jpg';
import woman_working_2 from '../../assets/images/svg/woman_working_2.svg';
import circle_logo from '../../assets/images/company/circle-logo.png';
import android from '../../assets/images/company/android.png';
import google_logo from '../../assets/images/company/google-logo.png';
import facebook_logo from '../../assets/images/company/facebook-logo.png';
import lenovo_logo from '../../assets/images/company/lenovo-logo.png';
import linkedin from '../../assets/images/company/linkedin.png';
import skype from '../../assets/images/company/skype.png';
import spotify from '../../assets/images/company/spotify.png';
import telegram from '../../assets/images/company/telegram.png';
import whatsapp from '../../assets/images/company/whatsapp.png';

import Navbar from '../../components/Navbar'
import Works from '../../components/How-Work';
import BrowseByCategories from '../../components/BrowseByCategories';
import Popularjobstwo from '../../components/Popular-Jobs-two';
import FindBestCompanies from '../../components/FindBestCompanies';
import News from '../../components/News';
import Footer from '../../components/Footer';

import "../../../node_modules/react-modal-video/scss/modal-video.scss";

import { BiBriefcaseAlt2, PiMapPin, BiCheckCircle,LuMail } from "../../assets/icons/vander"

const optionsOne = [
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
]

const optionsTwo = [
    { value: '1', label: 'Full Time' },
    { value: '2', label: 'Part Time' },
    { value: '3', label: 'Freelancer' },
    { value: '4', label: 'Remote Work' },
    { value: '5', label: 'Office Work' },

]
export default function IndexThree() {
    const [isOpen, setOpen] = useState(false)
    return (
        <>
            <Navbar />
            <section className="relative py-36 table w-full bg-gradient-to-b from-emerald-600/20 dark:from-emerald-600/40 via-emerald-600/10 dark:via-emerald-600/20 to-transparent">
                <div className="container">
                    <div className="grid md:grid-cols-2 grid-cols-1 items-center mt-10 gap-[30px]">
                        <div className="md:order-1 order-2">
                            <div className="bg-white dark:bg-slate-900 rounded-xl shadow dark:shadow-gray-800 md:p-8 p-6 lg:me-10 relative">
                                <h4 className="mb-3 text-3xl font-semibold">Find Your Expected Job</h4>
                                <p className="text-slate-400">Find Jobs, Employment & Career Opportunities. Some of the companies we've helped recruit excellent applicants over the years.</p>

                                <form className="mt-6">
                                    <div className="grid grid-cols-1">
                                        <div className="mb-4">
                                            <label className="form-label font-medium">Search :</label>
                                            <div className="filter-search-form relative mt-2">
                                                <BiBriefcaseAlt2 className="icons"/>
                                                <input name="name" type="text" id="job-keyword" className="form-input filter-input-box bg-gray-50 dark:bg-slate-800" placeholder="Search your Keywords" />
                                            </div>
                                        </div>

                                        <div className="mb-4">
                                            <label className="form-label font-medium">Location :</label>
                                            <div className="filter-search-form relative mt-2">
                                                <PiMapPin className="icons"/>
                                                <Select className="form-input filter-input-box bg-gray-50 dark:bg-slate-800 border-0" options={optionsOne} />

                                            </div>
                                        </div>

                                        <div className="mb-4">
                                            <label className="form-label font-medium">Job Type :</label>
                                            <div className="filter-search-form relative mt-2">
                                                <BiBriefcaseAlt2 className="icons"/>
                                                <Select className="form-input filter-input-box bg-gray-50 dark:bg-slate-800 border-0" options={optionsTwo} />

                                            </div>
                                        </div>

                                        <div>
                                            <input type="submit" id="search" name="search" className="btn bg-emerald-600 hover:bg-emerald-700 border-emerald-600 hover:border-emerald-700 text-white searchbtn submit-btn rounded-md" value="Search" />
                                        </div>
                                    </div>
                                </form>

                            </div>
                        </div>

                        <div className="md:order-2 order-1">
                            <img src={woman_working_2} alt="" />
                        </div>
                    </div>
                </div>

                <div className="container mt-16">
                    <div className="grid md:grid-cols-10 sm:grid-cols-5 grid-cols-4 justify-center gap-[30px]">
                        <div className="w-12 h-12 bg-white dark:bg-slate-900 shadow dark:shadow-gray-700 flex justify-center items-center rounded-md mx-auto py-4">
                            <img src={circle_logo} className="h-7" alt="" />
                        </div>

                        <div className="w-12 h-12 bg-white dark:bg-slate-900 shadow dark:shadow-gray-700 flex justify-center items-center rounded-md mx-auto py-4">
                            <img src={android} className="h-7" alt="" />
                        </div>

                        <div className="w-12 h-12 bg-white dark:bg-slate-900 shadow dark:shadow-gray-700 flex justify-center items-center rounded-md mx-auto py-4">
                            <img src={google_logo} className="h-7" alt="" />
                        </div>

                        <div className="w-12 h-12 bg-white dark:bg-slate-900 shadow dark:shadow-gray-700 flex justify-center items-center rounded-md mx-auto py-4">
                            <img src={facebook_logo} className="h-7" alt="" />
                        </div>

                        <div className="w-12 h-12 bg-white dark:bg-slate-900 shadow dark:shadow-gray-700 flex justify-center items-center rounded-md mx-auto py-4">
                            <img src={lenovo_logo} className="h-7" alt="" />
                        </div>

                        <div className="w-12 h-12 bg-white dark:bg-slate-900 shadow dark:shadow-gray-700 flex justify-center items-center rounded-md mx-auto py-4">
                            <img src={linkedin} className="h-7" alt="" />
                        </div>

                        <div className="w-12 h-12 bg-white dark:bg-slate-900 shadow dark:shadow-gray-700 flex justify-center items-center rounded-md mx-auto py-4">
                            <img src={skype} className="h-7" alt="" />
                        </div>

                        <div className="w-12 h-12 bg-white dark:bg-slate-900 shadow dark:shadow-gray-700 flex justify-center items-center rounded-md mx-auto py-4">
                            <img src={spotify} className="h-7" alt="" />
                        </div>

                        <div className="w-12 h-12 bg-white dark:bg-slate-900 shadow dark:shadow-gray-700 flex justify-center items-center rounded-md mx-auto py-4">
                            <img src={telegram} className="h-7" alt="" />
                        </div>

                        <div className="w-12 h-12 bg-white dark:bg-slate-900 shadow dark:shadow-gray-700 flex justify-center items-center rounded-md mx-auto py-4">
                            <img src={whatsapp} className="h-7" alt="" />
                        </div>
                    </div>
                </div>
            </section>
            <section className="relative md:py-24 py-16">
                <Works />
                <div className="container md:mt-24 mt-16">
                    <div className="grid md:grid-cols-12 grid-cols-1 items-center gap-[30px]">
                        <div className="lg:col-span-5 md:col-span-6">
                            <div className="relative">
                                <div className="grid grid-cols-12 gap-6 items-center">
                                    <div className="col-span-6">
                                        <div className="grid grid-cols-1 gap-6">
                                            <img src={ab03} className="shadow rounded-md" alt="" />
                                            <img src={ab02} className="shadow rounded-md" alt="" />
                                        </div>
                                    </div>

                                    <div className="col-span-6">
                                        <div className="grid grid-cols-1 gap-6">
                                            <img src={ab01} className="shadow rounded-md" alt="" />
                                        </div>
                                    </div>
                                </div>

                                <div className="absolute bottom-2/4 translate-y-2/4 start-0 end-0 text-center">
                                    <Link to="#" onClick={() => setOpen(true)} data-type="youtube" data-id="S_CGed6E610" className="lightbox h-20 w-20 rounded-full shadow-lg dark:shadow-gray-800 inline-flex items-center justify-center bg-white dark:bg-slate-900 text-emerald-600 dark:text-white">
                                        <i className="mdi mdi-play inline-flex items-center justify-center text-2xl"></i>
                                    </Link>
                                </div>
                            </div>
                        </div>

                        <div className="lg:col-span-7 md:col-span-6">
                            <div className="lg:ms-8">
                                <h3 className="mb-6 md:text-4xl text-3xl md:leading-normal leading-normal font-bold">Get the job of you dreams <br /> quick & easy.</h3>

                                <p className="text-slate-400 max-w-xl">Search all the open positions on the web. Get your own personalized salary estimate. Read reviews on over 30000+ companies worldwide.</p>

                                <ul className="list-none text-slate-400 mt-4">
                                    <li className="mb-1 flex items-center"><BiCheckCircle className="text-emerald-600 text-xl me-2"/> Digital Marketing Solutions for Tomorrow</li>
                                    <li className="mb-1 flex items-center"><BiCheckCircle className="text-emerald-600 text-xl me-2"/> Our Talented & Experienced Marketing Agency</li>
                                    <li className="mb-1 flex items-center"><BiCheckCircle className="text-emerald-600 text-xl me-2"/> Create your own skin to match your brand</li>
                                </ul>

                                <div className="mt-6">
                                    <Link to="/contact" className="btn bg-emerald-600 hover:bg-emerald-700 border-emerald-600 hover:border-emerald-700 text-white mt-2 rounded-md inline-flex items-center"><LuMail className="me-1"/> Contact us</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <BrowseByCategories />
                <Popularjobstwo />
            </section >
            <section className="py-20 w-full table relative bg-[url('../../assets/images/hero/bg2.jpg')] bg-top bg-no-repeat bg-cover">
                <div className="absolute inset-0 bg-slate-900/70"></div>
                <div className="container relative">
                    <div className="grid grid-cols-1 text-center">
                        <h3 className="mb-4 md:text-[26px] text-2xl text-white font-medium">Get the job that's right for you</h3>

                        <p className="text-white/80 max-w-xl mx-auto">Search all the open positions on the web. Get your own
                            personalized salary estimate. Read reviews on over 30000+ companies worldwide.</p>

                        <Link to="#" onClick={() => setOpen(true)} data-type="youtube" data-id="S_CGed6E610"
                            className="lightbox h-20 w-20 rounded-full shadow-lg dark:shadow-gray-800 inline-flex items-center justify-center bg-white dark:bg-slate-900 text-emerald-600 mx-auto mt-10">
                            <i className="mdi mdi-play inline-flex items-center justify-center text-2xl"></i>
                        </Link>
                    </div>
                </div>
            </section>
            <section className="relative md:py-24 py-16">
                <FindBestCompanies />
                <News />
            </section>
            <Footer />
            <ModalVideo channel='youtube' autoplay isOpen={isOpen} videoId="S_CGed6E610" onClose={() => setOpen(false)} />

        </>

    )
}
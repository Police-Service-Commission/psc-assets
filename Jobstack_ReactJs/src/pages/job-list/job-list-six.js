import React, { useState } from 'react'
import { Link } from "react-router-dom";
import Navbar from '../../components/Navbar'
import Feature from '../../components/Feature'
import Footer from '../../components/Footer'
import JobListCompSix from '../../components/job-list-comp-six'
import {LuSearch} from "../../assets/icons/vander"
import ExploreJob from '../../components/Explore-job';

export default function JobListSix() {
    const [selectedOption, setSelectedOption] = useState('1');

    const handleOptionChange = (event) => {
        setSelectedOption(event.target.value);
    };
    return (
        <>
            <Navbar navClass='justify-end nav-light' />


            <section className="relative table w-full py-36 bg-[url('../../assets/images/hero/bg.jpg')] bg-top bg-no-repeat bg-cover">
                <div className="absolute inset-0 bg-emerald-900/90"></div>
                <div className="container">
                    <div className="grid grid-cols-1 text-center mt-10">
                        <h3 className="md:text-3xl text-2xl md:leading-snug tracking-wide leading-snug font-medium text-white">Job Vacancies</h3>
                    </div>
                </div>

                <div className="absolute text-center z-10 bottom-5 start-0 end-0 mx-3">
                    <ul className="breadcrumb tracking-[0.5px] breadcrumb-light mb-0 inline-block">
                        <li className="inline breadcrumb-item text-[15px] font-semibold duration-500 ease-in-out text-white/50 hover:text-white"><Link to="/index">Jobstack</Link></li>
                        <li className="inline breadcrumb-item text-[15px] font-semibold duration-500 ease-in-out text-white" aria-current="page">Job Listing</li>
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
                <div className="container">
                    <div className="grid md:grid-cols-12 grid-cols-1 gap-[30px]">
                        <div className="lg:col-span-4 md:col-span-6">
                            <div className="shadow dark:shadow-gray-700 p-6 rounded-md bg-white dark:bg-slate-900 sticky top-20">
                                <form>
                                    <div className="grid grid-cols-1 gap-3">
                                        <div>
                                            <label htmlFor="searchname" className="font-semibold">Search Company</label>
                                            <div className="relative mt-2">
                                                 <LuSearch className="text-lg absolute top-[10px] start-3"/>
                                                <input name="search" id="searchname" type="text" className="form-input border border-slate-100 dark:border-slate-800 ps-10" placeholder="Search" />
                                            </div>
                                        </div>

                                        <div>
                                            <label className="font-semibold">Categories</label>
                                            <select className="form-select form-input border border-slate-100 dark:border-slate-800 block w-full mt-1">
                                                <option value="WD">Web Designer</option>
                                                <option value="WD">Web Developer</option>
                                                <option value="UI">UI / UX Desinger</option>
                                            </select>

                                        </div>

                                        <div>
                                            <label className="font-semibold">Location</label>
                                            <select className="form-select form-input border border-slate-100 dark:border-slate-800 block w-full mt-1">
                                                <option value="NY">New York</option>
                                                <option value="MC">North Carolina</option>
                                                <option value="SC">South Carolina</option>
                                            </select>
                                        </div>

                                        <div>
                                            <label className="font-semibold">Job Types</label>

                                            <div className="block mt-2">
                                                <div className="flex justify-between">
                                                    <label className="inline-flex items-center">
                                                        <input type="checkbox" className="form-checkbox rounded border-gray-200 dark:border-gray-800 text-emerald-600 focus:border-emerald-300 focus:ring focus:ring-offset-0 focus:ring-emerald-200 focus:ring-opacity-50" defaultChecked />
                                                        <span className="ms-2 text-slate-400">Full Time</span>
                                                    </label>

                                                    <span className="bg-emerald-600/10 text-emerald-600 text-xs px-2.5 py-0.5 font-semibold rounded-full h-5">3</span>
                                                </div>
                                                <div className="flex justify-between">
                                                    <label className="inline-flex items-center">
                                                        <input type="checkbox" className="form-checkbox rounded border-gray-200 dark:border-gray-800 text-emerald-600 focus:border-emerald-300 focus:ring focus:ring-offset-0 focus:ring-emerald-200 focus:ring-opacity-50" />
                                                        <span className="ms-2 text-slate-400">Part Time</span>
                                                    </label>

                                                    <span className="bg-emerald-600/10 text-emerald-600 text-xs px-2.5 py-0.5 font-semibold rounded-full h-5">7</span>
                                                </div>
                                                <div className="flex justify-between">
                                                    <label className="inline-flex items-center">
                                                        <input type="checkbox" className="form-checkbox rounded border-gray-200 dark:border-gray-800 text-emerald-600 focus:border-emerald-300 focus:ring focus:ring-offset-0 focus:ring-emerald-200 focus:ring-opacity-50" />
                                                        <span className="ms-2 text-slate-400">Freelancing</span>
                                                    </label>

                                                    <span className="bg-emerald-600/10 text-emerald-600 text-xs px-2.5 py-0.5 font-semibold rounded-full h-5">4</span>
                                                </div>
                                                <div className="flex justify-between">
                                                    <label className="inline-flex items-center">
                                                        <input type="checkbox" className="form-checkbox rounded border-gray-200 dark:border-gray-800 text-emerald-600 focus:border-emerald-300 focus:ring focus:ring-offset-0 focus:ring-emerald-200 focus:ring-opacity-50" />
                                                        <span className="ms-2 text-slate-400">Fixed Price</span>
                                                    </label>

                                                    <span className="bg-emerald-600/10 text-emerald-600 text-xs px-2.5 py-0.5 font-semibold rounded-full h-5">6</span>
                                                </div>
                                                <div className="flex justify-between">
                                                    <label className="inline-flex items-center">
                                                        <input type="checkbox" className="form-checkbox rounded border-gray-200 dark:border-gray-800 text-emerald-600 focus:border-emerald-300 focus:ring focus:ring-offset-0 focus:ring-emerald-200 focus:ring-opacity-50" />
                                                        <span className="ms-2 text-slate-400">Remote</span>
                                                    </label>

                                                    <span className="bg-emerald-600/10 text-emerald-600 text-xs px-2.5 py-0.5 font-semibold rounded-full h-5">7</span>
                                                </div>
                                                <div className="flex justify-between">
                                                    <label className="inline-flex items-center">
                                                        <input type="checkbox" className="form-checkbox rounded border-gray-200 dark:border-gray-800 text-emerald-600 focus:border-emerald-300 focus:ring focus:ring-offset-0 focus:ring-emerald-200 focus:ring-opacity-50" />
                                                        <span className="ms-2 text-slate-400">Hourly Basis</span>
                                                    </label>

                                                    <span className="bg-emerald-600/10 text-emerald-600 text-xs px-2.5 py-0.5 font-semibold rounded-full h-5">44</span>
                                                </div>

                                            </div>

                                        </div>

                                        <div>
                                            <label className="font-semibold">Salary</label>
                                            <div className="block mt-2">
                                                <div>
                                                    <label className="inline-flex items-center">
                                                        <input type="radio"
                                                            className="form-radio border-gray-200 dark:border-gray-800 text-emerald-600 focus:border-emerald-300 focus:ring focus:ring-offset-0 focus:ring-emerald-200 focus:ring-opacity-50"
                                                            name="radio-colors" value="1"
                                                            defaultChecked={selectedOption === '1'}
                                                            onChange={handleOptionChange}
                                                        />
                                                        <span className="ms-2 text-slate-400">10k - 15k</span>
                                                    </label>
                                                </div>
                                                <div>
                                                    <label className="inline-flex items-center">
                                                        <input type="radio"
                                                            className="form-radio border-gray-200 dark:border-gray-800 text-emerald-600 focus:border-emerald-300 focus:ring focus:ring-offset-0 focus:ring-emerald-200 focus:ring-opacity-50"
                                                            name="radio-colors" value="2" defaultChecked={selectedOption === '2'}
                                                            onChange={handleOptionChange} />
                                                        <span className="ms-2 text-slate-400">15k - 25k</span>
                                                    </label>
                                                </div>
                                                <div>
                                                    <label className="inline-flex items-center">
                                                        <input type="radio"
                                                            className="form-radio border-gray-200 dark:border-gray-800 text-emerald-600 focus:border-emerald-300 focus:ring focus:ring-offset-0 focus:ring-emerald-200 focus:ring-opacity-50"
                                                            name="radio-colors" value="3" defaultChecked={selectedOption === '3'}
                                                            onChange={handleOptionChange} />
                                                        <span className="ms-2 text-slate-400">more than 25K</span>
                                                    </label>
                                                </div>
                                            </div>
                                        </div>

                                        <div>
                                            <input type="submit" className="btn bg-emerald-600 hover:bg-emerald-700 border-emerald-600 hover:border-emerald-700 text-white rounded-md w-full" value="Apply Filter" />
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                        <JobListCompSix />
                    </div>
                </div>


                <Feature />

                <ExploreJob/>
            </section>
            <Footer />





        </>
    )
}

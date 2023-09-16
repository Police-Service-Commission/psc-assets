import React from 'react'
import { Link } from "react-router-dom";
import {LuMapPin} from "../assets/icons/vander"

import { jobData } from '../data/data';

import {MdOutlineArrowForward} from "../assets/icons/vander"

export default function Jobs() {
    return (

        <section className="relative bg-slate-50 dark:bg-slate-800 md:py-24 py-16">
            <div className="container">
                <div className="grid grid-cols-1 pb-8 text-center">
                    <h3 className="mb-4 md:text-[26px] md:leading-normal text-2xl leading-normal font-semibold">Popular Jobs</h3>

                    <p className="text-slate-400 max-w-xl mx-auto">Search all the open positions on the web. Get your own personalized salary estimate. Read reviews on over 30000+ companies worldwide.</p>
                </div>

                <div className="grid lg:grid-cols-3 md:grid-cols-2 mt-8 gap-[30px]">

                    {jobData.slice(0,6).map((item, index) => (
                        <div className="group shadow dark:shadow-gray-700 p-6 rounded-md bg-white dark:bg-slate-900" key={index}>
                            <div className="flex items-center justify-between">
                                <div className="flex items-center">
                                    <div className="w-14 h-14 flex items-center justify-center bg-white dark:bg-slate-900 shadow dark:shadow-gray-700 rounded-md">
                                        <img src={item.image} className="h-8 w-8" alt="" />
                                    </div>

                                    <div className="ms-3">
                                        <Link to={`/employer-detail/${item.id}`} className="block text-[16px] font-semibold hover:text-emerald-600 transition-all duration-500">{item.title}</Link>
                                        <span className="block text-sm text-slate-400">{item.day}</span>
                                    </div>
                                </div>

                                <span className="bg-emerald-600/10 group-hover:bg-emerald-600 inline-block text-emerald-600 group-hover:text-white text-xs px-2.5 py-0.5 font-semibold rounded-full transition-all duration-500">{item.jobtype}</span>
                            </div>

                            <div className="mt-6">
                                <Link to={`/job-detail-two/${item.id}`} className="text-lg hover:text-emerald-600 font-semibold transition-all duration-500">{item.heading}</Link>
                                <h6 className="text-base font-medium flex items-center"><LuMapPin className='me-1'/>{item.Location}</h6>
                            </div>

                            <div className="mt-6">
                                <div className="w-full bg-gray-100 dark:bg-gray-800 rounded-full h-[6px]">
                                    <div className="bg-emerald-600 h-[6px] rounded-full" style={{ width: '55%' }}></div>
                                </div>
                                <div className="mt-2">
                                    <span className="text-slate-400 text-sm"><span className="text-slate-900 dark:text-white font-semibold inline-block">21 applied</span> of 40 vacancy</span>
                                </div>
                            </div>
                        </div>
                    ))}

                </div>

                <div className="grid md:grid-cols-12 grid-cols-1 mt-8">
                    <div className="md:col-span-12 text-center">
                        <Link to="/job-grid-two" className="btn btn-link text-slate-400 hover:text-emerald-600 after:bg-emerald-600 duration-500 ease-in-out inline-flex items-center">See More Jobs <MdOutlineArrowForward className='ms-1 align-middle'/></Link>
                    </div>
                </div>
            </div>
        </section>

    )
}

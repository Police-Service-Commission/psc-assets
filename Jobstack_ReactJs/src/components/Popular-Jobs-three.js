import React from 'react'
import { Link } from "react-router-dom";
import {MdOutlineArrowForward, AiOutlineClockCircle, BiDollarCircle} from "../assets/icons/vander"

import { jobData } from '../data/data';

export default function PopularJobsThree() {
    return (
        <div>

            <div className="container md:mt-24 mt-16">
                <div className="grid grid-cols-1 pb-8 text-center">
                    <h3 className="mb-4 md:text-[26px] md:leading-normal text-2xl leading-normal font-semibold">Popular Jobs</h3>

                    <p className="text-slate-400 max-w-xl mx-auto">Search all the open positions on the web. Get your own personalized salary estimate. Read reviews on over 30000+ companies worldwide.</p>
                </div>

                <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 mt-8 gap-[30px]">

                    {jobData.slice(0,6).map((item, index) => (
                        <div className="group relative overflow-hidden rounded-md shadow dark:shadow-gray-800" key={index} >
                            <div className="p-6">
                                <Link to={`/job-detail-two/${item.id}`}className="title h5 text-lg font-semibold hover:text-emerald-600">{item.heading}</Link>
                                <p className="text-slate-400 mt-2 flex items-center"><AiOutlineClockCircle className="text-emerald-600 me-1"/>{item.day}</p>

                                <div className="flex justify-between items-center mt-4">
                                    <span className="bg-emerald-600/5 text-emerald-600 text-xs font-bold px-2.5 py-0.5 rounded h-5">{item.date}</span>

                                    <p className="text-slate-400 flex items-center"><BiDollarCircle className="text-emerald-600 me-2"/>{item.price}/mo</p>
                                </div>
                            </div>

                            <Link to={`/employer-detail/${item.id}`} className="flex items-center p-6 border-t border-gray-100 dark:border-gray-700">
                                <img src={item.image} className="h-12 w-12 shadow-md dark:shadow-gray-800 rounded-md p-2 bg-white dark:bg-slate-900" alt="" />

                                <div className="ms-3">
                                    <h6 className="mb-0 font-semibold text-base">{item.title} Ltd.</h6>
                                    <span className="text-slate-400 text-sm">{item.Location}</span>
                                </div>
                            </Link>
                        </div>
                    ))}
                </div>

                <div className="grid md:grid-cols-12 grid-cols-1 mt-8">
                    <div className="md:col-span-12 text-center">
                        <Link to="/job-grid-two" className="btn btn-link text-slate-400 hover:text-emerald-600 after:bg-emerald-600 duration-500 ease-in-out items-center inline-flex">See More Jobs <MdOutlineArrowForward className ="ms-1"/></Link>
                    </div>
                </div>
            </div>
        </div>
    )
}



import React from 'react'
import { Link } from "react-router-dom";
import {PiMapPin, MdOutlineArrowForward, FiArrowUpRight, BiDollarCircle} from "../assets/icons/vander"
// index-six //
import { jobData } from '../data/data';

export default function PopularJobssix() {
    return (
        <div>
            <section>
                <div className="container md:mt-24 mt-16">
                    <div className="grid grid-cols-1 pb-8 text-center">
                        <h3 className="mb-4 md:text-[26px] md:leading-normal text-2xl leading-normal font-semibold">Popular Jobs</h3>

                        <p className="text-slate-400 max-w-xl mx-auto">Search all the open positions on the web. Get your own personalized salary estimate. Read reviews on over 30000+ companies worldwide.</p>
                    </div>

                    <div className="grid md:grid-cols-2 mt-8 gap-[30px]" >


                        {jobData.slice(0,6).map((item, index) => (
                            <div className="group rounded-lg shadow hover:shadow-lg dark:shadow-gray-700 transition-all duration-500" key={index}>
                                <div className="flex items-center justify-between p-6">
                                    <div className="flex items-center">
                                        <div className="w-14 h-14 flex items-center justify-center bg-white dark:bg-slate-900 shadow dark:shadow-gray-700 rounded-md">
                                            <img src={item.image} className="h-8 w-8" alt="" />
                                        </div>

                                        <div className="ms-3">
                                            <Link to={`/employer-detail/${item.id}`} className="block text-[16px] font-semibold hover:text-emerald-600 transition-all duration-500">{item.title}</Link>
                                            <span className="block text-sm text-slate-400">{item.day}</span>
                                        </div>
                                    </div>

                                    <Link to="/job-apply" className="btn btn-icon btn-lg rounded-full bg-emerald-600/5 group-hover:bg-emerald-600 border border-slate-100 dark:border-slate-800 text-emerald-600 group-hover:text-white"><FiArrowUpRight/></Link>
                                </div>

                                <div className="lg:flex items-center justify-between border-t border-gray-100 dark:border-gray-800 p-6">
                                    <div>
                                        <Link to={`/job-detail-one/${item.id}`} className="text-lg font-semibold hover:text-emerald-600">{item.heading}</Link>
                                        <p className="text-slate-400 mt-1">{item.detail}</p>
                                    </div>

                                    <p className="text-slate-400 lg:mt-0 mt-4 flex items-center"><BiDollarCircle className="text-[20px] text-emerald-600 me-1"/>{item.price}</p>
                                </div>

                                <div className="px-6 py-2 bg-slate-50 dark:bg-slate-800 flex justify-between items-center">
                                    <div>
                                        <span className="inline-block font-semibold"><i className="mdi mdi-check-decagram mdi-18px text-blue-500 me-1"></i>{item.verify}</span>
                                        <ul className="list-none inline-block ms-1 text-yellow-400 space-x-0.5">
                                            <li className="inline"><i className="mdi mdi-star text-lg"></i></li>
                                            <li className="inline"><i className="mdi mdi-star text-lg"></i></li>
                                            <li className="inline"><i className="mdi mdi-star text-lg"></i></li>
                                            <li className="inline"><i className="mdi mdi-star text-lg"></i></li>
                                            <li className="inline"><i className="mdi mdi-star text-lg"></i></li>
                                            <li className="inline text-slate-400 font-semibold">4.8</li>
                                        </ul>
                                    </div>
                                    <span className="inline-flex items-center me-1 text-slate-400"><PiMapPin className="text-[18px] text-slate-900 dark:text-white me-1"/>{item.Location}</span>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="grid md:grid-cols-12 grid-cols-1 mt-8">
                        <div className="md:col-span-12 text-center">
                            <Link to="/job-list-five" className="btn btn-link text-slate-400 hover:text-emerald-600 after:bg-emerald-600 duration-500 ease-in-out items-center inline-flex">See More Jobs <MdOutlineArrowForward className='ms-1'/></Link>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}
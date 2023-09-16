import ab03 from '../assets/images/about/ab03.jpg';
import ab04 from '../assets/images/about/ab04.jpg';
import React, { useState } from 'react'
import { Link } from "react-router-dom";
import ModalVideo from 'react-modal-video'
import "../../node_modules/react-modal-video/scss/modal-video.scss";

import { companiesData } from '../data/data';

import {MdOutlineArrowForward} from "../assets/icons/vander"

export default function BestCompanies() {
    const [isOpen, setOpen] = useState(false)

    return (

        <div className="container md:mt-24 md:pb-16 mt-16">
            <div className="grid md:grid-cols-12 grid-cols-1 items-center gap-[30px]">
                <div className="lg:col-span-5 md:col-span-6 md:order-2 order-1">
                    <div className="relative">
                        <div className="relative flex justify-end">
                            <img src={ab03} className="lg:w-[400px] w-[280px] rounded-md shadow dark:shadow-gray-700" alt="" />
                            <div className="absolute top-0 translate-y-2/4 start-0 text-center">
                                <Link to="#" onClick={() => setOpen(true)} data-id="S_CGed6E610" className="lightbox h-20 w-20 rounded-full shadow-lg dark:shadow-gray-700 inline-flex items-center justify-center bg-white dark:bg-slate-900 text-emerald-600 dark:text-white">
                                    <i className="mdi mdi-play inline-flex items-center justify-center text-2xl"></i>
                                </Link>
                            </div>
                        </div>
                        <div className="absolute md:-start-5 start-0 -bottom-16">
                            <img src={ab04} className="lg:w-[280px] w-[200px] border-8 border-white dark:border-slate-900 rounded-md shadow dark:shadow-gray-700" alt="" />
                        </div>
                    </div>
                </div>
                <ModalVideo channel='youtube' autoplay isOpen={isOpen} videoId="S_CGed6E610" onClose={() => setOpen(false)} />


                <div className="lg:col-span-7 md:col-span-6 mt-14 md:mt-0 md:order-1 order-2">
                    <div className="lg:me-5">
                        <h3 className="mb-6 md:text-[26px] text-2xl md:leading-normal leading-normal font-semibold">Find Best Companies.</h3>

                        <p className="text-slate-400 max-w-xl">Search all the open positions on the web. Get your own personalized salary estimate. Read reviews on over 30000+ companies worldwide.</p>

                        <div className="grid md:grid-cols-2 grid-cols-1 gap-6 mt-8">
                            {companiesData.slice(0,6).map((item, index) => (
                                <div className="p-3 rounded shadow dark:shadow-gray-700 bg-slate-50 dark:bg-slate-800" key={index}>
                                    <div className="flex items-center">
                                        <div className="w-12 h-12 flex items-center justify-center bg-white dark:bg-slate-900 shadow dark:shadow-gray-700 rounded-md">
                                            <img src={item.image} className="h-8 w-8" alt="" />
                                        </div>
                                        <div className="ms-3">
                                            <Link to={`/employer-detail/${item.id}`} className="block text-[16px] font-semibold hover:text-emerald-600 transition-all duration-500">{item.title}</Link>
                                            <span className="block text-sm text-emerald-600">{item.vacancy} Vacancy</span>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>

                        <div className="grid md:grid-cols-12 grid-cols-1 mt-6">
                            <div className="md:col-span-12">
                                <Link to="#" className="flex items-center btn btn-link text-slate-400 hover:text-emerald-600 after:bg-emerald-600 duration-500 ease-in-out">See More Companies <MdOutlineArrowForward className='ms-2'/></Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

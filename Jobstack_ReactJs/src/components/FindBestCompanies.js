import "../../node_modules/react-modal-video/scss/modal-video.scss";
import React, { useState } from 'react'
import ModalVideo from 'react-modal-video'
import { Link } from "react-router-dom";

import { companiesData } from '../data/data';

import {LuMapPin, MdOutlineArrowForward} from "../assets/icons/vander"

export default function FindBestCompanies() {
    const [isOpen, setOpen] = useState(false)
    return (
        <>
            <ModalVideo channel='youtube' autoplay isOpen={isOpen} videoId="S_CGed6E610" onClose={() => setOpen(false)} />

            <div className="container">
                <div className="grid grid-cols-1 pb-8 text-center">
                    <h3 className="mb-4 md:text-[26px] md:leading-normal text-2xl leading-normal font-semibold">Find Best Companies</h3>

                    <p className="text-slate-400 max-w-xl mx-auto">Search all the open positions on the web. Get your own personalized salary estimate. Read reviews on over 30000+ companies worldwide.</p>
                </div>
                <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 mt-8 gap-[30px]">
                    {companiesData.slice(0,8).map((item, index) => (
                        <div className="group relative p-6 rounded-md shadow dark:shadow-gray-700 mt-6" key={index}>
                            <div className="w-14 h-14 flex items-center justify-center bg-white dark:bg-slate-900 shadow-md dark:shadow-gray-700 rounded-md relative -mt-12">
                                <img src={item.image} className="h-8 w-8" alt="" />
                            </div>

                            <div className="mt-4">
                                <Link to={`/employer-detail/${item.id}`} className="text-lg hover:text-emerald-600 font-semibold">{item.title}</Link>
                                <p className="text-slate-400 mt-2">{item.desc}</p>
                            </div>

                            <div className="mt-4 pt-4 border-t border-gray-100 dark:border-gray-700 flex justify-between">
                                <span className="text-slate-400 flex items-center"><LuMapPin className="me-1"/> {item.country}</span>
                                <span className="block font-semibold text-emerald-600">{item.vacancy} Jobs</span>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="grid md:grid-cols-12 grid-cols-1 mt-6">
                    <div className="md:col-span-12 text-center">
                        <Link to="#" className="btn btn-link text-slate-400 hover:text-emerald-600 after:bg-emerald-600 duration-500 ease-in-out inline-flex items-center">See More Companies <MdOutlineArrowForward className='ms-1'/></Link>
                    </div>
                </div>
            </div>

        </>
    )
}



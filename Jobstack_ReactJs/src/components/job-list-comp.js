import React from 'react'
import { Link } from "react-router-dom";
import { Bookmark } from 'react-feather';
import {LuMapPin,AiOutlineClockCircle,AiOutlineStar} from "../assets/icons/vander"
import { jobData } from '../data/data';
export default function JobListComp() {
   
    return (
        <>

            <div className="container mt-10">
                <div className="grid grid-cols-1 gap-[30px]">
                    {jobData.map((item, index) => (
                        <div className="group relative overflow-hidden md:flex justify-between items-center rounded shadow hover:shadow-md dark:shadow-gray-700 transition-all duration-500 p-5" key={index}>
                            <div className="flex items-center">
                                <div className="w-14 h-14 flex items-center justify-center bg-white dark:bg-slate-900 shadow dark:shadow-gray-700 rounded-md">
                                    <img src={item.image} className="h-8 w-8" alt="" />
                                </div>
                                <Link to="/job-detail-two" className="text-lg hover:text-emerald-600 font-semibold transition-all duration-500 ms-3 min-w-[180px]">{item.title}</Link>
                            </div>

                            <div className="md:block flex justify-between md:mt-0 mt-4">
                                <span className="block"><span className="bg-emerald-600/10 inline-block text-emerald-600 text-xs px-2.5 py-0.5 font-semibold rounded-full">"{item.jobtype}</span></span>
                                <span className="flex items-center text-slate-400 text-sm md:mt-1 mt-0"><AiOutlineClockCircle className='me-1'/>{item.date}</span>
                            </div>

                            <div className="md:block flex justify-between md:mt-0 mt-2">
                                <span className="text-slate-400 flex items-center"><LuMapPin className='me-1'/>{item.Location}</span>
                                <span className="block font-semibold md:mt-1 mt-0">{item.price}</span>
                            </div>

                            <div className="md:mt-0 mt-4">
                                <Link to="#" className="btn btn-icon rounded-full bg-emerald-600/5 hover:bg-emerald-600 border-emerald-600/10 hover:border-emerald-600 text-emerald-600 hover:text-white md:relative absolute top-0 end-0 md:m-0 m-3"><Bookmark className="h-4 w-4"></Bookmark></Link>
                                <Link to="/job-apply" className="btn rounded-md bg-emerald-600 hover:bg-emerald-700 border-emerald-600 hover:border-emerald-700 text-white md:ms-2 w-full md:w-auto">{item.apply}</Link>
                            </div>

                            {item.rating === true ? <span className="w-24 text-white p-1 text-center absolute ltr:-rotate-45 rtl:rotate-45 -start-[30px] top-3 bg-yellow-400 flex justify-center"><AiOutlineStar/></span> :""}
                        </div>
                    ))}



                </div>
            </div>
        </>
    )
}

import React from 'react'
import { Link } from "react-router-dom";
import {MdOutlineArrowForward, MdOutlineCalendarMonth, AiOutlineClockCircle} from "../assets/icons/vander"
import { blogData } from '../data/data';

export default function News() {
    
    return (
        <div className="container md:mt-24 mt-16">
            <div className="grid grid-cols-1 pb-8 text-center">
                <h3 className="mb-4 md:text-[26px] md:leading-normal text-2xl leading-normal font-semibold">Latest Blog or News</h3>

                <p className="text-slate-400 max-w-xl mx-auto">Search all the open positions on the web. Get your own personalized salary estimate. Read reviews on over 30000+ companies worldwide.</p>
            </div>

            <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 mt-8 gap-[30px]">
                {blogData.slice(0,3).map((item, index) => (
                    <div key={index} className="group relative overflow-hidden bg-white dark:bg-slate-900 rounded-md shadow dark:shadow-gray-700">
                        <div className="relative overflow-hidden">
                            <img src={item.image} className="scale-110 group-hover:scale-100 transition-all duration-500" alt="" />
                        </div>

                        <div className="relative p-6">
                            <div className="absolute start-6 -top-4">
                                <span className="bg-emerald-600 text-white text-[12px] px-2.5 py-1 font-semibold rounded-full h-5">{item.title}</span>
                            </div>

                            <div className="">
                                <div className="flex mb-4">
                                    <span className="text-slate-400 text-sm flex items-center"><MdOutlineCalendarMonth  className="text-slate-900 dark:text-white me-2"/>{item.date}</span>
                                    <span className="text-slate-400 text-sm ms-3 flex items-center"><AiOutlineClockCircle className="text-slate-900 dark:text-white me-2"/><i ></i>{item.time}</span>
                                </div>

                                <Link to={`/blog-detail/${item.id}`} className="title text-lg font-semibold hover:text-emerald-600 duration-500 ease-in-out">{item.headline}</Link>

                                <div className="flex justify-between items-center mt-3">
                                    <Link to={`/blog-detail/${item.id}`} className="btn btn-link hover:text-emerald-600 after:bg-emerald-600 duration-500 ease-in-out items-center inline-flex">Read More <MdOutlineArrowForward className="ms-1"/></Link>
                                    <span className="text-slate-400 text-sm">by <Link to="#" className="text-slate-900 dark:text-white hover:text-emerald-600 dark:hover:text-emerald-600 font-medium">{item.powerdby}</Link></span>
                                </div>
                            </div>
                        </div>
                    </div>


                ))}
            </div>
        </div>
    )
}

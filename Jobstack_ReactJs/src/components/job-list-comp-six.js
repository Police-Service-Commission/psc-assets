import React from 'react'
import { Link } from "react-router-dom";
import {LuMapPin, MdKeyboardArrowLeft,MdKeyboardArrowRight, FiArrowUpRight, BiDollarCircle} from "../assets/icons/vander"

import { jobData } from '../data/data';

export default function JobListCompSix() {
    return (
        <>
            <div className="lg:col-span-8 md:col-span-6">
                <div className="grid grid-cols-1 gap-[30px]">
                    {jobData.map((item, index) => (
                        <div className="group rounded-lg shadow hover:shadow-lg dark:shadow-gray-700 transition-all duration-500" key={index}>
                            <div className="flex items-center justify-between p-6">
                                <div className="flex items-center">
                                    <div className="w-14 h-14 flex items-center justify-center bg-white dark:bg-slate-900 shadow dark:shadow-gray-700 rounded-md">
                                        <img src={item.image} className="h-8 w-8" alt="" />
                                    </div>

                                    <div className="ms-3">
                                        <Link to="/employer-detail" className="block text-[16px] font-semibold hover:text-emerald-600 transition-all duration-500">{item.title}</Link>
                                        <span className="block text-sm text-slate-400">{item.day}</span>
                                    </div>
                                </div>

                                <Link to="/job-apply" className="btn btn-icon btn-lg rounded-full bg-emerald-600/5 group-hover:bg-emerald-600 border border-slate-100 dark:border-slate-800 text-emerald-600 group-hover:text-white"><FiArrowUpRight/></Link>
                            </div>

                            <div className="lg:flex items-center justify-between border-t border-gray-100 dark:border-gray-800 p-6">
                                <div>
                                    <Link to="/job-detail-one" className="text-lg font-semibold hover:text-emerald-600">{item.heading}</Link>
                                    <p className="text-slate-400 mt-1">{item.detail}</p>
                                </div>

                                <p className="text-slate-400 lg:mt-0 mt-4 flex items-center"><BiDollarCircle className="text-[20px] text-emerald-600"/>{item.price}</p>
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
                                        <li className="inline text-slate-400 font-semibold">{item.rating}4.8</li>
                                    </ul>
                                </div>
                                <span className="inline-flex items-center me-1 text-slate-400"><LuMapPin className="text-[18px] text-slate-900 dark:text-white me-1"/>{item.Location}</span>
                            </div>
                        </div>
                    ))}

                </div>

                <div className="grid md:grid-cols-12 grid-cols-1 mt-8">
                    <div className="md:col-span-12 text-center">
                        <nav aria-label="Page navigation example">
                            <ul className="inline-flex items-center -space-x-px">
                                <li>
                                    <Link to="#" className="w-[40px] h-[40px] inline-flex justify-center items-center text-slate-400 bg-white dark:bg-slate-900 rounded-s-3xl hover:text-white border border-gray-100 dark:border-gray-800 hover:border-emerald-600 dark:hover:border-emerald-600 hover:bg-emerald-600 dark:hover:bg-emerald-600">
                                        <MdKeyboardArrowLeft className="text-[20px] rtl:rotate-180 rtl:-mt-1"/>
                                    </Link>
                                </li>
                                <li>
                                    <Link to="#" className="w-[40px] h-[40px] inline-flex justify-center items-center text-slate-400 hover:text-white bg-white dark:bg-slate-900 border border-gray-100 dark:border-gray-800 hover:border-emerald-600 dark:hover:border-emerald-600 hover:bg-emerald-600 dark:hover:bg-emerald-600">1</Link>
                                </li>
                                <li>
                                    <Link to="#" className="w-[40px] h-[40px] inline-flex justify-center items-center text-slate-400 hover:text-white bg-white dark:bg-slate-900 border border-gray-100 dark:border-gray-800 hover:border-emerald-600 dark:hover:border-emerald-600 hover:bg-emerald-600 dark:hover:bg-emerald-600">2</Link>
                                </li>
                                <li>
                                    <Link to="#" aria-current="page" className="z-10 w-[40px] h-[40px] inline-flex justify-center items-center text-white bg-emerald-600 border border-emerald-600">3</Link>
                                </li>
                                <li>
                                    <Link to="#" className="w-[40px] h-[40px] inline-flex justify-center items-center text-slate-400 hover:text-white bg-white dark:bg-slate-900 border border-gray-100 dark:border-gray-800 hover:border-emerald-600 dark:hover:border-emerald-600 hover:bg-emerald-600 dark:hover:bg-emerald-600">4</Link>
                                </li>
                                <li>
                                    <Link to="#" className="w-[40px] h-[40px] inline-flex justify-center items-center text-slate-400 hover:text-white bg-white dark:bg-slate-900 border border-gray-100 dark:border-gray-800 hover:border-emerald-600 dark:hover:border-emerald-600 hover:bg-emerald-600 dark:hover:bg-emerald-600">5</Link>
                                </li>
                                <li>
                                    <Link to="#" className="w-[40px] h-[40px] inline-flex justify-center items-center text-slate-400 bg-white dark:bg-slate-900 rounded-e-3xl hover:text-white border border-gray-100 dark:border-gray-800 hover:border-emerald-600 dark:hover:border-emerald-600 hover:bg-emerald-600 dark:hover:bg-emerald-600">
                                        <MdKeyboardArrowRight className="text-[20px] rtl:rotate-180 rtl:-mt-1"/>
                                    </Link>
                                </li>
                            </ul>
                        </nav>
                    </div>
                </div>
            </div>

        </>
    )
}

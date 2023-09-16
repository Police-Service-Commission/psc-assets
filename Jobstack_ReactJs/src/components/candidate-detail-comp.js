import React from 'react'
import { Link } from "react-router-dom";
import {TbBrandHipchat, AiOutlineStar} from "../assets/icons/vander"
import { CandidateList } from '../data/data';

export default function CandidateDetailComp() {
   
    return (
        <>
            <section className="relative md:pt-24 pt-16">
                <div className="container">
                    <div className="grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-[30px]">


                        {CandidateList.slice(0,4).map((item, index) => (
                            <div className="group bg-white dark:bg-slate-900 relative overflow-hidden rounded-md shadow dark:shadow-gray-700 text-center p-6" key={index}>
                                <img src={item.image} className="h-20 w-20 rounded-full shadow dark:shadow-gray-700 mx-auto" alt="" />

                                <div className="mt-2">
                                    <Link to={`/candidate-profile/${item.id}`} className="hover:text-emerald-600 font-semibold text-lg">{item.title}</Link>
                                    <p className="text-sm text-slate-400">{item.title}</p>
                                </div>

                                <ul className="mt-2 list-none space-x-0.5">
                                    <li className="inline"><span className="bg-emerald-600/10 inline-block text-emerald-600 text-xs px-2.5 py-0.5 font-semibold rounded-full">{item.deta1}</span></li>
                                    <li className="inline"><span className="bg-emerald-600/10 inline-block text-emerald-600 text-xs px-2.5 py-0.5 font-semibold rounded-full">{item.deta2}</span></li>
                                    <li className="inline"><span className="bg-emerald-600/10 inline-block text-emerald-600 text-xs px-2.5 py-0.5 font-semibold rounded-full">{item.deta3}</span></li>
                                </ul>

                                <div className="flex justify-between mt-2">
                                    <div className="block">
                                        <span className="text-slate-400">{item.Salery}</span>
                                        <span className="block text-sm font-semibold">{item.price}</span>
                                    </div>
                                    <div className="block">
                                        <span className="text-slate-400">{item.Experience}</span>
                                        <span className="block text-sm font-semibold">{item.year}</span>
                                    </div>
                                </div>

                                <div className="mt-3">
                                    <Link to={`/candidate-profile/${item.id}`} className="btn btn-sm bg-emerald-600 hover:bg-emerald-700 border-emerald-600 dark:border-emerald-600 text-white rounded-md">{item.Profile}</Link>
                                    <Link to="#" className="btn btn-sm btn-icon bg-emerald-600/5 hover:bg-emerald-600 border-emerald-600/10 hover:border-emerald-600 text-emerald-600 hover:text-white rounded-full ms-1">
                                        <TbBrandHipchat className="text-[20px]"/>
                                        </Link>
                                </div>

                                <span className="w-24 text-white p-1 text-center absolute ltr:-rotate-45 rtl:rotate-45 -start-[30px] top-3 bg-yellow-400 flex justify-center"><AiOutlineStar/></span>

                                <span className="absolute top-[10px] end-4">
                                    <Link to="#" className="text-slate-100 dark:text-slate-700 focus:text-red-600 dark:focus:text-red-600 hover:text-red-600 dark:hover:text-red-600 text-2xl"><i className="mdi mdi-heart"></i></Link>
                                </span>
                            </div>
                        ))}

                    </div>
                </div>
            </section>
        </>
    )
}

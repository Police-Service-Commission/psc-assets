//  index-five     //
import React from 'react'
import { Link } from 'react-router-dom';
import {AiOutlineGitlab, VscBook, AiOutlinePieChart, VscFeedback,RiPresentationFill} from "../assets/icons/vander"

export default function PopularCategories() {
    const Categories = [
        {
            icon: AiOutlineGitlab,
            title: 'Business Development',
            jobs: '74 Jobs'
        },
        {
            icon: VscBook,
            title: 'Marketing & Communication',
            jobs: '20 Jobs'
        },
        {
            icon: AiOutlinePieChart,
            title: 'Project Management',
            jobs: '35 Jobs'
        },
        {
            icon: VscFeedback,
            title: 'Customer Service',
            jobs: '46 Jobs'
        },
        {
            icon: RiPresentationFill,
            title: 'Software Engineering',
            jobs: '60 Jobs'
        }
    ];

    return (
        <div className="container md:mt-24 mt-16">
            <div className="grid grid-cols-1 pb-8 text-center">
                <h3 className="mb-4 md:text-[26px] md:leading-normal text-2xl leading-normal font-semibold">Popular Categories</h3>

                <p className="text-slate-400 max-w-xl mx-auto">Search all the open positions on the web. Get your own personalized salary estimate. Read reviews on over 30000+ companies worldwide.</p>
            </div>
            <div className="grid lg:grid-cols-5 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 mt-8 gap-[30px]">
                {Categories.map((item, index) => {
                    let Icon = item.icon
                    return(
                        <div className="group px-3 py-10 rounded-full shadow dark:shadow-gray-700 hover:shadow-emerald-600/10 dark:hover:shadow-emerald-600/10 text-center bg-white dark:bg-slate-900 hover:bg-emerald-600/5 dark:hover:bg-emerald-600/5 transition duration-500" key={index} >
                            <div className="w-16 h-16 bg-emerald-600/5 group-hover:bg-emerald-600 text-emerald-600 group-hover:text-white rounded-full text-2xl flex align-middle justify-center items-center shadow-sm dark:shadow-gray-700 transition duration-500 mx-auto">
                                <Icon/>
                            </div>
    
                            <div className="content mt-6">
                                <Link to="#" className="title text-lg font-semibold hover:text-emerald-600">{item.title}</Link>
                                <p className="text-slate-400 mt-3">{item.jobs}</p>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

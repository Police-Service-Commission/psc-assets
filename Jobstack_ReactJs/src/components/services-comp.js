import React from 'react'
import { Link } from 'react-router-dom'
import {MdOutlineArrowForward, BsTelephone, FaAtom, FiUserCheck, IoMdHourglass, BsBriefcase, TbUsersGroup} from "../assets/icons/vander"

export default function ServicesComp() {
    const ServicesComp = [
        {
            icon: BsTelephone,
            title: '24/7 Support',
            data: 'Many desktop publishing now use and a search for job'
        },
        {
            icon: FaAtom,
            title: 'Tech & Startup Jobs',
            data: 'Many desktop publishing now use and a search for job'
        },
        {
            icon: FiUserCheck,
            title: 'Quick & Easy',
            data: 'Many desktop publishing now use and a search for job'
        },
        {
            icon: IoMdHourglass,
            title: 'Save Time',
            data: 'Many desktop publishing now use and a search for job'
        },
        {
            icon: FiUserCheck,
            title: 'Apply with confidence',
            data: 'Many desktop publishing now use and a search for job'
        },
        {
            icon: FiUserCheck,
            title: 'Reduce Hiring Bias',
            data: 'Many desktop publishing now use and a search for job'
        },
        {
            icon: BsBriefcase,
            title: 'Proactive Employers',
            data: 'Many desktop publishing now use and a search for job'
        },
        {
            icon: TbUsersGroup,
            title: 'No Missed Opportunities',
            data: 'Many desktop publishing now use and a search for job'
        },
    ]
    return (
        <>


            <div className="container">
                <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-[30px]">

                    {ServicesComp.map((item, index) => {
                        let Icon =  item.icon
                        return(
                                <div key={index} className="group p-6 shadow dark:shadow-gray-700 rounded-md bg-white hover:bg-emerald-600/5 dark:bg-slate-900 dark:hover:bg-emerald-600/10 text-center transition-all duration-500">
                                    <div className="w-16 h-16 flex items-center justify-center mx-auto bg-emerald-600/5 group-hover:bg-emerald-600 dark:bg-emerald-600/10 dark:group-hover:bg-emerald-600 shadow dark:shadow-gray-700 rounded-lg transition-all duration-500">
                                        <Icon className="text-[30px] text-emerald-600 group-hover:text-white"/>
                                    </div>
        
                                    <div className="mt-4">
                                        <Link to="#" className="text-lg font-semibold hover:text-emerald-600 transition-all duration-500">{item.title}</Link>
        
                                        <p className="text-slate-400 mt-3 mb-2">{item.data}</p>
        
                                        <Link to="#" className="hover:text-emerald-600 font-medium transition-all duration-500 items-center inline-flex">Read More <MdOutlineArrowForward className="ms-1"/></Link>
                                    </div>
                                </div>
                           
                        )
                    })}

                </div>
            </div>

        </>
    )
}

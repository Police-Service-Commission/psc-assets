import circle_logo from '../assets/images/company/circle-logo.png';
import telegram from '../assets/images/company/telegram.png';
import whatsapp from '../assets/images/company/whatsapp.png';
import spotify from '../assets/images/company/spotify.png';
import React from 'react'
import { Link } from 'react-router-dom';
import {LuMapPin} from "../assets/icons/vander"

export default function EmployerDetailComp() {
    const EmployerDetailComp = [
        {
            image: circle_logo,
            title: 'Circle CI',
            headline: 'Digital Marketing Solutions for Tomorrow',
            country: ' Pakistan',
            job: '6 Jobs'
        },
        {
            image: telegram,
            title: 'Telegram',
            headline: 'Digital Marketing Solutions for Tomorrow',
            country: ' India',
            job: '6 Jobs'
        },
        {
            image: whatsapp,
            title: 'Whatsapp',
            headline: 'Digital Marketing Solutions for Tomorrow',
            country: '  Rush',
            job: '6 Jobs'
        },
        {
            image: spotify,
            title: 'Spotify',
            headline: 'Digital Marketing Solutions for Tomorrow',
            country: 'Turkey',
            job: '6 Jobs'
        }
    ]

    return (
        <>

            <div className="container lg:mt-24 mt-16">
                <div className="grid grid-cols-1 pb-8 text-center">
                    <h3 className="mb-4 md:text-[26px] md:leading-normal text-2xl leading-normal font-semibold">Related Companies</h3>

                    <p className="text-slate-400 dark:text-slate-300 max-w-xl mx-auto">Search all the open positions on the web. Get your own personalized salary estimate. Read reviews on over 30000+ companies worldwide.</p>
                </div>

                <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-[30px] mt-8">
                    {EmployerDetailComp.map((item, index) => (
                        <div className="group relative p-6 rounded-md shadow dark:shadow-gray-700 mt-6" key={index}>
                            <div className="w-14 h-14 flex items-center justify-center bg-white dark:bg-slate-900 shadow-md dark:shadow-gray-700 rounded-md relative -mt-12">
                                <img src={item.image} className="h-8 w-8" alt="" />
                            </div>

                            <div className="mt-4">
                                <Link to="#" className="text-lg hover:text-emerald-600 font-semibold">{item.title}</Link>
                                <p className="text-slate-400 mt-2">{item.headline}</p>
                            </div>

                            <div className="mt-4 pt-4 border-t border-gray-100 dark:border-gray-700  justify-between flex items-center">
                                <span className="text-slate-400 flex items-center"><LuMapPin className='me-1'/>{item.country}</span>
                                <span className="block font-semibold text-emerald-600">{item.job}</span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}


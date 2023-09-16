import React, { useState } from 'react'
import { Link } from "react-router-dom";
import Navbar from '../../components/Navbar'
import ExploreJob from '../../components/Explore-job'
import Footer from '../../components/Footer';
import {MdOutlineArrowForward, BsQuestionCircle, BsJournalBookmark, HiOutlineCog6Tooth} from "../../assets/icons/vander"

export default function Overview() {
    const accordionData = [
        {
            title: 'How does it work ?',
            content: 'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form.'
        },
        {
            title: 'Do I need a designer to use Jobstack ?',
            content: 'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form.'
        },
        {
            title: 'What do I need to do to start selling ?',
            content: 'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form.'
        },
        {
            title: 'What happens when I receive an order ?',
            content: 'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form.'
        }
    ]
    const [activeIndex, setActiveIndex] = useState(0);

    const toggleAccordion = (index) => {
        if (activeIndex === index) {
            setActiveIndex(null);
        } else {
            setActiveIndex(index);
        }
    };

    const aboutData = [
        {
            icon : BsQuestionCircle,
            title: "FAQs",
            desc : "The phrasal sequence of the is now so that many campaign and benefit"
        },
        {
            icon : BsJournalBookmark,
            title: "Guides / Support",
            desc : "The phrasal sequence of the is now so that many campaign and benefit"
        },
        {
            icon : HiOutlineCog6Tooth,
            title: "Support Request",
            desc : "The phrasal sequence of the is now so that many campaign and benefit"
        },
    ]
    return (
        <>
            <Navbar navClass='justify-end nav-light' />
            <section className="relative table w-full py-36 bg-[url('../../assets/images/hero/bg.jpg')] bg-top bg-no-repeat bg-cover">
                <div className="absolute inset-0 bg-emerald-900/90"></div>
                <div className="container">
                    <div className="grid grid-cols-1 pb-8 text-center mt-10">
                        <h3 className="mb-6 md:text-4xl text-3xl md:leading-snug leading-snug font-semibold text-white">Hello ! <br /> How can we help you?</h3>

                        <div className="text-center subcribe-form mt-4 pt-2">
                            <form className="relative mx-auto max-w-xl">
                                <input type="text" id="help" name="name" className="pt-4 pe-40 pb-4 ps-6 w-full h-[50px] outline-none text-slate-900 dark:text-white rounded-full bg-white/70 dark:bg-slate-900/70 shadow dark:shadow-gray-800" placeholder="Search your questions or topic..." />
                                <button type="submit" className="btn absolute top-[2px] end-[3px] h-[46px] bg-emerald-600 hover:bg-emerald-700 border-emerald-600 hover:border-emerald-700 text-white rounded-full">Search</button>
                            </form>
                        </div>
                    </div>
                </div>

                <div className="absolute text-center z-10 bottom-5 start-0 end-0 mx-3">
                    <ul className="breadcrumb tracking-[0.5px] breadcrumb-light mb-0 inline-block">
                        <li className="inline breadcrumb-item text-[15px] font-semibold duration-500 ease-in-out text-white/50 hover:text-white"><Link to="/index">Jobstack</Link></li>
                        <li className="inline breadcrumb-item text-[15px] font-semibold duration-500 ease-in-out text-white" aria-current="page">Helpcenter</li>
                    </ul>
                </div>
            </section>
            <div className="relative">
                <div className="shape absolute start-0 end-0 sm:-bottom-px -bottom-[2px] overflow-hidden z-1 text-white dark:text-slate-900">
                    <svg className="w-full h-auto" viewBox="0 0 2880 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M0 48H1437.5H2880V0H2160C1442.5 52 720 0 720 0H0V48Z" fill="currentColor"></path>
                    </svg>
                </div>
            </div>

            <section className="relative md:py-24 py-16">
                <div className="container">
                    <div className="grid grid-cols-1 pb-8 text-center">
                        <h3 className="mb-4 md:text-3xl text-2xl md:leading-snug leading-snug font-semibold">Find The Help You Need</h3>

                        <p className="text-slate-400 max-w-xl mx-auto">We are a huge marketplace dedicated to connecting great artists of all Jobstack with their fans and unique token collectors!</p>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 mt-6 gap-[30px]">
                        {aboutData.map((item,index)=>{
                            let Icon = item.icon
                            return(
                                <div className="text-center px-6 mt-6" key={index}>
                                    <div className="w-14 h-14 bg-emerald-600/5 text-emerald-600 rounded-xl text-2xl flex align-middle justify-center items-center mx-auto shadow-sm dark:shadow-gray-800">
                                        <Icon/>
                                    </div>

                                    <div className="content mt-7">
                                        <Link to="/helpcenter-faqs" className="title h5 text-lg font-semibold hover:text-emerald-600">{item.title}</Link>
                                        <p className="text-slate-400 mt-3">{item.desc}</p>

                                        <div className="mt-5">
                                            <Link to="/helpcenter-faqs" className="btn btn-link text-emerald-600 hover:text-emerald-600 after:bg-emerald-600 duration-500 ease-in-out items-center inline-flex">Read More <MdOutlineArrowForward className="ms-1"/></Link>
                                        </div>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </div>

                <div className="container md:mt-24 mt-16">
                    <div className="grid grid-cols-1 pb-8 text-center">
                        <h3 className="mb-4 md:text-3xl text-2xl md:leading-snug leading-snug font-semibold">Get Started</h3>

                        <p className="text-slate-400 max-w-xl mx-auto">We are a huge marketplace dedicated to connecting great artists of all Jobstack with their fans and unique token collectors!</p>
                    </div>

                    <div className="flex justify-center mt-8">
                        <div className="lg:w-2/3">
                            <div id="accordion-collapseone" data-accordion="collapse" className="mt-6">
                                {accordionData.map((item, index) => (
                                    <div key={index} className={`relative shadow dark:shadow-gray-700 rounded-md overflow-hidden mt-4`}>
                                        <h2 className="text-base font-medium">
                                            <button onClick={() => toggleAccordion(index)} type="button" className={`flex justify-between items-center p-5 w-full font-medium text-left ${activeIndex === index ? 'text-emerald-500 bg-gray-50 dark:bg-slate-800' : ''} `} data-accordion-target="#accordion-collapse-body-1" aria-expanded="true" aria-controls="accordion-collapse-body-1">
                                                <span>{item.title}</span>
                                                <svg data-accordion-icon className={`w-4 h-4 shrink-0 ${activeIndex === index ? 'rotate-180' : ''}`} fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                                    <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd"></path>
                                                </svg>
                                            </button>
                                        </h2>
                                        {activeIndex === index && (
                                            <div aria-labelledby="accordion-collapse-heading-1">
                                                <div className="p-5">
                                                    <p className="text-slate-400 dark:text-gray-400">{item.content}</p>
                                                </div>
                                            </div>
                                        )}
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>

                <ExploreJob />
            </section>

            <Footer />
        </>
    )
}

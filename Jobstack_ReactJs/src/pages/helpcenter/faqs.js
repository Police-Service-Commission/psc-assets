import React, { useState } from 'react'
import { Link } from "react-router-dom";
import { Link as Link2 } from 'react-scroll';
import Navbar from '../../components/Navbar'
import ExploreJob from '../../components/Explore-job'
import Footer from '../../components/Footer';

export default function Faqs() {
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
    const [activeGeneral, setGeneralIndex] = useState(0);
    const [activePayment, setPaymentIndex] = useState(0);
    const [activeSupport, setSupportIndex] = useState(0);

    const toggleAccordion = (index) => {
        if (activeIndex === index) {
            setActiveIndex(null);
        } else {
            setActiveIndex(index);
        }
    };

    const toggleGeneral = (index) => {
        if (activeGeneral === index) {
            setGeneralIndex(null);
        } else {
            setGeneralIndex(index);
        }
    };

    const togglePayment = (index) => {
        if (activePayment === index) {
            setPaymentIndex(null);
        } else {
            setPaymentIndex(index);
        }
    };

    const toggleSupport = (index) => {
        if (activeSupport === index) {
            setSupportIndex(null);
        } else {
            setSupportIndex(index);
        }
    };

    return (
        <>
            <Navbar navClass='justify-end nav-light' />
            <section className="relative table w-full py-36 bg-[url('../../assets/images/hero/bg.jpg')] bg-top bg-no-repeat bg-cover">
                <div className="absolute inset-0 bg-emerald-900/90"></div>
                <div className="container">
                    <div className="grid grid-cols-1 text-center mt-10">
                        <h3 className="md:text-3xl text-2xl md:leading-snug tracking-wide leading-snug font-medium text-white">Frequently Asked Questions</h3>

                    </div>
                </div>

                <div className="absolute text-center z-10 bottom-5 start-0 end-0 mx-3">
                    <ul className="breadcrumb tracking-[0.5px] breadcrumb-light mb-0 inline-block">
                        <li className="inline breadcrumb-item text-[15px] font-semibold duration-500 ease-in-out text-white/50 hover:text-white"><Link to="/index">Jobstack</Link></li>
                        <li className="inline breadcrumb-item text-[15px] font-semibold duration-500 ease-in-out text-white/50 hover:text-white"><Link to="/helpcenter-overview">Helpcenter</Link></li>
                        <li className="inline breadcrumb-item text-[15px] font-semibold duration-500 ease-in-out text-white" aria-current="page">FAQs</li>
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
                    <div className="grid md:grid-cols-12 grid-cols-1 gap-[30px]">
                        <div className="lg:col-span-4 md:col-span-5">
                            <div className="rounded-md shadow dark:shadow-gray-800 p-6 sticky top-20">
                                <ul className="list-none sidebar-nav mb-0 py-0" id="navmenu-nav">
                                    <li className="navbar-item p-0"><Link2 to="tech" spy={true} activeClass="active"
                                        smooth={true} className="text-base font-medium navbar-link">Buying Questions</Link2></li>
                                    <li className="navbar-item mt-3 p-0"><Link2 to="general" spy={true} activeClass="active"
                                        smooth={true}  className="text-base font-medium navbar-link">General Questions</Link2></li>
                                    <li className="navbar-item mt-3 p-0"><Link2 to="payment" spy={true} activeClass="active"
                                        smooth={true}  className="text-base font-medium navbar-link">Payments Questions</Link2></li>
                                    <li className="navbar-item mt-3 p-0"><Link2 to="support" spy={true} activeClass="active"
                                        smooth={true} className="text-base font-medium navbar-link">Support Questions</Link2></li>
                                </ul>
                            </div>
                        </div>

                        <div className="lg:col-span-8 md:col-span-7">
                            <div id="tech">
                                <h5 className="text-2xl font-semibold">Buying Product</h5>

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

                            <div id="general" className="mt-8">
                                <h5 className="text-2xl font-semibold">General Questions</h5>

                                <div id="accordion-collapsetwo" data-accordion="collapse" className="mt-6">
                                    {accordionData.map((item, index) => (
                                        <div key={index} className={`relative shadow dark:shadow-gray-700 rounded-md overflow-hidden mt-4`}>
                                            <h2 className="text-base font-medium">
                                                <button onClick={() => toggleGeneral(index)} type="button" className={`flex justify-between items-center p-5 w-full font-medium text-left ${activeGeneral === index ? 'text-emerald-500 bg-gray-50 dark:bg-slate-800' : ''} `} data-accordion-target="#accordion-collapse-body-1" aria-expanded="true" aria-controls="accordion-collapse-body-1">
                                                    <span>{item.title}</span>
                                                    <svg data-accordion-icon className={`w-4 h-4 shrink-0 ${activeGeneral === index ? 'rotate-180' : ''}`} fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                                        <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd"></path>
                                                    </svg>
                                                </button>
                                            </h2>
                                            {activeGeneral === index && (
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

                            <div id="payment" className="mt-8">
                                <h5 className="text-2xl font-semibold">Payments Questions</h5>

                                <div id="accordion-collapsethree" data-accordion="collapse" className="mt-6">
                                    {accordionData.map((item, index) => (
                                        <div key={index} className={`relative shadow dark:shadow-gray-700 rounded-md overflow-hidden mt-4`}>
                                            <h2 className="text-base font-medium">
                                                <button onClick={() => togglePayment(index)} type="button" className={`flex justify-between items-center p-5 w-full font-medium text-left ${activePayment === index ? 'text-emerald-500 bg-gray-50 dark:bg-slate-800' : ''} `} data-accordion-target="#accordion-collapse-body-1" aria-expanded="true" aria-controls="accordion-collapse-body-1">
                                                    <span>{item.title}</span>
                                                    <svg data-accordion-icon className={`w-4 h-4 shrink-0 ${activePayment === index ? 'rotate-180' : ''}`} fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                                        <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd"></path>
                                                    </svg>
                                                </button>
                                            </h2>
                                            {activePayment === index && (
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

                            <div id="support" className="mt-8">
                                <h5 className="text-2xl font-semibold">Support Questions</h5>

                                <div id="accordion-collapsefour" data-accordion="collapse" className="mt-6">
                                    {accordionData.map((item, index) => (
                                        <div key={index} className={`relative shadow dark:shadow-gray-700 rounded-md overflow-hidden mt-4`}>
                                            <h2 className="text-base font-medium">
                                                <button onClick={() => toggleSupport(index)} type="button" className={`flex justify-between items-center p-5 w-full font-medium text-left ${activeSupport === index ? 'text-emerald-500 bg-gray-50 dark:bg-slate-800' : ''} `} data-accordion-target="#accordion-collapse-body-1" aria-expanded="true" aria-controls="accordion-collapse-body-1">
                                                    <span>{item.title}</span>
                                                    <svg data-accordion-icon className={`w-4 h-4 shrink-0 ${activeSupport === index ? 'rotate-180' : ''}`} fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                                        <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd"></path>
                                                    </svg>
                                                </button>
                                            </h2>
                                            {activeSupport === index && (
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
                </div>

                <ExploreJob />
            </section>
            <Footer />
        </>
    )
}

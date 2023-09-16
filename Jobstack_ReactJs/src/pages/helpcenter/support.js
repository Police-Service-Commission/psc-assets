import React from 'react'
import { Link } from "react-router-dom";
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'
import { Book, Mail, MessageCircle, User } from 'react-feather';
import {MdOutlineArrowForward, BsQuestionCircle, BsJournalBookmark, HiOutlineCog6Tooth} from "../../assets/icons/vander"

export default function Support() {
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
                    <div className="grid grid-cols-1 text-center mt-10">
                        <h3 className="md:text-3xl text-2xl md:leading-snug tracking-wide leading-snug font-medium text-white">Submit Your Support Request</h3>

                    </div>
                </div>

                <div className="absolute text-center z-10 bottom-5 start-0 end-0 mx-3">
                    <ul className="breadcrumb tracking-[0.5px] breadcrumb-light mb-0 inline-block">
                        <li className="inline breadcrumb-item text-[15px] font-semibold duration-500 ease-in-out text-white/50 hover:text-white"><Link to="/index">Jobstack</Link></li>
                        <li className="inline breadcrumb-item text-[15px] font-semibold duration-500 ease-in-out text-white/50 hover:text-white"><Link to="/helpcenter-overview">Helpcenter</Link></li>
                        <li className="inline breadcrumb-item text-[15px] font-semibold duration-500 ease-in-out text-white" aria-current="page">Support</li>
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
                    <div className="grid md:grid-cols-12 grid-cols-1 gap-[30px] mx-auto text-center">
                        <div className="lg:col-start-3 lg:col-span-8 md:col-start-2 md:col-span-10">
                            <div className="bg-white dark:bg-slate-900 rounded-md shadow dark:shadow-gray-800 p-6">
                                <form>
                                    <div className="grid lg:grid-cols-12 lg:gap-6">
                                        <div className="lg:col-span-6 mb-5">
                                            <div className="text-left">
                                                <label htmlFor="name" className="font-semibold">Your Name:</label>
                                                <div className="form-icon relative mt-2">
                                                    <User className="w-4 h-4 absolute top-3 start-4"></User>
                                                    <input name="name" id="name" type="text" className="form-input ps-11" placeholder="Name :" />
                                                </div>
                                            </div>
                                        </div>

                                        <div className="lg:col-span-6 mb-5">
                                            <div className="text-left">
                                                <label htmlFor="email" className="font-semibold">Your Email:</label>
                                                <div className="form-icon relative mt-2">
                                                    <Mail className="w-4 h-4 absolute top-3 start-4"></Mail>
                                                    <input name="email" id="email" type="email" className="form-input ps-11" placeholder="Email :" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="grid grid-cols-1">
                                        <div className="mb-5">
                                            <div className="text-left">
                                                <label htmlFor="subject" className="font-semibold">Your Question:</label>
                                                <div className="form-icon relative mt-2">
                                                    <Book className="w-4 h-4 absolute top-3 start-4"></Book>
                                                    <input name="subject" id="subject" className="form-input ps-11" placeholder="Subject :" />
                                                </div>
                                            </div>
                                        </div>

                                        <div className="mb-5">
                                            <div className="text-left">
                                                <label htmlFor="comments" className="font-semibold">Your Comment:</label>
                                                <div className="form-icon relative mt-2">
                                                    <MessageCircle className="w-4 h-4 absolute top-3 start-4"></MessageCircle>
                                                    <textarea name="comments" id="comments" className="form-input ps-11 h-28" placeholder="Message :"></textarea>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <button type="submit" id="submit" name="send" className="btn bg-emerald-600 hover:bg-emerald-700 border-emerald-600 hover:border-emerald-700 text-white rounded-md justify-center flex items-center">Send Message</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="container md:mt-24 mt-16">
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
            </section>
            <Footer />
        </>
    )
}

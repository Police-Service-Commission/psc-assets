import React from 'react'
import Navbar from '../../components/Navbar'
import JobDetailComp from '../../components/job-detail-comp'
import Footer from '../../components/Footer'
import { Link,useParams } from "react-router-dom";
import { Book, Briefcase, Clock, DollarSign, MapPin, Monitor, UserCheck } from 'react-feather';
import {MdOutlineArrowForward} from "react-icons/md"
import ExploreJob from '../../components/Explore-job';
import { jobData } from '../../data/data';

export default function JobDetailOne() {
    const params = useParams();
    const id = params.id
    const data = jobData.find((jobs) => jobs.id === parseInt (id));
    return (
        <>
            <Navbar navClass='justify-end nav-light' />
            <section className="relative table w-full py-36 bg-[url('../../assets/images/hero/bg.jpg')] bg-top bg-no-repeat bg-cover">
                <div className="absolute inset-0 bg-emerald-900/90"></div>
                <div className="container">
                    <div className="grid grid-cols-1 text-center mt-10">
                        {data?.heading ?  <h3 className="md:text-3xl text-2xl md:leading-snug tracking-wide leading-snug font-medium text-white">{data?.heading}</h3>: <h3 className="md:text-3xl text-2xl md:leading-snug tracking-wide leading-snug font-medium text-white">Back-End Developer</h3>}

                    </div>
                </div>

                <div className="absolute text-center z-10 bottom-5 start-0 end-0 mx-3">
                    <ul className="breadcrumb tracking-[0.5px] breadcrumb-light mb-0 inline-block">
                        <li className="inline breadcrumb-item text-[15px] font-semibold duration-500 ease-in-out text-white/50 hover:text-white"><Link to="/index">Jobstack</Link></li>
                        <li className="inline breadcrumb-item text-[15px] font-semibold duration-500 ease-in-out text-white/50 hover:text-white"><Link to="/job-grid-two">Jobs</Link></li>
                        <li className="inline breadcrumb-item text-[15px] font-semibold duration-500 ease-in-out text-white" aria-current="page">Job Detail</li>
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
                        <div className="lg:col-span-4 md:col-span-6">
                            <div className="shadow dark:shadow-gray-700 rounded-md bg-white dark:bg-slate-900 sticky top-20">
                                <div className="p-6">
                                    <h5 className="text-lg font-semibold">Job Information</h5>
                                </div>
                                <div className="p-6 border-t border-slate-100 dark:border-t-gray-700">
                                    <ul className="list-none">
                                        <li className="flex items-center">
                                            <UserCheck className="h-5 w-5"></UserCheck>

                                            <div className="ms-4">
                                                <p className="font-medium">Employee Type:</p>
                                                <span className="text-emerald-600 font-medium text-sm">{data?.jobtype ? data?.jobtype : "Full Time" }</span>
                                            </div>
                                        </li>

                                        <li className="flex items-center mt-3">
                                            <MapPin className="h-5 w-5"></MapPin>

                                            <div className="ms-4">
                                                <p className="font-medium">Location:</p>
                                                <span className="text-emerald-600 font-medium text-sm">{data?.Location ? data?.Location :"Australia" }</span>
                                            </div>
                                        </li>

                                        <li className="flex items-center mt-3">
                                            <Monitor className="h-5 w-5"></Monitor>

                                            <div className="ms-4">
                                                <p className="font-medium">Job Type:</p>
                                                <span className="text-emerald-600 font-medium text-sm">{data?.heading ? data?.heading :"Web Designer / Developer"}</span>
                                            </div>
                                        </li>

                                        <li className="flex items-center mt-3">
                                            <Briefcase className="h-5 w-5"></Briefcase>

                                            <div className="ms-4">
                                                <p className="font-medium">Experience:</p>
                                                <span className="text-emerald-600 font-medium text-sm">2+ years</span>
                                            </div>
                                        </li>

                                        <li className="flex items-center mt-3">
                                            <Book className="h-5 w-5"></Book>

                                            <div className="ms-4">
                                                <p className="font-medium">Qualifications:</p>
                                                <span className="text-emerald-600 font-medium text-sm">MCA</span>
                                            </div>
                                        </li>

                                        <li className="flex items-center mt-3">
                                            <DollarSign className="h-5 w-5"></DollarSign>

                                            <div className="ms-4">
                                                <p className="font-medium">Salary:</p>
                                                <span className="text-emerald-600 font-medium text-sm">{data?.price ? data?.price :'$4000 - $4500'}</span>
                                            </div>
                                        </li>

                                        <li className="flex items-center mt-3">
                                            <Clock className="h-5 w-5"></Clock>

                                            <div className="ms-4">
                                                <p className="font-medium">Date posted:</p>
                                                <span className="text-emerald-600 font-medium text-sm">28th Feb, 2023</span>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        <div className="lg:col-span-8 md:col-span-6">
                            <h5 className="text-lg font-semibold">Job Description:</h5>

                            <p className="text-slate-400 mt-4">One disadvantage of Lorum Ipsum is that in Latin certain letters appear more frequently than others - which creates a distinct visual impression. Moreover, in Latin only words at the beginning of sentences are capitalized.</p>
                            <p className="text-slate-400 mt-4">This means that Lorem Ipsum cannot accurately represent, for example, German, in which all nouns are capitalized. Thus, Lorem Ipsum has only limited suitability as a visual filler for German texts. If the fill text is intended to illustrate the characteristics of different typefaces.</p>
                            <p className="text-slate-400 mt-4">It sometimes makes sense to select texts containing the various letters and symbols specific to the output language.</p>

                            <h5 className="text-lg font-semibold mt-6">Responsibilities and Duties: </h5>
                            <p className="text-slate-400 mt-4">It sometimes makes sense to select texts containing the various letters and symbols specific to the output language.</p>
                            <ul className="list-none">
                                <li className="text-slate-400 mt-2 inline-flex items-center"><MdOutlineArrowForward className="text-emerald-600 me-1"/>Participate in requirements analysis</li>
                                <li className="text-slate-400 mt-2 inline-flex items-center"><MdOutlineArrowForward className="text-emerald-600 me-1"/>Write clean, scalable code using C# and .NET frameworks</li>
                                <li className="text-slate-400 mt-2 inline-flex items-center"><MdOutlineArrowForward className="text-emerald-600 me-1"/>Test and deploy applications and systems</li>
                                <li className="text-slate-400 mt-2 inline-flex items-center"><MdOutlineArrowForward className="text-emerald-600 me-1"/>Revise, update, refactor and debug code</li>
                                <li className="text-slate-400 mt-2 inline-flex items-center"><MdOutlineArrowForward className="text-emerald-600 me-1"/>Improve existing software</li>
                                <li className="text-slate-400 mt-2 inline-flex items-center"><MdOutlineArrowForward className="text-emerald-600 me-1"/>Develop documentation throughout the software development life cycle (SDLC)</li>
                                <li className="text-slate-400 mt-2 inline-flex items-center"><MdOutlineArrowForward className="text-emerald-600 me-1"/>Serve as an expert on applications and provide technical support</li>
                            </ul>

                            <h5 className="text-lg font-semibold mt-6">Required Experience, Skills and Qualifications: </h5>
                            <p className="text-slate-400 mt-4">It sometimes makes sense to select texts containing the various letters and symbols specific to the output language.</p>
                            <ul className="list-none">
                                <li className="text-slate-400 mt-2 inline-flex items-center"><MdOutlineArrowForward className="text-emerald-600 me-1"/>Proven experience as a .NET Developer or Application Developer</li>
                                <li className="text-slate-400 mt-2 inline-flex items-center"><MdOutlineArrowForward className="text-emerald-600 me-1"/>good understanding of SQL and Relational Databases, specifically Microsoft SQL Server.</li>
                                <li className="text-slate-400 mt-2 inline-flex items-center"><MdOutlineArrowForward className="text-emerald-600 me-1"/>Experience designing, developing and creating RESTful web services and APIs</li>
                                <li className="text-slate-400 mt-2 inline-flex items-center"><MdOutlineArrowForward className="text-emerald-600 me-1"/>Basic know how of Agile process and practices</li>
                                <li className="text-slate-400 mt-2 inline-flex items-center"><MdOutlineArrowForward className="text-emerald-600 me-1"/>Good understanding of object-oriented programming.</li>
                                <li className="text-slate-400 mt-2 inline-flex items-center"><MdOutlineArrowForward className="text-emerald-600 me-1"/>Good understanding of concurrent programming.</li>
                                <li className="text-slate-400 mt-2 inline-flex items-center"><MdOutlineArrowForward className="text-emerald-600 me-1"/>Sound knowledge of application architecture and design.</li>
                                <li className="text-slate-400 mt-2 inline-flex items-center"><MdOutlineArrowForward className="text-emerald-600 me-1"/>Excellent problem solving and analytical skills</li>
                            </ul>

                            <div className="mt-5">
                                <Link to="/job-apply" className="btn rounded-md bg-emerald-600 hover:bg-emerald-700 border-emerald-600 hover:border-emerald-700 text-white md:ms-2 w-full md:w-auto">Apply Now</Link>
                            </div>
                        </div>
                    </div>
                </div>
                <JobDetailComp />
                <ExploreJob/>
            </section>
            <Footer />
        </>
    )
}
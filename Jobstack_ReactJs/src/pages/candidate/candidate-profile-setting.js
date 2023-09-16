import React from 'react'
import Navbar from '../../components/Navbar';
import bg5 from "../../assets/images/hero/bg5.jpg"
import team1 from "../../assets/images/team/01.jpg"
import { Link } from 'react-router-dom';
import { Twitter, Facebook, Instagram, Linkedin ,Youtube } from 'react-feather';
export default function CandidateProfileSetting(){

    return(
       <>
         <Navbar/>
         <section className="relative lg:mt-24 mt-[74px] pb-16">
            <div className="lg:container container-fluid">
                <div className="profile-banner relative text-transparent">
                    <input id="pro-banner" name="profile-banner" type="file" className="hidden" />
                    <div className="relative shrink-0">
                        <img src={bg5} className="h-64 w-full object-cover lg:rounded-xl shadow dark:shadow-gray-700" id="profile-banner" alt=""/>
                        <label className="absolute inset-0 cursor-pointer" htmlFor="pro-banner"></label>
                    </div>
                </div>
                <div className="md:flex mx-4 -mt-12">
                    <div className="md:w-full">
                        <div className="relative flex items-end">
                            <div className="profile-pic text-center">
                                <input id="pro-img" name="profile-image" type="file" className="hidden"/>
                                <div>
                                    <div className="relative h-28 w-28 max-w-[112px] max-h-[112px] mx-auto">
                                        <img src={team1} className="rounded-full shadow dark:shadow-gray-800 ring-4 ring-slate-50 dark:ring-slate-800" id="profile-image" alt=""/>
                                        <label className="absolute inset-0 cursor-pointer" htmlFor="pro-img"></label>
                                    </div>
                                </div>
                            </div>
                            <div className="ms-4">
                                <h5 className="text-lg font-semibold">Mr. Calvin carlo</h5>
                                <p className="text-slate-400">Web Designer</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container mt-16">
                <div className="grid grid-cols-1 gap-[30px]">
                    <div className="p-6 rounded-md shadow dark:shadow-gray-800 bg-white dark:bg-slate-900">
                        <h5 className="text-lg font-semibold mb-4">Personal Detail :</h5>
                        <form>
                            <div className="grid lg:grid-cols-2 grid-cols-1 gap-4">
                                <div>
                                    <label className="form-label font-medium">First Name : <span className="text-red-600">*</span></label>
                                    <input type="text" className="form-input border border-slate-100 dark:border-slate-800 mt-2" placeholder="First Name:" id="firstname" name="name" required=""/>
                                </div>
                                <div>
                                    <label className="form-label font-medium">Last Name : <span className="text-red-600">*</span></label>
                                    <input type="text" className="form-input border border-slate-100 dark:border-slate-800 mt-2" placeholder="Last Name:" id="lastname" name="name" required=""/>
                                </div>
                                <div>
                                    <label className="form-label font-medium">Your Email : <span className="text-red-600">*</span></label>
                                    <input type="email" className="form-input border border-slate-100 dark:border-slate-800 mt-2" placeholder="Email" name="email" required=""/>
                                </div>
                                <div>
                                    <label className="form-label font-medium">Occupation :</label>
                                    <select className="form-select form-input border border-slate-100 dark:border-slate-800 block w-full mt-2">
                                        <option value="WD">Web Designer</option>
                                        <option value="WD">Web Developer</option>
                                        <option value="UI">UI / UX Desinger</option>
                                    </select>
                                </div>
                                <div>
                                    <label className="form-label font-medium">Location :</label>
                                    <select className="form-select form-input border border-slate-100 dark:border-slate-800 block w-full mt-2">
                                        <option value="NY">New York</option>
                                        <option value="MC">North Carolina</option>
                                        <option value="SC">South Carolina</option>
                                    </select>
                                </div>
                                <div>
                                    <label className="form-label font-medium" htmlFor="multiple_files">Upload Resume:</label>
                                    <input className="relative form-input border border-slate-100 dark:border-slate-800 file:h-10 file:-mx-3 file:-my-2 file:cursor-pointer file:rounded-none file:border-0 file:px-3 file:text-neutral-700 bg-clip-padding px-3 py-1.5 file:me-3 mt-2" id="multiple_files" type="file" multiple />
                                </div>
                            </div>

                            <div className="grid grid-cols-1">
                                <div className="mt-5">
                                    <label className="form-label font-medium">Intro : </label>
                                    <textarea name="comments" id="comments" className="form-input border border-slate-100 dark:border-slate-800 mt-2 textarea" placeholder="Intro :"></textarea>
                                </div>
                            </div>

                            <input type="submit" id="submit" name="send" className="btn bg-emerald-600 hover:bg-emerald-700 text-white rounded-md mt-5" value="Save Changes"/>
                        </form>
                    </div>

                    <div className="p-6 rounded-md shadow dark:shadow-gray-800 bg-white dark:bg-slate-900">
                        <div className="grid lg:grid-cols-2 grid-cols-1 gap-4">
                            <div>
                                <h5 className="text-lg font-semibold mb-4">Contact Info :</h5>

                                <form>
                                    <div className="grid grid-cols-1 gap-4">
                                        <div>
                                            <label className="form-label font-medium">Phone No. :</label>
                                            <input name="number" id="number" type="number" className="form-input border border-slate-100 dark:border-slate-800 mt-2" placeholder="Phone :"/>
                                        </div>

                                        <div>
                                            <label className="form-label font-medium">Website :</label>
                                            <input name="url" id="url" type="url" className="form-input border border-slate-100 dark:border-slate-800 mt-2" placeholder="Url :"/>
                                        </div>
                                    </div>

                                    <button className="btn bg-emerald-600 hover:bg-emerald-700 text-white rounded-md mt-5">Add</button>
                                </form>
                            </div>
                            
                            <div> 
                                <h5 className="text-lg font-semibold mb-4">Change password :</h5>
                                <form>
                                    <div className="grid grid-cols-1 gap-4">
                                        <div>
                                            <label className="form-label font-medium">Old password :</label>
                                            <input type="password" className="form-input border border-slate-100 dark:border-slate-800 mt-2" placeholder="Old password" required=""/>
                                        </div>

                                        <div>
                                            <label className="form-label font-medium">New password :</label>
                                            <input type="password" className="form-input border border-slate-100 dark:border-slate-800 mt-2" placeholder="New password" required=""/>
                                        </div>

                                        <div>
                                            <label className="form-label font-medium">Re-type New password :</label>
                                            <input type="password" className="form-input border border-slate-100 dark:border-slate-800 mt-2" placeholder="Re-type New password" required=""/>
                                        </div>
                                    </div>

                                    <button className="btn bg-emerald-600 hover:bg-emerald-700 text-white rounded-md mt-5">Save password</button>
                                </form>
                            </div>
                        </div>
                    </div>

                    <div className="p-6 rounded-md shadow dark:shadow-gray-800 bg-white dark:bg-slate-900">
                        <h5 className="text-lg font-semibold mb-4">Social Media :</h5>

                        <div className="md:flex">
                            <div className="md:w-1/3">
                                <span className="font-medium">Twitter</span>
                            </div>

                            <div className="md:w-2/3 mt-4 md:mt-0">
                                <form>
                                    <div className="form-icon relative">
                                        <Twitter className="w-4 h-4 absolute top-5 start-4"/>
                                        <input type="text" className="form-input border border-slate-100 dark:border-slate-800 mt-2 ps-12" placeholder="Twitter Profile Name" id="twitter_name" name="name" required=""/>
                                    </div>
                                </form>

                                <p className="text-slate-400 mt-1">Add your Twitter username (e.g. jennyhot).</p>
                            </div>
                        </div>
                        
                        <div className="md:flex mt-8">
                            <div className="md:w-1/3">
                                <span className="font-medium">Facebook</span>
                            </div>

                            <div className="md:w-2/3 mt-4 md:mt-0">
                                <form>
                                    <div className="form-icon relative">
                                        <Facebook className="w-4 h-4 absolute top-5 start-4"/>
                                        <input type="text" className="form-input border border-slate-100 dark:border-slate-800 mt-2 ps-12" placeholder="Facebook Profile Name" id="facebook_name" name="name" required=""/>
                                    </div>
                                </form>

                                <p className="text-slate-400 mt-1">Add your Facebook username (e.g. jennyhot).</p>
                            </div>
                        </div>
                        
                        <div className="md:flex mt-8">
                            <div className="md:w-1/3">
                                <span className="font-medium">Instagram</span>
                            </div>

                            <div className="md:w-2/3 mt-4 md:mt-0">
                                <form>
                                    <div className="form-icon relative">
                                        <Instagram className="w-4 h-4 absolute top-5 start-4"/>
                                        <input type="text" className="form-input border border-slate-100 dark:border-slate-800 mt-2 ps-12" placeholder="Instagram Profile Name" id="insta_name" name="name" required=""/>
                                    </div>
                                </form>

                                <p className="text-slate-400 mt-1">Add your Instagram username (e.g. jennyhot).</p>
                            </div>
                        </div>
                        
                        <div className="md:flex mt-8">
                            <div className="md:w-1/3">
                                <span className="font-medium">Linkedin</span>
                            </div>

                            <div className="md:w-2/3 mt-4 md:mt-0">
                                <form>
                                    <div className="form-icon relative">
                                        <Linkedin className="w-4 h-4 absolute top-5 start-4"/>
                                        <input type="text" className="form-input border border-slate-100 dark:border-slate-800 mt-2 ps-12" placeholder="Linkedin Profile Name" id="linkedin_name" name="name" required=""/>
                                    </div>
                                </form>

                                <p className="text-slate-400 mt-1">Add your Linkedin username.</p>
                            </div>
                        </div>
                        
                        <div className="md:flex mt-8">
                            <div className="md:w-1/3">
                                <span className="font-medium">Youtube</span>
                            </div>

                            <div className="md:w-2/3 mt-4 md:mt-0">
                                <form>
                                    <div className="form-icon relative">
                                        <Youtube className="w-4 h-4 absolute top-5 start-4"/>
                                        <input type="url" className="form-input border border-slate-100 dark:border-slate-800 mt-2 ps-12" placeholder="Youtube url" id="you_url" name="url" required=""/>
                                    </div>
                                </form>

                                <p className="text-slate-400 mt-1">Add your Youtube url.</p>
                            </div>
                        </div>

                        <div className="md:flex">
                            <div className="md:w-1/3">
                                <input type="submit" id="submit" name="send" className="btn bg-emerald-600 hover:bg-emerald-700 text-white rounded-md mt-5" value="Save Changes"/>
                            </div>
                        </div>
                    </div>

                    <div className="p-6 rounded-md shadow dark:shadow-gray-800 bg-white dark:bg-slate-900">
                        <h5 className="text-lg font-semibold mb-5">Account Notifications :</h5>

                        <div className="flex justify-between pb-4">
                            <h6 className="mb-0 font-medium">When someone mentions me</h6>
                            <div className="">
                                <input className="form-checkbox rounded border-gray-200 dark:border-gray-800 text-emerald-600 focus:border-emerald-300 focus:ring focus:ring-offset-0 focus:ring-emerald-200 focus:ring-opacity-50" type="checkbox" value="" id="noti1"/>
                                <label className="form-check-label" htmlFor="noti1"></label>
                            </div>
                        </div>
                        <div className="flex justify-between py-4 border-t border-gray-100 dark:border-gray-700">
                            <h6 className="mb-0 font-medium">When someone follows me</h6>
                            <div className="">
                                <input className="form-checkbox rounded border-gray-200 dark:border-gray-800 text-emerald-600 focus:border-emerald-300 focus:ring focus:ring-offset-0 focus:ring-emerald-200 focus:ring-opacity-50" type="checkbox" value="" defaultChecked id="noti2"/>
                                <label className="form-check-label" htmlFor="noti2"></label>
                            </div>
                        </div>
                        <div className="flex justify-between py-4 border-t border-gray-100 dark:border-gray-700">
                            <h6 className="mb-0 font-medium">When shares my activity</h6>
                            <div className="">
                                <input className="form-checkbox rounded border-gray-200 dark:border-gray-800 text-emerald-600 focus:border-emerald-300 focus:ring focus:ring-offset-0 focus:ring-emerald-200 focus:ring-opacity-50" type="checkbox" value="" id="noti3"/>
                                <label className="form-check-label" htmlFor="noti3"></label>
                            </div>
                        </div>
                        <div className="flex justify-between py-4 border-t border-gray-100 dark:border-gray-700">
                            <h6 className="mb-0 font-medium">When someone messages me</h6>
                            <div className="">
                                <input className="form-checkbox rounded border-gray-200 dark:border-gray-800 text-emerald-600 focus:border-emerald-300 focus:ring focus:ring-offset-0 focus:ring-emerald-200 focus:ring-opacity-50" type="checkbox" value="" id="noti4"/>
                                <label className="form-check-label" htmlFor="noti4"></label>
                            </div>
                        </div>
                    </div>

                    <div className="p-6 rounded-md shadow dark:shadow-gray-800 bg-white dark:bg-slate-900">
                        <h5 className="text-lg font-semibold mb-5">Marketing Notifications :</h5>

                        <div className="flex justify-between pb-4">
                            <h6 className="mb-0 font-medium">There is a sale or promotion</h6>
                            <div className="">
                                <input className="form-checkbox rounded border-gray-200 dark:border-gray-800 text-emerald-600 focus:border-emerald-300 focus:ring focus:ring-offset-0 focus:ring-emerald-200 focus:ring-opacity-50" type="checkbox" value="" id="noti5"/>
                                <label className="form-check-label" htmlFor="noti5"></label>
                            </div>
                        </div>
                        <div className="flex justify-between py-4 border-t border-gray-100 dark:border-gray-700">
                            <h6 className="mb-0 font-medium">Company news</h6>
                            <div className="">
                                <input className="form-checkbox rounded border-gray-200 dark:border-gray-800 text-emerald-600 focus:border-emerald-300 focus:ring focus:ring-offset-0 focus:ring-emerald-200 focus:ring-opacity-50" type="checkbox" value="" id="noti6"/>
                                <label className="form-check-label" htmlFor="noti6"></label>
                            </div>
                        </div>
                        <div className="flex justify-between py-4 border-t border-gray-100 dark:border-gray-700">
                            <h6 className="mb-0 font-medium">Weekly jobs</h6>
                            <div className="">
                                <input className="form-checkbox rounded border-gray-200 dark:border-gray-800 text-emerald-600 focus:border-emerald-300 focus:ring focus:ring-offset-0 focus:ring-emerald-200 focus:ring-opacity-50" type="checkbox" value="" defaultChecked id="noti7"/>
                                <label className="form-check-label" htmlFor="noti7"></label>
                            </div>
                        </div>
                        <div className="flex justify-between py-4 border-t border-gray-100 dark:border-gray-700">
                            <h6 className="mb-0 font-medium">Unsubscribe News</h6>
                            <div className="">
                                <input className="form-checkbox rounded border-gray-200 dark:border-gray-800 text-emerald-600 focus:border-emerald-300 focus:ring focus:ring-offset-0 focus:ring-emerald-200 focus:ring-opacity-50" type="checkbox" value="" defaultChecked id="noti8"/>
                                <label className="form-check-label" htmlFor="noti8"></label>
                            </div>
                        </div>
                    </div>

                    <div className="p-6 rounded-md shadow dark:shadow-gray-800 bg-white dark:bg-slate-900">
                        <h5 className="text-lg font-semibold mb-5 text-red-600">Delete Account :</h5>

                        <p className="text-slate-400 mb-4">Do you want to delete the account? Please press below "Delete" button</p>

                        <Link to="#" className="btn bg-red-600 hover:bg-red-700 text-white rounded-md">Delete</Link>
                    </div>
                </div>
            </div>
        </section>
       </>
    )
}
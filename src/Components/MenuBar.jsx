import React from 'react'
import { Link } from 'react-router-dom'
import { IoAdd } from "react-icons/io5";
import { IoMdHome } from "react-icons/io";

const MenuBar = () => {
    return (
        <>
            <div className="menubar-wrapper bg-[#F9FAFB] h-screen py-5 sticky top-0 left-0">
                <div className="accordion flex flex-col items-center mx-2">
                    <div className="newcases-btn mb-5 w-full px-4 ">
                        <Link to="/dashboard/new-case" className='border-2 flex items-center justify-center gap-2 rounded-full text-xl py-2 shadow-md'><IoAdd />New Case</Link>
                    </div>
                    <div className="newcases-btn mb-3 w-full px-8 bg-[#DBEAFE] rounded-xl">
                        <Link to="/dashboard" className='flex items-center gap-2 text-xl py-2'><IoMdHome />Dashboard</Link>
                    </div>
                    {/* pannel 1 */}
                    <div className="w-full mb-3">
                        <input type="checkbox" name="panel" id="panel-1" className="hidden" />
                        <label htmlFor="panel-1" className="relative block p-3 hover:bg-gray-300 rounded-xl font-bold cursor-pointer">Cases</label>
                        <div className="accordion__content overflow-hidden bg-grey-lighter">
                            <div className="pannel1-link flex flex-col">
                                <Link to="/dashboard/patient/search" className='hover:bg-gray-300 rounded-xl p-3'>OPD - Out Patient</Link>
                                <Link to="dashboard/patient/ipdsearch" className='hover:bg-gray-300 rounded-xl p-3'>IPD - In Patient</Link>
                                <Link to={'/dashboard/patient'} className='hover:bg-gray-300 rounded-xl p-3'>Patients</Link>
                                <Link className='hover:bg-gray-300 rounded-xl p-3'>All cases</Link>
                                <Link className='hover:bg-gray-300 rounded-xl p-3'>Agents</Link>
                            </div>
                        </div>
                    </div>
                    {/* pannel 2 */}
                    <div className="w-full mb-3">
                        <input type="checkbox" name="panel" id="panel-2" className="hidden" />
                        <label htmlFor="panel-2" className="relative block p-3 hover:bg-gray-300 rounded-xl font-bold cursor-pointer">Lab</label>
                        <div className="accordion__content overflow-hidden bg-grey-lighter">
                            <div className="pannel1-link flex flex-col">
                                <Link className='hover:bg-gray-300 rounded-xl p-3'>Today reports</Link>
                                <Link className='hover:bg-gray-300 rounded-xl p-3'>All reports</Link>
                            </div>
                        </div>
                    </div>
                    {/* pannel 3 */}
                    <div className="w-full mb-3">
                        <input type="checkbox" name="panel" id="panel-3" className="hidden" />
                        <label htmlFor="panel-3" className="relative block p-3 hover:bg-gray-300 rounded-xl font-bold cursor-pointer">Business</label>
                        <div className="accordion__content overflow-hidden bg-grey-lighter">
                            <div className="pannel1-link flex flex-col">
                                <Link className='hover:bg-gray-300 rounded-xl p-3'>Daily business</Link>
                                <Link className='hover:bg-gray-300 rounded-xl p-3'>Transactions</Link>
                            </div>
                        </div>
                    </div>
                    {/* pannel 4 */}
                    <div className="w-full mb-3">
                        <input type="checkbox" name="panel" id="panel-4" className="hidden" />
                        <label htmlFor="panel-4" className="relative block p-3 hover:bg-gray-300 rounded-xl font-bold cursor-pointer">Manage</label>
                        <div className="accordion__content overflow-hidden bg-grey-lighter">
                            <div className="pannel1-link flex flex-col">
                                <Link className='hover:bg-gray-300 rounded-xl p-3'>Employee logins</Link>
                                <Link className='hover:bg-gray-300 rounded-xl p-3'>Manage doctors</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default MenuBar

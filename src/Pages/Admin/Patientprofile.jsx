import React from 'react'
import MenuBar from '../../Components/MenuBar'
import { CgProfile } from "react-icons/cg";
import { IoCallOutline } from "react-icons/io5";
import { LuMail } from "react-icons/lu";
import { CiLocationOn } from "react-icons/ci";
import { Link } from 'react-router-dom';

const Patientprofile = () => {
    return (
        <>
            <div className='flex mx-3'>
                <div className="menubar w-[20%]">
                    <MenuBar />
                </div>
                <div className="content w-[80%] p-3">
                    <p className='text-3xl font-bold text-gray-700 py-5'>Mr. Suryanarayana Mallik</p>
                    <div className="flex text-lg font-semibold gap-9">
                        <Link to={'/dashboard/patient/profile'}><div className='cursor-pointer text-blue-500'>Profile</div></Link>
                        <Link to={'/dashboard/patient/cases'}><div className='cursor-pointer'>Cases&nbsp;<span className='bg-gray-300 rounded-full px-2'>0</span></div></Link>
                        <Link to={'/dashboard/patient/lab-reports'}><div className='cursor-pointer'>Lab reports&nbsp;<span className='bg-gray-300 rounded-full px-2'>0</span></div></Link>
                    </div>
                    <hr />
                    <div className="border-2 w-full my-3 bg-[#F1F5F9] p-5 rounded-lg">
                        <div className="w-1/2 text-2xl">
                            <div className="flex items-center gap-3 pb-3"><CgProfile />Mr. Suryanarayana Mallik</div>
                            <div className="flex items-center gap-3 pb-3"><IoCallOutline />7008596247</div>
                            <div className="flex items-center gap-3 pb-3"><LuMail />mallicksurya31@gmail.com</div>
                            <div className="flex items-center gap-3 pb-3"><CiLocationOn />Bhubaneswer</div>
                        </div>
                        <div className="w-1/2"></div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Patientprofile

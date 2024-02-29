import React from 'react'
import { IoCallOutline } from "react-icons/io5";
import { IoMdClose } from "react-icons/io";

const PatientCasesCard = () => {
    return (
        <>
            <div className="card-wrapper">
                <div className="flex justify-between gap-1 px-2 py-3">
                    <div className="w-[9%]">1001789</div>
                    <div className="w-[10%] overflow-hidden">11/2/2023<br />12:32 PM</div>
                    <div className="w-[20%] truncate">Suryanarayana Mallik <br /><span className='flex items-center'><IoCallOutline />&nbsp;7008596247</span></div>
                    <div className="w-[13%]">Dr. Demo Doctor</div>
                    <div className="w-[7%]">300</div>
                    <div className="w-[7%]">300</div>
                    <div className="w-[10%]">0</div>
                    <div className="w-[10%]"><samp className='bg-blue-500 px-2 py-1 rounded-md text-white'>No Due</samp></div>
                    <div className="w-[8%] flex flex-col">
                        <div className="text-blue-500 cursor-pointer">View bill</div>
                        <div className="flex items-center gap-1 text-red-500 cursor-pointer"><IoMdClose />Cancel</div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default PatientCasesCard

import React from 'react'
import { IoEyeOutline } from "react-icons/io5";
import { FaPencilAlt } from "react-icons/fa";
import { IoAdd } from "react-icons/io5";
import { Link } from 'react-router-dom';

const PatientCard = ({ id, name, phone, reg }) => {
    return (
        <>
            <div className="patient-card-wrapper">
                <div className="flex border-b-2 p-2 hover:bg-[#eff3f7]">
                    <div className='w-[10%] overflow-x-auto'>{id}</div>
                    <div className='w-[30%] overflow-x-auto'>{name}</div>
                    <div className='w-[15%] overflow-x-auto'>{phone}</div>
                    <div className='w-[15%] overflow-x-auto'>{reg}</div>
                    <div className='w-[30%] overflow-x-auto'>
                        <div className="flex gap-4 font-semibold text-blue-500 ">
                            <Link to={'/dashboard/patient/profile'}><div className="flex items-center gap-1 cursor-pointer"><IoEyeOutline />View</div></Link>
                            <div className="flex items-center gap-1 cursor-pointer"><FaPencilAlt />Edit</div>
                            <div className="flex items-center gap-1 cursor-pointer"><IoAdd />Add case</div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default PatientCard

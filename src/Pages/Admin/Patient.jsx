import React from 'react'
import MenuBar from '../../Components/MenuBar'
import { IoIosSearch } from "react-icons/io";
import { MdOutlineEmail } from "react-icons/md";
import PatientCard from '../../Components/Card/PatientCard';

const Patient = () => {
    return (
        <>
            <div className='flex mx-3'>
                <div className="menubar w-[20%]">
                    <MenuBar />
                </div>
                <div className="content w-[80%] p-3">
                    <p className='text-3xl font-bold text-gray-700'>Patients</p>
                    <div className="patient-search-wrapper my-7">
                        <div className="flex gap-6">
                            <div className="flex flex-col">
                                <label htmlFor="regNo" className='text-lg'>Reg. No.</label>
                                <input type="text" placeholder='Enter Reg. no.' className='border-2 rounded-lg p-1 text-lg' />
                            </div>
                            <div className="flex flex-col">
                                <label htmlFor="fname" className='text-lg'>First Name</label>
                                <input type="text" placeholder='Enter first name' className='border-2 rounded-lg p-1 text-lg' />
                            </div>
                        </div>
                        <button className='bg-blue-500 text-white py-1 px-3 rounded-md my-3 flex items-center gap-2'><IoIosSearch />Search</button>
                    </div>
                    <div className="flex justify-end mb-7">
                        <button className="flex items-center gap-2 border-2 rounded-sm text-lg px-3 py-1 hover:bg-[#F8FAFC]"><MdOutlineEmail />All Patient Data Export</button>
                    </div>
                    <div className="patient-wrapper border-2 border-b-0">
                        <div className="flex border-b-2 p-2 bg-[#F8FAFC]">
                            <p className='w-[10%]'>ID</p>
                            <p className='w-[30%]'>NAME</p>
                            <p className='w-[15%]'>PHONE NUMBER</p>
                            <p className='w-[15%]'>REGISTERED ON</p>
                            <p className='w-[30%]'></p>
                        </div>
                        <PatientCard id="1001789" name="Suryanarayana mallik" phone="7008596247" reg="04/12/2023" />
                        <PatientCard id="1002324" name="Surya" phone="8778578515" reg="01/12/2023" />
                        <PatientCard id="1003477" name="Demo patient" phone="6537600987" reg="02/12/2023" />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Patient

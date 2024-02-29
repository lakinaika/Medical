import React from 'react'
import MenuBar from '../../Components/MenuBar'
import { IoAdd } from "react-icons/io5";
import { FaEdit } from "react-icons/fa";
import { Link } from 'react-router-dom';

const NewCase = () => {
    return (
        <>
            <div className='flex mx-3'>
                <div className="menubar w-[20%]">
                    <MenuBar />
                </div>
                <div className="content w-[80%] p-3">
                    <div className="flex mb-12">
                        <div className=""><span className='text-2xl b'>1</span></div>
                        <div className="patient-details ps-6 w-full">
                            <p className="text-2xl font-semibold">Patient details</p>
                            <hr className='my-4' />
                            <div className="flex flex-wrap gap-8 mb-7">
                                <div className="">
                                    <label htmlFor="title">Title <span className='text-red-500'>*</span></label><br />
                                    <select id="title" className='border-2 p-2 rounded-lg text-lg'>
                                        <option>Select one</option>
                                        <option value="mr">Mr.</option>
                                        <option value="mrs">Mrs.</option>
                                    </select>
                                </div>
                                <div className="">
                                    <label htmlFor="firstname">First name <span className='text-red-500'>*</span></label><br />
                                    <input type="text" placeholder='Enter patient first name' className='border-2 p-2 rounded-lg text-lg' />
                                </div>
                                <div className="">
                                    <label htmlFor="lastname">Last name</label><br />
                                    <input type="text" placeholder='Enter patient last name' className='border-2 p-2 rounded-lg text-lg' />
                                </div>
                                <div className="">
                                    <label>Gender <span className='text-red-500'>*</span></label><br />
                                    <div className="radio-btn flex flex-wrap gap-2">
                                        <label htmlFor="male">
                                            <input type="radio" name="gender" id="male" />
                                            Male
                                        </label>
                                        <label htmlFor="female">
                                            <input type="radio" name="gender" id="female" />
                                            Female
                                        </label>
                                        <label htmlFor="other">
                                            <input type="radio" name="gender" id="other" />
                                            Other
                                        </label>
                                    </div>
                                </div>
                            </div>
                            <div className="flex flex-wrap gap-8">
                                <div className="">
                                    <label htmlFor="age">Years <span className='text-red-500'>*</span></label><br />
                                    <div className="flex-1">
                                        <input type="number" id="years" placeholder='Years' className='border-2 p-2 rounded-lg text-lg w-28 me-2' />
                                        <input type="number" id="years" placeholder='Months' className='border-2 p-2 rounded-lg text-lg w-28 me-2' />
                                    </div>
                                </div>
                                <div className="">
                                    <label htmlFor="phone">Phone Number</label><br />
                                    <input type="tel" id="phone" placeholder='Enter phone number' className='border-2 p-2 rounded-lg text-lg' />
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* case details */}
                    <div className="flex mb-12">
                        <div className=""><span className='text-2xl b'>2</span></div>
                        <div className="case-details ps-6 w-full">
                            <p className="text-2xl font-semibold">Case details</p>
                            <hr className='my-4' />
                            <div className="flex flex-wrap gap-20 mb-7">
                                <div>
                                    <span className='text-red-500'>*</span><label htmlFor="firstname"> Referred By</label><br />
                                    <div className='flex gap-3'>
                                        <input type="text" placeholder='Enter doctor full name' className='border-2 p-2 rounded-lg text-lg' />
                                        <button className='flex items-center border-2 border-blue-500 my-2 px-2 rounded-xl font-bold text-sm'><IoAdd />Add</button>
                                    </div>
                                </div>
                                <div className="">
                                    <label>Sample collection agent</label><br />
                                    <div className="flex flex-col">
                                        <select id="agent" className='border-2 p-2 rounded-lg text-lg'>
                                            <option>Selet agent</option>
                                            <option value="surya">Surya</option>
                                            <option value="demo">Demo</option>
                                            <option value="demooo">Demooo</option>
                                        </select>
                                        <div className="flex flex-wrap justify-between py-1 px-2">
                                            <p className='flex items-center text-blue-600 cursor-pointer'><IoAdd />Add new</p>
                                            <p className='flex items-center text-gray-600 cursor-pointer'><FaEdit />Edit</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <button className='border-2 px-2 border-blue-400 hover:bg-blue-500 duration-500 rounded-lg py-5 hover:text-white text-lg'>Lab</button>
                        </div>
                    </div>
                    {/* payment section */}
                    <div className="flex mb-12">
                        <div className=""><span className='text-2xl b'>3</span></div>
                        <div className="payment-details ps-6 w-full">
                            <p className="text-2xl font-semibold">Payment details</p>
                            <hr className='my-4' />
                            <div className="payment-wrapper flex justify-center w-full border-2"><div className="w-1/2 ">
                                <div className=" text-end py-6">
                                    <p className='text-xl pb-3 px-4'>Total Rs. :</p>
                                    <p className='text-xl pb-8 px-4'>Discount :</p>
                                    <p className='text-xl pb-5 px-4'>Amount received :</p>
                                    <p className='text-xl pb-7 px-4'>Balance Rs. :</p>
                                    <p className='text-xl pb-3 px-4'>Mode :</p>
                                </div>
                            </div>
                                <div className="w-1/2 ">
                                    <div className="py-6">
                                        <p className='text-xl pb-3 px-4'>0</p>
                                        <p className='text-xl pb-8 px-4'>
                                            <input type="number" name="" id="" className='border-2 px-2 focus:border-0 focus:outline-0 rounded-md focus:border-b-4' />
                                        </p>
                                        <p className='text-xl pb-5 px-4'>
                                            <input type="number" name="" id="" className='border-2 px-2 focus:border-0 focus:outline-0 rounded-md focus:border-b-4' />
                                        </p>
                                        <p className='text-xl pb-7 px-4'>0</p>
                                        <p className='text-xl pb-3 px-4 w-full'>
                                            <select id="payment-mode" className='border-2 p-2 rounded-lg text-lg w-1/2'>
                                                <option value="cash">Cash</option>
                                                <option value="card">Card</option>
                                                <option value="upi">Upi</option>
                                            </select>
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <Link to={'/dashboard/case/bill'}><button className='border-2 border-blue-500 my-8 rounded-md px-3 py-1 text-lg hover:bg-blue-500 duration-300 hover:text-white'>Create Case</button></Link>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default NewCase

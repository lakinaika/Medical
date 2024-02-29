import React from 'react'
import { Link } from 'react-router-dom'
import MenuBar from '../../Components/MenuBar'
import PatientCasesCard from '../../Components/Card/PatientCasesCard'

const PatientCases = () => {
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
                        <Link to={'/dashboard/patient/cases'}><div className='cursor-pointer'>Cases&nbsp;<span className='bg-gray-300 rounded-full px-2'>3</span></div></Link>
                        <Link to={'/dashboard/patient/lab-reports'}><div className='cursor-pointer'>Lab reports&nbsp;<span className='bg-gray-300 rounded-full px-2'>0</span></div></Link>
                    </div>
                    <hr />
                    <div className="border-2 my-3 rounded-md">
                        <div className="flex justify-between gap-1 px-2">
                            <div className="w-[9%]">REG. NO.</div>
                            <div className="w-[10%]">DATE</div>
                            <div className="w-[20%]">PATIENT</div>
                            <div className="w-[13%]">REFERRED BY</div>
                            <div className="w-[7%]">TOTAL</div>
                            <div className="w-[7%]">PAID</div>
                            <div className="w-[10%]">DISCOUNT</div>
                            <div className="w-[10%]">STATUS</div>
                            <div className="w-[8%]">ACTIONS</div>
                        </div>
                        <PatientCasesCard />
                        <PatientCasesCard />
                        <PatientCasesCard />
                    </div>
                </div>
            </div>
        </>
    )
}

export default PatientCases

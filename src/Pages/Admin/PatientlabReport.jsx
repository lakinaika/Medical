import React from 'react'
import MenuBar from '../../Components/MenuBar'
import { Link } from 'react-router-dom'

const PatientlabReport = () => {
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
                    <p>Lab reports</p>
                </div>
            </div>
        </>
    )
}

export default PatientlabReport

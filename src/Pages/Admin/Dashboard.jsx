import React from 'react'
import MenuBar from '../../Components/MenuBar'
import { Link } from 'react-router-dom'
import { FaUser } from "react-icons/fa6";
import { FaUserMd } from "react-icons/fa";

const Dashboard = () => {
    return (
        <>
            <div className='flex mx-3'>
                <div className="menubar w-[20%]">
                    <MenuBar />
                </div>
                <div className="content w-[80%] p-3">
                    <div className="dashboard-header-link w-full py-3 flex gap-4 rounded-lg px-3">
                        <Link><p className='px-3 py-2 rounded-lg border-2 text-lg hover:bg-gray-300 flex items-center gap-2'><FaUser className='bg-green-300 p-1 text-2xl rounded-full' />Employees login</p></Link>
                        <Link><p className='px-3 py-2 rounded-lg border-2 text-lg hover:bg-gray-300 flex items-center gap-2'><FaUserMd className='bg-blue-300 p-1 text-2xl rounded-full' />Doctor access</p></Link>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Dashboard

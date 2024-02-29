import React from 'react'
import MenuBar from '../../Components/MenuBar'
import { IoIosPrint } from "react-icons/io";

const BillPage = () => {
    return (
        <>
            <div className='flex mx-3'>
                <div className="menubar w-[20%]">
                    <MenuBar />
                </div>
                <div className="content w-[80%] p-3">
                    <div className="bill-print-wrapper border-2 p-2">
                        <div className="print-header-wrapper">
                            <div className="animate-pulse h-28 w-full bg-slate-700"></div>
                        </div>
                        <div className="bill-patient-details flex border-2 p-1 my-2">
                            <div className="left w-1/2 text-lg">
                                <div className='flex flex-wrap'><p className='font-bold'>Reg. no.: </p><p>&nbsp;1001</p></div>
                                <div className='flex flex-wrap'><p className='font-bold'>Name: </p><p>&nbsp;Mr. Suryanarayana Mallik</p></div>
                                <div className='flex flex-wrap'><p className='font-bold'>Age: </p><p>&nbsp;23</p></div>
                                <div className='flex flex-wrap'><p className='font-bold'>Gender: </p><p>&nbsp;Male</p></div>
                                <div className='flex flex-wrap'><p className='font-bold'>Phone: </p><p>&nbsp;7008596247</p></div>
                            </div>
                            <div className="right w-1/2 text-end text-lg">
                                <div className='flex flex-wrap justify-end'><p className='font-bold'>Referred by: </p><p>&nbsp;Dr. Demo Doctor</p></div>
                                <div className='flex flex-wrap justify-end'><p className='font-bold'>Date &amp; Time: </p><p>&nbsp;04/12/2023, 12:31 AM</p></div>
                            </div>
                        </div>
                        <div className="print-case-details">
                            <h1 className='font-semibold text-center text-2xl'>Case Details:</h1>
                            <div className="case-heading px-2 text-xl">
                                <table className="table-fixed w-full">
                                    <thead className='bg-[#EEEEEE] rounded-lg'>
                                        <tr className=''>
                                            <th className='text-start ps-1'>Lab investigations</th>
                                            <th className='text-end pe-1'>Fee</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td className='text-start'>CBC</td>
                                            <td className='text-end'>Rs. 100</td>
                                        </tr>
                                        <tr>
                                            <td className='text-start'>TLC</td>
                                            <td className='text-end'>Rs. 200</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                        <hr className='my-3' />
                        <div className="print-payment">
                            <h1 className='font-semibold text-center text-2xl'>Payment Details:</h1>
                            <div className="flex justify-between text-xl">
                                <p>Total Fees:</p>
                                <p>300</p>
                            </div>
                            <div className="flex justify-between text-xl">
                                <p>Amount Paid:</p>
                                <p>300</p>
                            </div>
                            <div className="cashier w-full flex justify-end">
                                <div className="w-1/2 mt-10  h-20"></div>
                            </div>
                            <div className="flex justify-end w-full">
                                <hr className='my-2 w-1/2' />
                            </div>
                            <div className=" w-full flex justify-end">
                                <div className="w-1/2 flex justify-center font-semibold text-xl">Cashier&apos;s signature</div>
                            </div>
                        </div>
                        <hr className='my-8' />
                        <p className='text-center text-2xl font-bold pb-3'>~~~Thank You~~~</p>
                    </div>
                    <button className='flex items-center bg-blue-400 text-2xl gap-2 px-4 py-1 rounded-lg my-9'><IoIosPrint />Print</button>
                </div>
            </div>
        </>
    )
}

export default BillPage

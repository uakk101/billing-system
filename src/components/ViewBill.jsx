import React, { useState } from 'react'
import { BiSearch } from "react-icons/bi";
import { ViewBillGrid } from './ViewBillGrid';
export const ViewBill = () => {
    const [searchQuery, setSearchQuery] = useState('');
    const [selectedDate, setSelectedDate] = useState(null);

    const handleSearchChange = (e) => {
        setSearchQuery(e.target.value);
    };

    const handleDateChange = (e) => {
        setSelectedDate(e.target.value);
    };
    return (
        <div>
            <div className='flex justify-center   border border-gray-400 rounded-md shadow-md p-2 m-8'>
                <div className='flex justify-between items-center gap-6'>
                    <div>
                        <div className="bg-[#F0F5FB] rounded-lg border items-center w-96 outline-none flex py-2 px-3">
                            <BiSearch className="w-6 h-6 text-[#007495]" />
                            <input type="text" class="w-64 focus:outline-none bg-[#F0F5FB]" value={searchQuery} onChange={handleSearchChange} placeholder="Search..." />
                        </div>
                    </div>
                    <div>
                        <input className='bg-[#F0F5FB] rounded-lg border items-center w-56 outline-none flex py-2 px-3' type="date" value={selectedDate} onChange={handleDateChange} />
                    </div>
                    <div>
                        <button className='bg-[#F0F5FB] rounded-lg border items-center w-20 outline-none flex py-2 px-3'> Search </button>
                        {/* <input className='bg-[#F0F5FB] rounded-lg border items-center w-56 outline-none flex py-2 px-3' type="date" value={selectedDate} onChange={handleDateChange} /> */}
                    </div>
                </div>
            </div>

            <ViewBillGrid />

        </div >
    )
}

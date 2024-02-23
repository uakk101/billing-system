import React, { useState } from 'react';
import { BiSolidChevronDown, BiSolidChevronUp } from 'react-icons/bi';

export const ViewBillGrid = () => {
    const [activeAccordion, setActiveAccordion] = useState(null);

    const columns = [
        { name: 'مغل گارڈر' },
        { name: 'کراس پائپ18G' },
        { name: 'سی۔چینل' },
        { name: 'بیس پلیٹ(5mm)8×8' },
        { name: 'راول بولٹ' },
        { name: 'نٹ بولٹGI' },
        { name: 'کٹر ڈسک' },
        { name: 'ویلڈنگ راڈ' },
        { name: 'بلیک پینٹ' },
        { name: 'سپرے پینٹ' },
        { name: 'ایپوکسی' },
        { name: 'نکے' },
        { name: 'ملی ڈسک' },
        { name: 'اینگل۔' },
        { name: 'ٹاپ پلیٹ' },
    ];

    const staticData = [
        {
            id: 1,
            'مغل گارڈر': '$0.00',
            'کراس پائپ18G': '4332231',
            'سی۔چینل': '12/18/2023',
            'بیس پلیٹ(5mm)8×8': '$176.00',
            'راول بولٹ': 'Statement',
            'نٹ بولٹGI': 'User Print Hammza Remman',
            'کٹر ڈسک': '04/03/2023 to 07/04/2023',
            'ویلڈنگ راڈ': 'Black',
            'بلیک پینٹ': 'Spray',
            'سپرے پینٹ': 'Epoxy',
            'ایپوکسی': 'Nails',
            'نکے': 'Grinding Disc',
            'ملی ڈسک': 'Angle Grinder',
            'اینگل۔': 'Top Plate',
            'ٹاپ پلیٹ': 'Active',
        },
        {
            id: 2,
            'مغل گارڈر': '$20.00',
            'کراس پائپ18G': '4332232',
            'سی۔چینل': '12/19/2023',
            'بیس پلیٹ(5mm)8×8': '$150.00',
            'راول بولٹ': 'Invoice',
            'نٹ بولٹGI': 'Processed',
            'کٹر ڈسک': '05/03/2023 to 08/04/2023',
            'ویلڈنگ راڈ': 'Green',
            'بلیک پینٹ': 'Airbrush',
            'سپرے پینٹ': 'Sealant',
            'ایپوکسی': 'Screws',
            'نکے': 'Cutting Disc',
            'ملی ڈسک': 'Circular Saw',
            'اینگل۔': 'Bottom Plate',
            'ٹاپ پلیٹ': 'Inactive',
        },
        {
            id: 3,
            'مغل گارڈر': '$50.00',
            'کراس پائپ18G': '4332233',
            'سی۔چینل': '12/20/2023',
            'بیس پلیٹ(5mm)8×8': '$200.00',
            'راول بولٹ': 'Payment',
            'نٹ بولٹGI': 'Pending',
            'کٹر ڈسک': '06/03/2023 to 09/04/2023',
            'ویلڈنگ راڈ': 'Blue',
            'بلیک پینٹ': 'Brush',
            'سپرے پینٹ': 'Adhesive',
            'ایپوکسی': 'Glue',
            'نکے': 'Polishing Disc',
            'ملی ڈسک': 'Polisher',
            'اینگل۔': 'Side Plate',
            'ٹاپ پلیٹ': 'Active',
        },
        {
            id: 4,
            'مغل گارڈر': '$30.00',
            'کراس پائپ18G': '4332234',
            'سی۔چینل': '12/21/2023',
            'بیس پلیٹ(5mm)8×8': '$180.00',
            'راول بولٹ': 'Statement',
            'نٹ بولٹGI': 'User Print John Doe',
            'کٹر ڈسک': '07/03/2023 to 10/04/2023',
            'ویلڈنگ راڈ': 'Red',
            'بلیک پینٹ': 'Roller',
            'سپرے پینٹ': 'Putty',
            'ایپوکسی': 'Tape',
            'نکے': 'Grinding Wheel',
            'ملی ڈسک': 'Sander',
            'اینگل۔': 'Support Plate',
            'ٹاپ پلیٹ': 'Inactive',
        },
    ];

    const handleClick = (item) => {
        setActiveAccordion(item);
    };

    return (
        <div className='p-2 mx-8 border border-gray-400 rounded-md shadow-md '>
            <div className='flex items-center justify-between '>
                <div className='flex'>
                    <h1 className='text-[#0C7F80] p-2 font-semibold'>Company Name</h1>
                    <h1 className='text-[#0C7F80] p-2 font-semibold'>01/02/2024</h1>
                </div>

                {activeAccordion === true ? (
                    <BiSolidChevronUp
                        className='w-6 mr-3 cursor-pointer'
                        onClick={() => handleClick(false)}
                    />
                ) : (
                    <BiSolidChevronDown
                        className='w-6 mr-3 cursor-pointer'
                        onClick={() => handleClick(true)}
                    />
                )}
            </div>
            <div className='overflow-x-auto'>


                {activeAccordion && (
                    <table className='w-full mb-4 text-sm '>
                        <thead className='bg-[#F5F5F5]'>
                            <tr className=''>
                                {columns.map((column) => (
                                    <th
                                        key={column.name}
                                        className='h-10 px-6 text-sm font-semibold text-left text-secondary whitespace-nowrap'
                                    >
                                        {column.name}
                                    </th>
                                ))}
                            </tr>
                        </thead>
                        <tbody className='mt-4 border'>
                            {staticData.map((data, index) => (
                                <tr key={data.id} className={`h-10 ${index === staticData.length - 1 ? 'font-semibold' : ''} `}>
                                    {columns.map((column) => (
                                        <td
                                            key={column.name}
                                            className={`${index === staticData.length - 1 ? 'border-t' : ''} px-6 text-sm text-left text-secondary border-r whitespace-nowrap`}
                                        >
                                            {data[column.name]}
                                        </td>
                                    ))}
                                </tr>
                            ))}
                        </tbody>
                    </table>
                )}
            </div>
        </div>
    );
};

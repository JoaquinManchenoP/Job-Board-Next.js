import React from 'react'
import { MdWork } from 'react-icons/md';
import { BiTime } from 'react-icons/bi';
import { BsFillFilePersonFill } from 'react-icons/bs';
import { BsCash } from 'react-icons/bs';

export default function ListingDetails() {
    return (
        <div className="details h-[500px] w-10/12 bg-orange-500 space-y-4">
            <div className="employer h-8 w-full bg-red-400 flex items-center space-x-3">
                <div className="employer__icon">
                    <MdWork className='text-2xl' />
                </div>
                <dic className="employer__name">
                    Employer name
                </dic>
            </div>
            <div className="time h-8 w-full bg-red-400 flex items-center space-x-3">
                <div className="time__icon">
                    <BiTime className='text-2xl' />
                </div>
                <div className="time__text">
                    Full time
                </div>
            </div>
            <div className="aplicants h-8 w-full bg-red-400 flex items-center space-x-3">
                <div className="aplicants__icon">
                    <BsFillFilePersonFill className='text-2xl' />
                </div>
                <div className="number__aplicants">
                    6 Aplicants
                </div>
            </div>
            <div className="selected__skills">
                <div>
                    react
                </div>
                <div>
                    svelte
                </div>
            </div>
            <div className="salary h-8 w-full bg-red-400 flex items-center space-x-3">
                <div className="salary__icon">
                    <BsCash className='text-2xl' />
                </div>
                <div className="salary">
                    100,000 - 200,000
                </div>
            </div>
        </div>

    )
}

import React from 'react'
import { MdWork } from 'react-icons/md';
import { BiTime } from 'react-icons/bi';
import { BsFillFilePersonFill } from 'react-icons/bs';
import { BsCash } from 'react-icons/bs';
import { CgWebsite } from 'react-icons/cg';



export default function ListingDetails({ details }) {
    return (
        <div className="details h-full w-full space-y-4 font-roboto">
            <div className="employer h-8 w-full flex items-center space-x-3 min-w-max">
                <div className="employer__icon">
                    <MdWork className='text-2xl' />
                </div>
                <div className="employer__name ">
                    <span>{details.employerName}</span>
                </div>
            </div>
            <div className="time h-8 w-full flex items-center space-x-3 min-w-max">
                <div className="time__icon">
                    <BiTime className='text-2xl' />
                </div>
                <div className="time__text">
                    <span>{details.jobTime}</span>
                </div>
            </div>
            <div className="aplicants h-8 w-full flex items-center space-x-3 min-w-max">
                <div className="aplicants__icon">
                    <BsFillFilePersonFill className='text-2xl' />
                </div>
                <div className="jobType">
                    <span>{details.jobType}</span>
                </div>
            </div>
            <div className="companu__website h-8 w-full flex items-center space-x-3 min-w-max">
                <CgWebsite className='text-2xl' />
                <span>{details.companyWebsite}</span>
            </div>
            <div className="salary h-8 w-full  flex items-center space-x-3 min-w-max">
                <div className="salary__icon">
                    <BsCash className='text-2xl' />
                </div>
                <div className="salary">
                    <span>{details.salaryRange}</span>
                </div>
            </div>
        </div>

    )
}

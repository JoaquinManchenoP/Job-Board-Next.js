import React from 'react'

export default function PostJobForm() {
    return (
        <div className="listing___content h-screen w-11/12 flex justify-center">
            <div className="container h-full w-full">
                <div className="job__title h-56 w-full  flex flex-col justify-center space-y-3 bg-red-500">
                    <div className="title h-24 w-full flex items-center">
                        <span className='text-4xl overflow-hidden font-roboto font-bold'>Job</span>
                    </div>
                    <div className="company pt-3 font-roboto">
                        <span className='text-xl font-semibold'>
                            Emloyer
                        </span>
                    </div>
                    <div className="experience space-x-1 font-roboto text-lg">
                        <span>Level:</span>
                        Junior
                    </div>
                </div>
                <div className="description h-full w-full space-y-8 pt-5">
                    <div className="inputs h-full w-full bg-green-400 ">
                        <div className="job_title space-y-3">
                            <div className="label">
                                <span className='text-lg'>Job Title:</span>
                            </div>
                            <input className='h-12 w-9/12 bg-purple-500' />
                        </div>
                        <div className="job_title space-y-3">
                            <div className="label">
                                <span className='text-lg'>Company Name</span>
                            </div>
                            <input className='h-12 w-9/12 bg-purple-500' />
                        </div>
                        <div className="job_title space-y-3">
                            <div className="label">
                                <span className='text-lg'>Job Description</span>
                            </div>
                            <input className='h-12 w-9/12 bg-purple-500' />
                        </div>
                        <div className="job_title space-y-3">
                            <div className="label">
                                <span className='text-lg'>Requirements</span>
                            </div>
                            <input className='h-12 w-9/12 bg-purple-500' />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

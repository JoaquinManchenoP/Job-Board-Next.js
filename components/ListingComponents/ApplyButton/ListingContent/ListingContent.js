import React from 'react'

export default function ListingContent() {
    return (
        <div className="listing___content h-screen w-11/12 bg-green-500">
            <div className="container h-full w-full bg-red-500">
                <div className="job__title h-56 w-full bg-purple-400 flex flex-col justify-center space-y-4">
                    <div className="title h-24 w-full bg-orange-500 flex items-center">
                        <span className='text-3xl overflow-hidden'>This is the complete job position for this job</span>
                    </div>
                    <div className="company">
                        <span className='text-lg font-bold'>This is the name of the company</span>
                    </div>
                    <div className="experience">
                        8-9 years of experience
                    </div>
                </div>
            </div>
        </div>
    )
}

import React from 'react'

export default function ListingContent({ content }) {
    console.log(content);
    return (
        <div className="listing___content h-screen w-11/12">
            <div className="container h-full w-full">
                <div className="job__title h-56 w-full  flex flex-col justify-center space-y-5 ">
                    <div className="title h-24 w-full flex items-center">
                        <span className='text-4xl overflow-hidden'>{content.position}</span>
                    </div>
                    <div className="company pt-3">
                        <span className='text-lg font-bold'>
                            {content.employerName}
                        </span>
                    </div>
                    <div className="experience space-x-1">
                        <span>Level:</span>
                        <span>{content.jobLevel}</span>
                    </div>
                </div>
                <div className="description h-full w-full space-y-8 pt-5">
                    <span className='text-xl font-bold'>Job Description</span>
                    <div className="decription__content h-5/6 w-11/12 bg-gray-200">
                    </div>
                </div>
            </div>
        </div>
    )
}

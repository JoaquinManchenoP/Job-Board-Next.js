import React from 'react'

export default function ListingContent({ content }) {
    console.log(content);
    return (
        <div className="listing___content h-screen w-11/12">
            <div className="container h-full w-full">
                <div className="job__title h-56 w-full  flex flex-col justify-center space-y-3 ">
                    <div className="title h-24 w-full flex items-center">
                        <span className='text-4xl overflow-hidden font-roboto font-bold'>Nepe</span>
                    </div>
                    <div className="company pt-3 font-roboto">
                        <span className='text-xl font-semibold'>
                            {content.employerName}
                        </span>
                    </div>
                    <div className="experience space-x-1 font-roboto text-lg">
                        <span>Level:</span>
                        <span>{content.jobLevel}</span>
                    </div>
                </div>
                <div className="description h-full w-full space-y-8 pt-5">
                    <span className='text-xl font-roboto font-semibold'>Job Description</span>
                    <div className="decription__content h-5/6 w-11/12 bg-gray-200">
                    </div>
                </div>
            </div>
        </div>
    )
}

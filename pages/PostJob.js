import React from 'react'
import { AiOutlineArrowLeft } from 'react-icons/ai';
import Link from 'next/link';
import PostJobForm from '../components/PostJob/PostJobForm';


export default function PostJob() {
    return (
        <div className="listing h-screen w-screen flex justify-center">
            <div className="listing__container h-full w-11/12 md:flex xl:flex">
                <div className="left xs:h-[719px] sm:h-full md:h-full md:w-1/4 lg:w-1/4 xl:w-1/4 flex flex-col items-center space-y-4 bg-green-500 ">
                    <div className="back__button h-24 w-full flex items-center mt-2 border-b-2">
                        <Link href={'/'}>
                            <div className="flex space-x-2">
                                <AiOutlineArrowLeft className='text-2xl text-blue-500' />
                                <div className="button__text">
                                    <span className='text-blue-500 font-bold font-roboto'>Back to Jobs</span>
                                </div>
                            </div>
                        </Link>
                    </div>
                    <div className='listing__details h-[500px] w-full flex flex-col pt-5 bg-red-400 '>

                    </div>
                </div>
                <div className="right  sm:w-full md:w-3/4 h-full flex justify-center bg-purple-200">
                    <PostJobForm />
                </div>
            </div>
        </div>
    )
}

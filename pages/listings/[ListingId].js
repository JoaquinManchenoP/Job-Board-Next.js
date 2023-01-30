import React from 'react'
import ListingDetails from '../../components/listingDetails/ListingDetails'
import { AiOutlineArrowLeft } from 'react-icons/ai';
import { useRouter } from 'next/router';
import ApplyButton from '../../components/ListingComponents/ApplyButton/ApplyButton';
import ListingContent from '../../components/ListingComponents/ApplyButton/ListingContent/ListingContent';


export default function Listing() {
    const router = useRouter();
    return (
        <div className="listing h-screen w-screen flex justify-center">
            <div className="listing__container h-full w-11/12 md:flex xl:flex">
                <div className="right xs:h-[719px] sm:h-full md:h-full md:w-1/4 lg:w-1/4 xl:w-1/4 flex flex-col items-center space-y-4 ">
                    <div className="back__button h-32 w-full flex items-center mt-2 border-b-2">
                        <button className="flex space-x-2" onClick={() => router.back()}>
                            <AiOutlineArrowLeft className='text-2xl text-blue-400' />
                            <div className="button__text">
                                <span className='text-blue-400 font-bold'>Back to Jobs</span>
                            </div>
                        </button>
                    </div>
                    <div className='listing__details h-[500px] w-full flex flex-col pt-16 '>
                        <div className="listing__details">
                            <ListingDetails />
                        </div>
                    </div>
                    <div className="apply__button h-[300px] w-full  flex items-center">
                        <ApplyButton />
                    </div>
                </div>
                <div className="left sm:w-full md:w-3/4 h-full bg-purple-500 flex items-center justify-center">
                    <ListingContent />
                </div>
            </div>
        </div >
    )
}

import React from 'react'
import ListingDetails from '../../components/listingDetails/ListingDetails'
import { AiOutlineArrowLeft } from 'react-icons/ai';
import { useRouter } from 'next/router';


export default function Listing() {
    const router = useRouter();
    return (
        <div className="listing h-screen w-screen flex justify-center">
            <div className="listing__container h-full w-11/12 md:flex xl:flex">
                <div className="right h-full md:-full lg:w-1/4 xl:w-1/4 bg-green-400 flex flex-col items-center space-y-4 ">
                    <div className="back__button pt-5">
                        <button onClick={() => router.back()}>
                            <AiOutlineArrowLeft className='text-3xl' />
                        </button>
                    </div>
                    <div className='listing__details h-[500px] w-10/12'>
                        <ListingDetails />
                    </div>
                </div>
                <div className="left h-full w-3/4 bg-orange-500">
                    left_side
                </div>
            </div>
        </div>
    )
}

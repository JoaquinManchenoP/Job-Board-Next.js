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
                <div className="right sm:h-full md:h-full md:w-1/4 lg:w-1/4 xl:w-1/4 bg-green-400 flex flex-col items-center space-y-4 ">
                    <div className="back__button pt-6">
                        <button onClick={() => router.back()}>
                            <AiOutlineArrowLeft className='text-3xl' />
                        </button>
                    </div>
                    <div className='listing__details h-[500px] w-full flex justify-center pt-16'>
                        <ListingDetails />
                    </div>
                    <div className="apply__button">
                        <ApplyButton />
                    </div>
                </div>
                <div className="left sm:w-full md:w-3/4 h-full bg-orange-500 flex items-center justify-center">
                    <ListingContent />
                </div>
            </div>
        </div >
    )
}

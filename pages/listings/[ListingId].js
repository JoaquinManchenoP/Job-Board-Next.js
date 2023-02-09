import React from 'react'
import ListingDetails from '../../components/listingDetails/ListingDetails'
import { AiOutlineArrowLeft } from 'react-icons/ai';
import { useRouter } from 'next/router';
import ApplyButton from '../../components/ListingComponents/ApplyButton/ApplyButton';
import ListingContent from '../../components/ListingComponents/ApplyButton/ListingContent/ListingContent';



export default function Listing() {
    const mockData = {
        'id': 1,
        'position': 'Software Engineer',
        'jobType': 'Development',
        'salaryRange': '200,000 - 300,000',
        'jobLocation': 'Remote',
        'employerEmail': 'metrosolution@hotmail.com',
        'employerName': 'Metrosolutions storage',
        'jobTime': 'Part Time',
        'companyWebsite': 'wwww.metrosolution.com',
        'jobLevel': 'Junior'
    }


    const router = useRouter();
    return (
        <div className="listing h-screen w-screen flex justify-center">
            <div className="listing__container h-full w-11/12 md:flex xl:flex">
                <div className="left xs:h-[719px] sm:h-full md:h-full md:w-1/4 lg:w-1/4 xl:w-1/4 flex flex-col items-center space-y-4 bg-yellow-600">
                    <div className="back__button h-32 w-full flex items-center mt-2 border-b-2">
                        <button className="flex space-x-2" onClick={() => router.back()}>
                            <AiOutlineArrowLeft className='text-2xl text-blue-500' />
                            <div className="button__text">
                                <span className='text-blue-500 font-bold font-roboto'>Back to Jobs</span>
                            </div>
                        </button>
                    </div>
                    <div className='listing__details h-[500px] w-full flex flex-col pt-5 '>
                        <div className="listing__details">
                            <ListingDetails details={mockData} />
                        </div>
                    </div>
                    <div className="apply__button h-[300px] w-full  flex items-center">
                        <ApplyButton />
                    </div>
                </div>
                <div className="right sm:w-full md:w-3/4 h-full flex items-center justify-center bg-purple-200">
                    <ListingContent content={mockData} />

                </div>
            </div>
        </div>
    )
}

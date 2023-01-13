import React from 'react'
import ListingDetails from '../../components/listingDetails/ListingDetails'

export default function Listing() {
    return (
        <div className="listing h-screen w-screen bg-purple-500 flex justify-center">
            <div className="listing__container h-full w-11/12 flex">
                <div className="right h-full w-2/6 bg-green-400 flex justify-center pt-8">
                    <ListingDetails />
                </div>
                <div className="left h-full w-4/6 bg-orange-500">
                    left_side
                </div>
            </div>
        </div>
    )
}

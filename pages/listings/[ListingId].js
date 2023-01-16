import React from 'react'
import ListingDetails from '../../components/listingDetails/ListingDetails'

export default function Listing() {
    return (
        <div className="listing h-screen w-screen bg-purple-500 flex justify-center">
            <div className="listing__container h-full w-11/12 flex">
                <div className="right h-full w-1/4 bg-green-400 flex flex-col items-center space-y-3 ">
                    <div className="back__button">
                        back button
                    </div>
                    <ListingDetails />
                </div>
                <div className="left h-full w-3/4 bg-orange-500">
                    left_side
                </div>
            </div>
        </div>
    )
}

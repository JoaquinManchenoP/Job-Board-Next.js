import React from 'react';
import { MdLocationPin } from 'react-icons/md';

export default function LocationTag({ location }) {
    return (
        <div className="location h-9 w-40 bg-gray-200 flex items-center space-x-2 justify-center rounded-md">
            <div className="icon">
                <MdLocationPin />
            </div>
            <div className="text text-sm">
                {location}
            </div>
        </div>
    )
}

import React from 'react';
import { MdLocationPin } from 'react-icons/md';

export default function LocationTag({ location }) {
    return (
        <div class="location h-9 w-40 bg-gray-200 flex items-center space-x-2 justify-center rounded-md">
            <div class="icon">
                <MdLocationPin />
            </div>
            <div class="text text-sm">
                {location}
            </div>
        </div>
    )
}

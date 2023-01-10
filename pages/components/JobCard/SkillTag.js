import React from 'react';
import { BsTagFill } from 'react-icons/bs';

export default function SkillTag({ tag }) {
    return (
        <div class="tag h-6 w-16 min-w-fit bg-gray-200 flex space-x-2 rounded-md p-2">
            <div class="tag__icon h-full w-1/3 flex items-center justify-center">
                <BsTagFill />
            </div>
            <div class="tag__text h-full w-2/3 flex items-center justify-center text-sm ">
                {tag}
            </div>
        </div>
    )
}

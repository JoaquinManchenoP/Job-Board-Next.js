import React from 'react'
import { BsCash } from 'react-icons/bs';


export default function SalaryTag({ salary }) {
    return (
        <div class="salary flex h-9 w-44 bg-gray-200 rounded-md items-center justify-center space-x-2">
            <div class="icon">
                <BsCash className='text-xl' />
            </div>
            <div class="text text-sm">
                {salary}
            </div>
        </div>
    )
}

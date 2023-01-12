import React from 'react'
import { BsCash } from 'react-icons/bs';


export default function SalaryTag({ salary }) {
    return (
        <div className="salary flex h-9 w-44 bg-gray-200 rounded-md items-center justify-center space-x-2">
            <div className="icon">
                <BsCash className='text-xl' />
            </div>
            <div className="text text-sm">
                {salary}
            </div>
        </div>
    )
}

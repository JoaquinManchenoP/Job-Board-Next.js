import React from 'react'

export default function JobType({ jobType }) {
    return (
        <div
            className="job__type text-sm h-full w-full bg-blue-400 flex items-center justify-center rounded-md"
        >
            {jobType}
        </div>

    )
}

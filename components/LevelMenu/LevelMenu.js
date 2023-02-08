import React from 'react'
import PostJobButton from '../Button/PostJobButton'

export default function LevelMenu() {
    return (
        <div className="level__menu h-11 w-full bg-blue-400 flex sm:pl-0 md:pl-3 rounded-md ">
            <div className="left__side h-full w-2/3 flex items-center space-x-2">
                <div
                    className="senior h-8 w-24 flex items-center justify-center rounded-md shadow-md bg-gray-200"
                >
                    Senior Level
                </div>
                <div className="mid h-8 w-24 flex items-center justify-center rounded-md shadow-md  bg-gray-200">
                    Mid Level
                </div>
                <div className="junior h-8 w-24 flex items-center justify-center rounded-md shadow-md  bg-gray-200">
                    Junior Level
                </div>
            </div>
            <div className="right__side flex flex-col items-end justify-center  h-full w-1/3 sm:pr-1 md:pr-3">
                <PostJobButton />
            </div>
        </div>
    )
}

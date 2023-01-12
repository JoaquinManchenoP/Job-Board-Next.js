import React from 'react'

export default function LevelMenu() {
    return (
        <div className="level__menu h-11 w-full bg-blue-400 flex pl-3 rounded-md ">
            <div className="left__side h-full w-2/3 flex items-center space-x-2">
                <div
                    className="senior h-8 w-24 flex items-center justify-center rounded-md shadow-md text-white bg-green-200"
                >
                    Senior Level
                </div>
                <div className="mid h-8 w-24 flex items-center justify-center rounded-md shadow-md text-white">
                    Mid Level
                </div>
                <div className="junior h-8 w-24 flex items-center justify-center rounded-md shadow-md text-white">
                    Junior Level
                </div>
            </div>
            <div className="right__side flex flex-col items-end justify-center  h-full w-1/3 pr-3">
                <button className="h-9 w-40 bg-gray-200 rounded-md shadow-md">Post a job for 49.99</button>
            </div>
        </div>
    )
}

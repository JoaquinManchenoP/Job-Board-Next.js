import React, { Children } from 'react'
import LevelMenu from '../../../components/levelMenu/LevelMenu'

export default function Layout({ children }) {
    return (
        <div className="h-screen w-screen flex items-center justify-center font-roboto">
            <div className="app__container h-screen w-full md:w-[800px]">
                <div className="menu sticky top-0 z-50 mb-3">
                    <LevelMenu />
                </div>
                {children}
            </div>
        </div>
    )
}
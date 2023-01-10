import React, { Children } from 'react'
import LevelMenu from '../../components/LevelMenu/LevelMenu.js';

export default function Layout({ children }) {
    return (
        <div class="h-screen w-screen flex items-center justify-center">
            <div class="app__container h-screen xsm:w-full sm:w-[800px]">
                <div class="menu sticky top-0 z-50 mb-3">
                    <LevelMenu />
                </div>
                {children}
            </div>
        </div>
    )
}

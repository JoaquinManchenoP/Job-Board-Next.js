import React from 'react'
import { motion } from "framer-motion"
import Link from 'next/link'

export default function PostJobButton() {
    return (
        <div className="post__job">
            <Link href={'/PostJob'}>
                <motion.div
                    className='h-9 w-44 bg-gray-200 rounded-md shadow-xl flex items-center justify-center'
                    whileHover={{ scale: 1.06 }}
                    whileTap={{ scale: 0.99 }}
                >Post a Job for 59.99</motion.div>
            </Link>
        </div>
    )
}

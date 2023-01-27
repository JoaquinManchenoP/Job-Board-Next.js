import React from 'react'
import { motion } from 'framer-motion'

export default function ApplyButton() {
    return (
        <motion.div
            whileHover={{ scale: 1.01 }}
            whileTap={{ scale: 0.99 }}
            className="apply__button h-16 w-44 bg-red-500 flex items-center justify-center rounded-md shadow-lg ">
            <span>Apply Now</span>
        </motion.div>
    )
}

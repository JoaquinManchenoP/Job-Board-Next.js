import React from 'react'
import JobType from './JobType';
import SkillTag from './SkillTag';
import SalaryTag from './SalaryTag';
import LocationTag from './LocationTag'
import { motion } from 'framer-motion';

export default function JobCard({ data }) {
    return (
        <motion.div
            whileHover={{ scale: 1.01 }}
            whileTap={{ scale: 0.99 }}
            className="job__card h-36 w-full border-solid border-2 rounded-md shadow-lg  ">
            <div className="card__container h-full w-full flex">
                <div className="left__side h-full w-full">
                    <div className="job__title h-2/6 w-full flex items-center">
                        <div className="job__title ml-3">
                            <span className="text-xl font-robto font-semibold">{data.position}</span>
                        </div>
                    </div>
                    <div className="h-4/6 w-full">
                        <div className="job__type h-9 w-ful flex space-x-1">
                            <div className="type h-9 w-32 flex items-center justify-center pl-2">
                                <JobType jobType={data.jobType} />
                            </div>
                            <div className="skills flex items-center space-x-2 pl-2">
                                {data.skills.map((skill, idx) => (
                                    <SkillTag tag={skill} key={idx} />
                                ))}
                            </div>
                        </div>
                        <div className="salary__location h-4/6 w-full flex items-center space-x-3 pl-2">
                            <div className="salary">
                                <SalaryTag salary={data.salaryRange} />
                            </div>
                            <civ className="location">
                                <LocationTag location={data.jobLocation} />
                            </civ>
                        </div>
                    </div>
                </div>
                <div className="right__side h-full w-28 space-y-10">
                    <div className="employer text-sm font-semibold mt-3">Google</div>
                    <div className="time__posted text-sm font-extralight">2 days ago</div>
                </div>
            </div>
        </motion.div>
    )
}

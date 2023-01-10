import React from 'react'
import JobType from './JobType'
import SkillTag from './SkillTag'
import SalaryTag from './SalaryTag'
import LocationTag from './LocationTag'

export default function JobCard() {
    return (
        <div class="job__card h-36 w-full border-solid border-2 rounded-md shadow-lg  ">
            <div class="card__container h-full w-full flex">
                <div class="left__side h-full w-full">
                    <div class="job__title h-2/6 w-full flex items-center">
                        <div class="job__title ml-3">
                            <span class="text-xl">Devops Engineer</span>
                        </div>
                    </div>
                    <div class="h-4/6 w-full">
                        <div class="job__type h-9 w-ful flex space-x-1 ">
                            <div class="type h-9 w-32 flex items-center justify-center pl-2">
                                <JobType />
                            </div>
                            <div class="skills flex items-center space-x-2 pl-2">
                                <SkillTag tag={'React'} />
                                <SkillTag tag={'Svelte'} />
                                <SkillTag tag={'React'} />
                            </div>
                        </div>

                        <div class="salary__location h-4/6 w-full flex items-center space-x-3 pl-2">
                            <div class="salary">
                                <SalaryTag salary={'100,000 - 200,000'} />
                            </div>
                            <civ class="location">
                                <LocationTag location={'Quito, Ecuador'} />
                            </civ>
                        </div>
                    </div>
                </div>
                <div class="right__side h-full w-28 space-y-10">
                    <div class="employer text-sm font-semibold mt-3">Google</div>
                    <div class="time__posted text-sm font-extralight">2 days ago</div>
                </div>
            </div>
        </div>
    )
}

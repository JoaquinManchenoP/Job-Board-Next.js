import JobCard from "../components/jobCard/JobCard"
import Layout from "./Layout/mainLayout/Layout"
import Link from "next/link"

export default function Home() {

  const mockData = [
    {
      'id': 1,
      'position': 'Software Engineer',
      'jobType': 'Development',
      'salaryRange': '100,000 - 200,000',
      'jobLocation': 'Remote',
      'skills': [
        'react', 'svelte', 'php'
      ],
      'employerName': 'Metrosolutions storage'
    },
    {
      'id': 2,
      'position': 'Devops Engineer',
      'jobType': 'Engineering',
      'salaryRange': '150,000 - 200,000',
      'jobLocation': 'Quito, Ecuador',
      'skills': [
        'Ruby', 'Remix', 'Vue'
      ],
      'employerName': 'google.com'
    },
    {
      'id': 3,
      'position': 'Team Manager',
      'jobType': 'Management',
      'salaryRange': '150,000 - 200,000',
      'jobLocation': 'New York, USA',
      'skills': [
        'RabitMq', 'Remix', 'Vue'
      ],
      'employerName': 'google.com'
    },
    {
      'id': 3,
      'position': 'UI/UX Designer',
      'jobType': 'Management',
      'salaryRange': '150,000 - 200,000',
      'jobLocation': 'Paris, France',
      'skills': [
        'RabitMq', 'Angular', 'Vue'
      ],
      'employerName': 'facebook.com'
    }
  ]


  return (
    <Layout>
      <div className="inde space-y-3 ">
        {mockData.map(job => (
          <div className="card" key={job.id}>
            <Link href={'/listings/' + job.id}>
              <JobCard data={job} />
            </Link>
          </div>
        ))}
      </div>
    </Layout >
  )
}

import JobCard from "../components/JobCard/JobCard"
import Layout from "./Layout/Layout.js/Layout"

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
    }
  ]


  return (
    <Layout>
      <div className="index space-y-2 ">
        {mockData.map(job => (
          <JobCard data={job} key={job.id} />
        ))}
      </div>
    </Layout >
  )
}

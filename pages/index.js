import JobCard from "../components/JobCard/JobCard"
import Layout from "./Layout/Layout.js/Layout"

export default function Home() {

  const mockData = [
    {
      'id': 1,
      'position': 'Software Engineer',
      'jobType': 'Development',
      'salary-range': '100,000 - 200,000',
      'location': 'Remote',
      'skills': [
        'react', 'svelte', 'php'
      ],
      'employerName': 'Metrosolutions storage'
    },
    {
      'id': 2,
      'position': 'Devops Engineer',
      'jobType': 'Development',
      'salary-range': '150,000 - 200,000',
      'location': 'Quito, Ecuador',
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

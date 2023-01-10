import JobCard from "./components/JobCard/JobCard"
import Layout from "./Layout/Layout.js/Layout"

export default function Home() {
  return (
    <div className="index">
      <Layout>
        <JobCard />
        <JobCard />
        <JobCard />
        <JobCard />
        <JobCard />
        <JobCard />
      </Layout>
    </div>
  )
}

import Layout from "../components/layout"
import Link from "next/link"

export default function Home() {
  return (
    <Layout>
      <div className="container">
        <p>Home Page</p>

        <Link href="/page-2">
          <a>Link to Page 2</a>
        </Link>
      </div>

      <style jsx>{`
        .container {
          text-align: center;
          color: darkred;
          padding: 200px;
        }
      `}</style>
    </Layout>
  )
}

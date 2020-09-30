import Layout from "../components/layout"
import Link from "next/link"

export default function Page2() {
  return (
    <Layout>
      <div className="container">
        <p>Page 2</p>

        <Link href="/">
          <a>Link to Home</a>
        </Link>
      </div>

      <style jsx>{`
        .container {
          text-align: center;
          color: green;
          padding: 50px;
        }
      `}</style>
    </Layout>
  )
}

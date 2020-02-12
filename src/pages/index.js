import React from "react"
import { Link } from "gatsby"
import Nav from "../components/nav/nav.component"
import Featured from "../components/home-featured/home-featured.component"
import About from "../components/home-about/home-about.component"
import Blog from "../components/home-blog/home-blog.component"
import Footer from "../components/footer/footer.component"
import Layout from "../components/layout/layout.component"
import SEO from "../components/seo"
import "./index.styles.scss"

const IndexPage = () => {
  return (
    <Layout>
      <SEO title="Home" />
      <Featured /> 
      <Nav />
      <About />
      <Blog />
      <Link to="/blog" className="view__more">
        View More
      </Link>
      <Footer />
    </Layout>
  )
}

export default IndexPage

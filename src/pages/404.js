import React from "react"
import Nav from "../components/nav/nav.component"
import Layout from "../components/layout/layout.component"
import Footer from "../components/footer/footer.component"
import SEO from "../components/seo"

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />
    <Nav />
    <section className="block__spacing container">
      <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
    </section>
    <Footer />
  </Layout>
)

export default NotFoundPage

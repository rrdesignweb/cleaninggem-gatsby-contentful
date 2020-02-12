import React from "react"
import Nav from "../components/nav/nav.component"
import Layout from "../components/layout/layout.component"
import Footer from "../components/footer/footer.component"
import SEO from "../components/seo"

const TestimonialsPage = () => (
  <Layout>
    <SEO title="Testimonials Page" />
    <Nav />
    <section className="section__wrapper">
      <h1>Testimonials</h1>
      <p>Testimonials Page</p>
    </section>
    <Footer />
  </Layout>
)

export default TestimonialsPage

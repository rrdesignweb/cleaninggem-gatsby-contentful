import React from "react"
import Nav from "../components/nav/nav.component"
import Layout from "../components/layout/layout.component"
import Testimonial from "../components/testimonial/testimonial.component"
import Header from "../components/header/header.component"
import Footer from "../components/footer/footer.component"
import SEO from "../components/seo"

const TestimonialsPage = () => (
  <Layout>
    <SEO title="Testimonials Page" />
    <Header siteTitle="Testimonials" />
    <Nav />
    <Testimonial />
    <Footer />
  </Layout>
)

export default TestimonialsPage

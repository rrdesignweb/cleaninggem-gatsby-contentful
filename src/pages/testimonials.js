import React from "react"
import Nav from "../components/nav/index"
import Layout from "../components/layout/index"
import Testimonial from "../components/testimonial/index"
import Header from "../components/header/index"
import Footer from "../components/footer/index"
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

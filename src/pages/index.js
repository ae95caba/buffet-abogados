import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import "./index.scss"
import Seo from "../components/seo"

const utmParameters = `?utm_source=starter&utm_medium=start-page&utm_campaign=default-starter`

const IndexPage = () => (
  <main id="home">
    <section className="hero">
      <div className="content"></div>
    </section>
    <section className="motto">
      <div className="content"></div>
    </section>
    <section class="stats">
      <div className="content"></div>
    </section>
    <section className="call-to-action">
      <div className="content"></div>
    </section>
  </main>
)

/**
 * Head export to define metadata for the page
 *
 * See: https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-head/
 */
export const Head = () => <Seo title="Home" />

export default IndexPage

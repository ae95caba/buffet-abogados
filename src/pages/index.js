import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import "./index.scss"
import Hero from "../images/GatsbyImages/Hero"
import Seo from "../components/seo"
import Section from "../components/Section"

const utmParameters = `?utm_source=starter&utm_medium=start-page&utm_campaign=default-starter`

const IndexPage = () => (
  <main id="home">
    <Section className={"hero"}>
      <div className="container first">
        <h3>Lorem ipsum dolor sit amet consectetur.</h3>
        <h1>Lorem ipsum dolor sit amet consectetur adipisicing elit.</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt et
          perferendis illum, sint tenetur quod.
        </p>
        <button>Contacto</button>
      </div>
      <div className="container second">
        <Hero />
        <div className="years">
          <p>
            <span>25</span> <br />
            Años de experiencia en el campo
          </p>
        </div>
      </div>
    </Section>
    <Section className={"achievements"} />
    <Section className={"services"}>
      <h2>Areas loremipsum</h2>
      <ul>
        <li>Trabajo</li>
        <li>Civil</li>
        <li>Criminal</li>
        <li>Propiedad Intelectual</li>
        <li>Propiedad</li>
        <li>Fraude</li>
        <li>Violencia domestica</li>
        <li>Medico</li>
      </ul>
    </Section>
    <Section className={"team"} />
  </main>
)

/**
 * Head export to define metadata for the page
 *
 * See: https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-head/
 */
export const Head = () => <Seo title="Home" />

export default IndexPage

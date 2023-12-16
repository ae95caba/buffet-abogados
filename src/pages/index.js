import * as React from "react"
import { useState } from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import "./index.scss"
import linkedin from "../images/linkedin.svg"
import CountUp from "react-countup"
import ScrollTrigger from "react-scroll-trigger"
import twitter from "../images/twitter.svg"
import instagram from "../images/instagram.svg"
import facebook from "../images/facebook.svg"
import Hero from "../images/GatsbyImages/Hero"
import Seo from "../components/seo"
import Section from "../components/Section"
import Member1 from "../images/GatsbyImages/Member1"
import Member2 from "../images/GatsbyImages/Member2"
import Member3 from "../images/GatsbyImages/Member3"
import Member4 from "../images/GatsbyImages/Member4"

const utmParameters = `?utm_source=starter&utm_medium=start-page&utm_campaign=default-starter`

let members = [
  {
    name: "Pablito Lopez",
    position: "Abogado lider",
    image: <Member1 />,
    linkedin: "linkedin/another-person",
    facebook: "asdfasdf",
    twitter: "fasfa",
    instagram: "asf",
  },
  {
    name: "Franco Garcia",
    position: "Abogado asistente",
    image: <Member2 />,
    linkedin: "linkedin/another-person",
  },
  {
    name: "Fernanda Perez",
    position: "Secretaria",
    image: <Member3 />,
    linkedin: "linkedin/another-person",
    facebook: "fasdfa",
  },
  {
    name: "Juan Russo",
    position: "Abogado asistente",
    image: <Member4 />,
    linkedin: "linkedin/another-person",
    twitter: "fasdfa",
  },
]
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
    <Section className={"achievements"}>
      <Counter value={300} text={"Casos ganados"} duration={4} />
      <Counter value={400} text={"Cargos desestimados"} duration={5} />
      <Counter value={1000} text={"Clientes satisfechos"} duration={6} />
    </Section>
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
    <Section className={"team"}>
      <h2>Nuestro Equipo</h2>
      <ul>
        {members.map(member => (
          <li>
            {member.image}
            <div className="links">
              {member.linkedin && (
                <a href={member.linkedin}>
                  <img src={linkedin} />
                </a>
              )}
              {member.facebook && (
                <a href={member.facebook}>
                  <img src={facebook} />
                </a>
              )}
              {member.twitter && (
                <a href={member.twitter}>
                  <img src={twitter} />
                </a>
              )}
              {member.instagram && (
                <a href={member.instagram}>
                  <img src={instagram} />
                </a>
              )}
            </div>
          </li>
        ))}
      </ul>
    </Section>
  </main>
)

function Counter({ value, duration, text }) {
  const [startCounters, setStartCounters] = useState(false)
  return (
    <ScrollTrigger onEnter={() => setStartCounters(true)} className="container">
      <p>
        {startCounters ? (
          <CountUp end={value} duration={duration} start={0} delay={0.5} />
        ) : (
          "0"
        )}
      </p>
      <p>{text}</p>
    </ScrollTrigger>
  )
}

/**
 * Head export to define metadata for the page
 *
 * See: https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-head/
 */
export const Head = () => <Seo title="Home" />

export default IndexPage

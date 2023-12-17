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
import About from "../images/GatsbyImages/About"
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

let services = {
  laboral: [
    "Accidentes de trabajo",
    "Despidos",
    "Trabajo en negro",
    "Acoso laboral",
    "Diferencias laborales",
  ],
  penal: [
    "Delitos dolosos",
    "Ley de estupefacientes",

    "Robos",
    "Portacion de armas",
    "Secuestros",
    "Lesiones",
    "Allanamientos",
    "Morigeracion de condenas",
  ],
}

const IndexPage = () => (
  <main id="home">
    <Section className={"hero"}>
      <div className="container first">
        <h3>SERVICIO LEGAL DE EXCELENCIA</h3>
        <h1>
          JM & Asociados.
          <br /> Estudio juridico.
        </h1>
        <p>
          Responsabilidad y eficacia, orientada a la resolución de conflictos en
          el menor tiempo posible
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
    <Section className={"about"}>
      <h2>
        Porque somos tu
        <br /> mejor eleccion
      </h2>
      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Animi vitae,
        quasi vero rem voluptatibus dolorem illum! Natus a similique placeat
        illo neque, blanditiis optio reprehenderit totam eligendi impedit
        maxime, explicabo tempora officiis recusandae ducimus sed debitis cumque
        rerum quae earum voluptatem soluta laboriosam magni. Vel nemo illum
        eaque possimus necessitatibus.
      </p>
    </Section>
    <Section className={"achievements"}>
      <Counter value={300} text={"Casos ganados"} duration={4} />
      <Counter value={400} text={"Cargos desestimados"} duration={5} />
      <Counter value={1000} text={"Clientes satisfechos"} duration={6} />
    </Section>
    <Section className={"services"}>
      <h2>Areas de practica</h2>
      {Object.keys(services).map(key => (
        <div className="container" key={key}>
          <h3>{key}</h3>
          <ul>
            {services[key].map(value => (
              <li key={value}>{value}</li>
            ))}
          </ul>
        </div>
      ))}
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
          <span>0</span>
        )}
        <br />
        {text}
      </p>
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

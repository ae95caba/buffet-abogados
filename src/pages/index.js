import * as React from "react"
import { useState, useRef } from "react"
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
import Lottie, { LottieRefCurrentProps } from "lottie-react"
import animationData from "../animations/contact-me.json"
import trophy from "../images/trophy.svg"
import judge from "../images/judge.svg"
import users from "../images/users.svg"

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
    "Moratorias",
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

const IndexPage = () => {
  const contactMeAnimationRef = useRef(null)
  return (
    <main id="home">
      <Section className={"hero"}>
        <div className="container first">
          <h3>SERVICIO LEGAL DE EXCELENCIA</h3>
          <h1>
            JM & Asociados.
            <br /> Estudio juridico.
          </h1>
          <p>
            Responsabilidad y eficacia, orientada a la resolución de conflictos
            en el menor tiempo posible.
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
        <Counter
          value={300}
          text={"Casos ganados"}
          duration={4}
          icon={trophy}
        />
        <Counter
          value={400}
          text={"Cargos desestimados"}
          duration={5}
          icon={judge}
        />
        <Counter
          value={1000}
          text={"Clientes satisfechos"}
          duration={6}
          icon={users}
        />
      </Section>
      <Section className={"about"}>
        <h2>
          Porque somos tu
          <br /> mejor eleccion
        </h2>
        <p>
          Nuestro estudio se compone de un equipo de cuatro profesionales
          altamente especializados en las áreas laboral y penal. Con una sólida
          trayectoria y valores fundamentales centrados en la ética y la
          transparencia, nos comprometemos a brindar a nuestros clientes una
          representación legal excepcional. Nuestro enfoque personalizado,
          combinado con experiencia probada, nos distingue en la resolución
          exitosa de casos y la defensa efectiva de los derechos de nuestros
          clientes.
        </p>
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
      <Section className={"email"}>
        <div className="container">
          <h2>Contactanos</h2>
          <Lottie
            className="animation"
            lottieRef={contactMeAnimationRef}
            animationData={animationData}
            autoplay={true}
            loop={true}
          />
        </div>
        <form action="https://formsubmit.co/ae95caba@gmail.com" method="POST">
          <legend>Lorem ipsum dolor sit amet.</legend>
          <input type="email" name="email" id="" placeholder="Email" required />
          <input type="text" name="name" placeholder="Nombre" required />
          <input
            type="hidden"
            name="_next"
            value="http://localhost:8000/"
          ></input>
          <textarea
            name="message"
            id=""
            cols="30"
            rows="10"
            placeholder="Escribe tu mensaje"
          ></textarea>
          <button>Enviar</button>
        </form>
      </Section>
    </main>
  )
}

function Counter({ value, duration, text, icon }) {
  const [startCounters, setStartCounters] = useState(false)
  return (
    <ScrollTrigger onEnter={() => setStartCounters(true)} className="container">
      <img src={icon} alt="" />
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

import React from "react"
import phone from "../images/phone.svg"
import pin from "../images/pin.svg"
import email from "../images/email.svg"
import { ReactSVG } from "react-svg"
import linkedin from "../images/linkedin.svg"
import twitter from "../images/twitter.svg"
import instagram from "../images/instagram.svg"
import facebook from "../images/facebook.svg"
import whatsapp from "../images/whatsapp.svg"

const links = {
  instagram: { url: "asdf", icon: instagram },
  facebook: { url: "fasf", icon: facebook },
  linkedin: { url: "fasdf", icon: linkedin },
  twitter: { url: "fasdf", icon: twitter },
}

const container = {
  whatsapp: { icon: whatsapp, string: "+5491265800", url: "fasdfas" },
  phone: { icon: phone, string: "+54911291855", url: "asdf" },
  location: {
    icon: pin,
    string: "Gallo 2145, Ciudad de Buenos Aires, Argentina",
    url: "www.maps.google.com",
  },
  email: { icon: email, string: "jmyasociados@gmail.com", url: "fasdf" },
}

export default function Footer() {
  return (
    <footer>
      <div className="content">
        {Object.keys(container).length > 0 && (
          <div className="container">
            {Object.keys(container).map(plataform => (
              <a
                target="_blank"
                rel="noopener noreferrer"
                href={container[plataform].url}
              >
                <ReactSVG src={container[plataform].icon} />
                {container[plataform].string}
              </a>
            ))}
          </div>
        )}
        {Object.keys(links).length > 0 && (
          <div className="icons">
            {Object.keys(links).map(plataform => (
              <a
                target="_blank"
                rel="noopener noreferrer"
                href={links[plataform].url}
              >
                <ReactSVG src={links[plataform].icon} />
              </a>
            ))}
          </div>
        )}

        <div className="copyright">
          <p>
            Copyright © 2023 | JM & Asociados por
            <a href="https://andreespinozadev.netlify.app/"> Andre Espinoza</a>
          </p>
        </div>
      </div>
    </footer>
  )
}

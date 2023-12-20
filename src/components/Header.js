import React from "react"
import { ReactSVG } from "react-svg"
import { Link } from "gatsby"
import { useContext, useRef } from "react"

import balance from "../images/balance.svg"
import animationData from "../animations/hamburger-menu.json"
import Lottie from "lottie-react"

const tabsObj = [
  "Areas de practica",
  "Nosotros",
  "Nuestro equipo",
  "Contactanos",
]

export default function Header() {
  const hambugerAnimationRef = useRef(null)
  return (
    <header>
      <div className="content">
        <Link to="/" /* activeClassName="active" */ className="logo">
          <ReactSVG src={balance} />
          <h1>
            JM & Asociados
            <br /> <span>Estudio juridico</span>
          </h1>
        </Link>
        <div className="container">
          <nav>
            <Tabs />
          </nav>
          <input
            type="checkbox"
            id="checkbox"
            onChange={e => {
              console.log("change")
              const isChecked = e.target.checked
              console.log(isChecked)
              if (isChecked) {
                hambugerAnimationRef.current?.playSegments([0, 50], true)
              } else {
                hambugerAnimationRef.current?.playSegments([75, 150], false)
              }
            }}
          />
          <label for="checkbox" class="overlay"></label>
          <Sidebar />
          <label className="hamburger-menu" htmlFor="checkbox">
            <Lottie
              lottieRef={hambugerAnimationRef}
              animationData={animationData}
              autoplay={false}
              loop={0}
            />
          </label>
        </div>
      </div>
    </header>
  )
}

function Sidebar() {
  return (
    <aside className="sidebar">
      <Tabs />
    </aside>
  )
}

function Tabs() {
  return (
    <>
      <Link to={`/#nosotros`} /* activeClassName="active" */>Nosotros</Link>
      <Link to={`/#areas-de-practica`} /* activeClassName="active" */>
        Areas de practica
      </Link>
      <Link to={`/#nuestro-equipo`} /* activeClassName="active" */>
        Nuestro Equipo
      </Link>
      <Link to={`/#contactanos`} /* activeClassName="active" */>
        Contáctanos
      </Link>
    </>
  )
}

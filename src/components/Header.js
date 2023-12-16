import React from "react"

import { Link } from "gatsby"
import { useContext, useRef } from "react"

import Logo from "../images/GatsbyImages/Logo"
import animationData from "../animations/hamburger-menu.json"
import Lottie from "lottie-react"

const tabsObj = ["Catalogo", "Nosotros", "Galeria", "Testimonios"]

export default function Header() {
  const hambugerAnimationRef = useRef(null)
  return (
    <header>
      <div className="content">
        <Link to="/" activeClassName="active">
          <Logo />
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
      {tabsObj.map(tab => (
        <Link to={`/${tab.toLowerCase()}`} activeClassName="active">
          {tab}
        </Link>
      ))}
    </>
  )
}

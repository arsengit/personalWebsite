import React, { useState, useEffect, useCallback } from "react"
import AniLink from "gatsby-plugin-transition-link/AniLink"
import { motion } from "framer-motion"
import DarkMode from "./darkMode/DarkMode"
import useTheme from "./lib/useTheme/useTheme"

let tabs = [
  {
    text: "Arsen",
    path: "/",
  },
  {
    text: "About",
    path: "about",

  },
  {
    text: "Portfolio",
    path: "portfolio",

  },
  {
    text: "Contact",
    path: "contact",

  },
]

const variants = {
  open: { opacity: 1, x: 0 },
  closed: { opacity: 0, x: "-100%" },
}

function Header()
{
  const isDark = useTheme();
  const [hamburger, setHamburger] = useState(false)
  const [show, setShow] = useState(false)

  useEffect(() =>
  {
    const isSmall = window.innerWidth <= 639
    setHamburger(isSmall)
    setShow(!isSmall)
    window.addEventListener("resize", onResize)
    return () =>
    {
      window.removeEventListener("resize", onResize)
    }
  }, [])

  const toggleMenu = useCallback(() =>
  {
    setShow(!show)
  }, [show])


  function onResize()
  {
    const isSmall = window.innerWidth <= 639
    if (!hamburger)
    {
      setHamburger(isSmall)
      setShow(!isSmall)
    }
  }


  return (
    <header className={`fixed w-full z-10 text-gray-800 h-16 flex items-center shadow-header bg-gray-200`}>
      <div className="container relative">
        {hamburger &&
        <button className="px-4" onClick={toggleMenu}><i className={show ? "icon-close" : "icon-menu"}/></button>}
        <motion.nav
          animate={show ? "open" : "closed"}
          variants={variants}
          className="top-40 pt-6 sm:pt-0 absolute sm:static w-full h-screen sm:h-auto sm:bg-transparent z-50 bg-gray sm:bg-transparent ">
          <ul
            className="sm:text-justify text-center flex flex-col text-base h-full sm:h-auto sm:h-auto sm:flex-row sm:text-base">
            {
              tabs.map((tab, index) =>
                <li
                  className={tab.text === "Arsen" ? "sm:block hidden pb-6 sm:pb-0 sm:flex-1 font-bold" : "pb-6 sm:pb-0 sm:ml-10"}
                  key={index}>
                  <AniLink
                    activeClassName="active"
                    to={tab.path}
                    paintDrip hex={isDark ? "#718096" : "#cbd5e0"}
                  >{tab.text}</AniLink>
                </li>,
              )
            }
            <li className="justify-center sm:ml-5 flex items-center">
              <DarkMode/>
            </li>
          </ul>
        </motion.nav>
      </div>

    </header>
  )

}


export default Header

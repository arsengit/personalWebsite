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
  const isDark = useTheme()
  const [hamburger, setHamburger] = useState(false)
  const [show, setShow] = useState(false)

  useEffect(() =>
  {
    const isSmall = window.innerWidth <= 639
    setHamburger(isSmall)
    setShow(!isSmall)
    window.addEventListener("resize", onResize)
    window.addEventListener("click", handleClick)
    return () =>
    {
      window.removeEventListener("resize", onResize)
      window.removeEventListener("click", handleClick)
    }
  }, [])

  function handleClick(e)
  {
    const { tabIndex } = e.target
    if (tabIndex !== 1 && window.innerWidth <= 639)
    {
      setShow(false)
    }
  }

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
    <header tabIndex={1} className={`fixed w-full z-20 text-gray-800 h-16 flex items-center shadow-header bg-gray-200`}>
      <div tabIndex={1} className="container relative">
        {hamburger &&
        <button tabIndex={1} className="px-4" onClick={toggleMenu}><i tabIndex={1}
                                                                      className={show ? "icon-close" : "icon-menu"}/>
        </button>}
        <motion.nav
          tabIndex={1}
          animate={show ? "open" : "closed"}
          initial={{ x: "-100%" }}
          variants={variants}
          className="top-40 pt-6 sm:pt-0 absolute sm:static sm:w-full w-2/4 h-screen sm:h-auto sm:bg-transparent z-50 bg-gray sm:bg-transparent shadow-2xl">
          <ul
            tabIndex={1}
            className="sm:text-justify text-center flex flex-col text-base h-full sm:h-auto sm:h-auto sm:flex-row sm:text-base items-center">
            {
              tabs.map((tab, index) =>
                {
                  const isFirst = tab.text === "Arsen"
                  return (<li
                      tabIndex={1}
                      className={tab.text === "Arsen" ? "sm:block  pb-6 sm:pb-0 sm:flex-1 font-bold" : "pb-6 sm:pb-0 sm:ml-10"}
                      key={index}>
                      <AniLink
                        tabIndex={1}
                        activeClassName="active"
                        to={tab.path}
                        paintDrip hex={isDark ? "#718096" : "#cbd5e0"}
                      >
                        <motion.span tabIndex={1} whileHover={{ scale: 1.05, rotate: -7 }}
                                     whileTap={{ scale: 0.95 }}
                                     className={isFirst ? "text-2xl inline-block" : "inline-block text-lg"}>{tab.text}</motion.span>
                      </AniLink>
                    </li>
                  )
                },
              )
            }
            <li tabIndex={1} className="justify-center sm:ml-5 flex items-center">
              <DarkMode/>
            </li>
          </ul>
        </motion.nav>
      </div>

    </header>
  )

}


export default Header

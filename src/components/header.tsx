import React from "react"
import AniLink from "gatsby-plugin-transition-link/AniLink"
import { motion } from "framer-motion"
import DarkMode from "./darkMode/DarkMode"
import useTheme from "./lib/useTheme/useTheme"

let tabs = [
  {
    text: "Arsen",
    path: "/",
  },
]

const variants = {
  open: { opacity: 1, x: 0 },
  closed: { opacity: 0, x: "-100%" },
}

function Header() {
  const isDark = useTheme()

  function onTransitionEnd() {
    setTimeout(() => {
      const wrapper: any = document.getElementsByClassName("tl-wrapper")[0]
      wrapper.style.transform = "unset"
    }, 2500)
  }

  return (
    <header
      tabIndex={1}
      className={`fixed w-full z-20 text-gray-800 h-16 flex items-center shadow-header bg-gray-200 shadow-md top-0`}
    >
      <motion.nav
        tabIndex={1}
        animate="open"
        initial={{ x: "-100%" }}
        variants={variants}
        className="top-40 pl-10 pr-10  static w-full sm:h-auto bg-transparent z-50 shadow-2xl"
      >
        <ul
          tabIndex={1}
          className="text-justify flex text-base h-full h-auto  justify-between align-center"
        >
          {tabs.map((tab, index) => {
            const isFirst = tab.text === "Arsen"
            return (
              <li
                tabIndex={1}
                className={`${
                  tab.text === "Arsen" ? "sm:flex-1 font-bold" : "sm:ml-10"
                }`}
                key={index}
              >
                <AniLink
                  tabIndex={1}
                  activeClassName="active"
                  to={tab.path}
                  duration={1}
                  onClick={onTransitionEnd}
                  paintDrip
                  hex={isDark ? "#718096" : "#cbd5e0"}
                >
                  <motion.span
                    tabIndex={1}
                    whileHover={{ scale: 1.05, rotate: -7 }}
                    whileTap={{ scale: 0.95 }}
                    className={
                      isFirst ? "text-2xl inline-block" : "inline-block text-lg"
                    }
                  >
                    {tab.text}
                  </motion.span>
                </AniLink>
              </li>
            )
          })}
          <li tabIndex={1} className="justify-center sm:ml-5 flex items-center">
            <DarkMode />
          </li>
        </ul>
      </motion.nav>
    </header>
  )
}

export default Header

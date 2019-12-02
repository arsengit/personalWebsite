import AniLink from "gatsby-plugin-transition-link/AniLink";
import React, { useState, useEffect } from "react"
import DarkMode from "./darkMode/DarkMode";
import Animated from "./animated/Animated";

interface IHeaderProps
{
  siteTitle: string,
  mode?: string,
}

let tabs = [
  {
    text: "Arsen",
    path: "/",
    color: "",
  },
  {
    text: "Home",
    path: "/",
    color: "",
  },
  {
    text: "About Me",
    path: "about",
    color: "",

  },
  {
    text: "Portfolio",
    path: "portfolio",
    color: "",

  },
  {
    text: "Contact",
    path: "contact",
    color: "",

  },
]

function Header(props: IHeaderProps)
{
  const [hamburger, setHamburger] = useState(false);
  const [show, setShow] = useState(false);
  const [open, setOpen] = useState(false);
  const [rotate, setRotate] = useState(false);

  useEffect(() =>
  {
    const isSmall = window.innerWidth <= 639
    setHamburger(isSmall);
    setShow(!isSmall);
    window.addEventListener("resize", onResize);
    return () =>
    {
      window.removeEventListener("resize", onResize);
    }
  }, [])

  useEffect(() =>
  {
    let timeout
    if (timeout)
    {
      clearTimeout(timeout)
    }
    if (open)
    {
      timeout = setTimeout(() =>
      {
        setShow(false);
        setOpen(false)
      }, 700);
    }
    return () =>
    {
      clearTimeout(timeout);
    }
  }, [open])

  function onResize()
  {
    const isSmall = window.innerWidth <= 639;
    if (!hamburger)
    {
      setHamburger(isSmall)
      setShow(!isSmall);
      setRotate(false);
    }
  }

  function toggleMenu(e) 
  {
    toggleIcon();
    if (show)
    {
      setOpen(!open)
    } else
    {
      setShow(true)
    }
  }

  function toggleIcon() 
  {
    setRotate(!rotate)
  }


  const { siteTitle } = props;
  return (
    <header className="fixed w-full z-10 text-gray-800 h-16 flex items-center shadow-bottom bg-gray-100">
      <div className="container relative">
        {hamburger && <button className="px-4" onClick={toggleMenu}><i className={rotate ? "icon-close" : "icon-menu"} /></button>}
        {show && <Animated
          from={hamburger ? { transform: "translateX(-100%)" } : {}}
          to={hamburger ? { transform: "translateX(0%)" } : {}}
          inverse={open}
        >
          {
            props => (
              <nav style={hamburger ? props : {}} className="top-44 absolute sm:static w-full h-screen sm:h-auto sm:bg-transparent z-50 bg-gray sm:bg-transparent ">
                <ul className="sm:text-justify text-center flex flex-col h-full sm:h-auto sm:h-auto sm:flex-row sm:text-xl">
                  {
                    tabs.map((tab, index) =>
                      <li className={tab.text === "Arsen" ? "sm:block hidden pb-4 sm:pb-0 sm:flex-1 font-bold" : "pb-4 sm:pb-0 sm:ml-5"} key={index}>
                        <AniLink
                          activeClassName="active"
                          to={tab.path}
                          paintDrip hex="#40484C"
                        >{tab.text}</AniLink >
                      </li>
                    )
                  }
                  <li className="justify-center sm:ml-5 flex items-center">
                    <DarkMode />
                  </li>
                </ul>
              </nav>
            )
          }
        </Animated>
        }
      </div>

    </header>
  )

}


export default Header

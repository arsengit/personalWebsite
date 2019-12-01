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
  const [show, setShow] = useState(null);
  const [open, setOpen] = useState(false);
  const [rotate, setRotate] = useState(null);

  useEffect(() =>
  {
    const isSmall = window.innerWidth <= 640;
    setHamburger(isSmall);
    setShow(!isSmall);
    window.addEventListener("resize", onResize);
    // return () =>
    // {
    //   window.removeEventListener("resize", onResize);
    // }
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
    const isSmall = window.innerWidth <= 640;
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
    <header className="fixed w-full z-10 text-gray-800 h-16 flex items-center border-b border-gray-400 bg-gray-100">
      <div className="container relative">
        {hamburger && <button tabIndex={0} className={rotate ? "btnClicked" : "btnUnClicked"} onClick={toggleMenu}><i className={rotate ? "icon-close" : "icon-menu"} /></button>}
        {show && <Animated
          from={hamburger ? { transform: "translateX(-100%)" } : {}}
          to={hamburger ? { transform: "translateX(0%)" } : {}}
          inverse={open}
        >
          {
            props => (
              <nav style={hamburger ? props : {}} className="top-40 absolute sm:static w-full h-screen bg-gray-700 z-50">
                <ul className=" text-center flex flex-col h-full sm:flex-row sm:text-xl">
                  {
                    tabs.map((tab, index) =>
                      <li className={tab.text === "Arsen" ? "pb-4 sm:flex-1 font-bold" : "pb-4 sm:ml-5"} key={index}>
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

import AniLink from "gatsby-plugin-transition-link/AniLink";
import React from "react"
import DarkMode from "./darkMode/DarkMode";

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
  const { siteTitle } = props;
  return (
    <header className="font-bold fixed w-full z-10 text-gray-800 px-2 h-16 flex items-center border-b border-gray-400 bg-gray-100">
      <nav className="container">
        <ul className="flex text-xl">
          {
            tabs.map((tab, index) =>
              <li className={tab.text === "Arsen" ? "flex-1" : "ml-5"} key={index}>
                <AniLink
                  activeClassName="active"
                  to={tab.path}
                  paintDrip hex="#40484C"
                >{tab.text}</AniLink >
              </li>
            )
          }
          <li className="ml-5 flex items-center">
            <DarkMode />
          </li>
        </ul>
      </nav>
    </header>
  )

}


export default Header

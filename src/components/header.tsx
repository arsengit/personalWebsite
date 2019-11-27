import AniLink from "gatsby-plugin-transition-link/AniLink";
import React from "react"

interface IHeaderProps
{
  siteTitle: string
}

let tabs = [
  {
    text: "Arsen",
    path: "/",
    color: "",
  },
  {
    text: "home",
    path: "/",
    color: "",
  },
  {
    text: "About Me",
    path: "about",
    color: "",

  },
  {
    text: "Porfolio",
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
    <header className="font-bold fixed w-full">
      <nav className="container">
        <ul className="flex ">
          {
            tabs.map((tab, index) =>
              <li className={tab.text === "Arsen" ? "flex-1" : "ml-5"} key={index}>
                <AniLink
                  to={tab.path}
                  paintDrip hex="#663399"
                >{tab.text}</AniLink >
              </li>
            )
          }
        </ul>
      </nav>
    </header>
  )
}


export default Header

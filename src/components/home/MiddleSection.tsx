import * as React from "react"
import Image from "../image"
import { motion } from "framer-motion"

const social = [
  {
    icon: "github",
    path: "https://github.com/arsengit",
  }, {
    icon: "linkedin2",
    path: "https://www.linkedin.com/in/arsen-alkamyan-53b9a4174/",
  }, {
    icon: "twitter",
    path: "https://twitter.com/arsen_alkamyan",
  }]

function MiddleSection()
{
  let ref1 = React.useRef<any>()
  let timeoutId

  React.useEffect(() =>
  {
    let text1 = "Hi, I'm Arsen"
    typeWriter(text1, ref1)
    return () =>
    {
      clearTimeout(timeoutId)
    }
  }, [])

  function typeWriter(text: string, ref: any)
  {
    for (let i = 0; i < text.length; i++)
    {
      timeoutId = setTimeout(() =>
      {
        if (ref.current)
        {
          ref.current.textContent += text.charAt(i)
        }
      }, 80 * i)

    }
  }

  return (
    <>
      <div className="h-full pl-4 pr-4 flex justify-center items-center flex-col flex-col-reverse md:flex-row">
        <div className="w-full max-w-2xl  mt-4 flex justify-center flex-col">
          <h1 className="name-text m-auto md:m-0 font-bold text-4xl md:text-5xl">Arsen Alkamyan</h1>
          <span
            className="text-gray-900 text-xl mt-2 text-center md:text-left">Hi, I'm Software Engineer. I’ve been creating on the web for around {new Date().getFullYear() - 2018} years and have become pretty good at it!</span>
          <div className="min-w-xs w-5/12 m-auto mt-4 md:m-0  md:mt-4  h1 flex justify-between text-2xl z-10">
            {social.map(({ icon, path }) =>
            {
              return (<motion.a
                key={path}
                href={path}
                target={"_blank"}
                whileHover={{ scale: 1.05, rotate: -20 }}
                whileTap={{ scale: 0.95 }}
                className={`icon-${icon} cursor-pointer`}/>)
            })}
          </div>
        </div>
        <div className="w-64 rounded-50 border-2 md:ml-6 border-gray-100 relative">
          <Image className="rounded-50" image="myImg"/>
        </div>
      </div>
    </>
  )
}

export default MiddleSection
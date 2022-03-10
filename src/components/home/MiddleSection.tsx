import * as React from "react"
import { motion } from "framer-motion"
import Resume from "../../files/resume.pdf"

const social = [
  {
    icon: "github",
    path: "https://github.com/arsengit",
  },
  {
    icon: "linkedin2",
    path: "https://www.linkedin.com/in/arsen-alkamyan-53b9a4174/",
  },
  {
    icon: "twitter",
    path: "https://twitter.com/arsen_alkamyan",
  },
]

function MiddleSection() {
  return (
    <>
      <div className="md:h-full pl-4 pr-4 flex justify-center items-center flex-col flex-col-reverse lg:flex-row">
        <div className="w-full max-w-2xl  mt-4 flex justify-center flex-col">
          <h1 className="name-text m-auto lg:m-0 font-bold text-4xl md:text-5xl">
            Arsen Alkamyan
          </h1>
          <div className="max-w-2xl mb-8  mt-12 flex justify-center flex-col bio">
            <p className="text-mode text-xl">
              Hi, this is my webpage, so I have to say something about myself.
              Sometimes it is hard to introduce yourself because you know
              yourself so well that you do not know where to start with. I'm
              Arsen. Currently I'm working at
              <motion.a
                whileHover={{ scale: 1.05, rotate: -6 }}
                whileTap={{ scale: 0.95 }}
                className="text-2xl anchor-link mr-2 ml-2"
                href="https://www.linkedin.com/company/aimstackio/"
                target="_blank"
              >
                AimHub
              </motion.a>
              as a Engineer/Core Contributor. New and open source
              web technologies make me super excited and I can’t wait to see
              what is to come of the web in the next few years.
            </p>
            <motion.a
              rel="noreferrer"
              whileHover={{ scale: 1.05, rotate: -6 }}
              whileTap={{ scale: 0.95 }}
              className="text-2xl mt-2 text-mode anchor-link"
              href={Resume}
              target="_blank"
            >
              Resume <i className="icon-checkmark" />
            </motion.a>
          </div>
          <div className="min-w-xs w-5/12 m-auto mt-4 md:m-0  md:mt-4 sm:pb-0 pb-10  h1 flex justify-between text-2xl z-10">
            {social.map(({ icon, path }) => {
              return (
                <motion.a
                  key={path}
                  href={path}
                  target={"_blank"}
                  rel="noreferrer"
                  whileHover={{ scale: 1.05, rotate: -20 }}
                  whileTap={{ scale: 0.95 }}
                  className={`icon-${icon} cursor-pointer`}
                />
              )
            })}
          </div>
        </div>
        <div className="w-64 h-64 rounded-50 mt-20 md:mt-0 border-2 md:ml-6 border-gray-100 relative avatarImg" />
      </div>
    </>
  )
}

export default MiddleSection

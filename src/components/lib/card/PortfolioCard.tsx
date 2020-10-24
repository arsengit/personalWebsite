import * as React from "react"
import { motion } from "framer-motion"
import Image from "../../image"

interface ICardProps
{
  image: string;
  href: string;
  title: string;
  details: string;
}

function PortfolioCard(props: ICardProps)
{
  const { image, href, title, details } = props
  return (
    <motion.a
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }} href={href}
      className="sm:w-1/2 h-300 md:w-1/3 sm:pb-0 block group rounded-5 shadow-button relative overflow-hidden mb-12 w-full card-wrapper"
      target="_blank">
      <div className="overflow-hidden h-98">
        <Image image={image}/>
        <div
          className="p-2 absolute bg-gray z-10 bottom-0 h-12 w-full flex flex-col border-t border-solid border-gray-300 h-20">
          <h3 className="text-mode text-xl transition-colors">{title}</h3>
          <p className="text-mode-gray mt-2">{details}</p>
        </div>
      </div>
    </motion.a>
  )
}

export default PortfolioCard
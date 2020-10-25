import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Image from "../components/image"
import { motion } from "framer-motion"

const SecondPage = () => <Layout>
  <SEO title="About"/>
  <div className="lg:pt-32 pt-20 section-about container contact-section px-4 py-4 h-screen">
    <h1 className="h1-bold">About Me</h1>

    <div className="mt-20 flex justify-center items-center flex-col  lg:flex-row">

      <div className="w-64 rounded-50 border-2 lg:mr-20 border-gray-100 relative">
        <motion.i
          animate={{ rotate: 360 }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          className="icon-blob absolute my-img-icon h1  z-20 inline-block"/>
        <Image className="rounded-50" image="animeImg"/>
      </div>


      <div className="max-w-2xl mb-8  mt-12 flex justify-center flex-col">
        <p className="text-mode text-xl">
          Hi, this is my webpage, so I have to say something about myself. Sometimes it is hard to introduce yourself
          because you know yourself so well that you do not know where to start with.I'm Arsen Alkamyan, front-end
          developer from Armenia. Currently I'm learning Informatics And Applied Mathematics at Yerevan
          State
          University and working at <motion.a
          whileHover={{ scale: 1.05, rotate: -6 }}
          whileTap={{ scale: 0.95 }}
          className="text-2xl anchor-link" href="https://www.linkedin.com/company/digitain-armenia/mycompany/"
          target="_blank">Digitain</motion.a> as ReactJs Engineer.My first steps at development I started at 2018. I
          loved coding and started learn deeper. New and open source web technologies make me super excited and I can’t
          wait to see
          what
          is to come of the web in the next few years. I'm very passionate about web development and hard working on
          myself to be very good at it.
        </p>

      </div>
    </div>


  </div>
</Layout>

export default SecondPage

'use client'
// global components
import Image                           from "next/image"
import Link                            from "next/link"
import { AiOutlineMenu }               from "react-icons/ai"
import { FaPhoneAlt }                  from "react-icons/fa"
import { IoMdMail }                    from "react-icons/io"
import { CursorContext }               from "./CursorContext.jsx"
import React, { useContext, useState } from 'react'
import { motion }                      from 'framer-motion'

// local components
import MobileNav from "./MobileNav.jsx"
import Nav       from "./Nav.jsx"
import Socials   from "./Socials.jsx"

const Header = () => {

  const {
    mouseEnterHandler,
    mouseLeaveHandler,
  } = useContext(CursorContext)

  const [mobileNav, setMobileNav] = useState(false)

  return (
    <header className={`pb-6 xl:bp-[50px] fixed z-40 w-full bg-accent-100 xl:bg-transparent`}>
      {/*header*/}
      <div className={`bg-secondary-100 mb-6 xl:mb-[50px] xl:h-[50px] py-4 xl:py-0`}>
        <div className={`container mx-auto h-full`}>
          <div className={`flex items-center justify-between h-full`}>
            {/*  phone & email*/}
            <motion.div
              onMouseEnter={mouseEnterHandler}
              onMouseLeave={mouseLeaveHandler}
              className={`flex flex-col lg:flex-row items-center h-full gap-2 xl:gap-6 w-full justify-between xl:w-auto xl:justify-normal`}
            >
              {/*  phone */}
              <div className={`flex items-center gap-2 text-white`}>
                <FaPhoneAlt/>
                <span>+99(0) 999 333 667</span>
              </div>
              {/*  email*/}
              <div className={`flex items-center gap-2 text-white`}>
                <IoMdMail/>
                <span>info@youremail.com</span>
              </div>
            </motion.div>
            <div>
              {/*  socials*/}
              <motion.div
                onMouseEnter={mouseEnterHandler}
                onMouseLeave={mouseLeaveHandler}
                className={`hidden xl:block`}
              >
                <Socials containerStyles={`flex gap-6 text-white`}/>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
      <div className="container mx-auto flex items-center justify-between px-6">
        <motion.div
          onMouseEnter={mouseEnterHandler}
          onMouseLeave={mouseLeaveHandler}
        >
          <Link href={`/`}>
            <Image
              src={`/assets/logo.svg`}
              width={120}
              height={44}
              priority
              alt=""
            />
          </Link>
        </motion.div>
        {/*mobile nav trigger*/}
        <div
          className={`xl:hidden cursor-pointer`}
          onClick={() => setMobileNav(!mobileNav)}
        >
          <AiOutlineMenu className={`text-3xl text-primary`}/>
        </div>
        {/*mobile nav*/}
        <motion.div
          className={`fixed bg-primary top-0 bottom-0 right-0 w-[300px] xl:hidden z-50`}
          initial={{ right: `-100%` }}
          animate={{
            right: mobileNav
                     ? 0
                     : `-100%`,
          }}
        >
          <MobileNav setMobileNav={setMobileNav}/>
        </motion.div>
        {/*  desktop nav*/}
        <motion.div
          onMouseEnter={mouseEnterHandler}
          onMouseLeave={mouseLeaveHandler}
          className={`hidden xl:block`}
        >
          <Nav/>
        </motion.div>
      </div>
    </header>
  )
}
export default Header
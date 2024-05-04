import Link from "next/link"
import React from "react"
import {
    BiLogoInstagram,
    BiLogoLinkedin,
    BiLogoGithub,
    BiPhone,
} from "react-icons/bi"

const Footer=()=>{
    return(
        <div className="flex pb-3 m-auto text-slate-400 text-sm flex-col  items-center max-w-screen-xl">
        <div className="flex mb-2  w-full m-auto text-slate-400 text-sm flex-col md:flex-row items-center md:items-center md:justify-between max-w-screen-xl">
        <div className="flex items-center justify-center flex-wrap gap-4 mb-5 md:mb-0">
                <Link
                    href="#about"
                    className="text-1 text-slate-400 font-bold hover:text-white cursor-pointer"

                >
                    About
                </Link>
                <Link
                    href="#experience"
                    className="text-1 text-slate-400 font-bold hover:text-white cursor-pointer"

                >
                    Experience
                </Link>
                <Link
                    href="#skills"
                    className="text-1 text-slate-400 font-bold hover:text-white cursor-pointer"

                >
                    Skills
                </Link>
                <Link
                    href="#projects"
                    className="text-1 text-slate-400 font-bold hover:text-white cursor-pointer"

                >
                    Projects
                </Link>
                <Link
                    href="#contact"
                    className="text-1 text-slate-400 font-bold hover:text-white cursor-pointer"

                >
                    Contact Me
                </Link>
            </div>
            <div className="flex flex-wrap gap-4 md:gap-0 justify-center items-center space-x-4">
          
          <Link
            target="_blank"
            href="https://www.instagram.com/yogeshn257/"
            className=" p-2 rounded-full bg-white"
          >
            <BiLogoInstagram className="text-xl text-black  hover:text-red-400" />
          </Link>
          <Link
            target="_blank"
            href="https://www.linkedin.com/in/yogeshm27/"
            className=" p-2 rounded-full bg-white"
          >
            <BiLogoLinkedin className="text-xl text-black  hover:text-blue-600" />
          </Link>
          <Link
            target="_blank"
            href="https://github.com/yogesh006"
            className=" p-2 rounded-full text-black  bg-white"
          >
            <BiLogoGithub className="text-xl" />
          </Link>
          <Link
            href="tel:+919870774547"
            className="group relative flex h-12 items-center overflow-hidden rounded-full bg-gradient-to-r from-pink-500 to-purple-500 px-3 hover:to-purple-600 text-white"
          >
            <BiPhone className="text-xl" />
            <div className="text-white ml-2">+91 7217363484</div>
          </Link>
            </div>
        </div>
    </div>
    )
}
export default Footer;
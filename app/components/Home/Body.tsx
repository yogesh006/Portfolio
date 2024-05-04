"use client"
import React from 'react'
import Link from "next/link"
import Lottie from "lottie-react"
import {useTypewriter,Cursor} from "react-simple-typewriter"
import AnimationData from "../../assets/projects.json"


function Body() {

  const [text] = useTypewriter({
    words:[
      "I am Yogesh Maurya",
      "I am a FullStack Developer",
      "I am a Frontend Web Developer",
      "I am a Photographer",
      "I am an Engineer",
    ],
    loop:true,
    delaySpeed:1000,
  })
  return (
    <section className="py-8">
    <div className="mx-auto">
      {/* first part */}
      <div className="flex flex-col-reverse justify-between items-center md:flex-row md:space-x-8">
        <div className="w-full md:w-2/3 flex flex-col items-start md:w2/4 ">
          <h1 className="text-3xl lg:text-5xl font-semibold text-white">
            Hello
          </h1>
          <h1 className="text-3xl lg:text-5xl font-semibold my-3 text-white">
            <span className=" text-slate-400">{text}</span>
            <Cursor />
          </h1>
          <div>
            <p className="text-white text-l md:text-xl my-3 w-full md:w-3/4">
              Hi there! I&apos;m a passionate frontend developer.
             
              </p>
            </div>
            <Link
            href="/YogeshMauryaResume.pdf"
            download="Yogesh-Maurya"
            target='_blank'
            rel='noreferrer'
            className='animate-bounce group rounded-full relative flex h-14 items-center space-x-0 overflow-hidden bg-white pl-6 mt-5 shadow-lg shadow-blue-500/50"'
            
            >
               <span className="relative text-base uppercase text-blue-950 font-bold">
                Resume</span>

              <div aria-hidden="true"
                 className="w-14 -translate-y-7 bg-bg-white transition duration-300 group-hover:translate-y-7"
              >
                <div className='flex h-14'>
                  <svg
                  xmlns="http://www.w3.org/2000/svg"
                    className="m-auto h-5 w-5 fill-blue-950"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      d="M16.707 10.293a1 1 0 010 1.414l-6 6a1 1 0 01-1.414 0l-6-6a1 1 0 111.414-1.414L9 14.586V3a1 1 0 012 0v11.586l4.293-4.293a1 1 0 011.414 0z"
                      clipRule="evenodd" />
                  </svg>
                </div>
                <div className="flex h-14">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="m-auto h-5 w-5 fill-blue-950"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      d="M16.707 10.293a1 1 0 010 1.414l-6 6a1 1 0 01-1.414 0l-6-6a1 1 0 111.414-1.414L9 14.586V3a1 1 0 012 0v11.586l4.293-4.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
              </div>

            </Link>
          </div>
          <div>
            <Lottie animationData={AnimationData} loop={true}/>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Body
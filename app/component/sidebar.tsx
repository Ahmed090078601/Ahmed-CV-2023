import React from 'react'
import Image from 'next/image'
import {Envelope, Twitter, Linkedin, Medium} from "./icons/";
const Sidebar = ({ data }) => {
const {name, role, education, contactLinks } = data;  
    return (
    <div className='bg-black flex flex-col w-full h-auto sm:h-screen content-between sm:justify-around sm:w-1/3 sm:fixed'>
      <div  className='text-white flex items-center flex-col p-10 sm:mt-8'>
        <Image 
        priority
        width={270}
        height={270}
        className='rounded-full h-full mb-6'
        src={'/linkedinprofile.jfif'} alt={'ahmedprofile'} 
        aria-label='linkedinprofile.jfif'
        />
        <h1 className='mb-2'>{name}</h1>
        <h2 className='mb-2'>{role}</h2>
        <p className='mb-2'>{education[1]}</p>
        <p className='mb-2'>{education[0]}</p>
      <div className='text-white text-center mb-4 mt-2 sm:mt-8  '>
        <h3>Contact Us</h3>
        <div className=' flex flex-row justify-center gap-2 '>
        <a className='icons-contactme' href={contactLinks?.[0]} aria-label={"email link"}>
            <Envelope className={undefined} /> {" "}
        </a>
        <a className='icons-contactme' href={contactLinks?.[1]} aria-label={"twitter link"}>
            <Twitter className={undefined} /> {" "}
        </a>
        <a className='icons-contactme' href={contactLinks?.[2]}aria-label={"linkedin link"}>
            <Linkedin className={undefined} /> {" "}
        </a>
        <a className='icons-contactme' href={contactLinks?.[3]}aria-label={"medium link"}>
            <Medium className={undefined} /> {" "}
        </a>
        </div>
      </div>
      </div>
    </div>
  )
}

export default Sidebar

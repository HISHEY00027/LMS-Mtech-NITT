import React from 'react'
import home from "../assets/home1.jpg"
import Nav from '../components/Nav'
import { SiViaplay } from "react-icons/si";
import { FaEye, FaBullseye, FaCheckCircle } from "react-icons/fa";
import Logos from '../components/Logos';
import CardPage from '../components/CardPage';
import ExploreCourses from '../components/ExploreCourses';
import ai from '../assets/ai.png'
import { useNavigate } from 'react-router-dom';

const missionPoints = [
  "To offer undergraduate, postgraduate, doctoral and modular programmes in multi-disciplinary / inter-disciplinary and emerging areas.",
  "To create a converging learning environment to serve a dynamically evolving society.",
  "To promote innovation for sustainable solutions by forging global collaborations with academia and industry in cutting-edge research.",
  "To be an intellectual ecosystem where human capabilities can develop holistically.",
]

function Home() {
  const navigate = useNavigate()

  return (
    <div className='w-full overflow-hidden bg-white'>
      <Nav />

      {/* Hero - offset for fixed header (72px mobile / 116px desktop) */}
      <div className='w-full pt-[72px] lg:pt-[116px] relative'>
        <div className='relative w-full h-[62vh] lg:h-[78vh]'>
          <img src={home} className='object-cover w-full h-full' alt="NIT Tiruchirappalli campus" />
          <div className='absolute inset-0 bg-nitt-navy/70' />
          <div className='absolute inset-0 flex flex-col items-center justify-center px-6 text-center gap-4'>
            <span className='text-nitt-accent font-semibold tracking-widest uppercase text-[13px] md:text-[15px]'>
              Learning Management System
            </span>
            <h1 className='text-white font-bold text-balance text-[28px] md:text-[44px] lg:text-[56px] leading-tight max-w-[900px]'>
              National Institute of Technology Tiruchirappalli
            </h1>
            <p className='text-white/85 text-[15px] md:text-[18px] max-w-[640px] text-pretty'>
              Grow your skills to advance your career path with courses crafted by our educators.
            </p>
            <div className='flex items-center justify-center gap-3 flex-wrap mt-4'>
              <button
                className='px-[22px] py-[11px] bg-nitt-accent text-white rounded-[6px] text-[16px] flex items-center gap-2 cursor-pointer hover:opacity-90 transition'
                onClick={() => navigate("/allcourses")}
              >
                View all Courses <SiViaplay className='w-[22px] h-[22px] fill-white' />
              </button>
              <button
                className='px-[22px] py-[11px] border-2 border-white text-white rounded-[6px] text-[16px] flex items-center gap-2 cursor-pointer hover:bg-white hover:text-nitt-navy transition'
                onClick={() => navigate("/searchwithai")}
              >
                Search with AI <img src={ai} className='w-[24px] h-[24px] rounded-full' alt="" />
              </button>
            </div>
          </div>
        </div>

        {/* Announcement strip - like nitt.edu news ticker */}
        <div className='w-full bg-nitt-cream border-y border-gray-200 py-[10px] px-4 flex items-center justify-center gap-3 flex-wrap'>
          <span className='bg-nitt-accent text-white text-[12px] font-semibold px-3 py-1 rounded-[4px] uppercase tracking-wide'>
            NIRF 2025
          </span>
          <p className='text-nitt-navy text-[14px] md:text-[15px] text-center'>
            First among NITs, Ninth in Engineering &mdash; National Institute of Technology, Tiruchirappalli
          </p>
        </div>
      </div>

      {/* Vision & Mission - from nitt.edu */}
      <section className='w-full bg-white py-[60px] px-6 lg:px-[8%]' aria-labelledby="vision-mission-heading">
        <div className='flex flex-col items-center gap-2 mb-[40px]'>
          <h2 id="vision-mission-heading" className='text-nitt-navy font-bold text-[30px] md:text-[40px] text-balance text-center'>
            Vision &amp; Mission
          </h2>
          <div className='w-[70px] h-[4px] bg-nitt-accent rounded-full' />
        </div>

        <div className='flex flex-col lg:flex-row gap-8 max-w-[1150px] mx-auto items-stretch'>
          {/* Vision */}
          <div className='lg:w-[42%] bg-nitt-navy rounded-xl p-[36px] flex flex-col gap-5 text-white'>
            <div className='flex items-center gap-3'>
              <div className='w-[46px] h-[46px] rounded-full bg-nitt-accent flex items-center justify-center shrink-0'>
                <FaEye className='w-[22px] h-[22px] fill-white' aria-hidden="true" />
              </div>
              <h3 className='text-[26px] font-semibold'>Vision</h3>
            </div>
            <p className='text-[17px] leading-relaxed text-white/90 text-pretty'>
              To be a university globally trusted for technical excellence where learning and research integrate to sustain society and industry.
            </p>
            <img
              src="/images/nitt-logo-mobile.png"
              alt=""
              className='w-[170px] mt-auto opacity-90 self-center pt-4'
            />
          </div>

          {/* Mission */}
          <div className='lg:w-[58%] bg-nitt-cream rounded-xl p-[36px] flex flex-col gap-5 border border-gray-200'>
            <div className='flex items-center gap-3'>
              <div className='w-[46px] h-[46px] rounded-full bg-nitt-navy flex items-center justify-center shrink-0'>
                <FaBullseye className='w-[20px] h-[20px] fill-white' aria-hidden="true" />
              </div>
              <h3 className='text-[26px] font-semibold text-nitt-navy'>Mission</h3>
            </div>
            <ul className='flex flex-col gap-4'>
              {missionPoints.map((point, index) => (
                <li key={index} className='flex items-start gap-3'>
                  <FaCheckCircle className='w-[18px] h-[18px] fill-nitt-accent mt-[3px] shrink-0' aria-hidden="true" />
                  <span className='text-[15px] md:text-[16px] leading-relaxed text-gray-700 text-pretty'>{point}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <Logos />
      <ExploreCourses />
      <CardPage />
    </div>
  )
}

export default Home

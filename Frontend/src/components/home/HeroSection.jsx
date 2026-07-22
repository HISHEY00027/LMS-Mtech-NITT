import React from 'react'
import { useNavigate } from 'react-router-dom'
import { SiViaplay } from "react-icons/si";

const stats = [
  { value: "20,000+", label: "Students" },
  { value: "120+", label: "Faculty" },
  { value: "100+", label: "Courses" },
  { value: "98%", label: "Placement Assistance" },
]

function HeroSection() {
  const navigate = useNavigate()

  return (
    <section className='w-full pt-[80px] lg:pt-[164px] relative' aria-label="Hero">
      <div className='relative w-full h-[68vh] lg:h-[82vh]'>
        <img src="/images/campus-hero.png" className='object-cover w-full h-full' alt="NIT Tiruchirappalli administrative building" />
        <div className='absolute inset-0 bg-gradient-to-b from-nitt-navy/80 via-nitt-navy/60 to-nitt-navy/90' />
        <div className='absolute inset-0 flex flex-col items-center justify-center px-6 text-center gap-4'>
          <span className='text-nitt-accent font-semibold tracking-widest uppercase text-[13px] md:text-[15px]'>
            Online Degrees &amp; Certification Programs
          </span>
          <h1 className='text-white font-bold text-balance text-[28px] md:text-[44px] lg:text-[56px] leading-tight max-w-[900px]'>
            National Institute of Technology Tiruchirappalli
          </h1>
          <p className='text-white/85 text-[15px] md:text-[18px] max-w-[640px] text-pretty'>
            Learn from India&apos;s premier technical institute. Industry-aligned online programs taught by our educators &mdash; wherever you are.
          </p>
          <div className='flex items-center justify-center gap-3 flex-wrap mt-4'>
            <button
              className='px-[24px] py-[12px] bg-nitt-accent text-white rounded-[6px] text-[16px] flex items-center gap-2 cursor-pointer hover:opacity-90 transition'
              onClick={() => navigate("/allcourses")}
            >
              Explore Programs <SiViaplay className='w-[20px] h-[20px] fill-white' aria-hidden="true" />
            </button>
            <button
              className='px-[24px] py-[12px] border-2 border-white text-white rounded-[6px] text-[16px] cursor-pointer hover:bg-white hover:text-nitt-navy transition'
              onClick={() => navigate("/signup")}
            >
              Apply Now
            </button>
          </div>
        </div>

        {/* Stats band overlapping hero bottom */}
        <div className='absolute left-0 right-0 bottom-0 translate-y-1/2 px-4 lg:px-[8%] hidden md:block'>
          <div className='max-w-[1150px] mx-auto grid grid-cols-4 gap-4'>
            {stats.map((s) => (
              <div key={s.label} className='bg-white/95 backdrop-blur rounded-xl shadow-lg border border-gray-100 py-[22px] flex flex-col items-center gap-1'>
                <span className='text-nitt-navy font-bold text-[26px] lg:text-[32px]'>{s.value}</span>
                <span className='text-gray-600 text-[13px] lg:text-[15px]'>{s.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Mobile stats */}
      <div className='md:hidden grid grid-cols-2 gap-3 px-4 mt-4'>
        {stats.map((s) => (
          <div key={s.label} className='bg-nitt-cream rounded-xl border border-gray-200 py-[18px] flex flex-col items-center gap-1'>
            <span className='text-nitt-navy font-bold text-[22px]'>{s.value}</span>
            <span className='text-gray-600 text-[13px] text-center'>{s.label}</span>
          </div>
        ))}
      </div>

      {/* Spacer for the overlapping stats band */}
      <div className='hidden md:block h-[70px]' />

      {/* Announcement strip */}
      <div className='w-full bg-nitt-cream border-y border-gray-200 py-[10px] px-4 flex items-center justify-center gap-3 flex-wrap mt-4 md:mt-0'>
        <span className='bg-nitt-accent text-white text-[12px] font-semibold px-3 py-1 rounded-[4px] uppercase tracking-wide'>
          NIRF 2025
        </span>
        <p className='text-nitt-navy text-[14px] md:text-[15px] text-center'>
          First among NITs, Ninth in Engineering &mdash; National Institute of Technology, Tiruchirappalli
        </p>
      </div>
    </section>
  )
}

export default HeroSection

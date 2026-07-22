import React from 'react'
import { useNavigate } from 'react-router-dom'
import { FaFileAlt, FaComments, FaUserGraduate, FaLaptop } from "react-icons/fa";

const steps = [
  { icon: FaFileAlt, title: "Apply", text: "Fill out the online application with your academic details. It takes less than 10 minutes." },
  { icon: FaComments, title: "Counselling", text: "Our admissions team helps you pick the right program for your goals and background." },
  { icon: FaUserGraduate, title: "Enrollment", text: "Complete your enrollment and get access to your student dashboard and orientation." },
  { icon: FaLaptop, title: "Start Learning", text: "Begin classes with recorded lectures, live sessions, and mentorship from day one." },
]

function AdmissionProcess() {
  const navigate = useNavigate()

  return (
    <section className='w-full bg-nitt-cream py-[60px] px-6 lg:px-[8%]' aria-labelledby="admission-heading">
      <div className='flex flex-col items-center gap-2 mb-[48px]'>
        <h2 id="admission-heading" className='text-nitt-navy font-bold text-[30px] md:text-[40px] text-balance text-center'>
          Admission Process
        </h2>
        <div className='w-[70px] h-[4px] bg-nitt-accent rounded-full' />
      </div>

      <ol className='max-w-[1150px] mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 list-none'>
        {steps.map((s, i) => (
          <li key={s.title} className='relative flex flex-col items-center text-center gap-3'>
            {/* connector line on desktop */}
            {i < steps.length - 1 && (
              <div className='hidden md:block absolute top-[32px] left-[calc(50%+40px)] w-[calc(100%-80px)] h-[3px] bg-nitt-navy/15' aria-hidden="true" />
            )}
            <div className='w-[64px] h-[64px] rounded-full bg-nitt-navy flex items-center justify-center relative z-10'>
              <s.icon className='w-[26px] h-[26px] fill-white' aria-hidden="true" />
            </div>
            <span className='text-nitt-accent font-bold text-[14px] tracking-wide'>STEP {i + 1}</span>
            <h3 className='text-nitt-navy font-semibold text-[19px]'>{s.title}</h3>
            <p className='text-gray-600 text-[14px] leading-relaxed text-pretty max-w-[240px]'>{s.text}</p>
          </li>
        ))}
      </ol>

      <div className='flex justify-center mt-12'>
        <button
          className='px-[26px] py-[12px] bg-nitt-accent text-white rounded-[6px] text-[16px] cursor-pointer hover:opacity-90 transition'
          onClick={() => navigate("/signup")}
        >
          Apply Now
        </button>
      </div>
    </section>
  )
}

export default AdmissionProcess

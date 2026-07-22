import React from 'react'
import { FaBookOpen, FaVideo, FaBriefcase, FaUsers, FaClock, FaCertificate } from "react-icons/fa";

const features = [
  { icon: FaBookOpen, title: "Industry Curriculum", text: "Programs designed with industry partners so every course maps to real, in-demand skills." },
  { icon: FaVideo, title: "Recorded + Live Classes", text: "Learn at your own pace with recorded lectures, plus live doubt-clearing sessions with faculty." },
  { icon: FaBriefcase, title: "Placement Support", text: "Dedicated career cell, resume reviews, mock interviews and referrals to top recruiters." },
  { icon: FaUsers, title: "Alumni Network", text: "Join a global network of NIT Trichy alumni leading teams at top companies worldwide." },
  { icon: FaClock, title: "Flexible Learning", text: "Study alongside your job or degree. Weekend schedules and lifetime access to material." },
  { icon: FaCertificate, title: "Certifications", text: "Earn institute-branded certificates that carry the credibility of NIT Tiruchirappalli." },
]

function WhyChoose() {
  return (
    <section className='w-full bg-white py-[60px] px-6 lg:px-[8%]' aria-labelledby="why-choose-heading">
      <div className='flex flex-col items-center gap-2 mb-[40px]'>
        <h2 id="why-choose-heading" className='text-nitt-navy font-bold text-[30px] md:text-[40px] text-balance text-center'>
          Why Choose NIT Trichy Online
        </h2>
        <div className='w-[70px] h-[4px] bg-nitt-accent rounded-full' />
      </div>

      <div className='max-w-[1150px] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
        {features.map((f) => (
          <div key={f.title} className='bg-nitt-cream border border-gray-200 rounded-xl p-[28px] flex flex-col gap-4 hover:shadow-lg hover:-translate-y-1 transition'>
            <div className='w-[52px] h-[52px] rounded-lg bg-nitt-navy flex items-center justify-center'>
              <f.icon className='w-[24px] h-[24px] fill-nitt-accent' aria-hidden="true" />
            </div>
            <h3 className='text-nitt-navy font-semibold text-[19px]'>{f.title}</h3>
            <p className='text-gray-600 text-[15px] leading-relaxed text-pretty'>{f.text}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

export default WhyChoose

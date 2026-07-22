import React from 'react'
import { useNavigate } from 'react-router-dom'

/* Brand logos served from theSVG.org - trademarks belong to their respective owners */
const recruiters = [
  { name: "Google", slug: "google" },
  { name: "Microsoft", slug: "microsoft" },
  { name: "Amazon", slug: "amazon" },
  { name: "Adobe", slug: "adobe" },
  { name: "Oracle", slug: "oracle" },
  { name: "IBM", slug: "ibm" },
  { name: "Infosys", slug: "infosys" },
  { name: "TCS", slug: "tata-consultancy-services" },
]

function Placements() {
  const navigate = useNavigate()

  return (
    <section id="placements" className='w-full bg-nitt-navy py-[60px] px-6 lg:px-[8%]' aria-labelledby="placements-heading">
      <div className='max-w-[1150px] mx-auto flex flex-col items-center gap-2 mb-[16px]'>
        <h2 id="placements-heading" className='text-white font-bold text-[30px] md:text-[40px] text-balance text-center'>
          Careers That Speak for Themselves
        </h2>
        <div className='w-[70px] h-[4px] bg-nitt-accent rounded-full' />
        <p className='text-white/80 text-[15px] md:text-[17px] text-center max-w-[640px] mt-2 text-pretty'>
          Our graduates are recruited by the world&apos;s leading technology and consulting companies.
        </p>
      </div>

      <div className='max-w-[1000px] mx-auto grid grid-cols-2 md:grid-cols-4 gap-4 mt-8'>
        {recruiters.map((r) => (
          <div key={r.slug} className='bg-white rounded-xl h-[92px] flex items-center justify-center px-6 hover:scale-[1.03] transition'>
            <img
              src={`https://thesvg.org/icons/${r.slug}/default.svg`}
              alt={`${r.name} logo`}
              className='max-h-[42px] max-w-[120px] w-auto h-auto object-contain'
              loading="lazy"
            />
          </div>
        ))}
      </div>

      <div className='flex justify-center mt-10'>
        <button
          className='px-[26px] py-[12px] bg-nitt-accent text-white rounded-[6px] text-[16px] cursor-pointer hover:opacity-90 transition'
          onClick={() => navigate("/signup")}
        >
          Start Your Journey
        </button>
      </div>
    </section>
  )
}

export default Placements

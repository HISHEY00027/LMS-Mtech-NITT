import React, { useState } from 'react'
import { FaChevronDown } from "react-icons/fa";

const faqs = [
  { q: "Are the online programs the same as on-campus programs?", a: "The curriculum is designed by the same faculty who teach on campus. Online programs are structured for working professionals with recorded lectures and live sessions." },
  { q: "Will I receive a certificate from NIT Trichy?", a: "Yes. On successful completion you receive an institute-branded certificate that you can verify and share with employers." },
  { q: "Do I need to visit the campus?", a: "No campus visits are required. All classes, assessments, and doubt-clearing sessions happen online. Optional campus immersions may be offered for some programs." },
  { q: "What placement support is provided?", a: "You get access to the career cell: resume reviews, mock interviews, recruiter connects, and the alumni referral network." },
  { q: "Can I learn while working full-time?", a: "Yes. Lectures are recorded and live sessions are scheduled on evenings and weekends, so you can learn at your own pace." },
  { q: "How do I pay for a program?", a: "You can enroll in a course and pay securely online. EMI options are available for degree programs through our payment partners." },
]

function FAQSection() {
  const [open, setOpen] = useState(0)

  return (
    <section className='w-full bg-nitt-cream py-[60px] px-6 lg:px-[8%]' aria-labelledby="faq-heading">
      <div className='flex flex-col items-center gap-2 mb-[40px]'>
        <h2 id="faq-heading" className='text-nitt-navy font-bold text-[30px] md:text-[40px] text-balance text-center'>
          Frequently Asked Questions
        </h2>
        <div className='w-[70px] h-[4px] bg-nitt-accent rounded-full' />
      </div>

      <div className='max-w-[820px] mx-auto flex flex-col gap-3'>
        {faqs.map((f, i) => {
          const isOpen = open === i
          return (
            <div key={f.q} className='bg-white border border-gray-200 rounded-xl overflow-hidden'>
              <button
                className='w-full flex items-center justify-between gap-4 px-[24px] py-[18px] text-left cursor-pointer'
                onClick={() => setOpen(isOpen ? -1 : i)}
                aria-expanded={isOpen}
              >
                <span className='text-nitt-navy font-medium text-[16px] text-pretty'>{f.q}</span>
                <FaChevronDown className={`w-[14px] h-[14px] fill-nitt-accent shrink-0 transition-transform ${isOpen ? "rotate-180" : ""}`} aria-hidden="true" />
              </button>
              {isOpen && (
                <p className='px-[24px] pb-[20px] text-gray-600 text-[15px] leading-relaxed text-pretty'>{f.a}</p>
              )}
            </div>
          )
        })}
      </div>
    </section>
  )
}

export default FAQSection

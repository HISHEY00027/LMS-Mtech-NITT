import React, { useState } from 'react'
import { FaChevronLeft, FaChevronRight, FaQuoteLeft } from "react-icons/fa";

const testimonials = [
  {
    img: "/images/student-1.png",
    name: "Karthik Raman",
    placement: "Software Engineer at Google",
    review: "The online M.Tech program let me keep my job while learning from NIT Trichy faculty. The live sessions and placement support were the reason I cracked my dream role.",
  },
  {
    img: "/images/student-2.png",
    name: "Ananya Sharma",
    placement: "Data Analyst at Microsoft",
    review: "The curriculum is genuinely industry-aligned. Every project I built in the certification program came up in my interviews. The faculty are approachable and invested in you.",
  },
  {
    img: "/images/student-3.png",
    name: "Vishal Menon",
    placement: "Product Engineer at Amazon",
    review: "Flexible schedules, recorded lectures, and a serious alumni network. This felt like being on campus without leaving my city. Worth every rupee.",
  },
]

function Testimonials() {
  const [index, setIndex] = useState(0)
  const current = testimonials[index]

  const prev = () => setIndex((index - 1 + testimonials.length) % testimonials.length)
  const next = () => setIndex((index + 1) % testimonials.length)

  return (
    <section className='w-full bg-white py-[60px] px-6 lg:px-[8%]' aria-labelledby="testimonials-heading">
      <div className='flex flex-col items-center gap-2 mb-[40px]'>
        <h2 id="testimonials-heading" className='text-nitt-navy font-bold text-[30px] md:text-[40px] text-balance text-center'>
          What Our Students Say
        </h2>
        <div className='w-[70px] h-[4px] bg-nitt-accent rounded-full' />
      </div>

      <div className='max-w-[860px] mx-auto relative'>
        <div className='bg-nitt-cream border border-gray-200 rounded-2xl p-[32px] md:p-[48px] flex flex-col items-center text-center gap-5'>
          <FaQuoteLeft className='w-[28px] h-[28px] fill-nitt-accent' aria-hidden="true" />
          <p className='text-gray-700 text-[16px] md:text-[18px] leading-relaxed text-pretty max-w-[640px]'>
            {current.review}
          </p>
          <img src={current.img || "/placeholder.svg"} alt={`Photo of ${current.name}`} className='w-[68px] h-[68px] rounded-full object-cover border-2 border-nitt-accent' />
          <div className='flex flex-col gap-1'>
            <span className='text-nitt-navy font-semibold text-[17px]'>{current.name}</span>
            <span className='text-nitt-accent text-[14px] font-medium'>{current.placement}</span>
          </div>
        </div>

        <div className='flex items-center justify-center gap-4 mt-6'>
          <button
            onClick={prev}
            aria-label="Previous testimonial"
            className='w-[42px] h-[42px] rounded-full border border-gray-300 flex items-center justify-center text-nitt-navy cursor-pointer hover:bg-nitt-navy hover:text-white transition'
          >
            <FaChevronLeft className='w-[14px] h-[14px]' aria-hidden="true" />
          </button>
          <div className='flex items-center gap-2' role="tablist" aria-label="Testimonials">
            {testimonials.map((t, i) => (
              <button
                key={t.name}
                role="tab"
                aria-selected={i === index}
                aria-label={`Testimonial ${i + 1}`}
                onClick={() => setIndex(i)}
                className={`w-[10px] h-[10px] rounded-full cursor-pointer transition ${i === index ? "bg-nitt-accent" : "bg-gray-300"}`}
              />
            ))}
          </div>
          <button
            onClick={next}
            aria-label="Next testimonial"
            className='w-[42px] h-[42px] rounded-full border border-gray-300 flex items-center justify-center text-nitt-navy cursor-pointer hover:bg-nitt-navy hover:text-white transition'
          >
            <FaChevronRight className='w-[14px] h-[14px]' aria-hidden="true" />
          </button>
        </div>
      </div>
    </section>
  )
}

export default Testimonials

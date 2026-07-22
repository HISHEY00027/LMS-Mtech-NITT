import React from 'react'
import { FaLinkedin } from "react-icons/fa";

const faculty = [
  { img: "/images/faculty-1.png", name: "Dr. R. Subramanian", dept: "Computer Science & Engineering", role: "Professor & Head" },
  { img: "/images/faculty-2.png", name: "Dr. Priya Venkatesan", dept: "Electronics & Communication", role: "Associate Professor" },
  { img: "/images/faculty-3.png", name: "Dr. Arjun Krishnamurthy", dept: "Mechanical Engineering", role: "Professor" },
  { img: "/images/faculty-4.png", name: "Dr. Lakshmi Narayanan", dept: "Management Studies", role: "Professor & Dean" },
]

function FacultySection() {
  return (
    <section id="faculty" className='w-full bg-nitt-cream py-[60px] px-6 lg:px-[8%] scroll-mt-[90px] lg:scroll-mt-[180px]' aria-labelledby="faculty-heading">
      <div className='flex flex-col items-center gap-2 mb-[40px]'>
        <h2 id="faculty-heading" className='text-nitt-navy font-bold text-[30px] md:text-[40px] text-balance text-center'>
          Learn From Distinguished Faculty
        </h2>
        <div className='w-[70px] h-[4px] bg-nitt-accent rounded-full' />
      </div>

      <div className='max-w-[1150px] mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6'>
        {faculty.map((f) => (
          <div key={f.name} className='bg-white rounded-xl border border-gray-200 overflow-hidden flex flex-col hover:shadow-lg hover:-translate-y-1 transition'>
            <img src={f.img || "/placeholder.svg"} alt={`Portrait of ${f.name}`} className='w-full aspect-square object-cover' loading="lazy" />
            <div className='p-[20px] flex flex-col gap-1'>
              <h3 className='text-nitt-navy font-semibold text-[17px]'>{f.name}</h3>
              <p className='text-nitt-accent text-[13px] font-medium'>{f.role}</p>
              <p className='text-gray-600 text-[14px]'>{f.dept}</p>
              <a
                href="https://www.linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className='mt-3 inline-flex items-center gap-2 text-nitt-navy text-[14px] hover:text-nitt-accent transition w-fit'
                aria-label={`${f.name} on LinkedIn`}
              >
                <FaLinkedin className='w-[18px] h-[18px]' aria-hidden="true" /> LinkedIn
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default FacultySection

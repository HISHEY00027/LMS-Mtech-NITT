import React, { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import Nav from '../components/Nav'
import { FaEye, FaBullseye, FaCheckCircle } from "react-icons/fa";
import Logos from '../components/Logos';
import CardPage from '../components/CardPage';
import ExploreCourses from '../components/ExploreCourses';
import HeroSection from '../components/home/HeroSection';
import WhyChoose from '../components/home/WhyChoose';
import Placements from '../components/home/Placements';
import FacultySection from '../components/home/FacultySection';
import Testimonials from '../components/home/Testimonials';
import AdmissionProcess from '../components/home/AdmissionProcess';
import CampusGallery from '../components/home/CampusGallery';
import FAQSection from '../components/home/FAQSection';
import Footer from '../components/Footer';

const missionPoints = [
  "To offer undergraduate, postgraduate, doctoral and modular programmes in multi-disciplinary / inter-disciplinary and emerging areas.",
  "To create a converging learning environment to serve a dynamically evolving society.",
  "To promote innovation for sustainable solutions by forging global collaborations with academia and industry in cutting-edge research.",
  "To be an intellectual ecosystem where human capabilities can develop holistically.",
]

function Home() {
  const location = useLocation()

  // Scroll to anchor section when navigated with a hash (e.g. /#faculty)
  useEffect(() => {
    if (location.hash) {
      const el = document.getElementById(location.hash.slice(1))
      if (el) {
        // slight delay so the fixed header offset settles after render
        setTimeout(() => el.scrollIntoView({ behavior: "smooth", block: "start" }), 60)
      }
    } else {
      window.scrollTo(0, 0)
    }
  }, [location])

  return (
    <div className='w-full overflow-hidden bg-white'>
      <Nav />

      <HeroSection />

      {/* Popular Programs - existing course cards from backend */}
      <section id="programs" className='scroll-mt-[90px] lg:scroll-mt-[215px]'>
        <CardPage />
        <ExploreCourses />
      </section>

      <WhyChoose />

      {/* Vision & Mission - from nitt.edu */}
      <section id="about" className='w-full bg-white py-[60px] px-6 lg:px-[8%] scroll-mt-[90px] lg:scroll-mt-[215px]' aria-labelledby="vision-mission-heading">
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

      <Placements />

      <FacultySection />

      <Testimonials />
      <AdmissionProcess />
      <CampusGallery />
      <Logos />
      <FAQSection />
      <Footer />
    </div>
  )
}

export default Home

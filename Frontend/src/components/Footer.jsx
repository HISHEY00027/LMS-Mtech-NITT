import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { FaFacebook, FaTwitter, FaLinkedin, FaYoutube, FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from "react-icons/fa";
import { toast } from 'react-toastify';

function Footer() {
  const navigate = useNavigate()
  const [email, setEmail] = useState("")

  const handleSubscribe = (e) => {
    e.preventDefault()
    if (!email.trim()) return
    toast.success("Subscribed to the newsletter")
    setEmail("")
  }

  return (
    <footer id="contact" className='w-full bg-nitt-navy text-white scroll-mt-[130px]'>
      <div className='max-w-[1150px] mx-auto px-6 py-[56px] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10'>
        {/* About */}
        <div className='flex flex-col gap-4'>
          <img src="/images/nitt-logo-mobile.png" alt="NIT Tiruchirappalli" className='w-[150px]' />
          <p className='text-white/70 text-[14px] leading-relaxed text-pretty'>
            National Institute of Technology Tiruchirappalli &mdash; an Institution of National Importance offering online degrees and certification programs.
          </p>
          <div className='flex items-center gap-4 mt-1'>
            <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className='hover:text-nitt-accent transition'><FaFacebook className='w-[20px] h-[20px]' aria-hidden="true" /></a>
            <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter" className='hover:text-nitt-accent transition'><FaTwitter className='w-[20px] h-[20px]' aria-hidden="true" /></a>
            <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className='hover:text-nitt-accent transition'><FaLinkedin className='w-[20px] h-[20px]' aria-hidden="true" /></a>
            <a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer" aria-label="YouTube" className='hover:text-nitt-accent transition'><FaYoutube className='w-[20px] h-[20px]' aria-hidden="true" /></a>
          </div>
        </div>

        {/* Quick links */}
        <nav className='flex flex-col gap-3' aria-label="Footer quick links">
          <h3 className='font-semibold text-[17px] mb-1'>Quick Links</h3>
          <button className='text-white/70 text-[14px] hover:text-nitt-accent transition text-left cursor-pointer w-fit' onClick={() => navigate("/")}>Home</button>
          <button className='text-white/70 text-[14px] hover:text-nitt-accent transition text-left cursor-pointer w-fit' onClick={() => navigate("/allcourses")}>All Programs</button>
          <button className='text-white/70 text-[14px] hover:text-nitt-accent transition text-left cursor-pointer w-fit' onClick={() => navigate("/searchwithai")}>Search with AI</button>
          <button className='text-white/70 text-[14px] hover:text-nitt-accent transition text-left cursor-pointer w-fit' onClick={() => navigate("/login")}>Student Login</button>
          <button className='text-white/70 text-[14px] hover:text-nitt-accent transition text-left cursor-pointer w-fit' onClick={() => navigate("/signup")}>Apply Now</button>
        </nav>

        {/* Contact */}
        <div className='flex flex-col gap-3'>
          <h3 className='font-semibold text-[17px] mb-1'>Contact</h3>
          <p className='text-white/70 text-[14px] flex items-start gap-3'>
            <FaMapMarkerAlt className='w-[16px] h-[16px] mt-[2px] shrink-0 fill-nitt-accent' aria-hidden="true" />
            National Institute of Technology, Tiruchirappalli &ndash; 620015, Tamil Nadu, India
          </p>
          <p className='text-white/70 text-[14px] flex items-center gap-3'>
            <FaPhoneAlt className='w-[14px] h-[14px] shrink-0 fill-nitt-accent' aria-hidden="true" />
            +91 431 250 3000
          </p>
          <p className='text-white/70 text-[14px] flex items-center gap-3'>
            <FaEnvelope className='w-[14px] h-[14px] shrink-0 fill-nitt-accent' aria-hidden="true" />
            online@nitt.edu
          </p>
        </div>

        {/* Newsletter */}
        <div className='flex flex-col gap-3'>
          <h3 className='font-semibold text-[17px] mb-1'>Newsletter</h3>
          <p className='text-white/70 text-[14px] text-pretty'>Get updates on new programs, admissions, and scholarships.</p>
          <form onSubmit={handleSubscribe} className='flex flex-col gap-3 mt-1'>
            <label htmlFor="newsletter-email" className='sr-only'>Email address</label>
            <input
              id="newsletter-email"
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Your email address"
              className='px-4 py-[10px] rounded-[6px] bg-white/10 border border-white/25 text-white placeholder:text-white/50 text-[14px] focus:outline-none focus:border-nitt-accent'
            />
            <button type="submit" className='px-4 py-[10px] bg-nitt-accent text-white rounded-[6px] text-[14px] cursor-pointer hover:opacity-90 transition'>
              Subscribe
            </button>
          </form>
        </div>
      </div>

      <div className='border-t border-white/10 py-[18px] px-6 text-center'>
        <p className='text-white/50 text-[13px]'>
          &copy; {new Date().getFullYear()} National Institute of Technology Tiruchirappalli. All rights reserved.
        </p>
      </div>
    </footer>
  )
}

export default Footer

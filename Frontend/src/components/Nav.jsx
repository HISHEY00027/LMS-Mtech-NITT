import React, { useState } from 'react'
import { IoMdPerson } from "react-icons/io";
import { GiHamburgerMenu } from "react-icons/gi";
import { GiSplitCross } from "react-icons/gi";
import { FaFacebookF, FaTwitter, FaYoutube, FaLinkedinIn, FaSearch } from "react-icons/fa";

import { useNavigate, useLocation } from 'react-router-dom';
import { serverUrl } from '../App';
import axios from 'axios';
import { toast } from 'react-toastify';
import { useDispatch, useSelector } from 'react-redux';
import { setUserData } from '../redux/userSlice';

const utilityLinks = [
  { label: "Placements", path: "/#placements" },
  { label: "Library", path: "/#gallery" },
  { label: "Departments", path: "/#programs" },
  { label: "Events", path: "/#faq" },
]

const navLinks = [
  { label: "Home", path: "/" },
  { label: "Online Programs", path: "/#programs" },
  { label: "Faculty", path: "/#faculty" },
  { label: "About", path: "/#about" },
  { label: "Contact", path: "/#contact" },
]

function Nav() {
  let [showHam, setShowHam] = useState(false)
  let [showPro, setShowPro] = useState(false)
  let navigate = useNavigate()
  let location = useLocation()
  let dispatch = useDispatch()
  let { userData } = useSelector(state => state.user)

  const handleLogout = async () => {
    try {
      const result = await axios.post(serverUrl + "/api/auth/logout", {}, { withCredentials: true })
      console.log(result.data)
      await dispatch(setUserData(null))
      toast.success("LogOut Successfully")
    } catch (error) {
      console.log(error.response.data.message)
    }
  }

  return (
    <header className='w-full fixed top-0 z-30 shadow-md'>
      {/* Top utility bar - like nitt.edu */}
      <div className='w-full bg-nitt-navy hidden lg:flex items-center justify-between pl-8 border-b border-white/15 h-[36px]'>
        <div className='flex items-center gap-1'>
          {utilityLinks.map((link) => (
            <button
              key={link.label}
              className='px-[12px] text-[13px] text-white/90 hover:text-white cursor-pointer transition'
              onClick={() => navigate(link.path)}
            >
              {link.label}
            </button>
          ))}
          <div className='flex items-center gap-4 ml-4' aria-label="Social media links">
            <a href="https://www.facebook.com/NITTrichy" target="_blank" rel="noopener noreferrer" aria-label="Facebook"><FaFacebookF className='w-[13px] h-[13px] fill-white/90 hover:fill-white' /></a>
            <a href="https://twitter.com/NITTEDU" target="_blank" rel="noopener noreferrer" aria-label="Twitter"><FaTwitter className='w-[13px] h-[13px] fill-white/90 hover:fill-white' /></a>
            <a href="https://www.youtube.com/@NITTrichyOfficial" target="_blank" rel="noopener noreferrer" aria-label="YouTube"><FaYoutube className='w-[15px] h-[15px] fill-white/90 hover:fill-white' /></a>
            <a href="https://www.linkedin.com/school/national-institute-of-technology-tiruchirappalli/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"><FaLinkedinIn className='w-[13px] h-[13px] fill-white/90 hover:fill-white' /></a>
          </div>
        </div>

        <div className='flex items-center h-full'>
          <button className='px-[12px] text-[13px] text-white/90 hover:text-white cursor-pointer transition' onClick={() => navigate("/allcourses")}>All Courses</button>
          <button className='px-[12px] text-[13px] text-white/90 hover:text-white cursor-pointer transition' onClick={() => navigate("/enrolledcourses")}>My Courses</button>
          {userData?.role == "educator" && (
            <button className='px-[12px] text-[13px] text-white/90 hover:text-white cursor-pointer transition' onClick={() => navigate("/dashboard")}>Dashboard</button>
          )}
          <button
            className='h-full w-[48px] bg-nitt-accent flex items-center justify-center cursor-pointer hover:opacity-90 transition ml-2'
            onClick={() => navigate("/searchwithai")}
            aria-label="Search with AI"
          >
            <FaSearch className='w-[15px] h-[15px] fill-white' />
          </button>
        </div>
      </div>

      {/* Institute banner - tall navy with official trilingual NITT logo */}
      <div className='w-full bg-nitt-navy flex items-center justify-between px-4 lg:px-10 h-[80px] lg:h-[110px]'>
        <img
          src="/images/nitt-logo.png"
          alt="National Institute of Technology Tiruchirappalli"
          className='hidden md:block h-[56px] lg:h-[74px] xl:h-[84px] w-auto cursor-pointer'
          onClick={() => navigate("/")}
        />
        <img
          src="/images/nitt-logo-mobile.png"
          alt="National Institute of Technology Tiruchirappalli"
          className='md:hidden h-[64px] w-auto cursor-pointer'
          onClick={() => navigate("/")}
        />

        <div className='hidden lg:flex items-center gap-4 relative'>
          {!userData ? (
            <>
              <button
                className='px-[20px] py-[10px] border border-white/60 text-white rounded-[6px] text-[15px] cursor-pointer hover:bg-white hover:text-nitt-navy transition whitespace-nowrap'
                onClick={() => navigate("/login")}
              >
                Login
              </button>
              <button
                className='px-[24px] py-[10px] bg-nitt-accent text-white rounded-[6px] text-[15px] cursor-pointer hover:opacity-90 transition whitespace-nowrap'
                onClick={() => navigate("/signup")}
              >
                Apply Now
              </button>
            </>
          ) : (
            <>
              <div
                className='w-[46px] h-[46px] rounded-full text-white flex items-center justify-center text-[19px] border border-white/60 bg-nitt-navy-light cursor-pointer overflow-hidden'
                onClick={() => setShowPro(prev => !prev)}
              >
                {userData.photoUrl ? (
                  <img src={userData.photoUrl} className='w-full h-full rounded-full object-cover' alt="" />
                ) : (
                  <span>{userData?.name.slice(0, 1).toUpperCase()}</span>
                )}
              </div>
              <button
                className='px-[20px] py-[10px] bg-nitt-accent text-white rounded-[6px] text-[15px] cursor-pointer hover:opacity-90 transition'
                onClick={handleLogout}
              >
                LogOut
              </button>
            </>
          )}

          {showPro && (
            <div className='absolute top-[110%] right-0 flex flex-col gap-1 text-[15px] rounded-md bg-white px-[10px] py-[10px] border border-gray-200 shadow-lg z-40'>
              <span className='text-nitt-navy px-[25px] py-[8px] rounded-md hover:bg-nitt-cream cursor-pointer whitespace-nowrap' onClick={() => navigate("/profile")}>My Profile</span>
              <span className='text-nitt-navy px-[25px] py-[8px] rounded-md hover:bg-nitt-cream cursor-pointer whitespace-nowrap' onClick={() => navigate("/enrolledcourses")}>My Courses</span>
            </div>
          )}
        </div>

        <GiHamburgerMenu
          className='w-[30px] h-[30px] lg:hidden fill-white cursor-pointer'
          onClick={() => setShowHam(prev => !prev)}
        />
      </div>

      {/* Primary navigation row - large links like nitt.edu */}
      <nav className='w-full bg-nitt-navy hidden lg:flex items-center justify-center gap-6 xl:gap-10 h-[54px] border-t border-white/15' aria-label="Main navigation">
        {navLinks.map((link) => (
          <button
            key={link.path}
            className={`px-[20px] h-full text-[17px] cursor-pointer transition border-b-[3px] ${
              location.pathname + location.hash === link.path
                ? "text-white border-nitt-accent"
                : "text-white/85 border-transparent hover:text-white hover:border-nitt-accent/60"
            }`}
            onClick={() => navigate(link.path)}
          >
            {link.label}
          </button>
        ))}

        {userData && (
          <button
            className={`px-[20px] h-full text-[17px] cursor-pointer transition border-b-[3px] ${
              location.pathname === "/enrolledcourses"
                ? "text-white border-nitt-accent"
                : "text-white/85 border-transparent hover:text-white hover:border-nitt-accent/60"
            }`}
            onClick={() => navigate("/enrolledcourses")}
          >
            My Courses
          </button>
        )}
      </nav>

      {/* Mobile full-screen menu */}
      <div className={`fixed top-0 left-0 w-[100vw] h-[100vh] bg-nitt-navy/95 flex items-center justify-center flex-col gap-4 z-40 overflow-y-auto ${showHam ? "translate-x-[0%] transition duration-600 ease-in-out" : "translate-x-[-100%] transition duration-600 ease-in-out"}`}>
        <GiSplitCross className='w-[32px] h-[32px] fill-white absolute top-5 right-[4%] cursor-pointer' onClick={() => setShowHam(prev => !prev)} />

        {!userData ? (
          <IoMdPerson className='w-[50px] h-[50px] fill-white border border-white/40 bg-nitt-navy-light rounded-full p-[10px]' />
        ) : (
          <div className='w-[50px] h-[50px] rounded-full text-white flex items-center justify-center text-[20px] border border-white/60 bg-nitt-navy-light overflow-hidden'>
            {userData.photoUrl ? (
              <img src={userData.photoUrl} className='w-full h-full rounded-full object-cover' alt="" />
            ) : (
              <span>{userData?.name.slice(0, 1).toUpperCase()}</span>
            )}
          </div>
        )}

        <span className='w-[240px] text-center text-white border border-white/30 bg-nitt-navy-light rounded-lg py-[14px] text-[17px] cursor-pointer' onClick={() => { setShowHam(false); navigate("/") }}>Home</span>
        <span className='w-[240px] text-center text-white border border-white/30 bg-nitt-navy-light rounded-lg py-[14px] text-[17px] cursor-pointer' onClick={() => { setShowHam(false); navigate("/#programs") }}>Online Programs</span>
        <span className='w-[240px] text-center text-white border border-white/30 bg-nitt-navy-light rounded-lg py-[14px] text-[17px] cursor-pointer' onClick={() => { setShowHam(false); navigate("/#faculty") }}>Faculty</span>
        <span className='w-[240px] text-center text-white border border-white/30 bg-nitt-navy-light rounded-lg py-[14px] text-[17px] cursor-pointer' onClick={() => { setShowHam(false); navigate("/#about") }}>About</span>
        <span className='w-[240px] text-center text-white border border-white/30 bg-nitt-navy-light rounded-lg py-[14px] text-[17px] cursor-pointer' onClick={() => { setShowHam(false); navigate("/#contact") }}>Contact</span>
        <span className='w-[240px] text-center text-white border border-white/30 bg-nitt-navy-light rounded-lg py-[14px] text-[17px] cursor-pointer' onClick={() => { setShowHam(false); navigate("/allcourses") }}>All Courses</span>
        <span className='w-[240px] text-center text-white border border-white/30 bg-nitt-navy-light rounded-lg py-[14px] text-[17px] cursor-pointer' onClick={() => { setShowHam(false); navigate("/searchwithai") }}>Search with AI</span>
        <span className='w-[240px] text-center text-white border border-white/30 bg-nitt-navy-light rounded-lg py-[14px] text-[17px] cursor-pointer' onClick={() => { setShowHam(false); navigate("/profile") }}>My Profile</span>
        <span className='w-[240px] text-center text-white border border-white/30 bg-nitt-navy-light rounded-lg py-[14px] text-[17px] cursor-pointer' onClick={() => { setShowHam(false); navigate("/enrolledcourses") }}>My Courses</span>

        {userData?.role == "educator" && (
          <span className='w-[240px] text-center text-white border border-white/30 bg-nitt-navy-light rounded-lg py-[14px] text-[17px] cursor-pointer' onClick={() => { setShowHam(false); navigate("/dashboard") }}>Dashboard</span>
        )}
        {!userData ? (
          <span className='w-[240px] text-center text-white bg-nitt-accent rounded-lg py-[14px] text-[17px] cursor-pointer' onClick={() => { setShowHam(false); navigate("/login") }}>Login</span>
        ) : (
          <span className='w-[240px] text-center text-white bg-nitt-accent rounded-lg py-[14px] text-[17px] cursor-pointer' onClick={() => { setShowHam(false); handleLogout() }}>LogOut</span>
        )}
      </div>
    </header>
  )
}

export default Nav

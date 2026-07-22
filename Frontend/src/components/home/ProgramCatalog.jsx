import React, { useMemo, useState } from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { FaSearch, FaStar } from 'react-icons/fa'
import { SiViaplay } from 'react-icons/si'

const PROGRAMS = [
  "Web Development",
  "UI UX Designing",
  "App Development",
  "Ethical Hacking",
  "AI/ML",
  "Data Science",
  "Data Analytics",
  "AI Tools",
  "Others",
]

function averageRating(reviews) {
  if (!reviews || reviews.length === 0) return null
  const total = reviews.reduce((sum, review) => sum + (review.rating || 0), 0)
  return (total / reviews.length).toFixed(1)
}

function CatalogCard({ course, onOpen }) {
  const rating = averageRating(course.reviews)
  return (
    <article
      className='w-full bg-white border border-gray-200 border-l-4 border-l-nitt-navy rounded-md shadow-sm hover:shadow-md transition cursor-pointer flex flex-col justify-between p-5 gap-3'
      onClick={onOpen}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => { if (e.key === 'Enter') onOpen() }}
      aria-label={`View course ${course.title}`}
    >
      <div className='flex flex-col gap-1'>
        <h4 className='text-[16px] font-semibold text-nitt-navy leading-snug text-pretty'>{course.title}</h4>
        <span className='text-[13px] text-gray-500'>{course.category}</span>
      </div>
      <div className='flex items-end justify-between'>
        <div className='flex flex-col gap-1 text-[13px] text-gray-600'>
          {course.level && <span>{course.level}</span>}
          <span className='font-semibold text-nitt-navy'>{course.price ? `\u20B9${course.price}` : "Free"}</span>
        </div>
        <div className='flex items-center gap-3'>
          {rating && (
            <span className='flex items-center gap-1 text-[13px] text-gray-600'>
              <FaStar className='fill-yellow-500 w-[13px] h-[13px]' /> {rating}
            </span>
          )}
          <span className='text-[13px] font-medium text-nitt-accent bg-nitt-accent/10 px-3 py-1 rounded-full'>
            Enroll Now
          </span>
        </div>
      </div>
    </article>
  )
}

function ProgramCatalog() {
  const { courseData } = useSelector(state => state.course)
  const navigate = useNavigate()
  const [search, setSearch] = useState("")
  const [activeProgram, setActiveProgram] = useState("All")

  const published = useMemo(() => courseData || [], [courseData])

  // programs that actually have courses, in fixed order
  const programsWithCourses = useMemo(() => {
    const present = new Set(published.map(c => c.category))
    return PROGRAMS.filter(p => present.has(p))
  }, [published])

  const filtered = useMemo(() => {
    let list = published
    if (activeProgram !== "All") {
      list = list.filter(c => c.category === activeProgram)
    }
    if (search.trim()) {
      const q = search.trim().toLowerCase()
      list = list.filter(c =>
        c.title?.toLowerCase().includes(q) ||
        c.subTitle?.toLowerCase().includes(q) ||
        c.category?.toLowerCase().includes(q)
      )
    }
    return list
  }, [published, activeProgram, search])

  // group filtered courses by program for the grouped view
  const grouped = useMemo(() => {
    const map = new Map()
    for (const course of filtered) {
      const key = course.category || "Others"
      if (!map.has(key)) map.set(key, [])
      map.get(key).push(course)
    }
    // keep fixed program order
    return [...PROGRAMS.filter(p => map.has(p)).map(p => [p, map.get(p)]),
      ...[...map.entries()].filter(([k]) => !PROGRAMS.includes(k))]
  }, [filtered])

  return (
    <section className='w-full bg-nitt-cream py-[50px]' aria-labelledby="catalog-heading">
      {/* Section header */}
      <div className='px-6 lg:px-[8%] flex flex-col items-center gap-3'>
        <span className='text-nitt-accent text-[13px] font-semibold tracking-[0.2em] uppercase'>Course Catalog</span>
        <h2 id="catalog-heading" className='text-[28px] lg:text-[38px] font-semibold text-nitt-navy text-center text-balance'>
          Courses Offered Across Programs
        </h2>
        <p className='text-[15px] text-gray-600 text-center max-w-[640px] text-pretty'>
          Browse our online courses organised by program, the same way you would on NPTEL. Search by course name or pick a program to see everything offered under it.
        </p>
      </div>

      {/* Search + program filter bar */}
      <div className='w-full bg-white border-y border-gray-200 mt-8 py-5 px-6 lg:px-[8%] flex flex-col gap-4'>
        <div className='flex items-center gap-2 max-w-[520px] w-full border border-gray-300 rounded-md px-4 py-[10px] bg-white focus-within:border-nitt-navy transition'>
          <FaSearch className='w-[14px] h-[14px] fill-gray-400 shrink-0' />
          <input
            type="search"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search for courses"
            className='w-full outline-none text-[15px] text-nitt-navy placeholder:text-gray-400 bg-transparent'
            aria-label="Search for courses"
          />
        </div>

        <div className='flex items-center gap-2 flex-wrap' role="tablist" aria-label="Filter courses by program">
          <button
            role="tab"
            aria-selected={activeProgram === "All"}
            className={`px-4 py-[7px] rounded-full text-[14px] cursor-pointer transition border ${
              activeProgram === "All"
                ? "bg-nitt-navy text-white border-nitt-navy"
                : "bg-white text-nitt-navy border-gray-300 hover:border-nitt-navy"
            }`}
            onClick={() => setActiveProgram("All")}
          >
            All Programs
          </button>
          {PROGRAMS.map(program => (
            <button
              key={program}
              role="tab"
              aria-selected={activeProgram === program}
              className={`px-4 py-[7px] rounded-full text-[14px] cursor-pointer transition border ${
                activeProgram === program
                  ? "bg-nitt-navy text-white border-nitt-navy"
                  : "bg-white text-nitt-navy border-gray-300 hover:border-nitt-navy"
              }`}
              onClick={() => setActiveProgram(program)}
            >
              {program}
            </button>
          ))}
        </div>
      </div>

      {/* Grouped course listing */}
      <div className='px-6 lg:px-[8%] mt-10 flex flex-col gap-12'>
        {grouped.length === 0 && (
          <div className='w-full py-[60px] flex flex-col items-center gap-2'>
            <p className='text-[17px] text-gray-600'>No courses found{search ? ` for "${search}"` : ""}.</p>
            <p className='text-[14px] text-gray-500'>Try a different search term or program.</p>
          </div>
        )}

        {grouped.map(([program, courses]) => (
          <div key={program} className='flex flex-col gap-5'>
            <div className='flex items-center justify-between border-b-2 border-nitt-navy/10 pb-3'>
              <h3 className='text-[20px] lg:text-[24px] font-semibold text-nitt-navy'>
                {program}
                <span className='ml-3 text-[14px] font-normal text-gray-500'>
                  {courses.length} {courses.length === 1 ? "course" : "courses"}
                </span>
              </h3>
              <button
                className='hidden md:flex items-center gap-2 text-[14px] text-nitt-accent cursor-pointer hover:underline'
                onClick={() => navigate("/allcourses")}
              >
                View all <SiViaplay className='w-[16px] h-[16px] fill-nitt-accent' />
              </button>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5'>
              {courses.map(course => (
                <CatalogCard
                  key={course._id}
                  course={course}
                  onOpen={() => navigate(`/viewcourse/${course._id}`)}
                />
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default ProgramCatalog

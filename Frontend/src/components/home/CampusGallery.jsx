import React from 'react'

const images = [
  { src: "/images/campus-hero.png", alt: "Main administration building of NIT Tiruchirappalli", span: "md:col-span-2 md:row-span-2" },
  { src: "/images/gallery-library.png", alt: "Students studying in the central library", span: "" },
  { src: "/images/gallery-lab.png", alt: "Modern engineering computer lab", span: "" },
  { src: "/images/gallery-auditorium.png", alt: "Convocation ceremony in the auditorium", span: "" },
  { src: "/images/gallery-sports.png", alt: "Sports complex with athletics track", span: "" },
]

function CampusGallery() {
  return (
    <section className='w-full bg-white py-[60px] px-6 lg:px-[8%]' aria-labelledby="gallery-heading">
      <div className='flex flex-col items-center gap-2 mb-[40px]'>
        <h2 id="gallery-heading" className='text-nitt-navy font-bold text-[30px] md:text-[40px] text-balance text-center'>
          Life at NIT Trichy
        </h2>
        <div className='w-[70px] h-[4px] bg-nitt-accent rounded-full' />
      </div>

      <div className='max-w-[1150px] mx-auto grid grid-cols-1 md:grid-cols-4 md:grid-rows-2 gap-4'>
        {images.map((img) => (
          <div key={img.src} className={`overflow-hidden rounded-xl ${img.span}`}>
            <img
              src={img.src || "/placeholder.svg"}
              alt={img.alt}
              className='w-full h-full min-h-[180px] object-cover hover:scale-105 transition duration-500'
              loading="lazy"
            />
          </div>
        ))}
      </div>
    </section>
  )
}

export default CampusGallery

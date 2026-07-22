import { MdCastForEducation } from "react-icons/md";
import { SiOpenaccess } from "react-icons/si";
import { FaSackDollar } from "react-icons/fa6";
import { BiSupport } from "react-icons/bi";
import { FaUsers } from "react-icons/fa";
function Logos() {
  return (
    <div className='w-[100vw] min-h-[90px]  flex items-center justify-center flex-wrap gap-4 md:mb-[50px] '>
        <div className='flex items-center justify-center gap-2  px-5 py-3   rounded-3xl bg-[#f6f5f2] border border-gray-200 cursor-pointer'>
            <MdCastForEducation className='w-[35px] h-[35px] fill-[#011529]' />
            <span className='text-[#011529]'>20k+ Online Courses</span>
        </div>
        <div className='flex items-center justify-center gap-2  px-5 py-3   rounded-3xl bg-[#f6f5f2] border border-gray-200 cursor-pointer'>
            <SiOpenaccess className='w-[30px] h-[30px] fill-[#011529]' />
            <span className='text-[#011529]'>Lifetime Access</span>
        </div>
        <div className='flex items-center justify-center gap-2  px-5 py-3   rounded-3xl bg-[#f6f5f2] border border-gray-200 cursor-pointer'>
            <FaSackDollar className='w-[30px] h-[30px] fill-[#011529]' />
            <span className='text-[#011529]'>Value For Money</span>
        </div>
        <div className='flex items-center justify-center gap-2  px-5 py-3  rounded-3xl bg-[#f6f5f2] border border-gray-200 cursor-pointer'>
            <BiSupport className='w-[35px] h-[35px] fill-[#011529]' />
            <span className='text-[#011529]'>Lifetime Support</span>
        </div>
        <div className='flex items-center justify-center gap-2  px-5 py-3   rounded-3xl bg-[#f6f5f2] border border-gray-200 cursor-pointer'>
            <FaUsers className='w-[35px] h-[35px] fill-[#011529]' />
            <span className='text-[#011529]'>Community Support</span>
        </div>
      
    </div>
  )
}

export default Logos

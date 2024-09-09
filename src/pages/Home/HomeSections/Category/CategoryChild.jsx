import { useEffect } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'
import PropTypes from 'prop-types'

export default function CategoryChild({
 img,
 imgAlt,
 title,
}) {
 useEffect(() => {
  AOS.init({ duration: 1000 })
 }, [])
 return (
  <div className="lg:col-span-3 md:col-span-6 col-span-12 justify-center items-center flex">
   <div className="flex flex-col justify-center items-center gap-6 max-w-[220px] max-h-[170px]">
    <div className="w-[65px] h-[65px] bg-white rounded-full flex items-center justify-center">
     <img
      data-aos="fade-left"
      src={img}
      alt={imgAlt}
      className="w-[30px] h-[30px]"
     />
    </div>
    <span data-aos="fade-right">{title}</span>
    <img
     src="/home/arrowright.svg"
     alt=""
     className="w-5 h-5"
     data-aos="fade-up"
    />
   </div>
  </div>
 )
}
CategoryChild.propTypes = {
 img: PropTypes.string.isRequired,
 imgAlt: PropTypes.string.isRequired,
 title: PropTypes.string.isRequired,
}

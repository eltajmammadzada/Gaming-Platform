import PropTypes from 'prop-types'
import { useEffect } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'

export default function TrendItems({
 id,
 img,
 imgAlt,
 title,
}) {
 useEffect(() => {
  AOS.init({ duration: 1000 })
 }, [])

 return (
  <div
   key={id}
   className="text-center w-full lg:col-span-3 md:col-span-6 sm:col-span-6 col-span-12"
   data-aos="fade-up"
  >
   <img
    src={img}
    alt={imgAlt}
    className="pb-5 w-full"
    data-aos="zoom-in"
   />
   <div
    className="flex items-center justify-center gap-2"
    data-aos="fade-up"
   >
    <img src='/home/fire.svg' alt="fire" />
    <span className="text-2xl font-medium">{title}</span>
   </div>
  </div>
 )
}

TrendItems.propTypes = {
 id: PropTypes.string,
 img: PropTypes.string.isRequired,
 imgAlt: PropTypes.string.isRequired,
 title: PropTypes.string.isRequired,
}

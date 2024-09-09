import { useEffect } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'
import PropTypes from 'prop-types'

export default function CategoryImage({ imagez, imgAlt }) {
 useEffect(() => {
  AOS.init({ duration: 1000 })
 }, [])
 return (
  <div className="lg:col-span-4 md:col-span-6 col-span-12">
   <img
    src={imagez}
    alt={imgAlt}
    className="w-full h-full"
    data-aos="fade-up"
   />
  </div>
 )
}

CategoryImage.propTypes = {
 imagez: PropTypes.string.isRequired,
 imgAlt: PropTypes.string.isRequired,
}

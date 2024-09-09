import { useEffect } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'

export default function Right() {
 useEffect(() => {
  AOS.init({ duration: 1000 })
 }, [])

 return (
  <div className="flex justify-end items-start relative lg:col-span-7">
   <img
    src="/home/cry.png"
    alt="cry"
    className="absolute top-[20%] lg:left-[30%] md:left-[30%] left-[20%]"
    data-aos="fade-down"
   />
   <img
    src="/home/unity.png"
    alt="unity"
    className="absolute top-[43%] left-[10%] bottom-2"
    data-aos="fade-right"
   />
   <img
    src="/home/unreal.png"
    alt="unreal"
    className="absolute top-[20%] lg:right-[25%] md:right-[25%] right-[20%]"
    data-aos="fade-left"
   />
   <img
    src="/home/joy.png"
    alt="joy"
    className="bg-top bg-cover object-fill"
    data-aos="zoom-in"
   />
  </div>
 )
}

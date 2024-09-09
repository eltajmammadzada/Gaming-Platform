import { Breadcrumb } from 'antd'
import { useEffect } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'

const Hero = () => {
 useEffect(() => {
  AOS.init({ duration: 1000 })
 }, [])
 return (
  <section className="text-center py-12 bg-black text-white">
   <Breadcrumb
    className="flex justify-center"
    items={[
     {
      title: 'Home',
     },
     {
      title: 'News',
     },
    ]}
   />
   <h1 data-aos="fade-right" className="text-4xl font-bold">
    Lorem Ipsum is simply dummy text of the printing and.
   </h1>
   <p data-aos="fade-left" className="text-gray-200 mt-4">
    Lorem Ipsum is simply dummy text of the printing and
    typesetting industry.
   </p>
   <div className="mt-6">
    <input
     type="text"
     placeholder="Search"
     className="p-2 bg-black text-white rounded-md w-1/2 max-w-md outline-none"
    />
   </div>
  </section>
 )
}

export default Hero

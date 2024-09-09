import { useEffect } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'
import Button from '../../../../../common/Button'

export default function Left() {
 useEffect(() => {
  AOS.init({ duration: 1000 })
 }, [])

 return (
  <div className="lg:col-span-5 flex flex-col justify-center lg:text-start text-center">
   <span
    className="text-[#E87D0E] text-xl font-bold"
    data-aos="fade-up"
   >
    3D game Dev
   </span>
   <h1
    className="lg:text-5xl md:text-4xl text-3xl font-bold py-4 lg:mx-0 mx-auto max-w-[350px]"
    data-aos="fade-up"
   >
    Work that we produce for our clients
   </h1>
   <p
    className="text-base font-medium lg:mx-0 mx-auto max-w-[440px]"
    data-aos="fade-up"
   >
    Lorem Ipsum is simply dummy text of the printing and
    typesetting industry. Lorem Ipsum has been the
    industry's standard.
   </p>
   <div className="pt-10" data-aos="fade-up">
    <Button variant="secondary">Get more details</Button>
   </div>
  </div>
 )
}

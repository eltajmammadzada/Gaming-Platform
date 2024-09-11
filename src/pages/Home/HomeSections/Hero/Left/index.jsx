import { useEffect, useState } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'
import Button from '../../../../../common/Button'

export default function Left() {
 useEffect(() => {
  AOS.init({ duration: 1000 })
 }, [])
 const [data,setData]=useState([])

 useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:1337/api/home-heroes'); 
        const result = await response.json();
        setData(result.data || []);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);
  const { attributes } = data[0] || {};
  const { subtitle, title, desc} = attributes || {};

 return (
  <div className="lg:col-span-5 flex flex-col justify-center lg:text-start text-center">
   <span
    className="text-[#E87D0E] text-xl font-bold"
    data-aos="fade-up"
   >
     {subtitle}
   </span>
   <h1
    className="lg:text-5xl md:text-4xl text-3xl font-bold py-4 lg:mx-0 mx-auto max-w-[350px]"
    data-aos="fade-up"
   >
    {title}
   </h1>
   <p
    className="text-base font-medium lg:mx-0 mx-auto max-w-[440px]"
    data-aos="fade-up"
   >
    {desc}
   </p>
   <div className="pt-10" data-aos="fade-up">
    <Button variant="secondary">Get more details</Button>
   </div>
  </div>
 )
}

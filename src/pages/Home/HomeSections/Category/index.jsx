import { useEffect, useState } from 'react';
import Categorys from './Categorys'

export default function Category() {
    const [data,setData]=useState([])
    useEffect(() => {
       const fetchData = async () => {
         try {
           const response = await fetch('http://localhost:1337/api/categories'); 
           const result = await response.json();
           setData(result.data || []);
         } catch (error) {
           console.error('Error fetching data:', error);
         }
       };
   
       fetchData();
     }, []);
 return (
  <section className="category">
   <div className="text-center">
    <h2 className="lg:text-4xl md:text-3xl text-2xl pt-8 max-w-[826px] mx-auto">
    {data[0]?.attributes.title}
    </h2>
    <p className="text-base max-w-[820px] mx-auto pt-6">
    {data[0]?.attributes.desc}
    </p>
   </div>
   <Categorys />
  </section>
 )
}

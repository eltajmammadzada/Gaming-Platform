import { useEffect, useState } from 'react';
import Button from '../../../../common/Button/index'
import CategoryIamges from './ProImage/Images'
export default function Projects() {
    const [data,setData]=useState([])
    useEffect(() => {
       const fetchData = async () => {
         try {
           const response = await fetch('http://localhost:1337/api/pro-headers'); 
           const result = await response.json();
           setData(result.data || []);
         } catch (error) {
           console.error('Error fetching data:', error);
         }
       };
   
       fetchData();
     }, []);
 return (
  <section className="py-10 container">
   <div className="text-center">
    <h2 className="lg:text-3xl md:text-2xl text-xl">
    {data[0]?.attributes.title}
    </h2>
    <p className="max-w-[490px] mx-auto py-10">
    {data[0]?.attributes.desc}
    </p>
   </div>
   <CategoryIamges />
   <div className="flex justify-center">
    <Button variant="danger">SEE ALL</Button>
   </div>
  </section>
 )
}

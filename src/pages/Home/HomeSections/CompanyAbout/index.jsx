import { useEffect, useState } from "react";

export default function CompanyAbout() {
    const [data,setData]=useState([])
    useEffect(() => {
       const fetchData = async () => {
         try {
           const response = await fetch('http://localhost:1337/api/home-section3s?populate=*'); 
           const result = await response.json();
           setData(result.data || []);
         } catch (error) {
           console.error('Error fetching data:', error);
         }
       };
   
       fetchData();
     }, []);

      const imgPath = data[0]?.attributes.photo.data.attributes.url;
      const imgUrl = `http://localhost:1337${imgPath}`;

     
     const title = data[0]?.attributes.title;
     const subtitle = data[0]?.attributes.subtitle;
     const desc = data[0]?.attributes.desc;
 return (
  <section className="py-10 container">
   <h2 className="text-center lg:text-4xl md:text-3xl text-2xl max-w-[830px] mx-auto mb-8">
   {title}
   </h2>
   <div>
    <h3 className="text-3xl font-semibold">{subtitle}</h3>
    <p className="text-base font-normal max-w-[530px] pt-8">
    {desc}
    </p>
   </div>
   <div className="relative mt-20">
    <div className="flex justify-end absolute right-0 -top-14 z-10">
     <img src="/home/company-bg.png" alt="" />
    </div>
    <img
     src={imgUrl}
     alt={title}
     className="w-full sticky z-20"
    />
   </div>
  </section>
 )
}

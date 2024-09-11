import { useEffect, useState } from 'react';
import CategoryChild from './CategoryChild'

export default function Categorys() {
    const [data,setData]=useState([])
    useEffect(() => {
       const fetchData = async () => {
         try {
           const response = await fetch('http://localhost:1337/api/category-cards?populate=*'); 
           const result = await response.json();
           setData(result.data || []);
         } catch (error) {
           console.error('Error fetching data:', error);
         }
       };
   
       fetchData();
     }, []);
 return (
  <div className="grid grid-cols-12 gap-8 py-14">
   {data.map((category) => {
        const imgPath = category.attributes.icon.data.attributes.url;
        const imgUrl = `http://localhost:1337${imgPath}`;
        return (
    <CategoryChild
     key={category.id}
     img={imgUrl}
     imgAlt={category.imgAlt}
     title={category.attributes.name}
    />
        )
})}
  </div>
 )
}

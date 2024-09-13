import { useEffect, useState } from 'react';
import CategoryChild from './CategoryChild'

export default function Categorys() {
    const [data,setData]=useState([])
    useEffect(() => {
       const fetchData = async () => {
         try {
           const response = await fetch('https://codecraftgame.onrender.com/api/category-cards?populate=*'); 
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
        const imgUrl = `https://codecraftgame.onrender.com${imgPath}`;
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

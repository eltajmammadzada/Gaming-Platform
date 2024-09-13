import { useEffect, useState } from 'react';
import CategoryImage from './ImageChild'

export default function CategoryIamges() {
    const [data,setData]=useState([])
    useEffect(() => {
       const fetchData = async () => {
         try {
           const response = await fetch('https://codecraftgame.onrender.com/api/prosses?populate=*'); 
           const result = await response.json();
           setData(result.data || []);
         } catch (error) {
           console.error('Error fetching data:', error);
         }
       };
   
       fetchData();
     }, []);
     

 return (
  <div className="grid grid-cols-12 gap-5 py-7">
{data.map((card) => {
    const imgPath = card.attributes.img.data.attributes.url;
    const imgUrl = `https://codecraftgame.onrender.com${imgPath}`;
    return (
        <CategoryImage
     key={card.id}
     imagez={imgUrl}
     imgAlt={imgUrl}
    />)
})}
  </div>
 )
}

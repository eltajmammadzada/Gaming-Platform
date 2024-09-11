import { useEffect, useState } from 'react';
import CategoryImage from './ImageChild'

export default function CategoryIamges() {
    const [data,setData]=useState([])
    useEffect(() => {
       const fetchData = async () => {
         try {
           const response = await fetch('http://localhost:1337/api/prosses?populate=*'); 
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
    const imgUrl = `http://localhost:1337${imgPath}`;
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

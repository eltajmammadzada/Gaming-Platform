import { useEffect, useState } from 'react'
import TrendItems from './TrendItems'

export default function TrendCard() {
 const [data,setData]=useState([])
 useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:1337/api/tendings?populate=*'); 
        const result = await response.json();
        setData(result.data || []);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);
  

 return (
  <div className="grid grid-cols-12 gap-5">
   {data.map((card) => {
    const imgPath = card.attributes.sekil.data.attributes.url;
    const imgUrl = `http://localhost:1337${imgPath}`;
    return (
    <TrendItems
     key={card.attributes.id}
     img={imgUrl}
     imgAlt={card.attributes.size}
     title={card.attributes.size}
    />)
})}
  </div>
 )
}

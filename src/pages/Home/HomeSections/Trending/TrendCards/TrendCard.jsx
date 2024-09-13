import { useEffect, useState } from 'react'
import TrendItems from './TrendItems'

export default function TrendCard() {
 const [data,setData]=useState([])
 useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://codecraftgame.onrender.com/api/tendings?populate=*'); 
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
    const imgUrl = `https://codecraftgame.onrender.com${imgPath}`;
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

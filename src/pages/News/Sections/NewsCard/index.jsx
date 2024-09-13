import { useEffect, useState } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'

const NewsCard = () => {
 useEffect(() => {
  AOS.init({ duration: 1000 })
 }, [])
 const [data,setData]=useState([])
 useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://codecraftgame.onrender.com/api/news-cards?populate=*'); 
        const result = await response.json();
        setData(result.data || []);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);
 return (
    <>
      {data.map((card) => {
        const imgPath = card.attributes.img.data.attributes.url;
        const imgUrl = `https://codecraftgame.onrender.com${imgPath}`;
        return (
          <div key={card.id} className="bg-black rounded-md p-4 mb-6 flex flex-col">
            <div className="relative w-full h-72 mb-4">
              <img
                data-aos="fade-up"
                src={imgUrl} 
                alt='dfds'
                className="w-full h-full object-cover rounded-md"
              />
            </div>
            <div className="text-gray-300">
              <div className="flex items-center mb-2">
                <span className="bg-blue-400 text-white p-1 rounded-md mr-2">
                 {card.attributes.author}
                </span>
                <span className="text-white"> {card.attributes.date}</span>
              </div>
              <h2 data-aos="fade-up" className="text-2xl font-bold mb-2">
              {card.attributes.title}
              </h2>
              <p data-aos="fade-up" className="text-gray-400 mb-4">
              {card.attributes.desc}
              </p>
            </div>
          </div>
        );
      })}
    </>
 )
}

export default NewsCard

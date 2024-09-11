import { useEffect, useState } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'

const Sidebar = () => {
 useEffect(() => {
  AOS.init({ duration: 1000 })
 }, [])
 const [data,setData]=useState([])
 useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:1337/api/news-cards?populate=*'); 
        const result = await response.json();
        setData(result.data || []);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

 return (
  <aside className="w-full md:w-1/2 bg-black rounded-md p-4">

{data.map((card) => {
        const imgPath = card.attributes.img.data.attributes.url;
        const imgUrl = `http://localhost:1337${imgPath}`;
        return (
            <div key={card.id} className="flex items-center mb-6">
            <img
             data-aos="fade-up"
             src={imgUrl}
             alt={'dsd'}
             className="w-32 h-32 rounded-md object-cover "
            />
            <div className="bg-gray-800 p-4 rounded-md">
             <div
              className={`text-white p-2 rounded-md mb-4 flex items-center `}
             >
              <span className="bg-blue-400 text-white p-1 rounded-md mr-2">
                 {card.attributes.author}
                </span>
              <span data-aos="fade-up">{card.attributes.date}</span>
             </div>
             <p className="text-gray-300" data-aos="fade-up">
             {card.attributes.title}
             </p>
            </div>
           </div>
        );
      })}


  </aside>
 )
}

export default Sidebar

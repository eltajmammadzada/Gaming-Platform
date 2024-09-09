import PropTypes from 'prop-types'
import { useEffect } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'

const NewsCard = ({
 title,
 description,
 image,
 author,
}) => {
 useEffect(() => {
  AOS.init({ duration: 1000 })
 }, [])
 return (
  <div className="bg-black rounded-md p-4 mb-6 flex flex-col">
   <div className="relative w-full h-72 mb-4">
    <img
     data-aos="fade-left"
     src={`/news/${image}`}
     alt={title}
     className="w-full h-full object-cover rounded-md"
    />
   </div>
   <div className="text-gray-300">
    <div className="flex items-center mb-2">
     <span className="bg-blue-400 text-white p-1 rounded-md mr-2">
      John smash
     </span>
     <span className="text-white">.5min</span>
    </div>
    <h2
     data-aos="fade-left"
     className="text-2xl font-bold mb-2"
    >
     {title}
    </h2>
    <p data-aos="fade-left" className="text-gray-400 mb-4">
     {description}
    </p>
    <div
     data-aos="fade-left"
     className="text-3xl text-white mb-5"
    >
     Lorem Ipsum is simply dummy text dummy text {author}
    </div>
    <div className="text-l bright-white mb-6">
     Lorem Ipsum is simply dummy text of the printing and
     typesetting industry. Lorem Ipsum has been the
     industrys standard dummy text ever since the 1500s,
     when an unknown printer took a galley of type and
     scrambled it to make a type specimen book. It has
     survived not only five centuries, {author}
    </div>
    <div className="text-m bright-white">
     Lorem Ipsum is simply dummy text of the printing and
     typesetting industry. {author}
    </div>
   </div>
  </div>
 )
}

NewsCard.propTypes = {
 title: PropTypes.string,
 description: PropTypes.string,
 image: PropTypes.string,
 author: PropTypes.string,
}

export default NewsCard

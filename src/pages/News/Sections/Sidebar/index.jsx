import { useEffect } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'

const Sidebar = () => {
 useEffect(() => {
  AOS.init({ duration: 1000 })
 }, [])
 const articles = [
  {
   title: 'Article 1',
   image: 'right1.jpeg',
   bgColor: 'bg-pink-300',
  },
  {
   title: 'Article 2',
   image: 'right2.jpeg',
   bgColor: 'bg-blue-600',
  },
  {
   title: 'Article 3',
   image: 'right3.jpeg',
   bgColor: 'bg-orange-400',
  },
  {
   title: 'Article 4',
   image: 'right4.jpeg',
   bgColor: 'bg-blue-600',
  },
  {
   title: 'Article 5',
   image: 'right5.jpeg',
   bgColor: 'bg-green-400',
  },
  {
   title: 'Article 6',
   image: 'right6.jpeg',
   bgColor: 'bg-blue-400',
  },
  {
   title: 'Article 7',
   image: 'right7.jpeg',
   bgColor: 'bg-violet-400',
  },
 ]

 return (
  <aside className="w-full md:w-1/2 bg-black rounded-md p-4">
   {articles.map((article, index) => (
    <div key={index} className="flex items-center mb-6">
     <img
      data-aos="fade-left"
      src={`/news/${article.image}`}
      alt={article.title}
      className="w-32 h-32 rounded-md object-cover "
     />
     <div className="bg-gray-800 p-4 rounded-md">
      <div
       className={`text-white p-2 rounded-md mb-4 flex items-center `}
      >
       <span
        data-aos="fade-left"
        className={`mr-6  ${article.bgColor}`}
       >
        John smash
       </span>
       <span data-aos="fade-left">.5min</span>
      </div>
      <p className="text-gray-300" data-aos="fade-left">
       Lorem Ipsum is simply dummy text dummy text ?
      </p>
     </div>
    </div>
   ))}
  </aside>
 )
}

export default Sidebar

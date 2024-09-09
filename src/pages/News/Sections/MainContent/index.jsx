import NewsCard from '../NewsCard'
import Sidebar from '../Sidebar'

const MainContent = () => {
 return (
  <main className="flex flex-wrap gap-8 p-6 container">
   <div className="flex-1">
    <NewsCard image="img1.jpeg" />
    <NewsCard image="img2.jpeg" />
   </div>
   <Sidebar />
  </main>
 )
}

export default MainContent

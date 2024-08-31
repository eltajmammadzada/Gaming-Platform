import {Link} from "react-router-dom"
import Button from "../../common/Button"

const Header = () => {
    
  return (
    <header className="bg-black">
  <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8 mt-11">
    <div className="flex h-16 items-center justify-between">
      <div className="flex-1 md:flex md:items-center md:gap-12 ">
        <Link to={"/"} className="block text-white text-3xl font-extrabold	 " href="#">
          <span className="sr-only">home</span>
          LOGO
        </Link>
      </div>

      <div className="md:flex md:items-center md:gap-12">
        <nav aria-label="Global" className="hidden md:block">
          <ul className="flex items-center gap-20	 text-sm">

              <Link to={"/"} className="text-white transition hover:text-gray-500/75" href="#"> Home </Link>
              <Link to={"/About"} className="text-white transition hover:text-gray-500/75" href="#"> About us </Link>
              <Link to={"/services"} className="text-white transition hover:text-gray-500/75" href="#"> Services </Link>
              <Link to={"/news"} className="text-white transition hover:text-gray-500/75" href="#">News </Link>
              
          </ul>
        </nav>

        <div className="flex items-center gap-4">
          <div className="sm:flex sm:gap-4">
        <Button variant="primary" href='/news'> Contact us</Button>

          
          </div>

          <div className="block md:hidden">
                 
          </div>
        </div>
      </div>
    </div>
  </div>
</header>
  )
}

export default Header

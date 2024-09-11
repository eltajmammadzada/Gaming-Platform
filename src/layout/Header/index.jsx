import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Header = () => {
    const [data,setData]=useState([])
    const [open, setOpen] = useState(false);
    const [scroll, setScroll] = useState(false);

    const toggleMenu = () => {
        setOpen(!open);
    };

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 10) {
                setScroll(true);
            } else {
                setScroll(false);
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    useEffect(() => {
        const fetchData = async () => {
          try {
            const response = await fetch('http://localhost:1337/api/navbars'); 
            const result = await response.json();
            setData(result.data); 
          } catch (error) {
            console.error('Error fetching data:', error);
          }
        };
    
        fetchData();
      }, []);
      
      
    return (
        <header className={`z-[100] sticky top-0 ${scroll ? 'bg-black' : 'bg-transparent'} transition-colors duration-300`}>
            <div className="container flex items-center justify-between">
                <Link to={'/'}>
                    <img src="/logo.png" alt="logo" className="w-[100px] h-[100px]" />
                </Link>
                <button onClick={toggleMenu} className="lg:hidden md:hidden duration-200">Menu</button>
                <ul className="lg:flex md:flex hidden gap-5">
                    {data.map((nav)=>(
                       <Link key={nav.attributes.id} to={nav.attributes.href}>{nav.attributes.link}</Link>
                    ))}
                </ul>
                {open && (
                    <ul className="flex lg:hidden md:hidden flex-col absolute top-[80px] left-0 z-10 h-screen py-6 px-6 bg-black w-full gap-5">
                {data.map((nav)=>(
                       <Link key={nav.attributes.id} to={nav.attributes.href}>{nav.attributes.link}</Link>
                ))}
                    </ul>
                )}
            </div>
        </header>
    );
};

export default Header;

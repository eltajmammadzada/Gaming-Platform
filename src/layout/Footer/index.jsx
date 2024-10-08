import { Link } from "react-router-dom";
import FooterHeader from "./FooterHeader";

export default function Footer() {
 return (
    <footer className="container">
        <FooterHeader />
        <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-5 mb-10">
            <div className="flex flex-col gap-3">
               <img width={100} src="/logo.png" alt="" />
                <p className="text-base font-normal">Lorem Ipsum is simply dummy text of the printing and typesetting industry. </p>
            </div>
            <div className="flex flex-col gap-4">
                <span className="text-base font-normal mb-4">About US</span>
                <Link className="text-base font-normal" to={'/'}>Zeux</Link>
                <Link className="text-base font-normal" to={'/'}>Portfolio</Link>
                <Link className="text-base font-normal" to={'/'}>Careers</Link>
                <Link className="text-base font-normal" to={'/'}>Contact us</Link>
            </div>
            <div>
                <span className="text-base font-normal block mb-4">Contact us</span>
                <p className="text-base font-normal pb-5">Lorem Ipsum is simply dummy text of the printing and typesetting industry. </p>
                <span className="text-base font-normal">+908 89097 890</span>
            </div>
            <div className="flex lg:justify-end md:justify-end gap-5 justify-center lg:items-end md:items-end items-center">
               <span className="bg-white p-5 rounded-full"><Link to={'https://www.facebook.com/'}> <img src="/footer/facebook.svg" alt="" /></Link></span>
               <span className="bg-white p-5 rounded-full"><Link to={'https://instagram.com'}><img src="/footer/instagram.svg" alt="" /></Link></span>
               <span className="bg-white p-5 rounded-full"><Link to={'https://instagram.com'}><img src="/footer/linkedin.svg" alt="" /></Link></span>
               <span className="bg-white p-5 rounded-full"><Link to={'https://instagram.com'}><img src="/footer/twitter.svg" alt="" /></Link></span>
              
                
                
            </div>
        </div>
        <div className="border-t border-t-white text-center">
            <span className="block p-5">Copyright ® 2021 Lorem All rights team CodeCrafters</span>
        </div>
    </footer>
 )
}

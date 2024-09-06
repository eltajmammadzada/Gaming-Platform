import { Link } from "react-router-dom";
import FooterHeader from "./FooterHeader";

export default function Footer() {
 return (
    <footer>
        <FooterHeader />
        <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-5 mb-10">
            <div className="flex flex-col gap-3">
                <Link to={'/'} className="mb-4">Logo</Link>
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
                <span className="bg-white p-5 rounded-full"><img src="/footer/facebook.svg" alt="" /></span>
                <span className="bg-white p-5 rounded-full"><img src="/footer/instagram.svg" alt="" /></span>
                <span className="bg-white p-5 rounded-full"><img src="/footer/linkedin.svg" alt="" /></span>
                <span className="bg-white p-5 rounded-full"><img src="/footer/twitter.svg" alt="" /></span>
            </div>
        </div>
        <div className="border-t border-t-white text-center">
            <span className="block p-5">Copyright ® 2021 Lorem All rights Rcerved</span>
        </div>
    </footer>
 )
}

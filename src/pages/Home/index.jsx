import Category from "./HomeSections/Category";
import CompanyAbout from "./HomeSections/CompanyAbout";
import Hero from "./HomeSections/Hero";
import Projects from "./HomeSections/Projects";
import Trending from "./HomeSections/Trending";

export default function Home() {
 return (
    <>
    <Hero />
    <Trending/> 
    <CompanyAbout />
    <Category />
    <Projects />
    </>
 )
}

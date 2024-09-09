import Categorys from './Categorys'

export default function Category() {
 return (
  <section className="category">
   <div className="text-center">
    <h2 className="lg:text-4xl md:text-3xl text-2xl pt-8 max-w-[826px] mx-auto">
     Lorem Ipsum is simply dummy text of the printing and
     typesetting industry.
    </h2>
    <p className="text-base max-w-[820px] mx-auto pt-6">
     Lorem Ipsum is simply dummy text of the printing and
     typesetting industry. Lorem Ipsum has been the
     industry's standard dummy text ever since the 1500s,
    </p>
   </div>
   <Categorys />
  </section>
 )
}

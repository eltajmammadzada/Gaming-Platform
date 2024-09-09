export default function CompanyAbout() {
 return (
  <section className="py-10 container">
   <h2 className="text-center lg:text-4xl md:text-3xl text-2xl max-w-[830px] mx-auto mb-8">
    Lorem Ipsum is simply dummy text of the printing and
    typesetting industry.
   </h2>
   <div>
    <h3 className="text-3xl font-semibold">Lorem Ipsum</h3>
    <p className="text-base font-normal max-w-[530px] pt-8">
     Lorem Ipsum is simply dummy text of the printing and
     typesetting industry. Lorem Ipsum has been the
     industry's standard dummy text ever since the 1500s,
    </p>
   </div>
   <div className="relative mt-20">
    <div className="flex justify-end absolute right-0 -top-14 z-10">
     <img src="/home/company-bg.png" alt="" />
    </div>
    <img
     src="/home/company.png"
     alt=""
     className="w-full sticky z-20"
    />
   </div>
  </section>
 )
}

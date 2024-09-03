

export default function CategoryChild({img,imgAlt,title}) {
  return (
    <div className="lg:col-span-3 md:col-span-6 col-span-12 justify-center items-center flex">
            <div className="flex flex-col justify-center items-center gap-6 max-w-[220px] max-h-[170px]">
       
       <div className="w-[65px] h-[65px] bg-white rounded-full flex items-center justify-center">
       <img src={img} alt={imgAlt} className="w-[30px] h-[30px]" />
       </div>
        <span>{title}</span>
       <img src="/home/arrowright.svg" alt="" className="w-5 h-5" />
    </div>
    </div>
  )
}



export default function TrendItems({id,img,imgAlt,title,svg}) {
  return (
    <div key={id} className="text-center w-full lg:col-span-3 md:col-span-6 sm:col-span-6 col-span-12">
        <img src={img} alt={imgAlt} className="pb-5 w-full" />
        <div className="flex items-center justify-center gap-2">
        <img src={svg} alt="fire" />
        <span className="text-2xl font-medium">{title}</span>
        </div>
    </div>
  )
}



export default function CategoryImage({imagez,imgAlt}) {
  return (
    <div className="lg:col-span-4 md:col-span-6 col-span-12">
        <img src={imagez} alt={imgAlt} className="w-full h-full" />
    </div>
  )
}

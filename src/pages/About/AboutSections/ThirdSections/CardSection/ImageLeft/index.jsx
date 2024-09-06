
export default function ImageLeft() {
 return (
  <div className="lg:col-span-7 flex flex-col items-start justify-end h-full ml-10">
   <img
    src="./about/girl.png"
    alt="girl"
    loading="lazy"
    className="w-[496px] h-[490px]  object-cover "
   />
  </div>
 )
}
export default function ImageLeft() {
 return (
  <div className="flex flex-col items-start justify-end h-full ml-10">
   <img
    src="./about/girl.png"
    alt="girl"
    loading="lazy"
    className="w-[496px] h-[490px]  object-cover "
   />
  </div>
 )
}

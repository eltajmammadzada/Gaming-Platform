

export default function TeamItems({img,name,work}) {
  return (
    <div className="bg-[#1C140F] rounded-[20px] max-w-[295px] min-w-[240px] flex flex-col items-center py-8">
        <img src={img} alt="" />
        <span className="text-base">{name}</span>
        <span className="text-base">{work}</span>
    </div>
  )
}

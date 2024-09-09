import TeamItems from "./TeamItems"

const team = [
    {
        id:1,
        img:'/about/Avatar.png',
        name:'John peter',
        work:'COO',
    },
    {
        id:2,
        img:'/about/Beverly.png',
        name:'John peter',
        work:'COO',
    },
    {
        id:3,
        img:'/about/Bill.png',
        name:'John peter',
        work:'COO',
    },
    {
        id:4,
        img:'/about/Claudia.png',
        name:'John peter',
        work:'COO',
    },
]
export default function Teams() {
  return (
    <div className="grid container my-10 gap-6 lg:grid-cols-4 md:grid-cols-2 grid-cols-12 justify-center items-center">
        {team.map((team)=>(
            <TeamItems name={team.name} work={team.work} key={team.id} img={team.img} />
        ))}
    </div>
  )
}

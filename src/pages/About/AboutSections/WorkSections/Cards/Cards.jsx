import CardHeader from '../CardHeader/index.jsx'
import CardsItems from './CardsItems.jsx'

export default function Cards() {
 const cards = [
  {
   id: 1,
   color: ' bg-red-950',
   bgtext: 'Lorem ipsum',
   title: 'Lorem ipsum',
   text: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s`,
  },
  {
   id: 2,
   color: ' bg-green-950',
   bgtext: 'Lorem ipsum',
   title: 'Lorem ipsum',
   text: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s`,
  },
  {
   id: 3,
   color: 'bg-purple-950',
   bgtext: 'Lorem ipsum',
   title: 'Lorem ipsum',
   text: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s`,
  },
 ]
 return (
  <>
   <CardHeader />
   <div className="grid lg:grid-cols-3 md:grid-cols-2 items-center justify-between pt-8 gap-5 container">
    {cards.map((cardss) => (
     <CardsItems
      text={cardss.text}
      color={cardss.color}
      bgtext={cardss.bgtext}
      key={cardss.id}
      title={cardss.title}
     />
    ))}
   </div>
  </>
 )
}

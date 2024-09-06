import CardsItems from "./CardsItems"


export default function Cards() {
 const cards =[
{
 id:1,
 color:' bg-red-950' ,
 bgtext: 'Lorem ipsum',
 title: 'Lorem ipsum',
 text:`Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s`
},
{
 id:2,
 color:' bg-green-950' ,
 bgtext: 'Lorem ipsum',
 title: 'Lorem ipsum',
 text:`Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s`
},
{
 id:3,
 color:' bg-purple-950' ,
 bgtext: 'Lorem ipsum',
 title: 'Lorem ipsum',
 text:`Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s`
}
 ];
 return (
    <div className="flex items-center justify-between pt-8 gap-5">
       {cards.map((card)=> (
           <CardsItems
               id={card.id}
               color={card.color}
               bgtext={card.bgtext}
               title={card.title}
               text={card.text}
           />
       ))}
    </div>

 ) 
} 

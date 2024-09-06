import TrendItems from './TrendItems'

export default function TrendCard() {
 const trendCard = [
  {
   id: 1,
   img: '/home/1.png',
   imgAlt: 'one',
   title: '40 Followers',
   svg: '/home/fire.svg',
  },
  {
   id: 2,
   img: '/home/2.png',
   imgAlt: 'one',
   title: '40 Followers',
   svg: '/home/fire.svg',
  },
  {
   id: 3,
   img: '/home/3.png',
   imgAlt: 'one',
   title: '40 Followers',
   svg: '/home/fire.svg',
  },
  {
   id: 4,
   img: '/home/4.png',
   imgAlt: 'one',
   title: '40 Followers',
   svg: '/home/fire.svg',
  },
 ]

 return (
  <div className="grid grid-cols-12 gap-5">
   {trendCard.map((card) => (
    <TrendItems
     key={card.id}
     img={card.img}
     imgAlt={card.imgAlt}
     title={card.title}
     svg={card.svg}
    />
   ))}
  </div>
 )
}

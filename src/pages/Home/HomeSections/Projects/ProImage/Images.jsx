import CategoryImage from './ImageChild'

export default function CategoryIamges() {
 const images = [
  {
   id: 1,
   img: '/home/pro1.png',
   imageAlt: 'imgae',
  },
  {
   id: 2,
   img: '/home/pro2.png',
   imageAlt: 'imgae',
  },
  {
   id: 3,
   img: '/home/pro3.png',
   imageAlt: 'imgae',
  },
  {
   id: 4,
   img: '/home/pro5.png',
   imageAlt: 'imgae',
  },
  {
   id: 5,
   img: '/home/pro4.png',
   imageAlt: 'imgae',
  },
  {
   id: 6,
   img: '/home/pro6.png',
   imageAlt: 'imgae',
  },
 ]

 return (
  <div className="grid grid-cols-12 gap-5 py-7">
   {images.map((card) => (
    <CategoryImage
     key={card.id}
     imagez={card.img}
     imgAlt={card.imageAlt}
    />
   ))}
  </div>
 )
}

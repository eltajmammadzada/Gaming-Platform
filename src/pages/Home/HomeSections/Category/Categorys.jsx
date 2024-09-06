import CategoryChild from './CategoryChild'

export default function Categorys() {
 const category = [
  {
   id: 1,
   img: '/home/phone2.svg',
   imgAlt: 'image',
   title: 'Mobile Game Development',
  },
  {
   id: 2,
   img: '/home/pc1.svg',
   imgAlt: 'image',
   title: 'PC Game Development',
  },
  {
   id: 3,
   img: '/home/ps4.svg',
   imgAlt: 'image',
   title: 'PS4 Game Development',
  },
  {
   id: 4,
   img: '/home/vr.svg',
   imgAlt: 'image',
   title: 'AR/VR Solutions',
  },
  {
    id: 5,
    img: '/home/dk.svg',
    imgAlt: 'image',
    title: 'AR/ VR design',
   },
   {
    id: 6,
    img: '/home/group.svg',
    imgAlt: 'image',
    title: 'AR/ VR design',
   },
 ]
 return (
  <div className='grid grid-cols-12 gap-8 py-14'>
   {category.map((category) => (
    <CategoryChild
     key={category.id}
     img={category.img}
     imgAlt={category.imgAlt}
     title={category.title}
    />
   ))}
  </div>
 )
}

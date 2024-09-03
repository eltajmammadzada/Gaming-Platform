import Button from '../../../../common/Button/index';
import CategoryIamges from './ProImage/Images';
export default function Projects() {
 return (
  <section className='py-10'>
   <div className="text-center">
    <h2 className='lg:text-3xl md:text-2xl text-xl'>Our Recent Projects</h2>
    <p className="max-w-[490px] mx-auto py-10">
     Lorem Ipsum is simply dummy text of the printing and
     typesetting industry.{' '}
    </p>
   </div>
   <CategoryIamges />
  <div className='flex justify-center'>
  <Button variant='danger'>SEE ALL</Button>
  </div>
  </section>
 )
}

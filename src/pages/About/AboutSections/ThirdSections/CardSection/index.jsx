import ImageLeft from './ImageLeft'
import TextRight from './TextRight'

export default function CardSection() {
 return (
  // burda hunduruluk verilmisdi
  <div className="bg-[rgba(28,20,15,1)] w-full mt-20 grid lg:grid-cols-2 gap-5">
   <ImageLeft />
   <TextRight />
  </div>
 )
}

import { Carousel } from 'antd'

export default function Right() {
 return (
  <div>
   <Carousel arrows infinite={false}>
    <div>
     <img src="/about/girl.png" />
    </div>
    <div>
     <img src="/about/girl.png" />
    </div>
    <div>
     <img src="/about/girl.png" />
    </div>
    <div>
     <img src="/about/girl.png" />
    </div>
   </Carousel>
  </div>
 )
}

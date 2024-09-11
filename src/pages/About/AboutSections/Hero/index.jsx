import Left from './Left'
import Right from './Right'

export default function Hero() {
 return (
  <section className="grid lg:grid-cols-2 grid-cols-1 gap-5 container">
   <Left />
   <Right />
  </section>
 )
}

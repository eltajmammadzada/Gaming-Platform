import Left from "./Left";
import Right from "./Right";


export default function Hero() {
  return (
    <section className="grid lg:grid-cols-12 py-20">
        <Left />
        <Right />
    </section>
  )
}

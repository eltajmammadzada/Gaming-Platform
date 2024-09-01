import MainLeft1 from "./Main-left1";
import MainLeft2 from "./Main-left2";
import MainRight from "./Main-right";



export default function Main() {
  return (
    <section className="Main">
      <div className="left">
        <MainLeft1 />
        <MainLeft2 />
      </div>

      <div className="left" > <MainRight />
      </div>


    </section>
  )
}
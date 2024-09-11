
import PropTypes from 'prop-types' // ES6

export default function CardsItems({
 id,
 color,
 bgtext,
 title,
 text,
}) {
 return (
  <div
   key={id}
   className="bg-[rgba(28,20,15,1)] w-93 h-80 rounded-3xl"
  >
   <div className="mx-10">
    <span
     className={`bg-${color} text-sm font-normal inline-block mt-14 py-2 w-36 text-center rounded-lg`}
    >
     {bgtext}
    </span>
    <p className="text-xl font-semibold	my-8">{title}</p>
    <p className="text-sm leading-6">{text}</p>
   </div>
  </div>
 )
}
CardsItems.propTypes = {
 id: PropTypes.string,
 color: PropTypes.string,
 bgtext: PropTypes.string,
 title: PropTypes.string,
 text: PropTypes.string,
}

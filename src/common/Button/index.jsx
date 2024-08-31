import PropTypes from 'prop-types'
import classNames from 'classnames'

export default function Button({
 children,
 variant,
 ...props
}) {
 const className = classNames({
  'bg-[#FA9021] py-3 px-7 text-white rounded-[6px] text-[13px] leading-[1.5] font-normal':
   variant === 'primary',
  'text-base font-medium text-white py-3 px-8 rounded-[40px] bg-Btngradient':
   variant === 'secondary',
  'text-xl font-medium text-white bg-[#ffffff1c] px-7 py-3 rounded-[10px]':
   variant === 'danger',
  'text-sm font-medium text-white bg-[#DC7000] px-5 py-2 rounded-[8px]':
   variant === 'footer',
  'text-base font-normal text-white bg-[#DC7000] px-10 py-3':
   variant === 'readMore',
 })

 return (
  <button className={className} {...props}>
   {children}
  </button>
 )
}

Button.propTypes = {
 children: PropTypes.node.isRequired,
 variant: PropTypes.oneOf([
  'primary',
  'secondary',
  'danger',
  'footer',
  'readMore',
 ]).isRequired,
}

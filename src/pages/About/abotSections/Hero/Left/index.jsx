
import Button from '../../../../../common/Button'
export default function Left() {
  return (
      <div className="lg:col-span-5 ">
    <div className="text-white mt-[120px]"> 
            <span className='text-sm'>Home &gt; </span>
            <span className='text-sm text-orange-400'> About us </span>
            <div >
             <h1 className="font-bold text-[30px] leading-[54.15px] mt-10">Lorem Ipsum is simply  <br />dummy text of the printing <br />and.</h1>
             <h4 className="font-normal	text-sm	leading-[31.28px]">Lorem Ipsum is simply dummy text of the printing and <br /> typesetting industry. Lorem Ipsum has been the <br />industry's standard dummy text ever since the 1500s.</h4>
            </div>
            
            <Button variant="secondary">Get in touch</Button>

        </div></div>
  )
}

import { Breadcrumb, Input } from 'antd'
import TextArea from 'antd/es/input/TextArea'
import {
 CiFacebook,
 CiInstagram,
 CiLinkedin,
 CiPhone,
 CiLocationOn,
} from 'react-icons/ci'
import Button from '../../common/Button'

export default function ContactUs() {
 return (
  <>
   <div className="mt-20 container">
    <div className="text-center flex flex-col gap-5">
     <div className="flex justify-center">
      <Breadcrumb
       items={[
        {
         title: 'Home',
        },
        {
         title: 'Contact US',
        },
       ]}
      />
     </div>
     <h1 className="lg:text-3xl md:text-2xl text-xl">
      Lorem Ipsum is simply dummy text of the printing and.
     </h1>
     <p className="text-base">
      Lorem Ipsum is simply dummy text of the printing and
      typesetting industry.{' '}
     </p>
     <img src="/home/contact.png" alt="" />
    </div>
    <div className="grid items-center lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6 my-20">
     <div className="lg:border-r md:border-r border-white h-full flex flex-col gap-4">
      <span>Follow us</span>
      <div className="flex">
       <CiFacebook size={20} />
       <CiInstagram size={20} />
       <CiLinkedin size={20} />
      </div>
     </div>
     <div className="flex items-center gap-3 lg:border-r md:border-r  border-white h-full">
      <CiPhone size={20} />
      <span>+94 4444 5555 6</span>
     </div>
     <div className="flex gap-3">
      <CiLocationOn size={20} />
      <span>
       but also the leap into electronic typesetting
      </span>
     </div>
    </div>
   </div>
   <div className="bg-contact h-screen">
    <div className="flex justify-center flex-col items-center gap-2 py-6">
     <h3 className="lg:text-3xl md:text-2xl text-xl">
      Say Hello
     </h3>
     <p className="text-base">
      Lorem Ipsum is simply dummy text of the printing .
     </p>
    </div>
    <form className="max-w-[900px] mx-auto gap-6 flex flex-col justify-center items-center h-full">
     <div className="flex w-full gap-3">
      <div className="w-full">
       <label htmlFor="name">First Name</label>
       <Input />
      </div>
      <div className="w-full">
       <label htmlFor="surname">Surname</label>
       <Input />
      </div>
     </div>
     <div className="w-full">
      <label htmlFor="email">Eamil</label>
      <Input />
     </div>
     <div className="w-full">
      <label htmlFor="message">Message</label>
      <TextArea />
     </div>
     <div className="flex justify-end mt-4">
      <Button variant="footer">Get in touch</Button>
     </div>
    </form>
   </div>
  </>
 )
}

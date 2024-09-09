import { Breadcrumb } from 'antd'

export default function Header() {
 return (
  <div className="header mt-20">
   <div className="flex justify-center">
    <Breadcrumb
     items={[
      {
       title: 'Home',
      },
      {
       title: ' Services',
      },
     ]}
    />
   </div>
   <h2>
    Lorem Ipsum is simply dummy text of the printing and.
   </h2>
   <p>
    Lorem Ipsum is simply dummy text of the printing and
    typesetting industry.{' '}
   </p>
  </div>
 )
}
